/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface ProjectRepositoryStorageMoves {
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
      project: {
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
      created_at: string;
      state: string;
      source_storage_name: string;
      destination_storage_name: string;
      error_message: string;
      project: {
        id: any;
        description: any;
        name: any;
        name_with_namespace: any;
        path: any;
        path_with_namespace: any;
        created_at: any;
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
      project: {
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: string;
      };
    };
  }>;
};

export default (client: Client, handler: Handler): ProjectRepositoryStorageMoves => ({
  get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any}},{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any}}]}> => handler.apply({method:'get',url:'api/v4/project_repository_storage_moves',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
  post: ({data}: {data:{source_storage_name:string,destination_storage_name:string}}, options?: {}): Promise<{code:202}> => handler.apply({method:'post',url:'api/v4/project_repository_storage_moves',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{source_storage_name:'string',destination_storage_name:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  getOne: ({params}: {params:{repository_storage_move_id:string}}, options?: {}): Promise<{code:200,data:{id:number,created_at:string,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string}}}> => handler.apply({method:'get',url:'api/v4/project_repository_storage_moves/:repository_storage_move_id',headers:{Accept:'application/json'},variable:[{name:'repository_storage_move_id',type:'string'}]}, [client, { params}, options])
})