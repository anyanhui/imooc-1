import React,{Component} from 'react';
import {
    FullPage,Header,Slider
} from '../components';
const Item = FullPage.Item;
class App extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <FullPage minHeight={500} nav={true}>
                    <Item title="首页">
                        <Slider autoPlay={true} height="100%">
                            <Slider.Item bgImg='http://www.kimo-tech.com/templets/Images/wallpaper1_1_h800.jpg'>

                            </Slider.Item>
                            <Slider.Item bgImg="http://www.kimo-tech.com/templets/Images/wallpaper1_2_h800.jpg">

                            </Slider.Item>
                            <Slider.Item bgImg="http://www.kimo-tech.com/templets/Images/wallpaper1_3_h800.jpg">

                            </Slider.Item>
                        </Slider>
                    </Item>
                    <Item title="业务" bgImg="http://www.kimo-tech.com/templets/Images/wallpaper2.jpg">

                    </Item>
                    <Item title="客户" bgImg="http://www.kimo-tech.com/templets/Images/wallpaper5_h800.jpg">

                    </Item>
                </FullPage>
            </div>
        )
    }
}
export default App;