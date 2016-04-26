import React,{Component} from 'react';
//import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import styles from './rootStyle.scss';
import Header from './Header';
class App extends Component{
    render(){
        //let key = this.props.location.pathname;
        return(
            <div className={styles.root}>
                <Header navList={[
                    {path:'/',name:'主页'},
                    {path:'/learn',name:'学习'},
                    {path:'/ask',name:'问答'}
                ]}/>
                {/*
                 <ReactCSSTransitionGroup
                 component="div"
                 transitionName="route"
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={300}>
                 {React.cloneElement(this.props.children, {key: key})}
                 </ReactCSSTransitionGroup>
                */}
                {this.props.children}
            </div>
        )
    }
}
export default App;