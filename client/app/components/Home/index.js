import React,{Component} from 'react';
import styles from './home.scss';
import Cqzl from './Cqzl';
class Home extends Component {
    render() {
        return (
           <div className={styles.container}>
               <Cqzl/>
           </div>
        )
    }
}
export default Home;