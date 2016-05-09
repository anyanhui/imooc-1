import React,{PropTypes,Component} from 'react';
import Button from '../Util/Button';
import Card from '../Util/Card';
import Modal from '../Util/Modal';
import Loading from '../Util/Loading';
import styles from './buttonPage.scss'
export default class extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            modalHidden:true
        }
    }
    loadingClick(but,e){
        //console(`${but.props.text}的按钮`);
        let loading=this.state.loading;
        if(!loading){
            this.setState({loading:true});
            setTimeout(()=>{
                this.setState({loading:false});
            },5000)
        }
    }
    modalClick(){
        this.setState({
            modalHidden:!this.state.modalHidden
        });
    }
    render() {
        let {loading,modalHidden}=this.state;
        return (
            <div className={styles.container}>
                <Card title="Button"
                      style={{width:500,height:400}}
                      flex={{
                        justifyContent:'space-around',
                        alignItems:'center',
                        flexWrap:'wrap',
                        alignContent:'space-around'
                      }}
                >
                    <Button text="默认"  handler={(but,e)=>this.modalClick(but,e)}/>
                    <Button text="带图标"
                           icon="http://www.easyicon.net/api/resizeApi.php?id=1191766&size=24"
                           handler={(but,e)=>this.loadingClick(but,e)}
                           style={{background:'#418bca',color:'#fff'}}
                    />
                </Card>
                <Loading loading={loading}/>
                <Modal hidden={modalHidden}>
                    <Button text="隐藏"  handler={(but,e)=>this.modalClick(but,e)}/>
                </Modal>
            </div>
        )
    }
}