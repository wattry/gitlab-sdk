/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Registry {
    repositories: {
        getOne: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                tags: string;
                tags_count: string;
                size: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                id: number;
                name: string;
                path: string;
                project_id: number;
                location: string;
                created_at: string;
                cleanup_policy_started_at: string;
                tags_count: number;
                tags: {
                    name: string;
                    path: string;
                    location: string;
                };
                delete_api_path: string;
                size: number;
                status: string;
            };
        } | {
            code: 401;
        } | {
            code: 404;
        }>;
    };
};

export default (client: Client, handler: Handler): Registry => ({
  "repositories": {
    getOne: ({params,query}: {params:{id:string},query?:{tags:string,tags_count:string,size:string}}, options?: {}): Promise<{code:200,data:{id:number,name:string,path:string,project_id:number,location:string,created_at:string,cleanup_policy_started_at:string,tags_count:number,tags:{name:string,path:string,location:string},delete_api_path:string,size:number,status:string}}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/registry/repositories/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'tags',type:'string'},{name:'tags_count',type:'string'},{name:'size',type:'string'}]}, [client, { params, query}, options])
  }
})