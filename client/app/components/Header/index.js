import React,{Component} from 'react';
import styles from './header.scss';
import {Link,IndexLink} from 'react-router';
class Header extends Component{
    render(){
        const nav=this.props.navList.map((item,i)=>{
            if(item.path==='/'){
                return(
                    <li key={i}>
                        <IndexLink activeClassName={styles.active} to="/">{item.name}</IndexLink>
                    </li>
                )
            }
           return(
               <li key={i}>
                   <Link activeClassName={styles.active} to={item.path}>{item.name}</Link>
               </li>
           )
        });
        return(
            <header className={styles.header}>
                <nav>
                    <ul>
                        {nav}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;