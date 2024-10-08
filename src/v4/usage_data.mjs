/* eslint-disable max-len */
export default (client, handler) => ({
  "service_ping": {
    /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:403}|{code:404}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/usage_data/service_ping',variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  },
  "increment_counter": {
    /** @param {{data:{event:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:403}|{code:404}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/usage_data/increment_counter',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{event:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "increment_unique_users": {
    /** @param {{data:{event:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:403}|{code:404}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/usage_data/increment_unique_users',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{event:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "track_event": {
    /** @param {{data:{event:string,namespace_id:number,project_id:number}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:403}|{code:404}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/usage_data/track_event',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{event:'string',namespace_id:'number',project_id:'number'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "metric_definitions": {
    /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:403}|{code:404}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/usage_data/metric_definitions',variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  },
  "non_sql_metrics": {
    /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:403}|{code:404}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/usage_data/non_sql_metrics',variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  },
  "queries": {
    /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:403}|{code:404}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/usage_data/queries',variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  }
});