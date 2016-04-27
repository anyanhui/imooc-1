import React,{Component} from 'react';
import styles from './prize.scss';
class Prize extends Component {
    constructor(props){
        super(props);
        this.oldDeg=0;
        this.active=false;
        this.opportunity=3;
        this.state={
            prizeLen:4
        }
    }
    startRotate(){
        if(this.active){
            return;
        }
        let prizeLen=this.state.prizeLen;
        let plate=this.refs.plate;
        let prizeLevel=this.getPrizeLevel(prizeLen);
        if(this.opportunity<0){
            console.log('对不起，你的抽奖机会没了')
            return;
        }
        plate.style.transform=`rotateZ(${this.oldDeg}deg)`;
        this.active=true;
        setTimeout(()=>{
            alert(`恭喜你获得了${prizeLevel}等奖`);
            this.active=false;
        },5000);
    }
    getPrizeLevel(prizeLen){
        //每次旋转的随机角度
        let newReg=Math.round(Math.random()*(360*8-360*4))+360*4;
        //记录上一次旋转的位置
        this.oldDeg+=newReg;
        //剩余的抽奖机会
        this.opportunity-=1;
        //判断是奖品级别
        let deg=(this.oldDeg%360).toFixed(3);
        //每一个奖项所占的角度
        let eachDeg=(360/prizeLen).toFixed(3);
        let prizeLevel=0;
        for(let i=0;i<prizeLen;i++){
            if(deg>=i*eachDeg&&deg<(i+1)*eachDeg){
                console.log(deg)
                prizeLevel=i;
            }
        }
        return prizeLevel;
    }
    render() {
        return (
            <div className={styles.container}>
                <div  ref='plate' className={styles.plate}>
                    <span
                        className={styles.rotateBut}
                        onClick={()=>this.startRotate()}
                    >

                    </span>
                </div>
            </div>
        )
    }
}
export default Prize;