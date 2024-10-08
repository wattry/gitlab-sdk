/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface DeployKeys {
  get: ({ query }: {
    query?: {
      page: string;
      per_page: string;
      public: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: [{
      id: number;
      title: string;
      created_at: string;
      expires_at: string;
      key: string;
      usage_type: string;
      fingerprint: string;
      fingerprint_sha256: string;
      projects_with_write_access: {
        id: any;
        description: any;
        name: any;
        name_with_namespace: any;
        path: any;
        path_with_namespace: any;
        created_at: any;
      };
      projects_with_readonly_access: {
        id: any;
        description: any;
        name: any;
        name_with_namespace: any;
        path: any;
        path_with_namespace: any;
        created_at: any;
      };
    }, {
      id: number;
      title: string;
      created_at: string;
      expires_at: string;
      key: string;
      usage_type: string;
      fingerprint: string;
      fingerprint_sha256: string;
      projects_with_write_access: {
        id: any;
        description: any;
        name: any;
        name_with_namespace: any;
        path: any;
        path_with_namespace: any;
        created_at: any;
      };
      projects_with_readonly_access: {
        id: any;
        description: any;
        name: any;
        name_with_namespace: any;
        path: any;
        path_with_namespace: any;
        created_at: any;
      };
    }];
  } | {
    code: 401;
  } | {
    code: 403;
  }>;
};

export default (client: Client, handler: Handler): DeployKeys => ({
  get: ({query}: {query?:{page:string,per_page:string,public:string}}, options?: {}): Promise<{code:200,data:[{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any},projects_with_readonly_access:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any}},{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any},projects_with_readonly_access:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any}}]}|{code:401}|{code:403}> => handler.apply({method:'get',url:'api/v4/deploy_keys',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'public',type:'string'}]}, [client, {query}, options])
})