import React,{PropTypes,Component} from 'react';
import styles from './table.scss';
import { Table } from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/TableAction';
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render(text) {
        return <a href="#">{text}</a>;
    }
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '操作',
    key: 'operation',
    render(text, record) {
        return (
            <span>
                <a href="#">操作一{record.name}</a>
                <span className="ant-divider"></span>
                <a href="#">操作二</a>
                <span className="ant-divider"></span>
          </span>
        );
    }
}];
@connect(
    //注意：这里的table一定要和rootReduce中的{table:tableReduce}对应
    (state)=>({table:state.table}),
    (dispatch)=>({actions:bindActionCreators(actionCreators,dispatch)})
)
export default class extends Component{
    componentDidMount(){
        const {actions}=this.props;
        actions.loadData('public/data/table.json');
    }
    render(){
        const data=this.props.table.get('data');
        return(
            <div className={styles.container}>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}