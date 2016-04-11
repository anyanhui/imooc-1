import React,{PropTypes,Component,Children} from 'react';
import Item from './Item';
import styles from './fullPage.scss';
import cls from 'classnames';
class FullPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active || 0
        }
    }

    static Item = Item;

    pageScroll(e) {
        let y = e.deltaY;
        let count = Children.count(this.props.children);
        let active = this.state.active;
        if (y > 0 && active < count - 1) {
            this.setState({
                active: active + 1
            })
        } else if (y < 0 && active > 0) {
            this.setState({
                active: active - 1
            })
        }
    }

    render() {
        const {children}=this.props;
        const active = this.state.active;
        return (
            <div className={styles.container}
                 onWheel={(e)=>this.pageScroll(e)}>
                {
                    Children.map(children, (item, i)=> {
                        return (
                            <div className={cls({
                                [styles.item]:true,
                                [styles.item_active]:i===active
                            })}>{item}</div>
                        )
                    })
                }
            </div>
        )
    }
}
export default FullPage;