import React,{PropTypes,Component,Children} from 'react';
import Item from './Item';
import styles from './slider.scss';
import cls from 'classnames';
import mixin from '../Mixins/mixins';
import {shouldUpdate} from '../Mixins/shouldUpdate';
class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            active:this.props.active||1
        };
        mixin(this,shouldUpdate);
    }
    static Item=Item;
    prevClick(){
        let active=this.state.active;
        let len=Children.count(this.props.children);
        this.setState({
            active:active===1?len:active-1
        })
    }
    nextClick(){
        let active=this.state.active;
        let len=Children.count(this.props.children);
        this.setState({
            active:active===len?1:active+1
        })
    }
    dotClick(active){
        this.setState({
            active:active
        })
    }
    stopAutoPlay(){
        clearInterval(this.autoPlayFlag);
    }
    startAutoPlay(){
        if(this.props.autoPlay===true){
            this.autoPlayFlag=setInterval(()=>{
                this.nextClick();
            },5000);
        }
    }
    componentDidMount(){
        this.startAutoPlay();
    }
    render(){
        let {
            dot=true,
            arrow=true,
            width='100%',
            height=300,
            children
            }=this.props;
        let active=this.state.active;
        return(
            <div className={styles.container} style={{width:width,height:height}}
                onMouseOver={()=>this.stopAutoPlay()}
                onMouseOut={()=>this.startAutoPlay()}>
                {
                    Children.map(children, (item,i) => {
                        return(
                            <div className={cls({
                                [styles.sliders]:true,
                                [styles.active_slider]:i===active-1
                            })}>
                                {item}
                            </div>
                        )
                    })
                }
                <ul className={styles.dots}>
                    {
                        dot?Children.map(children, (item,i) => {
                            return(
                                <li className={cls({
                                    [styles.dot]:true,
                                    [styles.active_dot]:i===active-1
                                })} onClick={()=>this.dotClick(i+1)}>
                                    <span>
                                    </span>
                                </li>
                            )
                        }):null
                    }
                </ul>
                {
                    arrow?[
                        (<a href="javascript:;" className={`${styles.arrow} ${styles.prev}`}
                            onClick={()=>this.prevClick()}>
                        </a>),
                        (<a href="javascript:;" className={`${styles.arrow} ${styles.next}`}
                            onClick={()=>this.nextClick()}>
                        </a>)
                    ]:null
                }
            </div>
        )
    }
}
export default Slider;