import React,{Component} from 'react';
import styles from './header.scss';
import {Link} from 'react-router';
class Header extends Component{
    render(){
        return(
            <header className={styles.header}>
                <nav>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link to="/">主页</Link>
                        </li>
                        <li className={styles.li}>
                            <Link to="/learn">课程</Link>
                        </li>
                        <li className={styles.li}>
                            <Link to="/ask">问答</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;