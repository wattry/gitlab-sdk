/* eslint-disable max-len */
export default (client, handler) => ({
  "repositories": {
    /** @param {{params:{id:string},query?:{tags:string,tags_count:string,size:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,name:string,path:string,project_id:number,location:string,created_at:string,cleanup_policy_started_at:string,tags_count:number,tags:{name:string,path:string,location:string},delete_api_path:string,size:number,status:string}}|{code:401}|{code:404}>} */
    getOne: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/registry/repositories/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'tags',type:'string'},{name:'tags_count',type:'string'},{name:'size',type:'string'}]}, [client, { params, query}, options])
  }
});