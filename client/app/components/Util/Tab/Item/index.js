import React,{PropTypes,Component,Children} from 'react';
export default class extends Component{
    render(){
        return(
            <div style={{width:'100%',height:'100%',position:'relative'}}>
                {this.props.children}
            </div>
        )
    }
}