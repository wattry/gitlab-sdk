export default (client: any, handler: any) => ({
  domains: {
    /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{domain:string,url:string,project_id:string,verified:string,verification_code:string,enabled_until:string,auto_ssl_enabled:string,certificate_expiration:{expired:string,expiration:string}}}]} */
    get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/pages/domains",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}])
  }
})