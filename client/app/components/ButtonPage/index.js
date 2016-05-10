import React,{PropTypes,Component} from 'react';
import Button from '../Util/Button';
import Card from '../Util/Card';
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
                <Card title="Button"
                      style={{width:600,height:400}}
                      flex={{
                        justifyContent:'space-around',
                        alignItems:'center',
                        flexWrap:'wrap',
                        alignContent:'space-around'
                      }}
                >
                    <Button text="默认" handler={(but,e)=>this.handlerClick(but,e)}/>
                    <Button text="标准" type="primary"/>
                    <Button text="成功" type="success"/>
                    <Button text="警告" type="warning"/>
                    <Button text="危险" type="danger"/>
                    <Button text="自定义"
                            icon="http://www.easyicon.net/api/resizeApi.php?id=1191766&size=24"
                            handler={::this.handlerClick}
                            style={{background:'#418bca',color:'#fff'}}
                    />
                </Card>
            </div>
        )
    }
}