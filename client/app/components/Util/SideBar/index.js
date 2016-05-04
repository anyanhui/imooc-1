import React,{PropTypes,Component} from 'react';
import styles from './sidebar.scss';
import {Link} from 'react-router';
class SideBar extends Component{
    render(){
        const {list=[],width=200}=this.props;
        let items=list.map((item,i)=>{
            return(
                <li key={i}>
                    <Link className={styles.item} activeClassName={styles.active} to={item.path}>{item.name}</Link>
                </li>
            )
        })
        return(
            <div className={styles.container} style={{width:width}}>
                <nav>
                    <ul>
                        {items}
                    </ul>
                </nav>
            </div>
        )
    }
}
export default SideBar;