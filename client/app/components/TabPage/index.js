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
                    <Item title="默认">
                        <Button text="默认"/>
                    </Item>
                    <Item title="警告">
                        <Button text="警告" style={{background:'#efad4c',color:'#fff'}}/>
                    </Item>
                    <Item title="危险">
                        <Button text="危险" style={{background:'#d9544f',color:'#fff'}}/>
                    </Item>
                </Tab>
            </div>
        )
    }
}