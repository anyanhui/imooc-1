import {Map} from 'immutable';
const initialState=Map({data:[],loading:true});
export default (state=initialState,action)=>{
    switch (action.type){
        case 'LOAD':
            return state.set('data',action.data);
        case 'LOADING':
            return state.set('loading',action.loading);
        default:
            return state;
    }
}