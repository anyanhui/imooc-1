import App from '../components';
import Home from './Home';
export default {
    path: '/',
    component: App,
    indexRoute: {
        component: Home
    },
    childRoutes: [
        {
            path: 'ask',
            getComponent(nextState, cb){
                require.ensure([], (require) => {
                    cb(null, require('./Ask'))
                })
            }
        },
        {
            path: 'learn',
            getComponent(nextState, cb){
                require.ensure([], (require) => {
                    cb(null, require('./Learn'))
                })
            }
        }
    ]
}