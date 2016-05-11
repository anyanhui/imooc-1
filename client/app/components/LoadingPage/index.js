import React,{PropTypes,Component} from 'react';
import Button from '../Util/Button';
import Loading from '../Util/Loading';
import Card from '../Util/Card';
import styles from './loading.scss';
export default class extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            type:'1'
        }
    }
    handlerClick(but,e){
        let type=but.props.text.substring(5);
        let loading=this.state.loading;
        if(!loading){
            this.setState({
                loading:true,
                type
            });
            setTimeout(()=>{
                this.setState({
                    loading:false
                })
            },5000)
        }
    }
    render() {
        let {type,loading}=this.state;
        const Item=Card.Item;
        return (
            <div className={styles.container}>
                <Card>
                    <Item position="top">
                        <h2>点击下面按钮显示不同loading...</h2>
                    </Item>
                    <Item position="center">
                        <Button text="type为1" type="primary" handler={::this.handlerClick}/>
                        <Button text="type为2" type="primary" handler={::this.handlerClick}/>
                        <Button text="type为3" type="primary" handler={::this.handlerClick}/>
                        <Button text="type为4" type="primary" handler={::this.handlerClick}/>
                    </Item>
                </Card>
                <Loading type={type} loading={loading}/>
            </div>
        )
    }
}