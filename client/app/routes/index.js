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
            component:require('./Ask')
        },
        {
            path: 'learn',
            component:require('./Learn')
        }
    ]
}