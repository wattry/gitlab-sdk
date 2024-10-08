/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Jobs {
  request: {
    post: ({ data }: {
      data: {
        token: string;
        system_id: string;
        last_upstring: string;
        info: {
          name: string;
          version: string;
          revision: string;
          platform: string;
          architecture: string;
          executor: string;
          features: object;
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
    }, options?: {}) => Promise<{
      code: 201;
    } | {
      code: 204;
    } | {
      code: 403;
    } | {
      code: 409;
    }>;
  };
  put: ({ params, data }: {
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
  }, options?: {}) => Promise<{
    code: 200;
  } | {
    code: 202;
  } | {
    code: 400;
  } | {
    code: 403;
  }>;
  trace: {
    patch: ({ params, data }: {
      params: {
        id: string;
      };
      data: {
        token: string;
        debug_trace: boolean;
      };
    }, options?: {}) => Promise<{
      code: 202;
    } | {
      code: 400;
    } | {
      code: 403;
    } | {
      code: 416;
    }>;
  };
  artifacts: {
    post: ({ params, data }: {
      params: {
        id: string;
      };
      data: {
        file: ArrayBuffer;
        token: string;
        expire_in: string;
        artifact_type: string;
        artifact_format: string;
        metadata: ArrayBuffer;
        accessibility: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    } | {
      code: 400;
    } | {
      code: 403;
    } | {
      code: 405;
    } | {
      code: 413;
    }>;
    get: ({ params, query }: {
      params: {
        id: string;
      };
      query?: {
        token: string;
        direct_download: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 401;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
    authorize: {
      post: ({ params, data }: {
        params: {
          id: string;
        };
        data: {
          token: string;
          filesize: number;
          artifact_type: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
      } | {
        code: 403;
      } | {
        code: 405;
      } | {
        code: 413;
      }>;
    };
  };
};

export default (client: Client, handler: Handler): Jobs => ({
  "request": {
    post: ({data}: {data:{token:string,system_id:string,last_upstring:string,info:{name:string,version:string,revision:string,platform:string,architecture:string,executor:string,features:object,config:{gpus:string}},session:{url:string,certificate:string,authorization:string}}}, options?: {}): Promise<{code:201}|{code:204}|{code:403}|{code:409}> => handler.apply({method:'post',url:'api/v4/jobs/request',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{token:'string',system_id:'string',last_upstring:'string',info:{name:'string',version:'string',revision:'string',platform:'string',architecture:'string',executor:'string',features:'object',config:{gpus:'string'}},session:{url:'string',certificate:'string',authorization:'string'}},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  put: ({params,data}: {params:{id:string},data:{token:string,state:string,checksum:string,failure_reason:string,output:{checksum:string,bytesize:number},exit_code:number}}, options?: {}): Promise<{code:200}|{code:202}|{code:400}|{code:403}> => handler.apply({method:'put',url:'api/v4/jobs/:id',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{token:'string',state:'string',checksum:'string',failure_reason:'string',output:{checksum:'string',bytesize:'number'},exit_code:'number'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  "trace": {
    patch: ({params,data}: {params:{id:string},data:{token:string,debug_trace:boolean}}, options?: {}): Promise<{code:202}|{code:400}|{code:403}|{code:416}> => handler.apply({method:'patch',url:'api/v4/jobs/:id/trace',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{token:'string',debug_trace:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  },
  "artifacts": {
    post: ({params,data}: {params:{id:string},data:{file:ArrayBuffer,token:string,expire_in:string,artifact_type:string,artifact_format:string,metadata:ArrayBuffer,accessibility:string}}, options?: {}): Promise<{code:201}|{code:400}|{code:403}|{code:405}|{code:413}> => handler.apply({method:'post',url:'api/v4/jobs/:id/artifacts',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{file:'ArrayBuffer',token:'string',expire_in:'string',artifact_type:'archive',artifact_format:'zip',metadata:'ArrayBuffer',accessibility:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    get: ({params,query}: {params:{id:string},query?:{token:string,direct_download:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/jobs/:id/artifacts',variable:[{name:'id',type:'string'}],query:[{name:'token',type:'string'},{name:'direct_download',type:'string'}]}, [client, { params, query}, options]),
    "authorize": {
      post: ({params,data}: {params:{id:string},data:{token:string,filesize:number,artifact_type:string}}, options?: {}): Promise<{code:200}|{code:403}|{code:405}|{code:413}> => handler.apply({method:'post',url:'api/v4/jobs/:id/artifacts/authorize',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{token:'string',filesize:'number',artifact_type:'archive'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    }
  }
})