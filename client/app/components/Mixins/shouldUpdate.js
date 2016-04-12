import {is} from 'immutable';
export default component=>({
    shouldComponentUpdate(nextProps = {}, nextState = {}){
        const thisProps = component.props || {}, thisState = component.state || {};
        if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
            Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true;
        }

        for (const key in nextProps) {
            if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
                return true;
            }
        }

        for (const key in nextState) {
            if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
                return true;
            }
        }
        return false;
    }
    //getInitialState(){
    //    return {
    //        active: component.props.active || 2
    //    }
    //}
    //prevClick(){
    //    console.log(component.refs.prevArrow);
    //    let active = component.state.active;
    //    let len = Children.count(component.props.children);
    //    this.setState({
    //        active: active === 1 ? len : active - 1
    //    })
    //}
})