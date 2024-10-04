export interface Applications {
  post: ({ data, clientOptions }: {
    data: {
      name: string;
      redirect_uri: string;
      scopes: string;
      confidential: true;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      application_id: string;
      application_name: string;
      callback_url: string;
      confidential: boolean;
      secret: string;
    };
  }]>;
  get: ({ clientOptions }: {
    clientOptions: any;
  }) => Promise<[{
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
  }]>;
  delete: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 204;
  }]>;
  "renew-secret": {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        application_id: string;
        application_name: string;
        callback_url: string;
        confidential: boolean;
        secret: string;
      };
    }]>;
  };
};


export default (client: any, handler: any): Applications => ({
  post: ({data,clientOptions}: {data:{name:string,redirect_uri:string,scopes:string,confidential:true},clientOptions:any}): Promise<[{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}]> => handler.apply({method:'post',url:'api/v4/applications',resource:'api',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',redirect_uri:'string',scopes:'string',confidential:true},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
  get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200,data:[{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean},{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean}]}]> => handler.apply({method:'get',url:'api/v4/applications',resource:'api',variable:[],headers:{Accept:'application/json'},query:[],data:null}, [client, {clientOptions}]),
  delete: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/applications/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
  "renew-secret": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}]> => handler.apply({method:'post',url:'api/v4/applications/:id/renew-secret',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  }
})