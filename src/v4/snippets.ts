/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Snippets {
    get: ({ query }: {
        query?: {
            created_after: string;
            created_before: string;
            page: string;
            per_page: string;
        };
    }, options?: {}) => Promise<{
        code: 200;
        data: [{
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
            file_name: string;
            files: [string, string];
            imported: boolean;
            imported_from: string;
            repository_storage: string;
        }, {
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
            file_name: string;
            files: [string, string];
            imported: boolean;
            imported_from: string;
            repository_storage: string;
        }];
    } | {
        code: 404;
    }>;
    post: ({ data }: {
        data: {
            title: string;
            file_name: string;
            description: string;
            visibility: string;
            files: [{
                file_path: string;
                content: string;
            }, {
                file_path: string;
                content: string;
            }];
            content: string;
        };
    }, options?: {}) => Promise<{
        code: 201;
        data: {
            id: number;
            title: string;
            description: string;
            visibility: string;
            author: {
                id: number;
                username: string;
                name: string;
                state: string;
                locked: boolean;
                avatar_url: string;
                avatar_path: string;
                custom_attributes: [{
                    value: {};
                }, {
                    value: {};
                }];
                web_url: string;
            };
            created_at: string;
            upstringd_at: string;
            project_id: number;
            web_url: string;
            raw_url: string;
            ssh_url_to_repo: string;
            http_url_to_repo: string;
            file_name: string;
            files: [string, string];
            imported: boolean;
            imported_from: string;
            repository_storage: string;
        };
    } | {
        code: 400;
    } | {
        code: 404;
    } | {
        code: 422;
    }>;
    public: {
        get: ({ query }: {
            query?: {
                created_after: string;
                created_before: string;
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: [{
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
                file_name: string;
                files: [string, string];
                imported: boolean;
                imported_from: string;
                repository_storage: string;
            }, {
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
                file_name: string;
                files: [string, string];
                imported: boolean;
                imported_from: string;
                repository_storage: string;
            }];
        } | {
            code: 404;
        }>;
    };
    all: {
        get: ({ query }: {
            query?: {
                created_after: string;
                created_before: string;
                page: string;
                per_page: string;
                repository_storage: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: [{
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
                file_name: string;
                files: [string, string];
                imported: boolean;
                imported_from: string;
                repository_storage: string;
            }, {
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
                file_name: string;
                files: [string, string];
                imported: boolean;
                imported_from: string;
                repository_storage: string;
            }];
        } | {
            code: 404;
        }>;
    };
    getOne: ({ params }: {
        params: {
            id: string;
        };
    }, options?: {}) => Promise<{
        code: 200;
        data: {
            id: number;
            title: string;
            description: string;
            visibility: string;
            author: {
                id: number;
                username: string;
                name: string;
                state: string;
                locked: boolean;
                avatar_url: string;
                avatar_path: string;
                custom_attributes: [{
                    value: {};
                }, {
                    value: {};
                }];
                web_url: string;
            };
            created_at: string;
            upstringd_at: string;
            project_id: number;
            web_url: string;
            raw_url: string;
            ssh_url_to_repo: string;
            http_url_to_repo: string;
            file_name: string;
            files: [string, string];
            imported: boolean;
            imported_from: string;
            repository_storage: string;
        };
    } | {
        code: 404;
    }>;
    put: ({ params, data }: {
        params: {
            id: string;
        };
        data: {
            content: string;
            description: string;
            file_name: string;
            title: string;
            visibility: string;
            files: [{
                action: string;
                content: string;
                file_path: string;
                previous_path: string;
            }, {
                action: string;
                content: string;
                file_path: string;
                previous_path: string;
            }];
        };
    }, options?: {}) => Promise<{
        code: 200;
        data: {
            id: number;
            title: string;
            description: string;
            visibility: string;
            author: {
                id: number;
                username: string;
                name: string;
                state: string;
                locked: boolean;
                avatar_url: string;
                avatar_path: string;
                custom_attributes: [{
                    value: {};
                }, {
                    value: {};
                }];
                web_url: string;
            };
            created_at: string;
            upstringd_at: string;
            project_id: number;
            web_url: string;
            raw_url: string;
            ssh_url_to_repo: string;
            http_url_to_repo: string;
            file_name: string;
            files: [string, string];
            imported: boolean;
            imported_from: string;
            repository_storage: string;
        };
    } | {
        code: 400;
    } | {
        code: 404;
    } | {
        code: 422;
    }>;
    delete: ({ params }: {
        params: {
            id: string;
        };
    }, options?: {}) => Promise<{
        code: 204;
        data: {
            id: number;
            title: string;
            description: string;
            visibility: string;
            author: {
                id: number;
                username: string;
                name: string;
                state: string;
                locked: boolean;
                avatar_url: string;
                avatar_path: string;
                custom_attributes: [{
                    value: {};
                }, {
                    value: {};
                }];
                web_url: string;
            };
            created_at: string;
            upstringd_at: string;
            project_id: number;
            web_url: string;
            raw_url: string;
            ssh_url_to_repo: string;
            http_url_to_repo: string;
            file_name: string;
            files: [string, string];
            imported: boolean;
            imported_from: string;
            repository_storage: string;
        };
    } | {
        code: 400;
    } | {
        code: 404;
    }>;
    raw: {
        get: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
        } | {
            code: 404;
        }>;
    };
    files: {
        raw: {
            get: ({ params }: {
                params: {
                    file_path: string;
                    ref: string;
                    id: string;
                };
            }, options?: {}) => Promise<{
                code: 200;
            } | {
                code: 404;
            }>;
        };
    };
    user_agent_detail: {
        get: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                user_agent: string;
                ip_address: string;
                akismet_submitted: boolean;
            };
        } | {
            code: 404;
        }>;
    };
    repository_storage_moves: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
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
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                destination_storage_name: string;
            };
        }, options?: {}) => Promise<{
            code: 201;
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
        getOne: ({ params }: {
            params: {
                id: string;
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
};

export default (client: Client, handler: Handler): Snippets => ({
  get: ({query}: {query?:{created_after:string,created_before:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]}|{code:404}> => handler.apply({method:'get',url:'api/v4/snippets',headers:{Accept:'application/json'},variable:[],query:[{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
  post: ({data}: {data:{title:string,file_name:string,description:string,visibility:string,files:[{file_path:string,content:string},{file_path:string,content:string}],content:string}}, options?: {}): Promise<{code:201,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}}|{code:400}|{code:404}|{code:422}> => handler.apply({method:'post',url:'api/v4/snippets',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{title:'string',file_name:'string',description:'string',visibility:'internal',files:[{file_path:'string',content:'string'},{file_path:'string',content:'string'}],content:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  "public": {
    get: ({query}: {query?:{created_after:string,created_before:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]}|{code:404}> => handler.apply({method:'get',url:'api/v4/snippets/public',headers:{Accept:'application/json'},variable:[],query:[{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options])
  },
  "all": {
    get: ({query}: {query?:{created_after:string,created_before:string,page:string,per_page:string,repository_storage:string}}, options?: {}): Promise<{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]}|{code:404}> => handler.apply({method:'get',url:'api/v4/snippets/all',headers:{Accept:'application/json'},variable:[],query:[{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'repository_storage',type:'string'}]}, [client, {query}, options])
  },
  getOne: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}}|{code:404}> => handler.apply({method:'get',url:'api/v4/snippets/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  put: ({params,data}: {params:{id:string},data:{content:string,description:string,file_name:string,title:string,visibility:string,files:[{action:string,content:string,file_path:string,previous_path:string},{action:string,content:string,file_path:string,previous_path:string}]}}, options?: {}): Promise<{code:200,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}}|{code:400}|{code:404}|{code:422}> => handler.apply({method:'put',url:'api/v4/snippets/:id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{content:'string',description:'string',file_name:'string',title:'string',visibility:'string',files:[{action:'string',content:'string',file_path:'string',previous_path:'string'},{action:'string',content:'string',file_path:'string',previous_path:'string'}]},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  delete: ({params}: {params:{id:string}}, options?: {}): Promise<{code:204,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}}|{code:400}|{code:404}> => handler.apply({method:'delete',url:'api/v4/snippets/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  "raw": {
    get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}|{code:404}> => handler.apply({method:'get',url:'api/v4/snippets/:id/raw',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "files": {
    "raw": {
      get: ({params}: {params:{file_path:string,ref:string,id:string}}, options?: {}): Promise<{code:200}|{code:404}> => handler.apply({method:'get',url:'api/v4/snippets/:id/files/:ref/:file_path/raw',variable:[{name:'file_path',type:'string'},{name:'ref',type:'string'},{name:'id',type:'string'}]}, [client, { params}, options])
    }
  },
  "user_agent_detail": {
    get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{user_agent:string,ip_address:string,akismet_submitted:boolean}}|{code:404}> => handler.apply({method:'get',url:'api/v4/snippets/:id/user_agent_detail',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "repository_storage_moves": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:any,title:any,description:any,visibility:any,author:any,created_at:any,upstringd_at:any,project_id:any,web_url:any,raw_url:any,ssh_url_to_repo:any,http_url_to_repo:any}},{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:any,title:any,description:any,visibility:any,author:any,created_at:any,upstringd_at:any,project_id:any,web_url:any,raw_url:any,ssh_url_to_repo:any,http_url_to_repo:any}}]}> => handler.apply({method:'get',url:'api/v4/snippets/:id/repository_storage_moves',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    post: ({params,data}: {params:{id:string},data:{destination_storage_name:string}}, options?: {}): Promise<{code:201,data:{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}> => handler.apply({method:'post',url:'api/v4/snippets/:id/repository_storage_moves',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{destination_storage_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    getOne: ({params}: {params:{id:string,repository_storage_move_id:string}}, options?: {}): Promise<{code:200,data:{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},created_at:string,upstringd_at:string,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}> => handler.apply({method:'get',url:'api/v4/snippets/:id/repository_storage_moves/:repository_storage_move_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'repository_storage_move_id',type:'string'}]}, [client, { params}, options])
  }
})