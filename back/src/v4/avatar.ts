/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Avatar {
  get: ({ query }: {
    query?: {
      email: string;
      size: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      avatar_url: string;
    };
  }>;
};

export default (client: Client, handler: Handler): Avatar => ({
  get: ({query}: {query?:{email:string,size:string}}, options?: {}): Promise<{code:200,data:{avatar_url:string}}> => handler.apply({method:'get',url:'api/v4/avatar',headers:{Accept:'application/json'},variable:[],query:[{name:'email',type:'string'},{name:'size',type:'string'}]}, [client, {query}, options])
})