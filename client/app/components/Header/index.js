import React,{Component} from 'react';
import styles from './header.scss';
class Header extends Component{
    render(){
        return(
            <header className={styles.header}>
                <nav>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <a href="javascript:;"></a>
                        </li>
                        <li className={styles.li}>
                            <a href="javascript:;"></a>
                        </li>
                        <li className={styles.li}>
                            <a href="javascript:;"></a>
                        </li>
                        <li className={styles.li}>
                            <a href="javascript:;"></a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;