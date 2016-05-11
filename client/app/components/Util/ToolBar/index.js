import React,{PropTypes,Component} from 'react';
import styles from './toolbar.scss';
export default class extends Component{
    render(){
        const {
            position='top',
            width=100,
            height=60
            } = this.props;
        var style={height:height,width:'100%'};
        if(position==='left'||position==='right'){
            style.height='100%';
            style.width=width;
        }
        return(
            <div
                className={`${styles.container} ${styles[position]}`}
                style={style}
            >

            </div>
        )
    }
}