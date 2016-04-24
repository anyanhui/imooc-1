import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import './routeAnimation.css';
import Header from './Header';
class App extends Component{
    render(){
        let key = this.props.location.pathname;
        return(
            <div>
                <Header/>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="route"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {React.cloneElement(this.props.children, {key: key})}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}
export default App;