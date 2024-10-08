/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Namespaces {
  get: ({ query }: {
    query?: {
      search: string;
      owned_only: string;
      top_level_only: string;
      page: string;
      per_page: string;
      requested_hosted_plan: string;
    };
  }, options?: {}) => Promise<{
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
      additional_purchased_storage_ends_on: string;
      billable_members_count: number;
      seats_in_use: number;
      max_seats_used: number;
      max_seats_used_changed_at: string;
      end_string: string;
      plan: string;
      trial_ends_on: string;
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
      additional_purchased_storage_ends_on: string;
      billable_members_count: number;
      seats_in_use: number;
      max_seats_used: number;
      max_seats_used_changed_at: string;
      end_string: string;
      plan: string;
      trial_ends_on: string;
      trial: boolean;
    }];
  } | {
    code: 401;
  }>;
  put: ({ params, data }: {
    params: {
      id: string;
    };
    data: {
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      additional_purchased_storage_size: number;
      additional_purchased_storage_ends_on: string;
      gitlab_subscription_attributes: {
        start_string: string;
        seats: number;
        max_seats_used: number;
        plan_code: string;
        end_string: string;
        auto_restring: boolean;
        trial: boolean;
        trial_ends_on: string;
        trial_starts_on: string;
        trial_extension_type: number;
      };
    };
  }, options?: {}) => Promise<{
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
      additional_purchased_storage_ends_on: string;
      billable_members_count: number;
      seats_in_use: number;
      max_seats_used: number;
      max_seats_used_changed_at: string;
      end_string: string;
      plan: string;
      trial_ends_on: string;
      trial: boolean;
    };
  }>;
  getOne: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
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
      additional_purchased_storage_ends_on: string;
      billable_members_count: number;
      seats_in_use: number;
      max_seats_used: number;
      max_seats_used_changed_at: string;
      end_string: string;
      plan: string;
      trial_ends_on: string;
      trial: boolean;
    };
  } | {
    code: 401;
  } | {
    code: 404;
  }>;
  gitlab_subscription: {
    post: ({ params, data }: {
      params: {
        id: string;
      };
      data: {
        start_string: string;
        seats: number;
        max_seats_used: number;
        plan_code: string;
        end_string: string;
        auto_restring: boolean;
        trial: boolean;
        trial_ends_on: string;
        trial_starts_on: string;
        trial_extension_type: number;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        plan: {
          code: string;
          name: string;
          trial: string;
          auto_restring: string;
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
          subscription_start_string: string;
          subscription_end_string: string;
          trial_ends_on: string;
        };
      };
    }>;
    get: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        plan: {
          code: string;
          name: string;
          trial: string;
          auto_restring: string;
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
          subscription_start_string: string;
          subscription_end_string: string;
          trial_ends_on: string;
        };
      };
    }>;
    put: ({ params, data }: {
      params: {
        id: string;
      };
      data: {
        start_string: string;
        seats: number;
        max_seats_used: number;
        plan_code: string;
        end_string: string;
        auto_restring: boolean;
        trial: boolean;
        trial_ends_on: string;
        trial_starts_on: string;
        trial_extension_type: number;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        plan: {
          code: string;
          name: string;
          trial: string;
          auto_restring: string;
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
          subscription_start_string: string;
          subscription_end_string: string;
          trial_ends_on: string;
        };
      };
    }>;
  };
  storage: {
    limit_exclusion: {
      post: ({ params, data }: {
        params: {
          id: string;
        };
        data: {
          reason: string;
        };
      }, options?: {}) => Promise<{
        code: 201;
        data: {
          id: number;
          namespace_id: number;
          namespace_name: string;
          reason: string;
        };
      } | {
        code: 400;
      } | {
        code: 401;
      } | {
        code: 403;
      } | {
        code: 404;
      }>;
      delete: ({ params }: {
        params: {
          id: string;
        };
      }, options?: {}) => Promise<{
        code: 204;
      } | {
        code: 400;
      } | {
        code: 401;
      } | {
        code: 403;
      } | {
        code: 422;
      }>;
    };
    limit_exclusions: {
      get: ({ query }: {
        query?: {
          page: string;
          per_page: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
        data: {
          id: number;
          namespace_id: number;
          namespace_name: string;
          reason: string;
        };
      } | {
        code: 401;
      } | {
        code: 403;
      }>;
    };
  };
  exists: {
    get: ({ params, query }: {
      params: {
        id: string;
      };
      query?: {
        parent_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        exists: boolean;
        suggests: [string, string];
      };
    } | {
      code: 401;
    }>;
  };
};

export default (client: Client, handler: Handler): Namespaces => ({
  get: ({query}: {query?:{search:string,owned_only:string,top_level_only:string,page:string,per_page:string,requested_hosted_plan:string}}, options?: {}): Promise<{code:200,data:[{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:string,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:string,end_string:string,plan:string,trial_ends_on:string,trial:boolean},{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:string,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:string,end_string:string,plan:string,trial_ends_on:string,trial:boolean}]}|{code:401}> => handler.apply({method:'get',url:'api/v4/namespaces',headers:{Accept:'application/json'},variable:[],query:[{name:'search',type:'string'},{name:'owned_only',type:'string'},{name:'top_level_only',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'requested_hosted_plan',type:'string'}]}, [client, {query}, options]),
  put: ({params,data}: {params:{id:string},data:{shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:string,gitlab_subscription_attributes:{start_string:string,seats:number,max_seats_used:number,plan_code:string,end_string:string,auto_restring:boolean,trial:boolean,trial_ends_on:string,trial_starts_on:string,trial_extension_type:number}}}, options?: {}): Promise<{code:200,data:{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:string,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:string,end_string:string,plan:string,trial_ends_on:string,trial:boolean}}> => handler.apply({method:'put',url:'api/v4/namespaces/:id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',additional_purchased_storage_size:'number',additional_purchased_storage_ends_on:'string',gitlab_subscription_attributes:{start_string:'string',seats:'number',max_seats_used:'number',plan_code:'string',end_string:'string',auto_restring:'boolean',trial:'boolean',trial_ends_on:'string',trial_starts_on:'string',trial_extension_type:'number'}},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  getOne: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:string,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:string,end_string:string,plan:string,trial_ends_on:string,trial:boolean}}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/namespaces/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  "gitlab_subscription": {
    post: ({params,data}: {params:{id:string},data:{start_string:string,seats:number,max_seats_used:number,plan_code:string,end_string:string,auto_restring:boolean,trial:boolean,trial_ends_on:string,trial_starts_on:string,trial_extension_type:number}}, options?: {}): Promise<{code:201,data:{plan:{code:string,name:string,trial:string,auto_restring:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_string:string,subscription_end_string:string,trial_ends_on:string}}}> => handler.apply({method:'post',url:'api/v4/namespaces/:id/gitlab_subscription',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{start_string:'string',seats:'number',max_seats_used:'number',plan_code:'string',end_string:'string',auto_restring:'boolean',trial:'boolean',trial_ends_on:'string',trial_starts_on:'string',trial_extension_type:'number'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{plan:{code:string,name:string,trial:string,auto_restring:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_string:string,subscription_end_string:string,trial_ends_on:string}}}> => handler.apply({method:'get',url:'api/v4/namespaces/:id/gitlab_subscription',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
    put: ({params,data}: {params:{id:string},data:{start_string:string,seats:number,max_seats_used:number,plan_code:string,end_string:string,auto_restring:boolean,trial:boolean,trial_ends_on:string,trial_starts_on:string,trial_extension_type:number}}, options?: {}): Promise<{code:200,data:{plan:{code:string,name:string,trial:string,auto_restring:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_string:string,subscription_end_string:string,trial_ends_on:string}}}> => handler.apply({method:'put',url:'api/v4/namespaces/:id/gitlab_subscription',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{start_string:'string',seats:'number',max_seats_used:'number',plan_code:'string',end_string:'string',auto_restring:'boolean',trial:'boolean',trial_ends_on:'string',trial_starts_on:'string',trial_extension_type:'number'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  },
  "storage": {
    "limit_exclusion": {
      post: ({params,data}: {params:{id:string},data:{reason:string}}, options?: {}): Promise<{code:201,data:{id:number,namespace_id:number,namespace_name:string,reason:string}}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/namespaces/:id/storage/limit_exclusion',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{reason:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
      delete: ({params}: {params:{id:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:401}|{code:403}|{code:422}> => handler.apply({method:'delete',url:'api/v4/namespaces/:id/storage/limit_exclusion',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
    },
    "limit_exclusions": {
      get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,namespace_id:number,namespace_name:string,reason:string}}|{code:401}|{code:403}> => handler.apply({method:'get',url:'api/v4/namespaces/storage/limit_exclusions',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options])
    }
  },
  "exists": {
    get: ({params,query}: {params:{id:string},query?:{parent_id:string}}, options?: {}): Promise<{code:200,data:{exists:boolean,suggests:[string,string]}}|{code:401}> => handler.apply({method:'get',url:'api/v4/namespaces/:id/exists',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'parent_id',type:'string'}]}, [client, { params, query}, options])
  }
})