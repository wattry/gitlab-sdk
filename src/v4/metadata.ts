export interface MetaData {
  get: ({ clientOptions }: {
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      version: string;
      revision: string;
      kas: {
        enabled: boolean;
        externalUrl: string;
        version: string;
      };
      enterprise: boolean;
    };
  }, {
    code: 401;
  }]>;
};

export default (client: any, handler: any): MetaData => ({
  get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200,data:{version:string,revision:string,kas:{enabled:boolean,externalUrl:string,version:string},enterprise:boolean}},{code:401}]> => handler.apply({method:'get',url:'api/v4/metadata',resource:'api',variable:[],headers:{Accept:'application/json'},query:[],data:null}, [client, {clientOptions}])
})