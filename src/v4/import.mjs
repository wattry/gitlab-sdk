/* eslint-disable max-len */
export default (client, handler) => ({
  "bitbucket": {
    /** @param {{data:{bitbucket_username:string,bitbucket_app_password:string,repo_path:string,target_namespace:string,string_name:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string,import_source:string,import_status:string,human_import_status_name:string,provider_link:string,import_error:string,import_warning:string,relation_type:string}}|{code:400}|{code:401}|{code:403}|{code:422}|{code:503}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/import/bitbucket',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{bitbucket_username:'string',bitbucket_app_password:'string',repo_path:'string',target_namespace:'string',string_name:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "bitbucket_server": {
    /** @param {{data:{bitbucket_server_url:string,bitbucket_server_username:string,personal_access_token:string,bitbucket_server_project:string,bitbucket_server_repo:string,string_name:string,string_namespace:string,timeout_strategy:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string}}|{code:400}|{code:401}|{code:403}|{code:422}|{code:503}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/import/bitbucket_server',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{bitbucket_server_url:'string',bitbucket_server_username:'string',personal_access_token:'string',bitbucket_server_project:'string',bitbucket_server_repo:'string',string_name:'string',string_namespace:'string',timeout_strategy:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "github": {
    /** @param {{data:{personal_access_token:string,repo_id:number,target_namespace:string,string_name:string,github_hostname:string,optional_stages:object,timeout_strategy:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string}}|{code:400}|{code:401}|{code:403}|{code:422}|{code:503}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/import/github',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{personal_access_token:'string',repo_id:'number',target_namespace:'string',string_name:'string',github_hostname:'string',optional_stages:'object',timeout_strategy:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
    "cancel": {
      /** @param {{data:{project_id:number}}} request @param {any} [options={}] @return {Promise<{code:200,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string,import_source:string,import_status:string,human_import_status_name:string,provider_link:string,import_error:string,import_warning:string,relation_type:string}}|{code:400}|{code:401}|{code:403}|{code:404}|{code:503}>} */
      post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/import/github/cancel',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{project_id:'number'},options:{raw:{language:'json'}}}}, [client, {data}, options])
    },
    "gists": {
      /** @param {{data:{personal_access_token:string}}} request @param {any} [options={}] @return {Promise<{code:202}|{code:401}|{code:422}|{code:429}>} */
      post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/import/github/gists',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{personal_access_token:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
    }
  }
});