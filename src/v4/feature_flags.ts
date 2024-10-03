export default (client: any, handler: any) => ({
  "unleash": {
    getOne: ({params,query,clientOptions}: {params:{project_id:string},query:{instance_id:string,app_name:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id',resource:'v4',variable:[{name:'project_id',type:'string'}],headers:{},query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    "features": {
      get: ({params,query,clientOptions}: {params:{project_id:string},query:{instance_id:string,app_name:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id/features',resource:'feature_flags',variable:[{name:'project_id',type:'string'}],headers:{},query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    },
    "client": {
      "features": {
        get: ({params,query,clientOptions}: {params:{project_id:string},query:{instance_id:string,app_name:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id/client/features',resource:'unleash',variable:[{name:'project_id',type:'string'}],headers:{},query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
      },
      "register": {
        post: ({params,data,clientOptions}: {params:{project_id:string},data:{instance_id:string,app_name:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/feature_flags/unleash/:project_id/client/register',resource:'unleash',variable:[{name:'project_id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{instance_id:'string',app_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
      },
      "metrics": {
        post: ({params,data,clientOptions}: {params:{project_id:string},data:{instance_id:string,app_name:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/feature_flags/unleash/:project_id/client/metrics',resource:'unleash',variable:[{name:'project_id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{instance_id:'string',app_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
      }
    }
  }
})