import React,{PropTypes,Component} from 'react';
import styles from './loading.scss';
/*
加载等待的loading：
    type:根据不同的type显示不同类型的loading，有1,2,3,4四种类型可选择
    loading:是否显示loading
 */
export default class extends Component{
    static propTypes={
        type:PropTypes.oneOf(['1', '2','3','4']),
        loading:PropTypes.bool
    };
    render(){
        const {type='1',loading=false}=this.props;
        let num;
        let items=[];
        switch (type){
            case '2':
                num=5;
                break;
            case '3':
                num=3;
                break;
            case '4':
                num=2;
                break;
            default:num=8;
        }
        for(let i=0;i<num;i++){
            items.push(
                <i key={i}></i>
            )
        }
        return(
            <div className={styles.container} style={{display:loading?'block':'none'}}>
                <span className={styles.modal}>

                </span>
                <span className={`${styles['loading-'+type]} ${styles.loading}`}>
                    {items}
                </span>
            </div>
        )
    }
}