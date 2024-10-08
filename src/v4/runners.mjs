/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {{data:{token:string,description:string,maintainer_note:string,maintenance_note:string,info:{name:string,version:string,revision:string,platform:string,architecture:string},active:boolean,paused:boolean,locked:boolean,access_level:string,run_untagged:boolean,tag_list:[string,string],maximum_timeout:number}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:string,token:string,token_expires_at:string}}|{code:400}|{code:403}|{code:410}>} */
  post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/runners',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{token:'string',description:'string',maintainer_note:'string',maintenance_note:'string',info:{name:'string',version:'string',revision:'string',platform:'string',architecture:'string'},active:'boolean',paused:'boolean',locked:'boolean',access_level:'string',run_untagged:'boolean',tag_list:['string','string'],maximum_timeout:'number'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  /** @param {{params:{id:string}}} request @param {any} [options={}] @return {Promise<{code:204,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}}|{code:401}|{code:403}|{code:404}|{code:412}>} */
  delete: ({params} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/runners/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  /** @param {{query?:{scope:string,type:string,paused:string,status:string,tag_list:string,version_prefix:string,page:string,per_page:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}}|{code:400}|{code:401}>} */
  get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/runners',headers:{Accept:'application/json'},variable:[],query:[{name:'scope',type:'string'},{name:'type',type:'string'},{name:'paused',type:'string'},{name:'status',type:'string'},{name:'tag_list',type:'string'},{name:'version_prefix',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options]),
  "managers": {
    /** @param {{query?:{token:string,system_id:string}}} request @param {any} [options={}] @return {Promise<{code:204}|{code:400}|{code:403}|{code:404}>} */
    delete: ({query} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/runners/managers',variable:[],query:[{name:'token',type:'string'},{name:'system_id',type:'string'}]}, [client, {query}, options])
  },
  "verify": {
    /** @param {{data:{token:string,system_id:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:403}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/runners/verify',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{token:'string',system_id:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "reset_authentication_token": {
    /** @param {{params:{id:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{token:string,token_expires_at:string}}|{code:403}|{code:404}>} */
    post: ({params} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/runners/:id/reset_authentication_token',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "all": {
    /** @param {{query?:{scope:string,type:string,paused:string,status:string,tag_list:string,version_prefix:string,page:string,per_page:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}}|{code:400}|{code:401}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/runners/all',headers:{Accept:'application/json'},variable:[],query:[{name:'scope',type:'string'},{name:'type',type:'string'},{name:'paused',type:'string'},{name:'status',type:'string'},{name:'tag_list',type:'string'},{name:'version_prefix',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  },
  /** @param {{params:{id:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string,tag_list:string,run_untagged:string,locked:string,maximum_timeout:string,access_level:string,version:string,revision:string,platform:string,architecture:string,contacted_at:string,maintenance_note:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},groups:{id:string,web_url:string,name:string}}}|{code:401}|{code:403}|{code:404}>} */
  getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/runners/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  /** @param {{params:{id:string},data:{description:string,active:boolean,paused:boolean,tag_list:[string,string],run_untagged:boolean,locked:boolean,access_level:string,maximum_timeout:number,maintenance_note:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string,tag_list:string,run_untagged:string,locked:string,maximum_timeout:string,access_level:string,version:string,revision:string,platform:string,architecture:string,contacted_at:string,maintenance_note:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},groups:{id:string,web_url:string,name:string}}}|{code:400}|{code:401}|{code:403}|{code:404}>} */
  put: ({params,data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/runners/:id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{description:'string',active:'boolean',paused:'boolean',tag_list:['string','string'],run_untagged:'boolean',locked:'boolean',access_level:'string',maximum_timeout:'number',maintenance_note:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  "jobs": {
    /** @param {{params:{id:string},query?:{system_id:string,status:string,order_by:string,sort:string,cursor:string,page:string,per_page:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,status:string,stage:string,name:string,ref:string,tag:boolean,coverage:float,allow_failure:boolean,created_at:string,started_at:string,finished_at:string,erased_at:string,duration:float,queued_duration:float,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string},commit:{id:string,short_id:string,created_at:string,parent_ids:[string,string],title:string,message:string,author_name:string,author_email:string,authored_string:string,committer_name:string,committer_email:string,committed_string:string,trailers:object,extended_trailers:object,web_url:string},pipeline:{id:number,iid:number,project_id:number,sha:string,ref:string,status:string,source:string,created_at:string,upstringd_at:string,web_url:string},failure_reason:string,web_url:string,project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string}}}|{code:401}|{code:403}|{code:404}>} */
    get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/runners/:id/jobs',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'system_id',type:'string'},{name:'status',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'cursor',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
  },
  "reset_registration_token": {
    /** @param {{}} request @param {any} [options={}] @return {Promise<{code:201,data:{token:string,token_expires_at:string}}|{code:403}>} */
    post: (request = {}, options = {}) => handler.apply({method:'post',url:'api/v4/runners/reset_registration_token',headers:{Accept:'application/json'},variable:[]}, [client, request, options])
  }
});