/* eslint-disable max-len */
export default (client, handler) => ({
  "unleash": {
    /** @param {{params:{project_id:string},query?:{instance_id:string,app_name:string}}} request @param {any} [options={}] @return {Promise<{code:200}>} */
    getOne: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id',variable:[{name:'project_id',type:'string'}],query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'}]}, [client, { params, query}, options]),
    "features": {
      /** @param {{params:{project_id:string},query?:{instance_id:string,app_name:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}>} */
      get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id/features',variable:[{name:'project_id',type:'string'}],query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
    },
    "client": {
      "features": {
        /** @param {{params:{project_id:string},query?:{instance_id:string,app_name:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}>} */
        get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id/client/features',variable:[{name:'project_id',type:'string'}],query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
      },
      "register": {
        /** @param {{params:{project_id:string},data:{instance_id:string,app_name:string}}} request @param {any} [options={}] @return {Promise<{code:201}>} */
        post: ({params,data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/feature_flags/unleash/:project_id/client/register',headers:{'Content-Type':'application/json'},variable:[{name:'project_id',type:'string'}],data:{mode:'raw',raw:{instance_id:'string',app_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
      },
      "metrics": {
        /** @param {{params:{project_id:string},data:{instance_id:string,app_name:string}}} request @param {any} [options={}] @return {Promise<{code:201}>} */
        post: ({params,data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/feature_flags/unleash/:project_id/client/metrics',headers:{'Content-Type':'application/json'},variable:[{name:'project_id',type:'string'}],data:{mode:'raw',raw:{instance_id:'string',app_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
      }
    }
  }
});