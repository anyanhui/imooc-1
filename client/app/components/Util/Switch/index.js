import React,{PropTypes,Component} from 'react';
import styles from './switch.css';
export default class extends Component{
    render(){
        return(
            <div className={styles.switch}>
                <input type="checkbox" id="switch" className={styles.switch-check}/>
                    <label for="switch" className={styles.switch-label}>
                        Check
                        <span></span>
                    </label>
            </div>
        )
    }

}