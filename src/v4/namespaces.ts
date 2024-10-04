export interface Namespaces {
  get: ({ query, clientOptions }: {
    query: {
      search: string;
      owned_only: string;
      top_level_only: string;
      page: string;
      per_page: string;
      requested_hosted_plan: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: number;
      name: string;
      path: string;
      kind: string;
      full_path: string;
      parent_id: number;
      avatar_url: string;
      web_url: string;
      members_count_with_descendants: number;
      root_repository_size: number;
      projects_count: number;
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      additional_purchased_storage_size: number;
      additional_purchased_storage_ends_on: Date;
      billable_members_count: number;
      seats_in_use: number;
      max_seats_used: number;
      max_seats_used_changed_at: Date;
      end_date: Date;
      plan: string;
      trial_ends_on: Date;
      trial: boolean;
    }, {
      id: number;
      name: string;
      path: string;
      kind: string;
      full_path: string;
      parent_id: number;
      avatar_url: string;
      web_url: string;
      members_count_with_descendants: number;
      root_repository_size: number;
      projects_count: number;
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      additional_purchased_storage_size: number;
      additional_purchased_storage_ends_on: Date;
      billable_members_count: number;
      seats_in_use: number;
      max_seats_used: number;
      max_seats_used_changed_at: Date;
      end_date: Date;
      plan: string;
      trial_ends_on: Date;
      trial: boolean;
    }];
  }, {
    code: 401;
  }]>;
  put: ({ params, data, clientOptions }: {
    params: {
      id: string;
    };
    data: {
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      additional_purchased_storage_size: number;
      additional_purchased_storage_ends_on: Date;
      gitlab_subscription_attributes: {
        start_date: Date;
        seats: number;
        max_seats_used: number;
        plan_code: string;
        end_date: Date;
        auto_renew: boolean;
        trial: boolean;
        trial_ends_on: Date;
        trial_starts_on: Date;
        trial_extension_type: number;
      };
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: number;
      name: string;
      path: string;
      kind: string;
      full_path: string;
      parent_id: number;
      avatar_url: string;
      web_url: string;
      members_count_with_descendants: number;
      root_repository_size: number;
      projects_count: number;
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      additional_purchased_storage_size: number;
      additional_purchased_storage_ends_on: Date;
      billable_members_count: number;
      seats_in_use: number;
      max_seats_used: number;
      max_seats_used_changed_at: Date;
      end_date: Date;
      plan: string;
      trial_ends_on: Date;
      trial: boolean;
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
      id: number;
      name: string;
      path: string;
      kind: string;
      full_path: string;
      parent_id: number;
      avatar_url: string;
      web_url: string;
      members_count_with_descendants: number;
      root_repository_size: number;
      projects_count: number;
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      additional_purchased_storage_size: number;
      additional_purchased_storage_ends_on: Date;
      billable_members_count: number;
      seats_in_use: number;
      max_seats_used: number;
      max_seats_used_changed_at: Date;
      end_date: Date;
      plan: string;
      trial_ends_on: Date;
      trial: boolean;
    };
  }, {
    code: 401;
  }, {
    code: 404;
  }]>;
  gitlab_subscription: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        start_date: Date;
        seats: number;
        max_seats_used: number;
        plan_code: string;
        end_date: Date;
        auto_renew: boolean;
        trial: boolean;
        trial_ends_on: Date;
        trial_starts_on: Date;
        trial_extension_type: number;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        plan: {
          code: string;
          name: string;
          trial: string;
          auto_renew: string;
          upgradable: string;
          exclude_guests: string;
        };
        usage: {
          seats_in_subscription: string;
          seats_in_use: string;
          max_seats_used: string;
          seats_owed: string;
        };
        billing: {
          subscription_start_date: string;
          subscription_end_date: string;
          trial_ends_on: string;
        };
      };
    }]>;
    get: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        plan: {
          code: string;
          name: string;
          trial: string;
          auto_renew: string;
          upgradable: string;
          exclude_guests: string;
        };
        usage: {
          seats_in_subscription: string;
          seats_in_use: string;
          max_seats_used: string;
          seats_owed: string;
        };
        billing: {
          subscription_start_date: string;
          subscription_end_date: string;
          trial_ends_on: string;
        };
      };
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        start_date: Date;
        seats: number;
        max_seats_used: number;
        plan_code: string;
        end_date: Date;
        auto_renew: boolean;
        trial: boolean;
        trial_ends_on: Date;
        trial_starts_on: Date;
        trial_extension_type: number;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        plan: {
          code: string;
          name: string;
          trial: string;
          auto_renew: string;
          upgradable: string;
          exclude_guests: string;
        };
        usage: {
          seats_in_subscription: string;
          seats_in_use: string;
          max_seats_used: string;
          seats_owed: string;
        };
        billing: {
          subscription_start_date: string;
          subscription_end_date: string;
          trial_ends_on: string;
        };
      };
    }]>;
  };
  storage: {
    limit_exclusion: {
      post: ({ params, data, clientOptions }: {
        params: {
          id: string;
        };
        data: {
          reason: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
        data: {
          id: number;
          namespace_id: number;
          namespace_name: string;
          reason: string;
        };
      }, {
        code: 400;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }]>;
      delete: ({ params, clientOptions }: {
        params: {
          id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 204;
      }, {
        code: 400;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 422;
      }]>;
    };
    limit_exclusions: {
      get: ({ query, clientOptions }: {
        query: {
          page: string;
          per_page: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          namespace_id: number;
          namespace_name: string;
          reason: string;
        };
      }, {
        code: 401;
      }, {
        code: 403;
      }]>;
    };
  };
  exists: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        parent_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        exists: boolean;
        suggests: [string, string];
      };
    }, {
      code: 401;
    }]>;
  };
};

