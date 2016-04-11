import React,{Component} from 'react';
class Item extends Component {
    render() {
        return (
            <div style={{
           height:'100%',
           position:'relative'
           }}>
                {this.props.children}
            </div>
        )
    }
}
export default Item;