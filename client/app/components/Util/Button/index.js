import React,{PropTypes,Component} from 'react';
import styles from './button.scss';
/*
按钮组件参数属性:
    style:可以自定义按钮总体样式
    text:按钮的文本
    type:按钮的类型
    icon:可以给按钮加上图标
    handler:可以给按钮加上自定义事件,可接收两个参数
        (button:表示按钮本身可以通过这个获取按钮各种信息,event:事件信息)
 */
class Button extends Component {
    static propTypes={
        type:PropTypes.oneOf(['default','primary','success','warning','danger']),
        style:PropTypes.object,
        text:PropTypes.string,
        icon:PropTypes.string,
        handler:PropTypes.func
    };
    render() {
        const {
            style={},
            type='default',
            text='',
            icon='',
            handler=()=>{}
            }=this.props;
        return (
            <div style={style}
                    className={`${styles.container} ${styles[type]}`}
                    onClick={event=>handler(this,event)}
            >
                <span style={{lineHeight:`${style.height||30}px`}}>
                    <img src={icon} alt=""/>
                    {text}
                </span>
            </div>
        )
    }
}
export default Button;