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
            getComponents(nextState, cb) {
                require.ensure([], require=> {
                    cb(null, require('./Ask')['default'])
                })
            }
        },
        {
            path: 'learn',
            getComponents(nextState, cb) {
                require.ensure([], require=> {
                    cb(null, require('./Learn')['default'])
                })
            }
        }
    ]
}