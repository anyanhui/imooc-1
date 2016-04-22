import React,{Component} from 'react';
import styles from './home.scss';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'home'
        }
    }
    componentDidMount(){
        console.log('didMount')
        this.setState({
            title:'didMount'
        })
    }
    render() {
        return (
           <div>{this.state.title}</div>
        )
    }
}
export default Home;