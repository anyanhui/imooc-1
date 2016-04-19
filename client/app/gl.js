import 'antd/lib/index.css';
import React from 'react';
import {render} from 'react-dom';
import App from './viewport/glViewport';
import {store} from './store/appStore';
import {Provider} from 'react-redux';
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.body
);