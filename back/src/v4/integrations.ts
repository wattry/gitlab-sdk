/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Integrations {
  slack: {
    events: {
      post: ({ data }: {
        data: {
          token: string;
          team_id: string;
          api_app_id: string;
          event: object;
          type: string;
          event_id: string;
          event_time: number;
          authed_users: [string, string];
        };
      }, options?: {}) => Promise<{
        code: 200;
      } | {
        code: 204;
      } | {
        code: 401;
      }>;
    };
    interactions: {
      post: ({ }: {}, options?: {}) => Promise<{
        code: 201;
      }>;
    };
    options: {
      post: ({ }: {}, options?: {}) => Promise<{
        code: 201;
      }>;
    };
  };
  jira_connect: {
    subscriptions: {
      post: ({ data }: {
        data: {
          jwt: string;
          namespace_path: string;
        };
      }, options?: {}) => Promise<{
        code: 201;
        data: {
          success: {};
        };
      } | {
        code: 400;
      } | {
        code: 401;
      } | {
        code: 403;
      } | {
        code: 404;
      }>;
    };
  };
};

export default (client: Client, handler: Handler): Integrations => ({
  "slack": {
    "events": {
      post: ({data}: {data:{token:string,team_id:string,api_app_id:string,event:object,type:string,event_id:string,event_time:number,authed_users:[string,string]}}, options?: {}): Promise<{code:200}|{code:204}|{code:401}> => handler.apply({method:'post',url:'api/v4/integrations/slack/events',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{token:'string',team_id:'string',api_app_id:'string',event:'object',type:'string',event_id:'string',event_time:'number',authed_users:['string','string']},options:{raw:{language:'json'}}}}, [client, {data}, options])
    },
    "interactions": {
      post: ({}: {}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/integrations/slack/interactions',variable:[]}, [client, {}, options])
    },
    "options": {
      post: ({}: {}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/integrations/slack/options',variable:[]}, [client, {}, options])
    }
  },
  "jira_connect": {
    "subscriptions": {
      post: ({data}: {data:{jwt:string,namespace_path:string}}, options?: {}): Promise<{code:201,data:{success:{}}}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/integrations/jira_connect/subscriptions',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{jwt:'string',namespace_path:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
    }
  }
})