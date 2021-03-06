import React,{PropTypes,Component,Children} from 'react';
import Item from './Item';
import styles from './slider.scss';
import cls from 'classnames';
import mixin from '../../Mixins/mixins';
import shouldUpdate from '../../Mixins/shouldUpdate';
/*
轮播组件：
 dot：是否显示轮播点
 arrow：是否显示左右箭头
 active:当前活动页
 autoPlay：是否自动轮播
 width：轮播组件宽
 height：轮播组件高
 */
class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            active:this.props.active||1
        };
        mixin(this,shouldUpdate);
    }
    static Item=Item;
    prevClick(active){
        let len=Children.count(this.props.children);
        this.setState({
            active:active===1?len:active-1
        })
    }
    nextClick(active){
        let len=Children.count(this.props.children);
        this.setState({
            active:active===len?1:active+1
        })
    }
    dotClick(active,next){
        if(active===next){
            return;
        }
        this.setState({
            active:next
        })
    }
    stopAutoPlay(){
        clearInterval(this.autoPlayFlag);
    }
    startAutoPlay(){
        if(this.props.autoPlay===true){
            this.autoPlayFlag=setInterval(()=>{
                this.nextClick(this.state.active);
            },5000);
        }
    }
    componentDidMount(){
        this.startAutoPlay();
    }
    componentWillUnmount(){
        clearInterval(this.autoPlayFlag);
    }
    render(){
        const {
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
                            <div key={i} className={cls({
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
                                <li key={i} className={cls({
                                    [styles.dot]:true,
                                    [styles.active_dot]:i===active-1
                                })} onClick={()=>this.dotClick(active,i+1)}>
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
                            onClick={()=>this.prevClick(active)}>
                        </a>),
                        (<a href="javascript:;" className={`${styles.arrow} ${styles.next}`}
                            onClick={()=>this.nextClick(active)}>
                        </a>)
                    ]:null
                }
            </div>
        )
    }
}
export default Slider;