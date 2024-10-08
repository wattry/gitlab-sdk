/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Applications {
  post: ({ data }: {
    data: {
      name: string;
      redirect_uri: string;
      scopes: string;
      confidential: true;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: string;
      application_id: string;
      application_name: string;
      callback_url: string;
      confidential: boolean;
      secret: string;
    };
  }>;
  get: ({ }: {}, options?: {}) => Promise<{
    code: 200;
    data: [{
      id: string;
      application_id: string;
      application_name: string;
      callback_url: string;
      confidential: boolean;
    }, {
      id: string;
      application_id: string;
      application_name: string;
      callback_url: string;
      confidential: boolean;
    }];
  }>;
  delete: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
    code: 204;
  }>;
  "renew-secret": {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        application_id: string;
        application_name: string;
        callback_url: string;
        confidential: boolean;
        secret: string;
      };
    }>;
  };
};

export default (client: Client, handler: Handler): Applications => ({
  post: ({data}: {data:{name:string,redirect_uri:string,scopes:string,confidential:true}}, options?: {}): Promise<{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}> => handler.apply({method:'post',url:'api/v4/applications',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{name:'string',redirect_uri:'string',scopes:'string',confidential:true},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  get: ({}: {}, options?: {}): Promise<{code:200,data:[{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean},{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean}]}> => handler.apply({method:'get',url:'api/v4/applications',headers:{Accept:'application/json'},variable:[]}, [client, {}, options]),
  delete: ({params}: {params:{id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/applications/:id',variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  "renew-secret": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}> => handler.apply({method:'post',url:'api/v4/applications/:id/renew-secret',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  }
})