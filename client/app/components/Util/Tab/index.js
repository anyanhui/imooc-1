import React,{PropTypes,Component,Children} from 'react';
import styles from './tab.scss';
import Item from './Item';
import cls from 'classnames';
export default class extends Component{
    constructor(props){
        super(props);
        this.state={
            active:this.props.active||0
        }
    }
    tabClick(next,active){
        if(next!==active){
            this.setState({
                active:next
            })
        }
    }
    static Item=Item;
    render(){
        const {children}=this.props;
        let active=this.state.active;
        return(
            <div className={styles.container}>
                <nav>
                    <ul>
                        {
                            Children.map(children,(item,i)=>{
                                return(
                                    <li key={i}
                                        className={cls({
                                            [styles.nav_active]:i===active
                                        })}
                                        onClick={()=>this.tabClick(i,active)}
                                    >
                                        {item.props.title||''}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className={styles.tab_body}>
                    {
                        Children.map(children,(item,i)=>{
                            return(
                                <div key={i}
                                    className={cls({
                                            [styles.tab_item]:true,
                                            [styles.tab_active]:i===active
                                        })}
                                >
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}