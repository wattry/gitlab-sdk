export interface SnippetRepositoryStorageMoves {
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
      snippet: {
        id: {
          value: any;
        };
        title: {
          value: any;
        };
        description: {
          value: any;
        };
        visibility: {
          value: any;
        };
        author: {
          value: any;
        };
        created_at: {
          value: any;
        };
        updated_at: {
          value: any;
        };
        project_id: {
          value: any;
        };
        web_url: {
          value: any;
        };
        raw_url: {
          value: any;
        };
        ssh_url_to_repo: {
          value: any;
        };
        http_url_to_repo: {
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
      snippet: {
        id: {
          value: any;
        };
        title: {
          value: any;
        };
        description: {
          value: any;
        };
        visibility: {
          value: any;
        };
        author: {
          value: any;
        };
        created_at: {
          value: any;
        };
        updated_at: {
          value: any;
        };
        project_id: {
          value: any;
        };
        web_url: {
          value: any;
        };
        raw_url: {
          value: any;
        };
        ssh_url_to_repo: {
          value: any;
        };
        http_url_to_repo: {
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
      snippet: {
        id: number;
        title: string;
        description: string;
        visibility: string;
        author: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        created_at: Date;
        updated_at: Date;
        project_id: number;
        web_url: string;
        raw_url: string;
        ssh_url_to_repo: string;
        http_url_to_repo: string;
      };
    };
  }]>;
};

export default (client: any, handler: any): SnippetRepositoryStorageMoves => ({
  get: ({query,clientOptions}: {query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:{value:{}},title:{value:{}},description:{value:{}},visibility:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},project_id:{value:{}},web_url:{value:{}},raw_url:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}}}},{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:{value:{}},title:{value:{}},description:{value:{}},visibility:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},project_id:{value:{}},web_url:{value:{}},raw_url:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}}}}]}]> => handler.apply({method:'get',url:'api/v4/snippet_repository_storage_moves',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}]),
  post: ({data,clientOptions}: {data:{source_storage_name:string,destination_storage_name:string},clientOptions:any}): Promise<[{code:202}]> => handler.apply({method:'post',url:'api/v4/snippet_repository_storage_moves',resource:'api',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{source_storage_name:'string',destination_storage_name:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
  getOne: ({params,clientOptions}: {params:{repository_storage_move_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}]> => handler.apply({method:'get',url:'api/v4/snippet_repository_storage_moves/:repository_storage_move_id',resource:'api',variable:[{name:'repository_storage_move_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
})