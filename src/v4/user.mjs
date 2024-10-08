/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {any} [request={}] @param {any} [options={}] @return {Promise<{id:number,username:string,email:string,name:string,state:string,locked:boolean,avatar_url:string,web_url:string,created_at:string,bio:string,location:null,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:boolean,work_information:null,followers:0,following:0,local_time:string,last_sign_in_at:string,confirmed_at:string,theme_id:1,last_activity_on:string,color_scheme_id:2,projects_limit:100,current_sign_in_at:string,identities:[{provider:'github'|'bitbucket'|'google_oauth2',extern_uid:string,}],can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:boolean,private_profile:boolean,commit_email:string}>} */
  get: (request = {}, options = {}) => handler.apply({method: 'get', url: 'api/v4/user', headers: { Accept: 'application/json' }, variable: [], query: []}, [client, request, options]),
  "keys": {
    /** @param {{query?:{page:string,per_page:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}>} */
    get: (request = {}, options = {}) => handler.apply({method: 'get', url: 'api/v4/user', headers: { Accept: 'application/json' }, variable: [], query: []}, [client, request, options]),
    /** @param {{data:{key:string,title:string,expires_at:string,usage_type:auth_and_signing}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/user/keys',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{key:'string',title:'string',expires_at:'string',usage_type:'auth_and_signing'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    /** @param {{params:{key_id:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}>} */
    getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user/keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'key_id',type:'string'}]}, [client, { params}, options]),
    /** @param {{params:{key_id:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}>} */
    delete: ({params} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/user/keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'key_id',type:'string'}]}, [client, { params}, options])
  },
  "gpg_keys": {
    /** @param {{query?:{page:string,per_page:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,key:string,created_at:string}}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user/gpg_keys',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options]),
    /** @param {{data:{key:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:string,key:string,created_at:string}}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/user/gpg_keys',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{key:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    /** @param {{params:{key_id:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,key:string,created_at:string}}>} */
    getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user/gpg_keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'key_id',type:'string'}]}, [client, { params}, options]),
    /** @param {{params:{key_id:string}}} request @param {any} [options={}] @return {Promise<{code:204}>} */
    delete: ({params} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/user/gpg_keys/:key_id',variable:[{name:'key_id',type:'string'}]}, [client, { params}, options]),
    "revoke": {
      /** @param {{params:{key_id:string}}} request @param {any} [options={}] @return {Promise<{code:201}>} */
      post: ({params} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/user/gpg_keys/:key_id/revoke',variable:[{name:'key_id',type:'string'}]}, [client, { params}, options])
    }
  },
  "emails": {
    /** @param {{query?:{page:string,per_page:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,email:string,confirmed_at:string}}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user/emails',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options]),
    /** @param {{data:{email:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:string,email:string,confirmed_at:string}}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/user/emails',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{email:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    /** @param {{params:{email_id:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,email:string,confirmed_at:string}}>} */
    getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user/emails/:email_id',headers:{Accept:'application/json'},variable:[{name:'email_id',type:'string'}]}, [client, { params}, options]),
    /** @param {{params:{email_id:string}}} request @param {any} [options={}] @return {Promise<{code:204}>} */
    delete: ({params} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/user/emails/:email_id',variable:[{name:'email_id',type:'string'}]}, [client, { params}, options])
  },
  "credit_card_validation": {
    /** @param {{params:{user_id:string},data:{credit_card_valistringd_at:string,credit_card_expiration_month:number,credit_card_expiration_year:number,credit_card_holder_name:string,credit_card_mask_number:string,credit_card_type:string,zuora_payment_method_xid:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{user_id:string,credit_card_valistringd_at:string}}>} */
    put: ({params,data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/user/:user_id/credit_card_validation',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'user_id',type:'string'}],data:{mode:'raw',raw:{credit_card_valistringd_at:'string',credit_card_expiration_month:'number',credit_card_expiration_year:'number',credit_card_holder_name:'string',credit_card_mask_number:'string',credit_card_type:'string',zuora_payment_method_xid:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  },
  "preferences": {
    /** @param {{data:{view_diffs_file_by_file:boolean,show_whitespace_in_diffs:boolean,pass_user_identities_to_ci_jwt:boolean}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,user_id:string,view_diffs_file_by_file:string,show_whitespace_in_diffs:string,pass_user_identities_to_ci_jwt:string}}>} */
    put: ({data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/user/preferences',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{view_diffs_file_by_file:'boolean',show_whitespace_in_diffs:'boolean',pass_user_identities_to_ci_jwt:'boolean'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:string,user_id:string,view_diffs_file_by_file:string,show_whitespace_in_diffs:string,pass_user_identities_to_ci_jwt:string}}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user/preferences',headers:{Accept:'application/json'},variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  },
  "activities": {
    /** @param {{query?:{from:string,page:string,per_page:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user/activities',variable:[],query:[{name:'from',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  },
  "status": {
    /** @param {{data:{emoji:string,message:string,availability:string,clear_status_after:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}>} */
    put: ({data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/user/status',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{emoji:'string',message:'string',availability:'string',clear_status_after:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    /** @param {{data:{emoji:string,message:string,availability:string,clear_status_after:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}>} */
    patch: ({data} = {}, options = {}) => handler.apply({method:'patch',url:'api/v4/user/status',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{emoji:'string',message:'string',availability:'string',clear_status_after:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user/status',headers:{Accept:'application/json'},variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  },
  "avatar": {
    /** @param {{data:{avatar:ArrayBuffer}}} request @param {any} [options={}] @return {Promise<{code:200,data:{avatar_url:string}}>} */
    put: ({data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/user/avatar',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{avatar:'ArrayBuffer'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "runners": {
    /** @param {{data:{runner_type:string,group_id:number,project_id:number,description:string,maintenance_note:string,paused:boolean,locked:boolean,access_level:string,run_untagged:boolean,tag_list:[string,string],maximum_timeout:number}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:string,token:string,token_expires_at:string}}|{code:400}|{code:403}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/user/runners',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{runner_type:'string',group_id:'number',project_id:'number',description:'string',maintenance_note:'string',paused:'boolean',locked:'boolean',access_level:'string',run_untagged:'boolean',tag_list:['string','string'],maximum_timeout:'number'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "personal_access_tokens": {
    /** @param {{data:{name:string,scopes:[string,string],expires_at:{}}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,token:string}}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/user/personal_access_tokens',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{name:'string',scopes:['string','string'],expires_at:{}},options:{raw:{language:'json'}}}}, [client, {data}, options])
  }
});