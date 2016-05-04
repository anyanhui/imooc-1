import React,{Component} from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './rootStyle.css';
import Header from './Header';
class App extends Component{
    render(){
        //let key = this.props.location.pathname;
        return(
            <div className='root'>
                <Header navList={[
                    {path:'/components',name:'组件'}
                ]}/>
                {
                    /*
                     <ReactCSSTransitionGroup
                     component="div"
                     style={{flex:1,display:'flex'}}
                     transitionName="route"
                     transitionEnterTimeout={500}
                     transitionLeaveTimeout={500}>
                     {React.cloneElement(this.props.children, {key: key})}
                     </ReactCSSTransitionGroup>
                     */
                }
                {this.props.children}
            </div>
        )
    }
}
export default App;