/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Pages {
  domains: {
    get: ({ query }: {
      query?: {
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        domain: string;
        url: string;
        project_id: string;
        verified: string;
        verification_code: string;
        enabled_until: string;
        auto_ssl_enabled: string;
        certificate_expiration: {
          expired: string;
          expiration: string;
        };
      };
    }>;
  };
};

export default (client: Client, handler: Handler): Pages => ({
  "domains": {
    get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{domain:string,url:string,project_id:string,verified:string,verification_code:string,enabled_until:string,auto_ssl_enabled:string,certificate_expiration:{expired:string,expiration:string}}}> => handler.apply({method:'get',url:'api/v4/pages/domains',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options])
  }
})