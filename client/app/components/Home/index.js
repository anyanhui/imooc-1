import React,{PropTypes,Component} from 'react';
import styles from './home.scss';
import Card from '../Util/Card';
class Home extends Component {
    static contextTypes={
        router:PropTypes.object.isRequired
    };
    handlerClick(){
        const router=this.context.router;
        //router.push('learn');
        //router.go(1)
    }
    render() {
        return (
           <div className={styles.home}>
               <div className={styles.ceil}>
                   <Card title="鸟瞰图">

                   </Card>
                   <Card title="视频监控">

                   </Card>
                   <Card title="工艺流程">

                   </Card>
               </div>
               <div className={styles.floor}>
                   <Card title="指标项">

                   </Card>
                   <Card title="历史曲线">

                   </Card>
                   <Card title="返回地图">

                   </Card>
               </div>
           </div>
        )
    }
}
export default Home;