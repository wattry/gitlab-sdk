/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Markdown {
  post: ({ data }: {
    data: {
      string: string;
      gfm: boolean;
      project: string;
    };
  }, options?: {}) => Promise<{
    code: 201;
    data: {
      html: string;
    };
  } | {
    code: 400;
  } | {
    code: 401;
  }>;
};

export default (client: Client, handler: Handler): Markdown => ({
  post: ({data}: {data:{string:string,gfm:boolean,project:string}}, options?: {}): Promise<{code:201,data:{html:string}}|{code:400}|{code:401}> => handler.apply({method:'post',url:'api/v4/markdown',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{string:'string',gfm:'boolean',project:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
})