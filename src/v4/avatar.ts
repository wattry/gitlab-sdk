export interface Avatar {
  get: ({ query, clientOptions }: {
    query: {
      email: string;
      size: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      avatar_url: string;
    };
  }]>;
};

export default (client: any, handler: any): Avatar => ({
  get: ({query,clientOptions}: {query:{email:string,size:string},clientOptions:any}): Promise<[{code:200,data:{avatar_url:string}}]> => handler.apply({method:'get',url:'api/v4/avatar',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'email',type:'string'},{name:'size',type:'string'}],data:null}, [client, {query, clientOptions}])
})