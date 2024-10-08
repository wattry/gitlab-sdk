/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Events {
  get: ({ query }: {
    query?: {
      scope: string;
      page: string;
      per_page: string;
      action: string;
      target_type: string;
      before: string;
      after: string;
      sort: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: [{
      id: number;
      project_id: number;
      action_name: string;
      target_id: number;
      target_iid: number;
      target_type: string;
      author_id: number;
      target_title: string;
      created_at: string;
      note: {
        id: any;
        type: any;
        body: any;
        attachment: any;
        author: any;
        created_at: any;
        upstringd_at: any;
        system: any;
        noteable_id: any;
        noteable_type: any;
        project_id: any;
        commit_id: any;
        position: any;
        resolvable: any;
        resolved: any;
        resolved_by: any;
        resolved_at: any;
        confidential: any;
        internal: any;
        imported: any;
        imported_from: any;
        noteable_iid: any;
        commands_changes: any;
      };
      author: {
        id: any;
        username: any;
        name: any;
        state: any;
        locked: any;
        avatar_url: any;
        avatar_path: any;
        custom_attributes: any;
        web_url: any;
      };
      wiki_page: {
        format: any;
        slug: any;
        title: any;
      };
      imported: boolean;
      imported_from: string;
      push_data: {
        commit_count: any;
        action: any;
        ref_type: any;
        commit_from: any;
        commit_to: any;
        ref: any;
        commit_title: any;
        ref_count: any;
      };
      author_username: string;
    }, {
      id: number;
      project_id: number;
      action_name: string;
      target_id: number;
      target_iid: number;
      target_type: string;
      author_id: number;
      target_title: string;
      created_at: string;
      note: {
        id: any;
        type: any;
        body: any;
        attachment: any;
        author: any;
        created_at: any;
        upstringd_at: any;
        system: any;
        noteable_id: any;
        noteable_type: any;
        project_id: any;
        commit_id: any;
        position: any;
        resolvable: any;
        resolved: any;
        resolved_by: any;
        resolved_at: any;
        confidential: any;
        internal: any;
        imported: any;
        imported_from: any;
        noteable_iid: any;
        commands_changes: any;
      };
      author: {
        id: any;
        username: any;
        name: any;
        state: any;
        locked: any;
        avatar_url: any;
        avatar_path: any;
        custom_attributes: any;
        web_url: any;
      };
      wiki_page: {
        format: any;
        slug: any;
        title: any;
      };
      imported: boolean;
      imported_from: string;
      push_data: {
        commit_count: any;
        action: any;
        ref_type: any;
        commit_from: any;
        commit_to: any;
        ref: any;
        commit_title: any;
        ref_count: any;
      };
      author_username: string;
    }];
  } | {
    code: 401;
  }>;
};

export default (client: Client, handler: Handler): Events => ({
  get: ({query}: {query?:{scope:string,page:string,per_page:string,action:string,target_type:string,before:string,after:string,sort:string}}, options?: {}): Promise<{code:200,data:[{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:any,type:any,body:any,attachment:any,author:any,created_at:any,upstringd_at:any,system:any,noteable_id:any,noteable_type:any,project_id:any,commit_id:any,position:any,resolvable:any,resolved:any,resolved_by:any,resolved_at:any,confidential:any,internal:any,imported:any,imported_from:any,noteable_iid:any,commands_changes:any},author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},wiki_page:{format:any,slug:any,title:any},imported:boolean,imported_from:string,push_data:{commit_count:any,action:any,ref_type:any,commit_from:any,commit_to:any,ref:any,commit_title:any,ref_count:any},author_username:string},{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:any,type:any,body:any,attachment:any,author:any,created_at:any,upstringd_at:any,system:any,noteable_id:any,noteable_type:any,project_id:any,commit_id:any,position:any,resolvable:any,resolved:any,resolved_by:any,resolved_at:any,confidential:any,internal:any,imported:any,imported_from:any,noteable_iid:any,commands_changes:any},author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},wiki_page:{format:any,slug:any,title:any},imported:boolean,imported_from:string,push_data:{commit_count:any,action:any,ref_type:any,commit_from:any,commit_to:any,ref:any,commit_title:any,ref_count:any},author_username:string}]}|{code:401}> => handler.apply({method:'get',url:'api/v4/events',headers:{Accept:'application/json'},variable:[],query:[{name:'scope',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'action',type:'string'},{name:'target_type',type:'string'},{name:'before',type:'string'},{name:'after',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
})