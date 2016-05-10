import fetch from 'isomorphic-fetch';
export async function load(url='',param={}){
    try {
        let res= await fetch(url,{
            method:'GET',
            //body:JSON.stringify(param)
        });
        return res.json();
    }catch (err){
        console.log(err)
    }
}