/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface PersonalAccessTokens {
  get: ({ query }: {
    query?: {
      user_id: string;
      revoked: string;
      state: string;
      created_before: string;
      created_after: string;
      last_used_before: string;
      last_used_after: string;
      search: string;
      page: string;
      per_page: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: [{
      id: number;
      name: string;
      revoked: boolean;
      created_at: string;
      user_id: number;
      last_used_at: string;
      active: boolean;
      expires_at: string;
    }, {
      id: number;
      name: string;
      revoked: boolean;
      created_at: string;
      user_id: number;
      last_used_at: string;
      active: boolean;
      expires_at: string;
    }];
  } | {
    code: 401;
  }>;
  self: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: string;
        user_id: number;
        last_used_at: string;
        active: boolean;
        expires_at: string;
      };
    } | {
      code: 401;
    } | {
      code: 404;
    }>;
    delete: ({ }: {}, options?: {}) => Promise<{
      code: 204;
    } | {
      code: 400;
    }>;
    rotate: {
      post: ({ data }: {
        data: {
          expires_at: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
        data: {
          id: number;
          name: string;
          revoked: boolean;
          created_at: string;
          user_id: number;
          last_used_at: string;
          active: boolean;
          expires_at: string;
          token: string;
        };
      } | {
        code: 400;
      } | {
        code: 401;
      } | {
        code: 403;
      } | {
        code: 405;
      }>;
    };
  };
  getOne: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: number;
      name: string;
      revoked: boolean;
      created_at: string;
      user_id: number;
      last_used_at: string;
      active: boolean;
      expires_at: string;
    };
  } | {
    code: 401;
  } | {
    code: 404;
  }>;
  delete: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
    code: 204;
  } | {
    code: 400;
  }>;
  rotate: {
    post: ({ params, data }: {
      params: {
        id: string;
      };
      data: {
        expires_at: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: string;
        user_id: number;
        last_used_at: string;
        active: boolean;
        expires_at: string;
        token: string;
      };
    }>;
  };
};

export default (client: Client, handler: Handler): PersonalAccessTokens => ({
  get: ({query}: {query?:{user_id:string,revoked:string,state:string,created_before:string,created_after:string,last_used_before:string,last_used_after:string,search:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string},{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string}]}|{code:401}> => handler.apply({method:'get',url:'api/v4/personal_access_tokens',headers:{Accept:'application/json'},variable:[],query:[{name:'user_id',type:'string'},{name:'revoked',type:'string'},{name:'state',type:'string'},{name:'created_before',type:'string'},{name:'created_after',type:'string'},{name:'last_used_before',type:'string'},{name:'last_used_after',type:'string'},{name:'search',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
  "self": {
    get: ({}: {}, options?: {}): Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string}}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/personal_access_tokens/self',headers:{Accept:'application/json'},variable:[]}, [client, {}, options]),
    delete: ({}: {}, options?: {}): Promise<{code:204}|{code:400}> => handler.apply({method:'delete',url:'api/v4/personal_access_tokens/self',variable:[]}, [client, {}, options]),
    "rotate": {
      post: ({data}: {data:{expires_at:string}}, options?: {}): Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,token:string}}|{code:400}|{code:401}|{code:403}|{code:405}> => handler.apply({method:'post',url:'api/v4/personal_access_tokens/self/rotate',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{expires_at:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
    }
  },
  getOne: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string}}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/personal_access_tokens/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  delete: ({params}: {params:{id:string}}, options?: {}): Promise<{code:204}|{code:400}> => handler.apply({method:'delete',url:'api/v4/personal_access_tokens/:id',variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  "rotate": {
    post: ({params,data}: {params:{id:string},data:{expires_at:string}}, options?: {}): Promise<{code:201,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,token:string}}> => handler.apply({method:'post',url:'api/v4/personal_access_tokens/:id/rotate',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{expires_at:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  }
})