export default (client: any, handler: any) => ({
  trigger: {
    /** @param {{data:{text:string},clientOptions:{}}} requestOptions * @return {[{code:201},{code:401}]} */
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/slack/trigger",resource:"v4",variable:[],headers:{"Content-Type":"application/json"},query:[],data:{mode:"raw",raw:{text:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
  }
})