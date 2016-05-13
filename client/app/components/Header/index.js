import React,{Component} from 'react';
import styles from './header.css';
import {Link,IndexLink} from 'react-router';
class Header extends Component{
    render(){
        const nav=this.props.navList.map((item,i)=>{
           return(
               <li key={i}>
                   <Link activeClassName={styles.active} to={item.path}>{item.name}</Link>
               </li>
           )
        });
        return(
            <header className={styles.header}>
                <IndexLink className={styles.icon_home} to='/'></IndexLink>
                <nav className={styles.nav}>
                    <ul>
                        {nav}
                    </ul>
                </nav>
                <a className={styles.icon_github} href="https://github.com/zhangchao828/imooc" target="_blank"></a>
            </header>
        )
    }
}
export default Header;