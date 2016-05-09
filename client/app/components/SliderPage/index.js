import React,{PropTypes,Component} from 'react';
import Slider from '../Util/Slider';
import styles from './sliderPage.scss';
export default class extends Component{
    render(){
        return(
            <Slider autoPlay={true} height={500}>
                <Slider.Item bgImg='http://www.kimo-tech.com/templets/Images/wallpaper1_1_h800.jpg'>

                </Slider.Item>
                <Slider.Item bgImg="http://www.kimo-tech.com/templets/Images/wallpaper1_2_h800.jpg">

                </Slider.Item>
                <Slider.Item bgImg="http://www.kimo-tech.com/templets/Images/wallpaper1_3_h800.jpg">

                </Slider.Item>
            </Slider>
        )
    }
}