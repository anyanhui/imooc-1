import {load} from '../ajax/grid';
export function loadData(url,param){
    return async (dispatch,getState)=>{
       try {
           let data= await load(url,param);
           dispatch({
               type:'LOAD',
               data:data
           })
           setTimeout(()=>{
               dispatch(loading(false))
           },2000)
       }catch (err){
           console.log(err)
       }
    }
}
export function loading(loading){
    return{
        type:'LOADING',
        loading
    }
}