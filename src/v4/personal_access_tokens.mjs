/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {{query?:{user_id:string,revoked:string,state:string,created_before:string,created_after:string,last_used_before:string,last_used_after:string,search:string,page:string,per_page:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:[{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string},{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string}]}|{code:401}>} */
  get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/personal_access_tokens',headers:{Accept:'application/json'},variable:[],query:[{name:'user_id',type:'string'},{name:'revoked',type:'string'},{name:'state',type:'string'},{name:'created_before',type:'string'},{name:'created_after',type:'string'},{name:'last_used_before',type:'string'},{name:'last_used_after',type:'string'},{name:'search',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options]),
  "self": {
    /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string}}|{code:401}|{code:404}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/personal_access_tokens/self',headers:{Accept:'application/json'},variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options]),
    /** @param {{}} request @param {any} [options={}] @return {Promise<{code:204}|{code:400}>} */
    delete: (request = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/personal_access_tokens/self',variable:[]}, [client, request, options]),
    "rotate": {
      /** @param {{data:{expires_at:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,token:string}}|{code:400}|{code:401}|{code:403}|{code:405}>} */
      post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/personal_access_tokens/self/rotate',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{expires_at:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
    }
  },
  /** @param {{params:{id:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string}}|{code:401}|{code:404}>} */
  getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/personal_access_tokens/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  /** @param {{params:{id:string}}} request @param {any} [options={}] @return {Promise<{code:204}|{code:400}>} */
  delete: ({params} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/personal_access_tokens/:id',variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  "rotate": {
    /** @param {{params:{id:string},data:{expires_at:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,token:string}}>} */
    post: ({params,data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/personal_access_tokens/:id/rotate',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{expires_at:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  }
});