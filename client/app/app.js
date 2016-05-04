import React from 'react';
import {render} from 'react-dom';
import routes from './routeConfig';
import 'antd/lib/index.css';
import {Router,browserHistory} from 'react-router';
render(
    <Router history={browserHistory} routes={routes}/>,
    document.body
);