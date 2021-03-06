import App from '../components';
import Home from '../components/Home';
export default {
    path: '/',
    component: App,
    indexRoute: {
        component: Home
    },
    childRoutes: [
        {
            path:'components',
            getComponents(nextState,cb){
                require.ensure([], require=> {
                    cb(null, require('../components/Zc')['default'])
                },'components')
            },
            childRoutes:[
                {
                    path:'button',
                    //onEnter: ({ params },replace) => replace(`/button/${params.id}`),
                    getComponents(next,cb){
                        require.ensure([],require=>{
                            cb(null,require('../components/ButtonPage')['default'])
                        },'button')
                    }
                },
                {
                    path:'card',
                    getComponents(next,cb){
                        require.ensure([],require=>{
                            cb(null,require('../components/CardPage')['default'])
                        },'card')
                    }
                },
                {
                    path:'tab',
                    getComponents(next,cb){
                        require.ensure([],require=>{
                            cb(null,require('../components/TabPage')['default'])
                        },'tab')
                    }
                },
                {
                    path:'slider',
                    getComponents(next,cb){
                        require.ensure([],require=>{
                            cb(null,require('../components/SliderPage')['default'])
                        },'slider')
                    }
                },
                {
                    path:'table',
                    getComponents(next,cb){
                        require.ensure([],require=>{
                            cb(null,require('../components/TablePage')['default'])
                        },'table')
                    }
                },
                {
                    path:'loading',
                    getComponents(next,cb){
                        require.ensure([],require=>{
                            cb(null,require('../components/LoadingPage')['default'])
                        },'loading')
                    }
                }
            ]
        }
    ]
}