import React,{PropTypes,Component} from 'react';
import styles from './card.scss';
class Card extends Component {
    render() {
        let {title='',width=300,children}=this.props;
        let style={width:width};
        return (
            <div style={style} className={styles.container}>
                <header>
                    <h3>{title}</h3>
                    <span>

                    </span>
                </header>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        )
    }
}
export default Card;