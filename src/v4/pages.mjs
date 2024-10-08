/* eslint-disable max-len */
export default (client, handler) => ({
  "domains": {
    /** @param {{query?:{page:string,per_page:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{domain:string,url:string,project_id:string,verified:string,verification_code:string,enabled_until:string,auto_ssl_enabled:string,certificate_expiration:{expired:string,expiration:string}}}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/pages/domains',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  }
});