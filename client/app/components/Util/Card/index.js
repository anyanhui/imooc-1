import React,{PropTypes,Children,Component} from 'react';
import Item from './Item';
import styles from './card.scss';
/*
卡片组件:可接受属性有：
 */
class Card extends Component {
    static Item=Item;
    render() {
        const {
            width=350,
            height=300,
            children
            }=this.props;
        let items={};
        Children.forEach(children,(item)=>{
            let position=item.props.position;
            if(position){
                items[position]=item;
            }
        });
        return (
            <div className={styles.container} style={{width:width,height:height}}>
                {items.top}
                <div className={styles.content}>
                    {items.left}
                    {items.center}
                    {items.right}
                </div>
                {items.bottom}
            </div>
        )
    }
}
export default Card;