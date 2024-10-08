/* eslint-disable max-len */
export default (client, handler) => ({
  "request": {
    /** @param {{data:{token:string,system_id:string,last_upstring:string,info:{name:string,version:string,revision:string,platform:string,architecture:string,executor:string,features:object,config:{gpus:string}},session:{url:string,certificate:string,authorization:string}}}} request @param {any} [options={}] @return {Promise<{code:201}|{code:204}|{code:403}|{code:409}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/jobs/request',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{token:'string',system_id:'string',last_upstring:'string',info:{name:'string',version:'string',revision:'string',platform:'string',architecture:'string',executor:'string',features:'object',config:{gpus:'string'}},session:{url:'string',certificate:'string',authorization:'string'}},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  /** @param {{params:{id:string},data:{token:string,state:string,checksum:string,failure_reason:string,output:{checksum:string,bytesize:number},exit_code:number}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:202}|{code:400}|{code:403}>} */
  put: ({params,data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/jobs/:id',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{token:'string',state:'string',checksum:'string',failure_reason:'string',output:{checksum:'string',bytesize:'number'},exit_code:'number'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  "trace": {
    /** @param {{params:{id:string},data:{token:string,debug_trace:boolean}}} request @param {any} [options={}] @return {Promise<{code:202}|{code:400}|{code:403}|{code:416}>} */
    patch: ({params,data} = {}, options = {}) => handler.apply({method:'patch',url:'api/v4/jobs/:id/trace',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{token:'string',debug_trace:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  },
  "artifacts": {
    /** @param {{params:{id:string},data:{file:ArrayBuffer,token:string,expire_in:string,artifact_type:archive,artifact_format:zip,metadata:ArrayBuffer,accessibility:string}}} request @param {any} [options={}] @return {Promise<{code:201}|{code:400}|{code:403}|{code:405}|{code:413}>} */
    post: ({params,data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/jobs/:id/artifacts',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{file:'ArrayBuffer',token:'string',expire_in:'string',artifact_type:'archive',artifact_format:'zip',metadata:'ArrayBuffer',accessibility:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    /** @param {{params:{id:string},query?:{token:string,direct_download:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:403}|{code:404}>} */
    get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/jobs/:id/artifacts',variable:[{name:'id',type:'string'}],query:[{name:'token',type:'string'},{name:'direct_download',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options]),
    "authorize": {
      /** @param {{params:{id:string},data:{token:string,filesize:number,artifact_type:archive}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:403}|{code:405}|{code:413}>} */
      post: ({params,data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/jobs/:id/artifacts/authorize',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{token:'string',filesize:'number',artifact_type:'archive'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    }
  }
});