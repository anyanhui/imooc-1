import {Map} from 'immutable';
const initialState=Map({data:[]});
export default (state=initialState,action)=>{
    switch (action.type){
        case 'LOAD':
            return state.set('data',action.data);
        default:
            return state;
    }
}