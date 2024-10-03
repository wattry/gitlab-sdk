export default (client: any, handler: any) => ({
  "repositories": {
    getOne: ({params,query,clientOptions}: {params:{id:string},query:{tags:string,tags_count:string,size:string},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,path:string,project_id:number,location:string,created_at:Date,cleanup_policy_started_at:Date,tags_count:number,tags:{name:string,path:string,location:string},delete_api_path:string,size:number,status:string}},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/registry/repositories/:id',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'tags',type:'string'},{name:'tags_count',type:'string'},{name:'size',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  }
})