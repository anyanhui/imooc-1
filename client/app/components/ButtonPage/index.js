import React,{PropTypes,Component} from 'react';
import Button from '../Util/Button';
import Card from '../Util/Card';
import styles from './buttonPage.scss'
export default class extends Component {
    handlerClick(but,e){
        console.log(this)
    }
    render() {
        return (
            <div className={styles.container}>
                <article>
                    <Card title="默认按钮">
                        <Button text="默认"
                                handler={(but,e)=>this.handlerClick(but,e)}
                                style={{width:100}}
                        />
                    </Card>
                </article>
            </div>
        )
    }
}