export default (client: any, handler: any): Namespaces => ({
  get: ({query,clientOptions}: {query:{search:string,owned_only:string,top_level_only:string,page:string,per_page:string,requested_hosted_plan:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:Date,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:Date,end_date:Date,plan:string,trial_ends_on:Date,trial:boolean},{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:Date,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:Date,end_date:Date,plan:string,trial_ends_on:Date,trial:boolean}]},{code:401}]> => handler.apply({method:'get',url:'api/v4/namespaces',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'search',type:'string'},{name:'owned_only',type:'string'},{name:'top_level_only',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'requested_hosted_plan',type:'string'}],data:null}, [client, {query, clientOptions}]),
  put: ({params,data,clientOptions}: {params:{id:string},data:{shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:Date,gitlab_subscription_attributes:{start_date:Date,seats:number,max_seats_used:number,plan_code:string,end_date:Date,auto_renew:boolean,trial:boolean,trial_ends_on:Date,trial_starts_on:Date,trial_extension_type:number}},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:Date,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:Date,end_date:Date,plan:string,trial_ends_on:Date,trial:boolean}}]> => handler.apply({method:'put',url:'api/v4/namespaces/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',additional_purchased_storage_size:'number',additional_purchased_storage_ends_on:'date',gitlab_subscription_attributes:{start_date:'date',seats:'number',max_seats_used:'number',plan_code:'string',end_date:'date',auto_renew:'boolean',trial:'boolean',trial_ends_on:'date',trial_starts_on:'date',trial_extension_type:'number'}},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  getOne: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:Date,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:Date,end_date:Date,plan:string,trial_ends_on:Date,trial:boolean}},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/namespaces/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  "gitlab_subscription": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{start_date:Date,seats:number,max_seats_used:number,plan_code:string,end_date:Date,auto_renew:boolean,trial:boolean,trial_ends_on:Date,trial_starts_on:Date,trial_extension_type:number},clientOptions:any}): Promise<[{code:201,data:{plan:{code:string,name:string,trial:string,auto_renew:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_date:string,subscription_end_date:string,trial_ends_on:string}}}]> => handler.apply({method:'post',url:'api/v4/namespaces/:id/gitlab_subscription',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{start_date:'date',seats:'number',max_seats_used:'number',plan_code:'string',end_date:'date',auto_renew:'boolean',trial:'boolean',trial_ends_on:'date',trial_starts_on:'date',trial_extension_type:'number'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{plan:{code:string,name:string,trial:string,auto_renew:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_date:string,subscription_end_date:string,trial_ends_on:string}}}]> => handler.apply({method:'get',url:'api/v4/namespaces/:id/gitlab_subscription',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{id:string},data:{start_date:Date,seats:number,max_seats_used:number,plan_code:string,end_date:Date,auto_renew:boolean,trial:boolean,trial_ends_on:Date,trial_starts_on:Date,trial_extension_type:number},clientOptions:any}): Promise<[{code:200,data:{plan:{code:string,name:string,trial:string,auto_renew:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_date:string,subscription_end_date:string,trial_ends_on:string}}}]> => handler.apply({method:'put',url:'api/v4/namespaces/:id/gitlab_subscription',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{start_date:'date',seats:'number',max_seats_used:'number',plan_code:'string',end_date:'date',auto_renew:'boolean',trial:'boolean',trial_ends_on:'date',trial_starts_on:'date',trial_extension_type:'number'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
  },
  "storage": {
    "limit_exclusion": {
      post: ({params,data,clientOptions}: {params:{id:string},data:{reason:string},clientOptions:any}): Promise<[{code:201,data:{id:number,namespace_id:number,namespace_name:string,reason:string}},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/namespaces/:id/storage/limit_exclusion',resource:'namespaces',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{reason:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
      delete: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:401},{code:403},{code:422}]> => handler.apply({method:'delete',url:'api/v4/namespaces/:id/storage/limit_exclusion',resource:'namespaces',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
    },
    "limit_exclusions": {
      get: ({query,clientOptions}: {query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,namespace_id:number,namespace_name:string,reason:string}},{code:401},{code:403}]> => handler.apply({method:'get',url:'api/v4/namespaces/storage/limit_exclusions',resource:'namespaces',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}])
    }
  },
  "exists": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{parent_id:string},clientOptions:any}): Promise<[{code:200,data:{exists:boolean,suggests:[string,string]}},{code:401}]> => handler.apply({method:'get',url:'api/v4/namespaces/:id/exists',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'parent_id',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  }
})