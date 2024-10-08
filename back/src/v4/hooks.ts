/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Hooks {
  get: ({ query }: {
    query?: {
      page: string;
      per_page: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: [{
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: string;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_upstring_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: string;
      url_variables: [object, object];
      custom_webhook_template: string;
    }, {
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: string;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_upstring_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: string;
      url_variables: [object, object];
      custom_webhook_template: string;
    }];
  }>;
  post: ({ params }: {
    params: {
      hook_id: string;
    };
  }, options?: {}) => Promise<{
    code: 201;
  }>;
  getOne: ({ params }: {
    params: {
      hook_id: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: string;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_upstring_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: string;
      url_variables: [object, object];
      custom_webhook_template: string;
    };
  } | {
    code: 404;
  }>;
  put: ({ params, data }: {
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
      repository_upstring_events: boolean;
      enable_ssl_verification: boolean;
      url_variables: [{
        key: string;
        value: string;
      }, {
        key: string;
        value: string;
      }];
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: string;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_upstring_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: string;
      url_variables: [object, object];
      custom_webhook_template: string;
    };
  } | {
    code: 400;
  } | {
    code: 404;
  } | {
    code: 422;
  }>;
  delete: ({ params }: {
    params: {
      hook_id: string;
    };
  }, options?: {}) => Promise<{
    code: 204;
    data: {
      id: string;
      url: string;
      name: string;
      description: string;
      created_at: string;
      push_events: boolean;
      tag_push_events: boolean;
      merge_requests_events: boolean;
      repository_upstring_events: boolean;
      enable_ssl_verification: boolean;
      alert_status: symbol;
      disabled_until: string;
      url_variables: [object, object];
      custom_webhook_template: string;
    };
  } | {
    code: 404;
  }>;
  url_variables: {
    put: ({ params, data }: {
      params: {
        hook_id: string;
        key: string;
      };
      data: {
        value: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    }>;
    delete: ({ params }: {
      params: {
        hook_id: string;
        key: string;
      };
    }, options?: {}) => Promise<{
      code: 204;
    }>;
  };
};

export default (client: Client, handler: Handler): Hooks => ({
  get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:string,url:string,name:string,description:string,created_at:string,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_upstring_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:string,url_variables:[object,object],custom_webhook_template:string},{id:string,url:string,name:string,description:string,created_at:string,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_upstring_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:string,url_variables:[object,object],custom_webhook_template:string}]}> => handler.apply({method:'get',url:'api/v4/hooks',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
  post: ({params}: {params:{hook_id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/hooks/:hook_id',variable:[{name:'hook_id',type:'string'}]}, [client, { params}, options]),
  getOne: ({params}: {params:{hook_id:string}}, options?: {}): Promise<{code:200,data:{id:string,url:string,name:string,description:string,created_at:string,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_upstring_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:string,url_variables:[object,object],custom_webhook_template:string}}|{code:404}> => handler.apply({method:'get',url:'api/v4/hooks/:hook_id',headers:{Accept:'application/json'},variable:[{name:'hook_id',type:'string'}]}, [client, { params}, options]),
  put: ({params,data}: {params:{hook_id:string},data:{url:string,name:string,description:string,token:string,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_upstring_events:boolean,enable_ssl_verification:boolean,url_variables:[{key:string,value:string},{key:string,value:string}]}}, options?: {}): Promise<{code:200,data:{id:string,url:string,name:string,description:string,created_at:string,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_upstring_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:string,url_variables:[object,object],custom_webhook_template:string}}|{code:400}|{code:404}|{code:422}> => handler.apply({method:'put',url:'api/v4/hooks/:hook_id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'hook_id',type:'string'}],data:{mode:'raw',raw:{url:'string',name:'string',description:'string',token:'string',push_events:'boolean',tag_push_events:'boolean',merge_requests_events:'boolean',repository_upstring_events:'boolean',enable_ssl_verification:'boolean',url_variables:[{key:'string',value:'string'},{key:'string',value:'string'}]},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  delete: ({params}: {params:{hook_id:string}}, options?: {}): Promise<{code:204,data:{id:string,url:string,name:string,description:string,created_at:string,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_upstring_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:string,url_variables:[object,object],custom_webhook_template:string}}|{code:404}> => handler.apply({method:'delete',url:'api/v4/hooks/:hook_id',headers:{Accept:'application/json'},variable:[{name:'hook_id',type:'string'}]}, [client, { params}, options]),
  "url_variables": {
    put: ({params,data}: {params:{hook_id:string,key:string},data:{value:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'put',url:'api/v4/hooks/:hook_id/url_variables/:key',headers:{'Content-Type':'application/json'},variable:[{name:'hook_id',type:'string'},{name:'key',type:'string'}],data:{mode:'raw',raw:{value:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{hook_id:string,key:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/hooks/:hook_id/url_variables/:key',variable:[{name:'hook_id',type:'string'},{name:'key',type:'string'}]}, [client, { params}, options])
  }
})