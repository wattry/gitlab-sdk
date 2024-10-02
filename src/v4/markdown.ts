export default (client: any, handler: any) => ({
  /** @param {{data:{text:string,gfm:boolean,project:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{html:string}},{code:400},{code:401}]} */
  post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/markdown",resource:"api",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{text:"string",gfm:"boolean",project:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
})