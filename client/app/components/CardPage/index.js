import React,{Component,PropTypes} from 'react';
import styles from './cardPage.scss';
import Card from '../Util/Card';
export default class extends Component{
    render(){
        return(
            <div className={styles.container}>
                <Card title="默认卡片">
                    <p>这里是内容区域，可以添加任意元素</p>
                </Card>
                <Card
                    title="弹性布局卡片"
                    flex={{
                        flexDirection:'column'
                    }}
                >
                    <p style={{flex:1}}>内容区域将采用flex布局</p>
                    <p style={{flex:1}}>内容区域将采用flex布局</p>
                    <p style={{flex:1}}>内容区域将采用flex布局</p>
                </Card>
                <Card title="headerStyle改变头部样式"
                    headerStyle={{
                        color:'#fff',
                        background:'#418bca',
                        textAlign:'center'
                    }}
                >
                    <p>这里是内容区域，可以添加任意元素</p>
                </Card>
            </div>
        )
    }
}