import React,{PropTypes,Component} from 'react';
import styles from './tabPage.scss';
import Tab from '../Util/Tab';
import Button from '../Util/Button';
export default class extends Component{
    render(){
        const Item=Tab.Item;
        return(
            <div className={styles.container}>
                <Tab>
                    <Item title="标准">
                        <Button text="标准" type="primary"/>
                    </Item>
                    <Item title="警告">
                        <Button text="警告" type="warning"/>
                    </Item>
                    <Item title="危险">
                        <Button text="危险" type="danger"/>
                    </Item>
                </Tab>
            </div>
        )
    }
}