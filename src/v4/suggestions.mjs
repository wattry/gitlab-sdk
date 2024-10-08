/* eslint-disable max-len */
export default (client, handler) => ({
  "apply": {
    /** @param {{params:{id:string},data:{commit_message:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,from_line:string,to_line:string,appliable:string,applied:string,from_content:string,to_content:string}}>} */
    put: ({params,data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/suggestions/:id/apply',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{commit_message:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  },
  "batch_apply": {
    /** @param {{data:{ids:[number,number],commit_message:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,from_line:string,to_line:string,appliable:string,applied:string,from_content:string,to_content:string}}>} */
    put: ({data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/suggestions/batch_apply',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{ids:['number','number'],commit_message:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  }
});