import React,{PropTypes,Component} from 'react';
import styles from './modal.scss';
/*
模态框:接收属性
    hidden:表示模态框是否显示
    用法:<Modal hidden={false}>...</Modal>
 */
export default class extends Component{
    render(){
        const {hidden=true}=this.props;
        return(
            <div style={{display:hidden?'none':'block'}} className={styles.container}>
                <span className={styles.modal}>

                </span>
                {this.props.children}
            </div>
        )
    }
}