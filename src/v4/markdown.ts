export interface Markdown {
  post: ({ data, clientOptions }: {
    data: {
      text: string;
      gfm: boolean;
      project: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 201;
    data: {
      html: string;
    };
  }, {
    code: 400;
  }, {
    code: 401;
  }]>;
};

export default (client: any, handler: any): Markdown => ({
  post: ({data,clientOptions}: {data:{text:string,gfm:boolean,project:string},clientOptions:any}): Promise<[{code:201,data:{html:string}},{code:400},{code:401}]> => handler.apply({method:'post',url:'api/v4/markdown',resource:'api',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{text:'string',gfm:'boolean',project:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
})