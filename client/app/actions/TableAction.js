import * as type from './types/tableType';
import {load} from '../ajax/tableLoad';
export function loadData(url,param){
    return async (dispatch,getState)=>{
        try {
            let data=await load(url,param);
            dispatch({
                type:'LOAD',
                data:data.data
            })
        }catch (err){
            console.log(err);
        }
    }
}