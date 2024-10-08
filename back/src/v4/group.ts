/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Group {
  "-": {
    packages: {
      composer: {
        packages: {
          get: ({ params }: {
            params: {
              id: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 401;
          } | {
            code: 404;
          }>;
        };
        p: {
          getOne: ({ params }: {
            params: {
              id: string;
              sha: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 401;
          } | {
            code: 404;
          }>;
        };
        p2: {
          get: ({ params, query }: {
            params: {
              id: string;
            };
            query?: {
              package_name: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 401;
          } | {
            code: 404;
          }>;
        };
        get: ({ params, query }: {
          params: {
            id: string;
          };
          query?: {
            package_name: string;
          };
        }, options?: {}) => Promise<{
          code: 200;
        } | {
          code: 401;
        } | {
          code: 404;
        }>;
      };
    };
  };
};
export default (client: Client, handler: Handler): Group => ({
  "-": {
    "packages": {
      "composer": {
        "packages": {
          get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/packages',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
        },
        "p": {
          getOne: ({params}: {params:{id:string,sha:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/p/:sha',variable:[{name:'id',type:'string'},{name:'sha',type:'string'}]}, [client, { params}, options])
        },
        "p2": {
          get: ({params,query}: {params:{id:string},query?:{package_name:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/p2/*package_name',variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options])
        },
        get: ({params,query}: {params:{id:string},query?:{package_name:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/group/:id/-/packages/composer/*package_name',variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options])
      }
    }
  }
})