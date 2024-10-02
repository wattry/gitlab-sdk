export default (client: any, handler: any) => ({
  /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400}]} */
  get: ({query = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/personal_access_tokens",resource:"api",variable:[],headers:{Accept:"application/json"},query:[{name:"user_id",type:"string"},{name:"revoked",type:"string"},{name:"state",type:"string"},{name:"created_before",type:"string"},{name:"created_after",type:"string"},{name:"last_used_before",type:"string"},{name:"last_used_after",type:"string"},{name:"search",type:"string"},{name:"page",type:"string"},{name:"per_page",type:"string"}],data:null}, [client, {query, clientOptions}]),
  self: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:204},{code:400}]} */
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/personal_access_tokens/self",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}]),
    delete: ({clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/personal_access_tokens/self",resource:"v4",variable:[],headers:{},query:[],data:null}, [client, {clientOptions}]),
    rotate: {
      /** @param {{data:{expires_at:date},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,token:string}},{code:400},{code:401},{code:403},{code:405}]} */
      post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/personal_access_tokens/self/rotate",resource:"personal_access_tokens",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{expires_at:"date"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
    }
  },
  getOne: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/personal_access_tokens/:id",resource:"api",variable:[{name:"id",type:"string"}],headers:{Accept:"application/json"},query:[],data:null}, [client, { params, clientOptions}]),
  delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/personal_access_tokens/:id",resource:"api",variable:[{name:"id",type:"string"}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
  rotate: {
    /** @param {{params:{id:string},data:{expires_at:date},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,token:string}}]} */
    post: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/personal_access_tokens/:id/rotate",resource:"v4",variable:[{name:"id",type:"string"}],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{expires_at:"date"},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}])
  }
})