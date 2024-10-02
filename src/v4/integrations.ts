export default (client: any, handler: any) => ({
  slack: {
    events: {
      /** @param {{data:{token:string,team_id:string,api_app_id:string,event:object,type:string,event_id:string,event_time:number,authed_users:[string,string]},clientOptions:{}}} requestOptions * @return {[{code:200},{code:204},{code:401}]} */
      post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/integrations/slack/events",resource:"integrations",variable:[],headers:{"Content-Type":"application/json"},query:[],data:{mode:"raw",raw:{token:"string",team_id:"string",api_app_id:"string",event:"object",type:"string",event_id:"string",event_time:"number",authed_users:["string","string"]},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
    },
    interactions: {
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      post: ({clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/integrations/slack/interactions",resource:"integrations",variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
    },
    options: {
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      post: ({clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/integrations/slack/options",resource:"integrations",variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
    }
  },
  jira_connect: {
    subscriptions: {
      /** @param {{data:{jwt:string,namespace_path:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{success:{}}},{code:400},{code:401},{code:403},{code:404}]} */
      post: ({data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/integrations/jira_connect/subscriptions",resource:"integrations",variable:[],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{jwt:"string",namespace_path:"string"},options:{raw:{language:"json"}}}}, [client, {data, clientOptions}])
    }
  }
})