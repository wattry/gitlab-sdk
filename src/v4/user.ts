export default (client: any, handler: any) => ({
  /** @param {{params:{id:string},query:{hard_delete:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,username:string,email:string,confirmed_at:string}}]} */
  getOne: ({ query = {}, clientOptions = {} } = {}) => handler.apply({ method: "get", url: "api/v4/user", resource: "api", variable: [], headers: { Accept: "application/json" }, query: [], data: null }, [client, { query, clientOptions }]),
  keys: {
    /** @param {{params:{key_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
    get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/keys",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}]),
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/user/keys",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{key:"string",title:"string",expires_at:"dateTime",usage_type:"auth_and_signing"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
    getOne: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/keys/:key_id",resource:"v4",variable:[{name:"key_id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/user/keys/:key_id",resource:"v4",variable:[{name:"key_id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}])
  },
  gpg_keys: {
    /** @param {{params:{key_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
    get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/gpg_keys",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}]),
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/user/gpg_keys",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{key:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
    getOne: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/gpg_keys/:key_id",resource:"v4",variable:[{name:"key_id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/user/gpg_keys/:key_id",resource:"v4",variable:[{name:"key_id",type:"string"}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
    revoke: {
      /** @param {{params:{key_id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      post: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/user/gpg_keys/:key_id/revoke",resource:"user",variable:[{name:"key_id",type:"string"}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  emails: {
    /** @param {{params:{email_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
    get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/emails",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}]),
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/user/emails",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{email:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
    getOne: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/emails/:email_id",resource:"v4",variable:[{name:"email_id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/user/emails/:email_id",resource:"v4",variable:[{name:"email_id",type:"string"}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  credit_card_validation: {
    /** @param {{params:{user_id:string},data:{credit_card_validated_at:dateTime,credit_card_expiration_month:number,credit_card_expiration_year:number,credit_card_holder_name:string,credit_card_mask_number:string,credit_card_type:string,zuora_payment_method_xid:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{user_id:string,credit_card_validated_at:string}}]} */
    put: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/user/:user_id/credit_card_validation",resource:"v4",variable:[{name:"user_id",type:"string"}],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{credit_card_validated_at:"dateTime",credit_card_expiration_month:"number",credit_card_expiration_year:"number",credit_card_holder_name:"string",credit_card_mask_number:"string",credit_card_type:"string",zuora_payment_method_xid:"string"},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}])
  },
  preferences: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,user_id:string,view_diffs_file_by_file:string,show_whitespace_in_diffs:string,pass_user_identities_to_ci_jwt:string}}]} */
    put: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/user/preferences",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{view_diffs_file_by_file:"boolean",show_whitespace_in_diffs:"boolean",pass_user_identities_to_ci_jwt:"boolean"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/preferences",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}])
  },
  activities: {
    /** @param {{query:{from:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
    get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/activities",resource:"v4",variable:[],headers:{},query:[{name:"from",type:"string"},{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}])
  },
  status: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}]} */
    put: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/user/status",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{emoji:"string",message:"string",availability:"string",clear_status_after:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
    patch: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"patch",url:"api/v4/user/status",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{emoji:"string",message:"string",availability:"string",clear_status_after:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user/status",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}])
  },
  avatar: {
    /** @param {{data:{avatar:binary},clientOptions:{}}} requestOptions * @return {[{code:200,data:{avatar_url:string}}]} */
    put: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/user/avatar",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{avatar:"binary"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
  },
  runners: {
    /** @param {{data:{runner_type:string,group_id:number,project_id:number,description:string,maintenance_note:string,paused:boolean,locked:boolean,access_level:string,run_untagged:boolean,tag_list:[string,string],maximum_timeout:number},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,token:string,token_expires_at:string}},{code:400},{code:403}]} */
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/user/runners",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{runner_type:"string",group_id:"number",project_id:"number",description:"string",maintenance_note:"string",paused:"boolean",locked:"boolean",access_level:"string",run_untagged:"boolean",tag_list:["string","string"],maximum_timeout:"number"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
  },
  personal_access_tokens: {
    /** @param {{data:{name:string,scopes:[string,string],expires_at:{}},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,token:string}}]} */
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/user/personal_access_tokens",resource:"v4",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{name:"string",scopes:["string","string"],expires_at:{}},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
  }
})