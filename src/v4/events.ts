export interface Events {
  get: ({ query, clientOptions }: {
    query: {
      scope: string;
      page: string;
      per_page: string;
      action: string;
      target_type: string;
      before: string;
      after: string;
      sort: string;
    };
    clientOptions: any;
  }) => Promise<[{
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
        id: {
          value: any;
        };
        type: {
          value: any;
        };
        body: {
          value: any;
        };
        attachment: {
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
        system: {
          value: any;
        };
        noteable_id: {
          value: any;
        };
        noteable_type: {
          value: any;
        };
        project_id: {
          value: any;
        };
        commit_id: {
          value: any;
        };
        position: {
          value: any;
        };
        resolvable: {
          value: any;
        };
        resolved: {
          value: any;
        };
        resolved_by: {
          value: any;
        };
        resolved_at: {
          value: any;
        };
        confidential: {
          value: any;
        };
        internal: {
          value: any;
        };
        imported: {
          value: any;
        };
        imported_from: {
          value: any;
        };
        noteable_iid: {
          value: any;
        };
        commands_changes: {
          value: any;
        };
      };
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
      wiki_page: {
        format: {
          value: any;
        };
        slug: {
          value: any;
        };
        title: {
          value: any;
        };
      };
      imported: boolean;
      imported_from: string;
      push_data: {
        commit_count: {
          value: any;
        };
        action: {
          value: any;
        };
        ref_type: {
          value: any;
        };
        commit_from: {
          value: any;
        };
        commit_to: {
          value: any;
        };
        ref: {
          value: any;
        };
        commit_title: {
          value: any;
        };
        ref_count: {
          value: any;
        };
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
        id: {
          value: any;
        };
        type: {
          value: any;
        };
        body: {
          value: any;
        };
        attachment: {
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
        system: {
          value: any;
        };
        noteable_id: {
          value: any;
        };
        noteable_type: {
          value: any;
        };
        project_id: {
          value: any;
        };
        commit_id: {
          value: any;
        };
        position: {
          value: any;
        };
        resolvable: {
          value: any;
        };
        resolved: {
          value: any;
        };
        resolved_by: {
          value: any;
        };
        resolved_at: {
          value: any;
        };
        confidential: {
          value: any;
        };
        internal: {
          value: any;
        };
        imported: {
          value: any;
        };
        imported_from: {
          value: any;
        };
        noteable_iid: {
          value: any;
        };
        commands_changes: {
          value: any;
        };
      };
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
      wiki_page: {
        format: {
          value: any;
        };
        slug: {
          value: any;
        };
        title: {
          value: any;
        };
      };
      imported: boolean;
      imported_from: string;
      push_data: {
        commit_count: {
          value: any;
        };
        action: {
          value: any;
        };
        ref_type: {
          value: any;
        };
        commit_from: {
          value: any;
        };
        commit_to: {
          value: any;
        };
        ref: {
          value: any;
        };
        commit_title: {
          value: any;
        };
        ref_count: {
          value: any;
        };
      };
      author_username: string;
    }];
  }, {
    code: 401;
  }]>;
};

export default (client: any, handler: any): Events => ({
  get: ({query,clientOptions}: {query:{scope:string,page:string,per_page:string,action:string,target_type:string,before:string,after:string,sort:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:{value:{}},type:{value:{}},body:{value:{}},attachment:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},system:{value:{}},noteable_id:{value:{}},noteable_type:{value:{}},project_id:{value:{}},commit_id:{value:{}},position:{value:{}},resolvable:{value:{}},resolved:{value:{}},resolved_by:{value:{}},resolved_at:{value:{}},confidential:{value:{}},internal:{value:{}},imported:{value:{}},imported_from:{value:{}},noteable_iid:{value:{}},commands_changes:{value:{}}},author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},wiki_page:{format:{value:{}},slug:{value:{}},title:{value:{}}},imported:boolean,imported_from:string,push_data:{commit_count:{value:{}},action:{value:{}},ref_type:{value:{}},commit_from:{value:{}},commit_to:{value:{}},ref:{value:{}},commit_title:{value:{}},ref_count:{value:{}}},author_username:string},{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:{value:{}},type:{value:{}},body:{value:{}},attachment:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},system:{value:{}},noteable_id:{value:{}},noteable_type:{value:{}},project_id:{value:{}},commit_id:{value:{}},position:{value:{}},resolvable:{value:{}},resolved:{value:{}},resolved_by:{value:{}},resolved_at:{value:{}},confidential:{value:{}},internal:{value:{}},imported:{value:{}},imported_from:{value:{}},noteable_iid:{value:{}},commands_changes:{value:{}}},author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},wiki_page:{format:{value:{}},slug:{value:{}},title:{value:{}}},imported:boolean,imported_from:string,push_data:{commit_count:{value:{}},action:{value:{}},ref_type:{value:{}},commit_from:{value:{}},commit_to:{value:{}},ref:{value:{}},commit_title:{value:{}},ref_count:{value:{}}},author_username:string}]},{code:401}]> => handler.apply({method:'get',url:'api/v4/events',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'scope',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'action',type:'string'},{name:'target_type',type:'string'},{name:'before',type:'string'},{name:'after',type:'string'},{name:'sort',type:'string'}],data:null}, [client, {query, clientOptions}])
})