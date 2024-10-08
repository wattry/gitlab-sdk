/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface DeployTokens {
  get: ({ query }: {
    query?: {
      page: string;
      per_page: string;
      active: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: [{
      id: number;
      name: string;
      username: string;
      expires_at: string;
      revoked: boolean;
      expired: boolean;
    }, {
      id: number;
      name: string;
      username: string;
      expires_at: string;
      revoked: boolean;
      expired: boolean;
    }];
  } | {
    code: 401;
  } | {
    code: 403;
  }>;
};

export default (client: Client, handler: Handler): DeployTokens => ({
  get: ({query}: {query?:{page:string,per_page:string,active:string}}, options?: {}): Promise<{code:200,data:[{id:number,name:string,username:string,expires_at:string,revoked:boolean,expired:boolean},{id:number,name:string,username:string,expires_at:string,revoked:boolean,expired:boolean}]}|{code:401}|{code:403}> => handler.apply({method:'get',url:'api/v4/deploy_tokens',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'active',type:'string'}]}, [client, {query}, options])
})