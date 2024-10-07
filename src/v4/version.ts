/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Version {
  get: ({ }: {}, options?: {}) => Promise<{
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
  } | {
    code: 401;
  }>;
};

export default (client: Client, handler: Handler): Version => ({
  get: ({}: {}, options?: {}): Promise<{code:200,data:{version:string,revision:string,kas:{enabled:boolean,externalUrl:string,version:string},enterprise:boolean}}|{code:401}> => handler.apply({method:'get',url:'api/v4/version',headers:{Accept:'application/json'},variable:[]}, [client, {}, options])
})