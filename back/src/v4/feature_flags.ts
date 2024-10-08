/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface FeatureFlags {
  unleash: {
    getOne: ({ params, query }: {
      params: {
        project_id: string;
      };
      query?: {
        instance_id: string;
        app_name: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    }>;
    features: {
      get: ({ params, query }: {
        params: {
          project_id: string;
        };
        query?: {
          instance_id: string;
          app_name: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
      }>;
    };
    client: {
      features: {
        get: ({ params, query }: {
          params: {
            project_id: string;
          };
          query?: {
            instance_id: string;
            app_name: string;
          };
        }, options?: {}) => Promise<{
          code: 200;
        }>;
      };
      register: {
        post: ({ params, data }: {
          params: {
            project_id: string;
          };
          data: {
            instance_id: string;
            app_name: string;
          };
        }, options?: {}) => Promise<{
          code: 201;
        }>;
      };
      metrics: {
        post: ({ params, data }: {
          params: {
            project_id: string;
          };
          data: {
            instance_id: string;
            app_name: string;
          };
        }, options?: {}) => Promise<{
          code: 201;
        }>;
      };
    };
  };
};

export default (client: Client, handler: Handler): FeatureFlags => ({
  "unleash": {
    getOne: ({params,query}: {params:{project_id:string},query?:{instance_id:string,app_name:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id',variable:[{name:'project_id',type:'string'}],query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'}]}, [client, { params, query}, options]),
    "features": {
      get: ({params,query}: {params:{project_id:string},query?:{instance_id:string,app_name:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id/features',variable:[{name:'project_id',type:'string'}],query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'}]}, [client, { params, query}, options])
    },
    "client": {
      "features": {
        get: ({params,query}: {params:{project_id:string},query?:{instance_id:string,app_name:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/feature_flags/unleash/:project_id/client/features',variable:[{name:'project_id',type:'string'}],query:[{name:'instance_id',type:'string'},{name:'app_name',type:'string'}]}, [client, { params, query}, options])
      },
      "register": {
        post: ({params,data}: {params:{project_id:string},data:{instance_id:string,app_name:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/feature_flags/unleash/:project_id/client/register',headers:{'Content-Type':'application/json'},variable:[{name:'project_id',type:'string'}],data:{mode:'raw',raw:{instance_id:'string',app_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
      },
      "metrics": {
        post: ({params,data}: {params:{project_id:string},data:{instance_id:string,app_name:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/feature_flags/unleash/:project_id/client/metrics',headers:{'Content-Type':'application/json'},variable:[{name:'project_id',type:'string'}],data:{mode:'raw',raw:{instance_id:'string',app_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
      }
    }
  }
})