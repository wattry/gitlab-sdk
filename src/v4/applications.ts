export default (client: any, handler: any) => ({
  /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
  post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/applications",resource:"api",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{name:"string",redirect_uri:"string",scopes:"string",confidential:true},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}]),
  get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/applications",resource:"api",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}]),
  delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/applications/:id",resource:"api",variable:[{name:"id",type:"string"}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
  renew_secret: {
    /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}]} */
    post: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/applications/:id/renew-secret",resource:"v4",variable:[{name:"id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}])
  }
})