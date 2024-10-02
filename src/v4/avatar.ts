export default (client: any, handler: any) => ({
  /** @param {{query:{email:string,size:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{avatar_url:string}}]} */
  get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/avatar",resource:"api",variable:[],headers:{Accept:"application/json"},query:[{name:"email",type:"string"},{name:"size",type:"string"}],data:null}, [client, {query, clientOptions}])
})