/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {{query?:{email:string,size:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{avatar_url:string}}>} */
  get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/avatar',headers:{Accept:'application/json'},variable:[],query:[{name:'email',type:'string'},{name:'size',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
});