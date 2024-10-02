export default (client: any, handler: any) => ({
  batched_background_migrations: {
    /** @param {{params:{id:string},query:{database:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:float,created_at:dateTime}},{code:401},{code:403},{code:404}]} */
    get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/admin/batched_background_migrations",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[{name:"database",type:"string"}],data:null}, [client, {query, clientOptions}]),
    getOne: ({params = {},query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/admin/batched_background_migrations/:id",resource:"v4",variable:[{name:"id",type:"string"}],headers:{Accept:"application/json"},query:[{name:"database",type:"string"}],data:null}, [client, { params, query, clientOptions}]),
    resume: {
      /** @param {{params:{id:string},data:{database:main},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:float,created_at:dateTime}},{code:401},{code:403},{code:404},{code:422}]} */
      put: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/admin/batched_background_migrations/:id/resume",resource:"admin",variable:[{name:"id",type:"string"}],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{database:"main"},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}])
    },
    pause: {
      /** @param {{params:{id:string},data:{database:main},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:float,created_at:dateTime}},{code:401},{code:403},{code:404},{code:422}]} */
      put: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/admin/batched_background_migrations/:id/pause",resource:"admin",variable:[{name:"id",type:"string"}],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{database:"main"},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}])
    }
  },
  ci: {
    variables: {
      /** @param {{params:{key:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]} */
      get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/admin/ci/variables",resource:"admin",variable:[],headers:{Accept:"application/json"},query:[{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}]),
      post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/admin/ci/variables",resource:"admin",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{key:"string",value:"string",description:"string",protected:"boolean",masked:"boolean",raw:"boolean",variable_type:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
      getOne: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/admin/ci/variables/:key",resource:"admin",variable:[{name:"key",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
      put: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/admin/ci/variables/:key",resource:"admin",variable:[{name:"key",type:"string"}],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{description:"string",value:"string",protected:"boolean",masked:"boolean",raw:"boolean",variable_type:"string"},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}]),
      delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/admin/ci/variables/:key",resource:"admin",variable:[{name:"key",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  databases: {
    dictionary: {
      tables: {
        /** @param {{params:{database_name:string,table_name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{table_name:string,feature_categories:[string,string]}},{code:401},{code:403},{code:404}]} */
        get: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/admin/databases/:database_name/dictionary/tables/:table_name",resource:"databases",variable:[{name:"database_name",type:"string"},{name:"table_name",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}])
      }
    }
  },
  clusters: {
    /** @param {{params:{cluster_id:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}},{code:403},{code:404}]} */
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/admin/clusters",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}]),
    getOne: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/admin/clusters/:cluster_id",resource:"v4",variable:[{name:"cluster_id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"put",url:"api/v4/admin/clusters/:cluster_id",resource:"v4",variable:[{name:"cluster_id",type:"string"}],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{name:"string",enabled:"boolean",environment_scope:"string",namespace_per_environment:true,domain:"string",management_project_id:"number",managed:"boolean",platform_kubernetes_attributes:{api_url:"string",token:"string",ca_cert:"string",namespace:"string"}},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}]),
    delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/admin/clusters/:cluster_id",resource:"v4",variable:[{name:"cluster_id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
    add: {
      /** @param {{data:{name:string,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string,authorization_type:rbac},enabled:true,environment_scope:*,namespace_per_environment:true,domain:string,management_project_id:number,managed:true},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}},{code:400},{code:403},{code:404}]} */
      post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/admin/clusters/add",resource:"admin",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{name:"string",platform_kubernetes_attributes:{api_url:"string",token:"string",ca_cert:"string",namespace:"string",authorization_type:"rbac"},enabled:true,environment_scope:"*",namespace_per_environment:true,domain:"string",management_project_id:"number",managed:true},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
    }
  },
  migrations: {
    mark: {
      /** @param {{params:{timestamp:string},data:{database:main},clientOptions:{}}} requestOptions * @return {[{code:201},{code:401},{code:403},{code:404},{code:422}]} */
      post: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/admin/migrations/:timestamp/mark",resource:"admin",variable:[{name:"timestamp",type:"string"}],headers:{"Content-Type":"application/json"},query:[],data:{mode:"raw",raw:{database:"main"},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}])
    }
  }
})