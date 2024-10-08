/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface WebCommits {
  public_key: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
      data: {
        public_key: string;
      };
    } | {
      code: 404;
    } | {
      code: 503;
    }>;
  };
};


export default (client: Client, handler: Handler): WebCommits => ({
  "public_key": {
    get: ({}: {}, options?: {}): Promise<{code:200,data:{public_key:string}}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/web_commits/public_key',headers:{Accept:'application/json'},variable:[]}, [client, {}, options])
  }
})