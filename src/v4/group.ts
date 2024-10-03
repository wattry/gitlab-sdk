export default (client: any, handler: any) => ({
  "-": {
    "packages": {
      "composer": {
        "packages": {
          get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/packages',resource:'packages',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
        },
        "p": {
          getOne: ({params,clientOptions}: {params:{id:string,sha:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/p/:sha',resource:'packages',variable:[{name:'id',type:'string'},{name:'sha',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
        },
        "p2": {
          "*package_name": {
            get: ({params,query,clientOptions}: {params:{id:string},query:{package_name:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/p2/*package_name',resource:'composer',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'package_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
          }
        },
        "*package_name": {
          get: ({params,query,clientOptions}: {params:{id:string},query:{package_name:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/*package_name',resource:'packages',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'package_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
        }
      }
    }
  }
})