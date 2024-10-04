export interface Hooks {
  get: ({ query, clientOptions }: {
    query: {
      page: string;
      per_page: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: Date;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_update_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: Date;
      url_variables: [object, object];
      custom_webhook_template: string;
    }, {
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: Date;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_update_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: Date;
      url_variables: [object, object];
      custom_webhook_template: string;
    }];
  }]>;
  post: ({ params, clientOptions }: {
    params: {
      hook_id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 201;
  }]>;
  getOne: ({ params, clientOptions }: {
    params: {
      hook_id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: Date;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_update_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: Date;
      url_variables: [object, object];
      custom_webhook_template: string;
    };
  }, {
    code: 404;
  }]>;
  put: ({ params, data, clientOptions }: {
    params: {
      hook_id: string;
    };
    data: {
      url: string;
      name: string;
      description: string;
      token: string;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_update_events: boolean;
      enable_ssl_verification: boolean;
      url_variables: [{
        key: string;
        value: string;
      }, {
        key: string;
        value: string;
      }];
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: Date;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_update_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: Date;
      url_variables: [object, object];
      custom_webhook_template: string;
    };
  }, {
    code: 400;
  }, {
    code: 404;
  }, {
    code: 422;
  }]>;
  delete: ({ params, clientOptions }: {
    params: {
      hook_id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 204;
    data: {
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: Date;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_update_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: Date;
      url_variables: [object, object];
      custom_webhook_template: string;
    };
  }, {
    code: 404;
  }]>;
  url_variables: {
    put: ({ params, data, clientOptions }: {
      params: {
        hook_id: string;
        key: string;
      };
      data: {
        value: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        hook_id: string;
        key: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
  };
};

export default (client: any, handler: any): Hooks => ({
  get: ({query,clientOptions}: {query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:string,url:string,name:string,description:string,created_at:Date,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:Date,url_variables:[object,object],custom_webhook_template:string},{id:string,url:string,name:string,description:string,created_at:Date,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:Date,url_variables:[object,object],custom_webhook_template:string}]}]> => handler.apply({method:'get',url:'api/v4/hooks',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}]),
  post: ({params,clientOptions}: {params:{hook_id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/hooks/:hook_id',resource:'api',variable:[{name:'hook_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
  getOne: ({params,clientOptions}: {params:{hook_id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,url:string,name:string,description:string,created_at:Date,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:Date,url_variables:[object,object],custom_webhook_template:string}},{code:404}]> => handler.apply({method:'get',url:'api/v4/hooks/:hook_id',resource:'api',variable:[{name:'hook_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  put: ({params,data,clientOptions}: {params:{hook_id:string},data:{url:string,name:string,description:string,token:string,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,url_variables:[{key:string,value:string},{key:string,value:string}]},clientOptions:any}): Promise<[{code:200,data:{id:string,url:string,name:string,description:string,created_at:Date,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:Date,url_variables:[object,object],custom_webhook_template:string}},{code:400},{code:404},{code:422}]> => handler.apply({method:'put',url:'api/v4/hooks/:hook_id',resource:'api',variable:[{name:'hook_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{url:'string',name:'string',description:'string',token:'string',push_events:'boolean',tag_push_events:'boolean',merge_requests_events:'boolean',repository_update_events:'boolean',enable_ssl_verification:'boolean',url_variables:[{key:'string',value:'string'},{key:'string',value:'string'}]},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  delete: ({params,clientOptions}: {params:{hook_id:string},clientOptions:any}): Promise<[{code:204,data:{id:string,url:string,name:string,description:string,created_at:Date,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:Date,url_variables:[object,object],custom_webhook_template:string}},{code:404}]> => handler.apply({method:'delete',url:'api/v4/hooks/:hook_id',resource:'api',variable:[{name:'hook_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  "url_variables": {
    put: ({params,data,clientOptions}: {params:{hook_id:string,key:string},data:{value:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'put',url:'api/v4/hooks/:hook_id/url_variables/:key',resource:'v4',variable:[{name:'hook_id',type:'string'},{name:'key',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{value:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{hook_id:string,key:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/hooks/:hook_id/url_variables/:key',resource:'v4',variable:[{name:'hook_id',type:'string'},{name:'key',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  }
})