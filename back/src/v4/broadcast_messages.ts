/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface BroadcastMessages {
  get: ({ query }: {
    query?: {
      page: string;
      per_page: string;
    };
  }, options?: {}) => Promise<{
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
  }>;
  post: ({ data }: {
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
  }, options?: {}) => Promise<{
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
  }>;
  getOne: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
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
  }>;
  put: ({ params, data }: {
    params: {
      id: string;
    };
    data: {
      message: string;
      starts_at: string;
      ends_at: string;
      color: string;
      font: string;
      target_access_levels: [number, number];
      target_path: string;
      broadcast_type: string;
      dismissable: boolean;
    };
  }, options?: {}) => Promise<{
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
  }>;
  delete: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
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
  }>;
};

export default (client: Client, handler: Handler): BroadcastMessages => ({
  get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}> => handler.apply({method:'get',url:'api/v4/broadcast_messages',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
  post: ({data}: {data:{message:string,starts_at:{},ends_at:{},color:string,font:string,target_access_levels:[number,number],target_path:string,broadcast_type:{},dismissable:boolean}}, options?: {}): Promise<{code:201,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}> => handler.apply({method:'post',url:'api/v4/broadcast_messages',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{message:'string',starts_at:{},ends_at:{},color:'string',font:'string',target_access_levels:['number','number'],target_path:'string',broadcast_type:{},dismissable:'boolean'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  getOne: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}> => handler.apply({method:'get',url:'api/v4/broadcast_messages/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  put: ({params,data}: {params:{id:string},data:{message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:[number,number],target_path:string,broadcast_type:string,dismissable:boolean}}, options?: {}): Promise<{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}> => handler.apply({method:'put',url:'api/v4/broadcast_messages/:id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{message:'string',starts_at:'string',ends_at:'string',color:'string',font:'string',target_access_levels:['number','number'],target_path:'string',broadcast_type:'string',dismissable:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  delete: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}> => handler.apply({method:'delete',url:'api/v4/broadcast_messages/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
})