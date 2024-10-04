export interface Topics {
  get: ({ query, clientOptions }: {
    query: {
      search: string;
      without_projects: string;
      page: string;
      per_page: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      name: string;
      title: string;
      description: string;
      total_projects_count: string;
      avatar_url: string;
    };
  }]>;
  post: ({ data, clientOptions }: {
    data: {
      name: string;
      title: string;
      description: string;
      avatar: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 201;
    data: {
      id: string;
      name: string;
      title: string;
      description: string;
      total_projects_count: string;
      avatar_url: string;
    };
  }]>;
  getOne: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      name: string;
      title: string;
      description: string;
      total_projects_count: string;
      avatar_url: string;
    };
  }]>;
  put: ({ params, data, clientOptions }: {
    params: {
      id: string;
    };
    data: {
      name: string;
      title: string;
      description: string;
      avatar: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      name: string;
      title: string;
      description: string;
      total_projects_count: string;
      avatar_url: string;
    };
  }]>;
  delete: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 204;
  }]>;
  merge: {
    post: ({ data, clientOptions }: {
      data: {
        source_topic_id: number;
        target_topic_id: number;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: string;
        name: string;
        title: string;
        description: string;
        total_projects_count: string;
        avatar_url: string;
      };
    }]>;
  };
};

export default (client: any, handler: any): Topics => ({
  get: ({query,clientOptions}: {query:{search:string,without_projects:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]> => handler.apply({method:'get',url:'api/v4/topics',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'search',type:'string'},{name:'without_projects',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}]),
  post: ({data,clientOptions}: {data:{name:string,title:string,description:string,avatar:string},clientOptions:any}): Promise<[{code:201,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]> => handler.apply({method:'post',url:'api/v4/topics',resource:'api',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',title:'string',description:'string',avatar:'binary'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
  getOne: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]> => handler.apply({method:'get',url:'api/v4/topics/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  put: ({params,data,clientOptions}: {params:{id:string},data:{name:string,title:string,description:string,avatar:string},clientOptions:any}): Promise<[{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]> => handler.apply({method:'put',url:'api/v4/topics/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',title:'string',description:'string',avatar:'binary'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  delete: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/topics/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
  "merge": {
    post: ({data,clientOptions}: {data:{source_topic_id:number,target_topic_id:number},clientOptions:any}): Promise<[{code:201,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]> => handler.apply({method:'post',url:'api/v4/topics/merge',resource:'v4',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{source_topic_id:'number',target_topic_id:'number'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  }
})