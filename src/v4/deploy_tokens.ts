export interface DeployTokens {
  get: ({ query, clientOptions }: {
    query: {
      page: string;
      per_page: string;
      active: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: number;
      name: string;
      username: string;
      expires_at: Date;
      revoked: boolean;
      expired: boolean;
    }, {
      id: number;
      name: string;
      username: string;
      expires_at: Date;
      revoked: boolean;
      expired: boolean;
    }];
  }, {
    code: 401;
  }, {
    code: 403;
  }]>;
};

export default (client: any, handler: any): DeployTokens => ({
  get: ({query,clientOptions}: {query:{page:string,per_page:string,active:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,name:string,username:string,expires_at:Date,revoked:boolean,expired:boolean},{id:number,name:string,username:string,expires_at:Date,revoked:boolean,expired:boolean}]},{code:401},{code:403}]> => handler.apply({method:'get',url:'api/v4/deploy_tokens',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'active',type:'string'}],data:null}, [client, {query, clientOptions}])
})