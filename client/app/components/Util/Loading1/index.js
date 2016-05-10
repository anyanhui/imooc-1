import React,{PropTypes,Component} from 'react';
import styles from './loading.scss';
/*
加载等待loading:
    num:出现几个旋转的小球
    r:装载小球的容器的半径
    loading:是否出现loading标志
    color:小球的颜色
 */
export default class extends Component{
    render(){
        const {num=10,r=16,color='#2e2e2e',loading=false}=this.props;
        var items=[],
            everyAngle=360/num;
        for(let i=0;i<num;i++){
            let angle=i*everyAngle*(Math.PI/180);
            let top=r+r*Math.sin(angle);
            let left=r+r*Math.cos(angle);
            items.push(
                <i key={i} style={{
                top:top,left:left,
                width:r/2,height:r/2,
                color:color,
                transform:`scale(${i/10})`
                }}>

                </i>
            );
        }
        return(
            <div className={styles.container} style={{display:loading?'block':'none'}}>
                <span className={styles.modal}></span>
                <span className={styles.loading} style={{width:2*r,height:2*r}}>
                    {items}
                </span>
            </div>
        )
    }
}