import React,{PropTypes,Component} from 'react';
import { Table, Icon} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/gridAction';
@connect(
    state=>({grid:state.grid}),
    dispatch=>({actions:bindActionCreators(actionCreators,dispatch)})
)
class GridPanel extends Component{
    columns=[
        {title: '姓名', dataIndex: 'name', key: 'name',
            render(text) {
                return <a href="#">{text}</a>;
            }
        },
        {title: '年龄', dataIndex: 'age', key: 'age'},
        {title: '住址', dataIndex: 'address', key: 'address'},
        {title: '操作', key: 'operation', render(text, record) {
            return (
                <span>
                    <a href="#">操作一{record.name}</a>
                    <span className="ant-divider"></span>
                    <a href="#">操作二</a>
                    <span className="ant-divider"></span>
                    <a href="#" className="ant-dropdown-link">
                        更多 <Icon type="down" />
                    </a>
              </span>
            );
        }
    }];
    componentDidMount(){
        const actions=this.props.actions;
        actions.loadData('/data/grid.json');
    }
    search(){
        const actions=this.props.actions;
        actions.loading(true);
        actions.loadData('/data/grid.json');
    }
    render(){
        const data=this.props.grid.get('data');
        const loading=this.props.grid.get('loading');
        return(
            <div>
                <span onClick={()=>this.search()}>搜索</span>
                <Table columns={this.columns} dataSource={data.data} loading={loading}/>
            </div>
        )
    }
}
export default GridPanel;