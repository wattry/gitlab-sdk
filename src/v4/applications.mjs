/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {{data:{name:string,redirect_uri:string,scopes:string,confidential:true}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}>} */
  post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/applications',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{name:'string',redirect_uri:'string',scopes:'string',confidential:true},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:[{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean},{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean}]}>} */
  get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/applications',headers:{Accept:'application/json'},variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options]),
  /** @param {{params:{id:string}}} request @param {any} [options={}] @return {Promise<{code:204}>} */
  delete: ({params} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/applications/:id',variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  "renew-secret": {
    /** @param {{params:{id:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}>} */
    post: ({params} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/applications/:id/renew-secret',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  }
});