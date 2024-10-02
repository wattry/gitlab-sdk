export default (client: any, handler: any) => ({
  /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}},{code:401},{code:403},{code:404},{code:412}]} */
  post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/runners",resource:"api",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{token:"string",description:"string",maintainer_note:"string",maintenance_note:"string",info:{name:"string",version:"string",revision:"string",platform:"string",architecture:"string"},active:"boolean",paused:"boolean",locked:"boolean",access_level:"string",run_untagged:"boolean",tag_list:["string","string"],maximum_timeout:"number"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
  delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/runners/:id",resource:"api",variable:[{name:"id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
  get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/runners",resource:"api",variable:[],headers:{Accept:"application/json"},query:[{name:"scope",type:"string"},{name:"type",type:"string"},{name:"paused",type:"string"},{name:"status",type:"string"},{name:"tag_list",type:"string"},{name:"version_prefix",type:"string"},{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}]),
  managers: {
    /** @param {{query:{token:string,system_id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:403},{code:404}]} */
    delete: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/runners/managers",resource:"v4",variable:[],headers:{},query:[{name:"token",type:"string"},{name:"system_id",type:"string"}],data:null}, [client, {query, clientOptions}])
  },
  verify: {
    /** @param {{data:{token:string,system_id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403}]} */
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/runners/verify",resource:"v4",variable:[],headers:{"Content-Type":"application/json"},query:[],data:{mode:"raw",raw:{token:"string",system_id:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
  },
  reset_authentication_token: {
    /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{token:string,token_expires_at:string}},{code:403},{code:404}]} */
    post: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/runners/:id/reset_authentication_token",resource:"v4",variable:[{name:"id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}])
  },
  all: {
    /** @param {{query:{scope:string,type:string,paused:string,status:string,tag_list:string,version_prefix:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}},{code:400},{code:401}]} */
    get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/runners/all",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[{name:"scope",type:"string"},{name:"type",type:"string"},{name:"paused",type:"string"},{name:"status",type:"string"},{name:"tag_list",type:"string"},{name:"version_prefix",type:"string"},{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}])
  },
  getOne: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/runners/:id",resource:"api",variable:[{name:"id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
  put: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/runners/:id",resource:"api",variable:[{name:"id",type:"string"}],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{description:"string",active:"boolean",paused:"boolean",tag_list:["string","string"],run_untagged:"boolean",locked:"boolean",access_level:"string",maximum_timeout:"number",maintenance_note:"string"},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}]),
  jobs: {
    /** @param {{params:{id:string},query:{system_id:string,status:string,order_by:string,sort:string,cursor:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,status:string,stage:string,name:string,ref:string,tag:boolean,coverage:float,allow_failure:boolean,created_at:dateTime,started_at:dateTime,finished_at:dateTime,erased_at:dateTime,duration:float,queued_duration:float,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string},commit:{id:string,short_id:string,created_at:dateTime,parent_ids:[string,string],title:string,message:string,author_name:string,author_email:string,authored_date:dateTime,committer_name:string,committer_email:string,committed_date:dateTime,trailers:object,extended_trailers:object,web_url:string},pipeline:{id:number,iid:number,project_id:number,sha:string,ref:string,status:string,source:string,created_at:dateTime,updated_at:dateTime,web_url:string},failure_reason:string,web_url:string,project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}},{code:401},{code:403},{code:404}]} */
    get: ({params = {},query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/runners/:id/jobs",resource:"v4",variable:[{name:"id",type:"string"}],headers:{Accept:"application/json"},query:[{name:"system_id",type:"string"},{name:"status",type:"string"},{name:"order_by",type:"string"},{name:"sort",type:"string"},{name:"cursor",type:"string"},{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, { params, query, clientOptions}])
  },
  reset_registration_token: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:201,data:{token:string,token_expires_at:string}},{code:403}]} */
    post: ({clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/runners/reset_registration_token",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}])
  }
})