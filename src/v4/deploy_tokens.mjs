/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {{query?:{page:string,per_page:string,active:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:[{id:number,name:string,username:string,expires_at:string,revoked:boolean,expired:boolean},{id:number,name:string,username:string,expires_at:string,revoked:boolean,expired:boolean}]}|{code:401}|{code:403}>} */
  get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/deploy_tokens',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'active',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
});