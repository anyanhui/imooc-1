import React,{Component} from 'react';
import {RoutePrize} from '../components/fit/prize';
import { Lifecycle } from 'react-router'
export default React.createClass({
    mixins: [ Lifecycle ],
    routerWillLeave(nextLocation) {
        console.log(nextLocation);
        return true;
    },
    render() {
        return (
            <RoutePrize/>
        )
    }
});