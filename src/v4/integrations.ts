export default (client: any, handler: any) => ({
  "slack": {
    "events": {
      post: ({data,clientOptions}: {data:{token:string,team_id:string,api_app_id:string,event:any,type:string,event_id:string,event_time:number,authed_users:[string,string]},clientOptions:any}): Promise<[{code:200},{code:204},{code:401}]> => handler.apply({method:'post',url:'api/v4/integrations/slack/events',resource:'integrations',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{token:'string',team_id:'string',api_app_id:'string',event:'object',type:'string',event_id:'string',event_time:'number',authed_users:['string','string']},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
    },
    "interactions": {
      post: ({clientOptions}: {clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/integrations/slack/interactions',resource:'integrations',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
    },
    "options": {
      post: ({clientOptions}: {clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/integrations/slack/options',resource:'integrations',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
    }
  },
  "jira_connect": {
    "subscriptions": {
      post: ({data,clientOptions}: {data:{jwt:string,namespace_path:string},clientOptions:any}): Promise<[{code:201,data:{success:{}}},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/integrations/jira_connect/subscriptions',resource:'integrations',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{jwt:'string',namespace_path:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
    }
  }
})