export interface BroadcastMessages {
  get: ({ query, clientOptions }: {
    query: {
      page: string;
      per_page: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      message: string;
      starts_at: string;
      ends_at: string;
      color: string;
      font: string;
      target_access_levels: string;
      target_path: string;
      broadcast_type: string;
      dismissable: string;
      active: string;
    };
  }]>;
  post: ({ data, clientOptions }: {
    data: {
      message: string;
      starts_at: {};
      ends_at: {};
      color: string;
      font: string;
      target_access_levels: [number, number];
      target_path: string;
      broadcast_type: {};
      dismissable: boolean;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 201;
    data: {
      id: string;
      message: string;
      starts_at: string;
      ends_at: string;
      color: string;
      font: string;
      target_access_levels: string;
      target_path: string;
      broadcast_type: string;
      dismissable: string;
      active: string;
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
      message: string;
      starts_at: string;
      ends_at: string;
      color: string;
      font: string;
      target_access_levels: string;
      target_path: string;
      broadcast_type: string;
      dismissable: string;
      active: string;
    };
  }]>;
  put: ({ params, data, clientOptions }: {
    params: {
      id: string;
    };
    data: {
      message: string;
      starts_at: Date;
      ends_at: Date;
      color: string;
      font: string;
      target_access_levels: [number, number];
      target_path: string;
      broadcast_type: string;
      dismissable: boolean;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      message: string;
      starts_at: string;
      ends_at: string;
      color: string;
      font: string;
      target_access_levels: string;
      target_path: string;
      broadcast_type: string;
      dismissable: string;
      active: string;
    };
  }]>;
  delete: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      message: string;
      starts_at: string;
      ends_at: string;
      color: string;
      font: string;
      target_access_levels: string;
      target_path: string;
      broadcast_type: string;
      dismissable: string;
      active: string;
    };
  }]>;
};

export default (client: any, handler: any): BroadcastMessages => ({
  get: ({query,clientOptions}: {query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]> => handler.apply({method:'get',url:'api/v4/broadcast_messages',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}]),
  post: ({data,clientOptions}: {data:{message:string,starts_at:{},ends_at:{},color:string,font:string,target_access_levels:[number,number],target_path:string,broadcast_type:{},dismissable:boolean},clientOptions:any}): Promise<[{code:201,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]> => handler.apply({method:'post',url:'api/v4/broadcast_messages',resource:'api',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{message:'string',starts_at:{},ends_at:{},color:'string',font:'string',target_access_levels:['number','number'],target_path:'string',broadcast_type:{},dismissable:'boolean'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
  getOne: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]> => handler.apply({method:'get',url:'api/v4/broadcast_messages/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  put: ({params,data,clientOptions}: {params:{id:string},data:{message:string,starts_at:Date,ends_at:Date,color:string,font:string,target_access_levels:[number,number],target_path:string,broadcast_type:string,dismissable:boolean},clientOptions:any}): Promise<[{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]> => handler.apply({method:'put',url:'api/v4/broadcast_messages/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{message:'string',starts_at:'Date',ends_at:'Date',color:'string',font:'string',target_access_levels:['number','number'],target_path:'string',broadcast_type:'string',dismissable:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  delete: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]> => handler.apply({method:'delete',url:'api/v4/broadcast_messages/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
})