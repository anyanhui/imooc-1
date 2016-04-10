import React,{Component} from 'react';
import styles from './item.scss';
class Item extends Component {
    render() {
        return (
            < div
                className={styles.item
    }>
                {
                    this.props.children
                }
            </
                div >
        )
    }
}
export default Item;