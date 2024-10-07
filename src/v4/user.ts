/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface User {
  get: ({ }, options?: {}) => Promise<{ code: 200, data: { id: 1, username: string, email: string, name: string, state: string, locked: boolean, avatar_url: string, web_url: string, created_at: string, bio: string, location: null, public_email: string, skype: string, linkedin: string, twitter: string, discord: string, website_url: string, organization: string, job_title: string, pronouns: string, bot: boolean, work_information: null, followers: 0, following: 0, local_time: string, last_sign_in_at: string, confirmed_at: string, theme_id: 1, last_activity_on: string, color_scheme_id: 2, projects_limit: 100, current_sign_in_at: string, identities: [{ provider: 'github' | 'bitbucket' | 'google_oauth2', extern_uid: string, }], can_create_group: boolean, can_create_project: boolean, two_factor_enabled: boolean, external: boolean, private_profile: boolean, commit_email: string } }>,
  keys: {
    get: ({ query }: {
      query?: {
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: number;
        title: string;
        created_at: string;
        expires_at: string;
        key: string;
        usage_type: string;
      };
    }>;
    post: ({ data }: {
      data: {
        key: string;
        title: string;
        expires_at: string;
        usage_type: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: number;
        title: string;
        created_at: string;
        expires_at: string;
        key: string;
        usage_type: string;
      };
    }>;
    getOne: ({ params }: {
      params: {
        key_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: number;
        title: string;
        created_at: string;
        expires_at: string;
        key: string;
        usage_type: string;
      };
    }>;
    delete: ({ params }: {
      params: {
        key_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: number;
        title: string;
        created_at: string;
        expires_at: string;
        key: string;
        usage_type: string;
      };
    }>;
  };
  gpg_keys: {
    get: ({ query }: {
      query?: {
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }>;
    post: ({ data }: {
      data: {
        key: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }>;
    getOne: ({ params }: {
      params: {
        key_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }>;
    delete: ({ params }: {
      params: {
        key_id: string;
      };
    }, options?: {}) => Promise<{
      code: 204;
    }>;
    revoke: {
      post: ({ params }: {
        params: {
          key_id: string;
        };
      }, options?: {}) => Promise<{
        code: 201;
      }>;
    };
  };
  emails: {
    get: ({ query }: {
      query?: {
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }>;
    post: ({ data }: {
      data: {
        email: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }>;
    getOne: ({ params }: {
      params: {
        email_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }>;
    delete: ({ params }: {
      params: {
        email_id: string;
      };
    }, options?: {}) => Promise<{
      code: 204;
    }>;
  };
  credit_card_validation: {
    put: ({ params, data }: {
      params: {
        user_id: string;
      };
      data: {
        credit_card_valistringd_at: string;
        credit_card_expiration_month: number;
        credit_card_expiration_year: number;
        credit_card_holder_name: string;
        credit_card_mask_number: string;
        credit_card_type: string;
        zuora_payment_method_xid: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        user_id: string;
        credit_card_valistringd_at: string;
      };
    }>;
  };
  preferences: {
    put: ({ data }: {
      data: {
        view_diffs_file_by_file: boolean;
        show_whitespace_in_diffs: boolean;
        pass_user_identities_to_ci_jwt: boolean;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        user_id: string;
        view_diffs_file_by_file: string;
        show_whitespace_in_diffs: string;
        pass_user_identities_to_ci_jwt: string;
      };
    }>;
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        user_id: string;
        view_diffs_file_by_file: string;
        show_whitespace_in_diffs: string;
        pass_user_identities_to_ci_jwt: string;
      };
    }>;
  };
  activities: {
    get: ({ query }: {
      query?: {
        from: string;
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    }>;
  };
  status: {
    put: ({ data }: {
      data: {
        emoji: string;
        message: string;
        availability: string;
        clear_status_after: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        emoji: string;
        message: string;
        availability: string;
        message_html: string;
        clear_status_at: string;
      };
    }>;
    patch: ({ data }: {
      data: {
        emoji: string;
        message: string;
        availability: string;
        clear_status_after: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        emoji: string;
        message: string;
        availability: string;
        message_html: string;
        clear_status_at: string;
      };
    }>;
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
      data: {
        emoji: string;
        message: string;
        availability: string;
        message_html: string;
        clear_status_at: string;
      };
    }>;
  };
  avatar: {
    put: ({ data }: {
      data: {
        avatar: ArrayBuffer;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        avatar_url: string;
      };
    }>;
  };
  runners: {
    post: ({ data }: {
      data: {
        runner_type: string;
        group_id: number;
        project_id: number;
        description: string;
        maintenance_note: string;
        paused: boolean;
        locked: boolean;
        access_level: string;
        run_untagged: boolean;
        tag_list: [string, string];
        maximum_timeout: number;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: string;
        token: string;
        token_expires_at: string;
      };
    } | {
      code: 400;
    } | {
      code: 403;
    }>;
  };
  personal_access_tokens: {
    post: ({ data }: {
      data: {
        name: string;
        scopes: [string, string];
        expires_at: {};
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: string;
        user_id: number;
        last_used_at: string;
        active: boolean;
        expires_at: string;
        token: string;
      };
    }>;
  };
};

export default (client: Client, handler: Handler): User => ({
  get: ({ }, options?: {}): Promise<{ code: 200, data: { id: 1, username: string, email: string, name: string, state: string, locked: boolean, avatar_url: string, web_url: string, created_at: string, bio: string, location: null, public_email: string, skype: string, linkedin: string, twitter: string, discord: string, website_url: string, organization: string, job_title: string, pronouns: string, bot: boolean, work_information: null, followers: 0, following: 0, local_time: string, last_sign_in_at: string, confirmed_at: string, theme_id: 1, last_activity_on: string, color_scheme_id: 2, projects_limit: 100, current_sign_in_at: string, identities: [{ provider: 'github' | 'bitbucket' | 'google_oauth2', extern_uid: string, }], can_create_group: boolean, can_create_project: boolean, two_factor_enabled: boolean, external: boolean, private_profile: boolean, commit_email: string }}> => handler.apply({method:'get',url:'api/v4/user',headers:{Accept:'application/json'},variable:[],query:[]}, [client, {}, options]),
  "keys": {
    get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}> => handler.apply({method:'get',url:'api/v4/user/keys',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
    post: ({data}: {data:{key:string,title:string,expires_at:string,usage_type:string}}, options?: {}): Promise<{code:201,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}> => handler.apply({method:'post',url:'api/v4/user/keys',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{key:'string',title:'string',expires_at:'string',usage_type:'auth_and_signing'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    getOne: ({params}: {params:{key_id:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}> => handler.apply({method:'get',url:'api/v4/user/keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'key_id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{key_id:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}> => handler.apply({method:'delete',url:'api/v4/user/keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'key_id',type:'string'}]}, [client, { params}, options])
  },
  "gpg_keys": {
    get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:string,key:string,created_at:string}}> => handler.apply({method:'get',url:'api/v4/user/gpg_keys',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
    post: ({data}: {data:{key:string}}, options?: {}): Promise<{code:201,data:{id:string,key:string,created_at:string}}> => handler.apply({method:'post',url:'api/v4/user/gpg_keys',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{key:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    getOne: ({params}: {params:{key_id:string}}, options?: {}): Promise<{code:200,data:{id:string,key:string,created_at:string}}> => handler.apply({method:'get',url:'api/v4/user/gpg_keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'key_id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{key_id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/user/gpg_keys/:key_id',variable:[{name:'key_id',type:'string'}]}, [client, { params}, options]),
    "revoke": {
      post: ({params}: {params:{key_id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/user/gpg_keys/:key_id/revoke',variable:[{name:'key_id',type:'string'}]}, [client, { params}, options])
    }
  },
  "emails": {
    get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:string,email:string,confirmed_at:string}}> => handler.apply({method:'get',url:'api/v4/user/emails',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
    post: ({data}: {data:{email:string}}, options?: {}): Promise<{code:201,data:{id:string,email:string,confirmed_at:string}}> => handler.apply({method:'post',url:'api/v4/user/emails',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{email:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    getOne: ({params}: {params:{email_id:string}}, options?: {}): Promise<{code:200,data:{id:string,email:string,confirmed_at:string}}> => handler.apply({method:'get',url:'api/v4/user/emails/:email_id',headers:{Accept:'application/json'},variable:[{name:'email_id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{email_id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/user/emails/:email_id',variable:[{name:'email_id',type:'string'}]}, [client, { params}, options])
  },
  "credit_card_validation": {
    put: ({params,data}: {params:{user_id:string},data:{credit_card_valistringd_at:string,credit_card_expiration_month:number,credit_card_expiration_year:number,credit_card_holder_name:string,credit_card_mask_number:string,credit_card_type:string,zuora_payment_method_xid:string}}, options?: {}): Promise<{code:200,data:{user_id:string,credit_card_valistringd_at:string}}> => handler.apply({method:'put',url:'api/v4/user/:user_id/credit_card_validation',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'user_id',type:'string'}],data:{mode:'raw',raw:{credit_card_valistringd_at:'string',credit_card_expiration_month:'number',credit_card_expiration_year:'number',credit_card_holder_name:'string',credit_card_mask_number:'string',credit_card_type:'string',zuora_payment_method_xid:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  },
  "preferences": {
    put: ({data}: {data:{view_diffs_file_by_file:boolean,show_whitespace_in_diffs:boolean,pass_user_identities_to_ci_jwt:boolean}}, options?: {}): Promise<{code:200,data:{id:string,user_id:string,view_diffs_file_by_file:string,show_whitespace_in_diffs:string,pass_user_identities_to_ci_jwt:string}}> => handler.apply({method:'put',url:'api/v4/user/preferences',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{view_diffs_file_by_file:'boolean',show_whitespace_in_diffs:'boolean',pass_user_identities_to_ci_jwt:'boolean'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    get: ({}: {}, options?: {}): Promise<{code:200,data:{id:string,user_id:string,view_diffs_file_by_file:string,show_whitespace_in_diffs:string,pass_user_identities_to_ci_jwt:string}}> => handler.apply({method:'get',url:'api/v4/user/preferences',headers:{Accept:'application/json'},variable:[]}, [client, {}, options])
  },
  "activities": {
    get: ({query}: {query?:{from:string,page:string,per_page:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/user/activities',variable:[],query:[{name:'from',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options])
  },
  "status": {
    put: ({data}: {data:{emoji:string,message:string,availability:string,clear_status_after:string}}, options?: {}): Promise<{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}> => handler.apply({method:'put',url:'api/v4/user/status',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{emoji:'string',message:'string',availability:'string',clear_status_after:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    patch: ({data}: {data:{emoji:string,message:string,availability:string,clear_status_after:string}}, options?: {}): Promise<{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}> => handler.apply({method:'patch',url:'api/v4/user/status',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{emoji:'string',message:'string',availability:'string',clear_status_after:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    get: ({}: {}, options?: {}): Promise<{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}> => handler.apply({method:'get',url:'api/v4/user/status',headers:{Accept:'application/json'},variable:[]}, [client, {}, options])
  },
  "avatar": {
    put: ({data}: {data:{avatar:ArrayBuffer}}, options?: {}): Promise<{code:200,data:{avatar_url:string}}> => handler.apply({method:'put',url:'api/v4/user/avatar',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{avatar:'ArrayBuffer'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "runners": {
    post: ({data}: {data:{runner_type:string,group_id:number,project_id:number,description:string,maintenance_note:string,paused:boolean,locked:boolean,access_level:string,run_untagged:boolean,tag_list:[string,string],maximum_timeout:number}}, options?: {}): Promise<{code:201,data:{id:string,token:string,token_expires_at:string}}|{code:400}|{code:403}> => handler.apply({method:'post',url:'api/v4/user/runners',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{runner_type:'string',group_id:'number',project_id:'number',description:'string',maintenance_note:'string',paused:'boolean',locked:'boolean',access_level:'string',run_untagged:'boolean',tag_list:['string','string'],maximum_timeout:'number'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "personal_access_tokens": {
    post: ({data}: {data:{name:string,scopes:[string,string],expires_at:{}}}, options?: {}): Promise<{code:201,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,token:string}}> => handler.apply({method:'post',url:'api/v4/user/personal_access_tokens',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{name:'string',scopes:['string','string'],expires_at:{}},options:{raw:{language:'json'}}}}, [client, {data}, options])
  }
})