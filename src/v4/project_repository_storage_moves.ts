export interface ProjectRepositoryStorageMoves {
  get: ({ query, clientOptions }: {
    query: {
      page: string;
      per_page: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: number;
      created_at: Date;
      state: string;
      source_storage_name: string;
      destination_storage_name: string;
      error_message: string;
      project: {
        id: {
          value: any;
        };
        description: {
          value: any;
        };
        name: {
          value: any;
        };
        name_with_namespace: {
          value: any;
        };
        path: {
          value: any;
        };
        path_with_namespace: {
          value: any;
        };
        created_at: {
          value: any;
        };
      };
    }, {
      id: number;
      created_at: Date;
      state: string;
      source_storage_name: string;
      destination_storage_name: string;
      error_message: string;
      project: {
        id: {
          value: any;
        };
        description: {
          value: any;
        };
        name: {
          value: any;
        };
        name_with_namespace: {
          value: any;
        };
        path: {
          value: any;
        };
        path_with_namespace: {
          value: any;
        };
        created_at: {
          value: any;
        };
      };
    }];
  }]>;
  post: ({ data, clientOptions }: {
    data: {
      source_storage_name: string;
      destination_storage_name: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 202;
  }]>;
  getOne: ({ params, clientOptions }: {
    params: {
      repository_storage_move_id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: number;
      created_at: Date;
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
        created_at: Date;
      };
    };
  }]>;
};

export default (client: any, handler: any): ProjectRepositoryStorageMoves => ({
  get: ({query,clientOptions}: {query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}},{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}}]}]> => handler.apply({method:'get',url:'api/v4/project_repository_storage_moves',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}]),
  post: ({data,clientOptions}: {data:{source_storage_name:string,destination_storage_name:string},clientOptions:any}): Promise<[{code:202}]> => handler.apply({method:'post',url:'api/v4/project_repository_storage_moves',resource:'api',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{source_storage_name:'string',destination_storage_name:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
  getOne: ({params,clientOptions}: {params:{repository_storage_move_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date}}}]> => handler.apply({method:'get',url:'api/v4/project_repository_storage_moves/:repository_storage_move_id',resource:'api',variable:[{name:'repository_storage_move_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
})