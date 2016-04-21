import React from 'react';
import {render} from 'react-dom';
import App from './viewport/glViewport';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
const Home = React.createClass({
    render(){
        return (
            <h1>Home</h1>
        )
    }
})
const Ask = React.createClass({
    render(){
        return (
            <h1>Ask</h1>
        )
    }
})
const Learn = React.createClass({
    render(){
        return (
            <h1>Learn</h1>
        )
    }
})
render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="ask" component={Ask}/>
            <Route path="learn" component={Learn}/>
        </Route>
    </Router>,
    document.body
);