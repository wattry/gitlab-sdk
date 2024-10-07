/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Topics {
  get: ({ query }: {
    query?: {
      search: string;
      without_projects: string;
      page: string;
      per_page: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: string;
      name: string;
      title: string;
      description: string;
      total_projects_count: string;
      avatar_url: string;
    };
  }>;
  post: ({ data }: {
    data: {
      name: string;
      title: string;
      description: string;
      avatar: ArrayBuffer;
    };
  }, options?: {}) => Promise<{
    code: 201;
    data: {
      id: string;
      name: string;
      title: string;
      description: string;
      total_projects_count: string;
      avatar_url: string;
    };
  }>;
  getOne: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: string;
      name: string;
      title: string;
      description: string;
      total_projects_count: string;
      avatar_url: string;
    };
  }>;
  put: ({ params, data }: {
    params: {
      id: string;
    };
    data: {
      name: string;
      title: string;
      description: string;
      avatar: ArrayBuffer;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: string;
      name: string;
      title: string;
      description: string;
      total_projects_count: string;
      avatar_url: string;
    };
  }>;
  delete: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
    code: 204;
  }>;
  merge: {
    post: ({ data }: {
      data: {
        source_topic_id: number;
        target_topic_id: number;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: string;
        name: string;
        title: string;
        description: string;
        total_projects_count: string;
        avatar_url: string;
      };
    }>;
  };
};

export default (client: Client, handler: Handler): Topics => ({
  get: ({query}: {query?:{search:string,without_projects:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}> => handler.apply({method:'get',url:'api/v4/topics',headers:{Accept:'application/json'},variable:[],query:[{name:'search',type:'string'},{name:'without_projects',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
  post: ({data}: {data:{name:string,title:string,description:string,avatar:ArrayBuffer}}, options?: {}): Promise<{code:201,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}> => handler.apply({method:'post',url:'api/v4/topics',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{name:'string',title:'string',description:'string',avatar:'ArrayBuffer'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  getOne: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}> => handler.apply({method:'get',url:'api/v4/topics/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  put: ({params,data}: {params:{id:string},data:{name:string,title:string,description:string,avatar:ArrayBuffer}}, options?: {}): Promise<{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}> => handler.apply({method:'put',url:'api/v4/topics/:id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{name:'string',title:'string',description:'string',avatar:'ArrayBuffer'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  delete: ({params}: {params:{id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/topics/:id',variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  "merge": {
    post: ({data}: {data:{source_topic_id:number,target_topic_id:number}}, options?: {}): Promise<{code:201,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}> => handler.apply({method:'post',url:'api/v4/topics/merge',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{source_topic_id:'number',target_topic_id:'number'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  }
})