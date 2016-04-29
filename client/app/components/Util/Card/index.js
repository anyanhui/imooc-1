import React,{PropTypes,Component} from 'react';
class Card extends Component{
    render(){
        let {title}=this.props;
        return(
            <article>
                <div>
                    <header>
                        <h3>{title}</h3>
                        <span></span>
                    </header>
                    <div>

                    </div>
                </div>
            </article>
        )
    }
}
export default Card;