import React,{PropTypes,Component,Children} from 'react';
import Item from './Item';
import styles from './fullPage.scss';
import cls from 'classnames';
import Hammer from 'react-hammerjs';
class FullPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: this.props.active || 0
        }
    }

    static Item = Item;

    swipeHandler(e, active) {
        console.log(e);
        e.preventDefault();
        let {deltaX:x,deltaY:y}=e;
        let count = Children.count(this.props.children);
        if (Math.abs(x) < Math.abs(y)) {
            if (y < 0 && active < count - 1) {
                //向上滑动
                this.setState({
                    active: active + 1
                })
            } else if (y > 0 && active > 0) {
                this.setState({
                    active: active - 1
                })
            }
        }
    }
    pageScroll(e) {
        let time = this.time;
        let now = new Date().getTime();
        if ((now - time) < 500) {
            return;
        }
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
    navClick(active,next){
        if(active!==next){
            this.setState({
                active:next
            })
        }
    }
    render() {
        this.time = new Date().getTime();
        const {
            minHeight=500,
            nav=false,
            children
            }=this.props;
        const active = this.state.active;
        return (
            <Hammer onSwipe={(e)=>this.swipeHandler(e,active)} vertical={true}
                    options={{
                    recognizers: {
                        swipe: {

                        }
                    }
                }}>
                <div className={styles.container} style={{minHeight:minHeight}}
                     onWheel={e=>this.pageScroll(e)}>
                    <nav className={styles.nav_header}>
                        <ul className={styles.nav_bar}>
                            {
                                nav ? Children.map(children, (item, i)=> {
                                    return (
                                        <li className={cls({
                                        [styles.nav_item]:true,
                                        [styles.nav_active]:i===active
                                    })}
                                            onClick={()=>this.navClick(active,i)}>{item.props.title || `标题${i}`}</li>
                                    )
                                }) : null
                            }
                        </ul>
                        {
                            nav ? (
                                <span className={styles.icon_menu} style={{right:'50px'}}>
                                    <ul className={styles.sideMenu}>
                                        {
                                            Children.map(children, (item, i)=> {
                                                return (
                                                    <li className={cls({
                                                        [styles.sideMenu_item]:true,
                                                        [styles.sideMenu_active]:i===active
                                                    })}
                                                        onClick={()=>this.navClick(active,i)}>{item.props.title || `标题${i}`}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </span>
                            ) : null
                        }
                    </nav>
                    <div className={styles.item_container} style={{top:`-${active*100}%`}}>
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
                </div>
            </Hammer>
        )
    }
}
export default FullPage;