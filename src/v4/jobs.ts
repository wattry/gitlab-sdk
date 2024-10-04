export interface Jobs {
  request: {
    post: ({ data, clientOptions }: {
      data: {
        token: string;
        system_id: string;
        last_update: string;
        info: {
          name: string;
          version: string;
          revision: string;
          platform: string;
          architecture: string;
          executor: string;
          features: any;
          config: {
            gpus: string;
          };
        };
        session: {
          url: string;
          certificate: string;
          authorization: string;
        };
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }, {
      code: 204;
    }, {
      code: 403;
    }, {
      code: 409;
    }]>;
  };
  put: ({ params, data, clientOptions }: {
    params: {
      id: string;
    };
    data: {
      token: string;
      state: string;
      checksum: string;
      failure_reason: string;
      output: {
        checksum: string;
        bytesize: number;
      };
      exit_code: number;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
  }, {
    code: 202;
  }, {
    code: 400;
  }, {
    code: 403;
  }]>;
  trace: {
    patch: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        token: string;
        debug_trace: boolean;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 202;
    }, {
      code: 400;
    }, {
      code: 403;
    }, {
      code: 416;
    }]>;
  };
  artifacts: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        file: string;
        token: string;
        expire_in: string;
        artifact_type: string;
        artifact_format: string;
        metadata: string;
        accessibility: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }, {
      code: 400;
    }, {
      code: 403;
    }, {
      code: 405;
    }, {
      code: 413;
    }]>;
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        token: string;
        direct_download: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    authorize: {
      post: ({ params, data, clientOptions }: {
        params: {
          id: string;
        };
        data: {
          token: string;
          filesize: number;
          artifact_type: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
      }, {
        code: 403;
      }, {
        code: 405;
      }, {
        code: 413;
      }]>;
    };
  };
};

export default (client: any, handler: any): Jobs => ({
  "request": {
    post: ({data,clientOptions}: {data:{token:string,system_id:string,last_update:string,info:{name:string,version:string,revision:string,platform:string,architecture:string,executor:string,features:any,config:{gpus:string}},session:{url:string,certificate:string,authorization:string}},clientOptions:any}): Promise<[{code:201},{code:204},{code:403},{code:409}]> => handler.apply({method:'post',url:'api/v4/jobs/request',resource:'v4',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{token:'string',system_id:'string',last_update:'string',info:{name:'string',version:'string',revision:'string',platform:'string',architecture:'string',executor:'string',features:'object',config:{gpus:'string'}},session:{url:'string',certificate:'string',authorization:'string'}},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  },
  put: ({params,data,clientOptions}: {params:{id:string},data:{token:string,state:string,checksum:string,failure_reason:string,output:{checksum:string,bytesize:number},exit_code:number},clientOptions:any}): Promise<[{code:200},{code:202},{code:400},{code:403}]> => handler.apply({method:'put',url:'api/v4/jobs/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{token:'string',state:'string',checksum:'string',failure_reason:'string',output:{checksum:'string',bytesize:'number'},exit_code:'number'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  "trace": {
    patch: ({params,data,clientOptions}: {params:{id:string},data:{token:string,debug_trace:boolean},clientOptions:any}): Promise<[{code:202},{code:400},{code:403},{code:416}]> => handler.apply({method:'patch',url:'api/v4/jobs/:id/trace',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{token:'string',debug_trace:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
  },
  "artifacts": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{file:string,token:string,expire_in:string,artifact_type:string,artifact_format:string,metadata:string,accessibility:string},clientOptions:any}): Promise<[{code:201},{code:400},{code:403},{code:405},{code:413}]> => handler.apply({method:'post',url:'api/v4/jobs/:id/artifacts',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{file:'binary',token:'string',expire_in:'string',artifact_type:'archive',artifact_format:'zip',metadata:'binary',accessibility:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    get: ({params,query,clientOptions}: {params:{id:string},query:{token:string,direct_download:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/jobs/:id/artifacts',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'token',type:'string'},{name:'direct_download',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    "authorize": {
      post: ({params,data,clientOptions}: {params:{id:string},data:{token:string,filesize:number,artifact_type:string},clientOptions:any}): Promise<[{code:200},{code:403},{code:405},{code:413}]> => handler.apply({method:'post',url:'api/v4/jobs/:id/artifacts/authorize',resource:'jobs',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{token:'string',filesize:'number',artifact_type:'archive'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    }
  }
})