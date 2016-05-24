import React,{PropTypes,Component} from 'react';
import Button from '../Util/Button';
import styles from './buttonPage.scss'
export default class extends Component {
    constructor(props){
        super(props);
    }
    handlerClick(but,e){
        alert(`${but.props.text}按钮`)
    }
    render() {
        return (
            <div className={styles.container}>
                <Button text="默认" handler={(but,e)=>this.handlerClick(but,e)}/>
                <Button text="标准" type="primary"/>
                <Button text="成功" type="success"/>
                <Button text="警告" type="warning"/>
                <Button text="危险" type="danger"/>
                <Button text="自定义"
                        icon="assets/img/icons/save.gif"
                        handler={::this.handlerClick}
                        style={{background:'#ddd',color:'#333'}}
                />
            </div>
        )
    }
}