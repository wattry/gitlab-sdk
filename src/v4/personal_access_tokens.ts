export interface PersonalAccessTokens {
  get: ({ query, clientOptions }: {
    query: {
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
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: number;
      name: string;
      revoked: boolean;
      created_at: Date;
      user_id: number;
      last_used_at: Date;
      active: boolean;
      expires_at: Date;
    }, {
      id: number;
      name: string;
      revoked: boolean;
      created_at: Date;
      user_id: number;
      last_used_at: Date;
      active: boolean;
      expires_at: Date;
    }];
  }, {
    code: 401;
  }]>;
  self: {
    get: ({ clientOptions }: {
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
      };
    }, {
      code: 401;
    }, {
      code: 404;
    }]>;
    delete: ({ clientOptions }: {
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }, {
      code: 400;
    }]>;
    rotate: {
      post: ({ data, clientOptions }: {
        data: {
          expires_at: Date;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          name: string;
          revoked: boolean;
          created_at: Date;
          user_id: number;
          last_used_at: Date;
          active: boolean;
          expires_at: Date;
          token: string;
        };
      }, {
        code: 400;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 405;
      }]>;
    };
  };
  getOne: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: number;
      name: string;
      revoked: boolean;
      created_at: Date;
      user_id: number;
      last_used_at: Date;
      active: boolean;
      expires_at: Date;
    };
  }, {
    code: 401;
  }, {
    code: 404;
  }]>;
  delete: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 204;
  }, {
    code: 400;
  }]>;
  rotate: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        expires_at: Date;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        token: string;
      };
    }]>;
  };
};

export default (client: any, handler: any): PersonalAccessTokens => ({
  get: ({query,clientOptions}: {query:{user_id:string,revoked:string,state:string,created_before:string,created_after:string,last_used_before:string,last_used_after:string,search:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date},{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date}]},{code:401}]> => handler.apply({method:'get',url:'api/v4/personal_access_tokens',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'user_id',type:'string'},{name:'revoked',type:'string'},{name:'state',type:'string'},{name:'created_before',type:'string'},{name:'created_after',type:'string'},{name:'last_used_before',type:'string'},{name:'last_used_after',type:'string'},{name:'search',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}]),
  "self": {
    get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date}},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/personal_access_tokens/self',resource:'v4',variable:[],headers:{Accept:'application/json'},query:[],data:null}, [client, {clientOptions}]),
    delete: ({clientOptions}: {clientOptions:any}): Promise<[{code:204},{code:400}]> => handler.apply({method:'delete',url:'api/v4/personal_access_tokens/self',resource:'v4',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}]),
    "rotate": {
      post: ({data,clientOptions}: {data:{expires_at:Date},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,token:string}},{code:400},{code:401},{code:403},{code:405}]> => handler.apply({method:'post',url:'api/v4/personal_access_tokens/self/rotate',resource:'personal_access_tokens',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{expires_at:'date'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
    }
  },
  getOne: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date}},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/personal_access_tokens/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  delete: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:204},{code:400}]> => handler.apply({method:'delete',url:'api/v4/personal_access_tokens/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
  "rotate": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{expires_at:Date},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,token:string}}]> => handler.apply({method:'post',url:'api/v4/personal_access_tokens/:id/rotate',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{expires_at:'date'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
  }
})