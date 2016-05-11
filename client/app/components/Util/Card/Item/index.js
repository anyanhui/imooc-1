import React,{PropTypes,Component} from 'react';
import styles from './item.scss';
export default class extends Component{
    static propTypes={
        position:PropTypes.oneOf(['top','left','center','right','bottom']).isRequired
    }
    render(){
        const {
            height=35,
            width=50,
            position
            }=this.props;
        let style={};
        if(position==='left'||position==='right'){
            style.width=width;
        }else if(position==='center'){
            style.flex=1;
        }else{
            style.height=height;
        }
        return(
            <div className={styles.container} style={style}>
                {this.props.children}
            </div>
        )
    }
}