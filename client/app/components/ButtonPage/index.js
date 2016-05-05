import React,{PropTypes,Component} from 'react';
import Button from '../Util/Button';
import Card from '../Util/Card';
import styles from './buttonPage.scss'
export default class extends Component {
    handlerClick(but,e){
        alert(`${but.props.text}的按钮`);
    }
    render() {
        return (
            <div className={styles.container}>
                <Card title="Button"
                      style={{width:500,height:400}}
                      flex={{
                        justifyContent:'space-around',
                        alignItems:'center',
                        flexWrap:'wrap',
                        alignContent:'space-around'
                      }}
                >
                    <Button text="默认"/>
                    <Button text="带图标"
                           icon="http://www.easyicon.net/api/resizeApi.php?id=1191766&size=24"
                           handler={(but,e)=>this.handlerClick(but,e)}
                           style={{background:'#418bca',color:'#fff'}}
                    />
                </Card>
            </div>
        )
    }
}