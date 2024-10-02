export default (client: any, handler: any) => ({
  service_ping: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/usage_data/service_ping",resource:"v4",variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  },
  increment_counter: {
    /** @param {{data:{event:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/usage_data/increment_counter",resource:"v4",variable:[],headers:{"Content-Type":"application/json"},query:[],data:{mode:"raw",raw:{event:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
  },
  increment_unique_users: {
    /** @param {{data:{event:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/usage_data/increment_unique_users",resource:"v4",variable:[],headers:{"Content-Type":"application/json"},query:[],data:{mode:"raw",raw:{event:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
  },
  track_event: {
    /** @param {{data:{event:string,namespace_id:number,project_id:number},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
    post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/usage_data/track_event",resource:"v4",variable:[],headers:{"Content-Type":"application/json"},query:[],data:{mode:"raw",raw:{event:"string",namespace_id:"number",project_id:"number"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
  },
  metric_definitions: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/usage_data/metric_definitions",resource:"v4",variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  },
  non_sql_metrics: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/usage_data/non_sql_metrics",resource:"v4",variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  },
  queries: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/usage_data/queries",resource:"v4",variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  }
})