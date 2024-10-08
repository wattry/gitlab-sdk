/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{version:string,revision:string,kas:{enabled:boolean,externalUrl:string,version:string},enterprise:boolean}}|{code:401}>} */
  get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/metadata',headers:{Accept:'application/json'},variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
});