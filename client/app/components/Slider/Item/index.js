import React,{Component} from 'react';
import styles from './item.scss';
class Item extends Component{
    render(){
        const bgImg=this.props.bgImg;
        return(
            <div className={styles.item} style={{backgroundImage:`url(${bgImg})`}}>
                {this.props.children}
            </div>
        )
    }
}
export default Item;