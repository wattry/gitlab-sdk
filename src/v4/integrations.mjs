/* eslint-disable max-len */
export default (client, handler) => ({
  "slack": {
    "events": {
      /** @param {{data:{token:string,team_id:string,api_app_id:string,event:object,type:string,event_id:string,event_time:number,authed_users:[string,string]}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:204}|{code:401}>} */
      post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/integrations/slack/events',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{token:'string',team_id:'string',api_app_id:'string',event:'object',type:'string',event_id:'string',event_time:'number',authed_users:['string','string']},options:{raw:{language:'json'}}}}, [client, {data}, options])
    },
    "interactions": {
      /** @param {{}} request @param {any} [options={}] @return {Promise<{code:201}>} */
      post: (request = {}, options = {}) => handler.apply({method:'post',url:'api/v4/integrations/slack/interactions',variable:[]}, [client, request, options])
    },
    "options": {
      /** @param {{}} request @param {any} [options={}] @return {Promise<{code:201}>} */
      post: (request = {}, options = {}) => handler.apply({method:'post',url:'api/v4/integrations/slack/options',variable:[]}, [client, request, options])
    }
  },
  "jira_connect": {
    "subscriptions": {
      /** @param {{data:{jwt:string,namespace_path:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{success:{}}}|{code:400}|{code:401}|{code:403}|{code:404}>} */
      post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/integrations/jira_connect/subscriptions',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{jwt:'string',namespace_path:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
    }
  }
});