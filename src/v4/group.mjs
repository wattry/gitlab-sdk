/* eslint-disable max-len */
export default (client, handler) => ({
  "-": {
    "packages": {
      "composer": {
        "packages": {
          /** @param {{params:{id:string},query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:404}>} */
          get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/packages',variable:[{name:'id',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
        },
        "p": {
          /** @param {{params:{id:string,sha:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:404}>} */
          getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/p/:sha',variable:[{name:'id',type:'string'},{name:'sha',type:'string'}]}, [client, { params}, options])
        },
        "p2": {
          /** @param {{params:{id:string},query?:{package_name:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:404}>} */
          get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/p2/*package_name',variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
        },
        /** @param {{params:{id:string},query?:{package_name:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:404}>} */
        get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/*package_name',variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
      }
    }
  }
});