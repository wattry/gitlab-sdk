/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface SnippetRepositoryStorageMoves {
    get: ({ query }: {
        query?: {
            page: string;
            per_page: string;
        };
    }, options?: {}) => Promise<{
        code: 200;
        data: [{
            id: number;
            created_at: string;
            state: string;
            source_storage_name: string;
            destination_storage_name: string;
            error_message: string;
            snippet: {
                id: {
                    value: {};
                };
                title: {
                    value: {};
                };
                description: {
                    value: {};
                };
                visibility: {
                    value: {};
                };
                author: {
                    value: {};
                };
                created_at: {
                    value: {};
                };
                upstringd_at: {
                    value: {};
                };
                project_id: {
                    value: {};
                };
                web_url: {
                    value: {};
                };
                raw_url: {
                    value: {};
                };
                ssh_url_to_repo: {
                    value: {};
                };
                http_url_to_repo: {
                    value: {};
                };
            };
        }, {
            id: number;
            created_at: string;
            state: string;
            source_storage_name: string;
            destination_storage_name: string;
            error_message: string;
            snippet: {
                id: {
                    value: {};
                };
                title: {
                    value: {};
                };
                description: {
                    value: {};
                };
                visibility: {
                    value: {};
                };
                author: {
                    value: {};
                };
                created_at: {
                    value: {};
                };
                upstringd_at: {
                    value: {};
                };
                project_id: {
                    value: {};
                };
                web_url: {
                    value: {};
                };
                raw_url: {
                    value: {};
                };
                ssh_url_to_repo: {
                    value: {};
                };
                http_url_to_repo: {
                    value: {};
                };
            };
        }];
    }>;
    post: ({ data }: {
        data: {
            source_storage_name: string;
            destination_storage_name: string;
        };
    }, options?: {}) => Promise<{
        code: 202;
    }>;
    getOne: ({ params }: {
        params: {
            repository_storage_move_id: string;
        };
    }, options?: {}) => Promise<{
        code: 200;
        data: {
            id: number;
            created_at: string;
            state: string;
            source_storage_name: string;
            destination_storage_name: string;
            error_message: string;
            snippet: {
                id: number;
                title: string;
                description: string;
                visibility: string;
                author: {
                    id: {
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                created_at: string;
                upstringd_at: string;
                project_id: number;
                web_url: string;
                raw_url: string;
                ssh_url_to_repo: string;
                http_url_to_repo: string;
            };
        };
    }>;
};

export default (client: Client, handler: Handler): SnippetRepositoryStorageMoves => ({
  get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:any,title:any,description:any,visibility:any,author:any,created_at:any,upstringd_at:any,project_id:any,web_url:any,raw_url:any,ssh_url_to_repo:any,http_url_to_repo:any}},{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:any,title:any,description:any,visibility:any,author:any,created_at:any,upstringd_at:any,project_id:any,web_url:any,raw_url:any,ssh_url_to_repo:any,http_url_to_repo:any}}]}> => handler.apply({method:'get',url:'api/v4/snippet_repository_storage_moves',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
  post: ({data}: {data:{source_storage_name:string,destination_storage_name:string}}, options?: {}): Promise<{code:202}> => handler.apply({method:'post',url:'api/v4/snippet_repository_storage_moves',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{source_storage_name:'string',destination_storage_name:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  getOne: ({params}: {params:{repository_storage_move_id:string}}, options?: {}): Promise<{code:200,data:{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}> => handler.apply({method:'get',url:'api/v4/snippet_repository_storage_moves/:repository_storage_move_id',headers:{Accept:'application/json'},variable:[{name:'repository_storage_move_id',type:'string'}]}, [client, { params}, options])
})