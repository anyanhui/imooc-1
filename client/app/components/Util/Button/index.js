import React,{PropTypes,Component} from 'react';
import styles from './button.scss';
class Button extends Component {
    render() {
        const {
            style={},
            text='',
            handler=''
            }=this.props;
        return (
            <button style={style}
                    className={styles.container}
                    onClick={(event)=>handler(this,event)}
            >
                <span>{text}</span>
            </button>
        )
    }
}
export default Button;