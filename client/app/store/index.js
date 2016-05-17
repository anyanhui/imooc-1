import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from '../reducers';
const initialState = {};
export const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunkMiddleware),
        //redux开发工具(游览器端需要安装相应插件redux-devTool)，生成阶段应去掉
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
