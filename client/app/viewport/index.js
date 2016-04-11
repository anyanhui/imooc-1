import React,{Component} from 'react';
import {
    FullPage
} from '../components';
const Item = FullPage.Item;
class App extends Component {
    render() {
        return (
            <FullPage>
                <Item>
                    <div style={{background:'#abc',height:'100%'}}>第一屏</div>
                </Item>
                <Item>
                    <div style={{background:'#a00',height:'100%'}}>第二屏</div>
                </Item>
                <Item>
                    <div style={{background:'#0a0',height:'100%'}}>第三屏</div>
                </Item>
            </FullPage>
        )
    }
}
export default App;