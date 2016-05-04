import React,{PropTypes,Component} from 'react';
import styles from './card.scss';
class Card extends Component {
    render() {
        let {title='',style={},children}=this.props;
        return (
            <div style={style} className={styles.container}>
                <header>
                    <h3>{title}</h3>
                </header>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        )
    }
}
export default Card;