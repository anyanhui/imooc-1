import React from 'react';
import {render} from 'react-dom';
import routes from './routeConfig';
import {store} from './store';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import 'antd/dist/antd.css';
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.body
);