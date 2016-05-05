import React,{PropTypes,Component} from 'react';
import styles from './card.scss';
/*
卡片组件:可接受属性有：
    title:标题,
    headerStyle:头部样式
    style:自定义样式
    flex:卡片内容区域是否采用flex布局以及怎么布局
 */
class Card extends Component {
    render() {
        let {title='',style={},headerStyle={},flex={},children}=this.props;
        let isFlex=this.props.hasOwnProperty('flex');
        return (
            <div style={style} className={styles.container}>
                <header style={{...headerStyle}}>
                    {title}
                </header>
                {
                    isFlex?(
                        <div className={styles.main}
                            style={{
                                display:'flex',
                                ...flex
                            }}
                        >
                            {children}
                        </div>
                    ):(
                        <div className={styles.main}>
                            {children}
                        </div>
                    )
                }
            </div>
        )
    }
}
export default Card;