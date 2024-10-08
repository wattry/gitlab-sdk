/* eslint-disable max-len */
export default (client, handler) => ({
  "public_key": {
    /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{public_key:string}}|{code:404}|{code:503}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/web_commits/public_key',headers:{Accept:'application/json'},variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  }
});