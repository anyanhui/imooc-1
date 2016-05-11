import React,{Component,PropTypes} from 'react';
import styles from './cardPage.scss';
import Card from '../Util/Card';
export default class extends Component{
    render(){
        const Item=Card.Item;
        return(
            <div className={styles.container}>
                <Card width={600} height={500}>
                    <Item position="top" height={50}>
                        <span className={styles.content1}>top</span>
                    </Item>
                    <Item position="left" width={100}>
                        <span className={styles.content2}>left</span>
                    </Item>
                    <Item position="center">
                        <span className={styles.content3}>center</span>
                    </Item>
                    <Item position="right" width={100}>
                        <span className={styles.content4}>right</span>
                    </Item>
                    <Item position="bottom" height={50}>
                        <span className={styles.content5}>bottom</span>
                    </Item>
                </Card>
            </div>
        )
    }
}