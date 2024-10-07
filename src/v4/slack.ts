/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Slack {
    trigger: {
        post: ({ data }: {
            data: {
                string: string;
            };
        }, options?: {}) => Promise<{
            code: 201;
        } | {
            code: 401;
        }>;
    };
};

export default (client: Client, handler: Handler): Slack => ({
  "trigger": {
    post: ({data}: {data:{string:string}}, options?: {}): Promise<{code:201}|{code:401}> => handler.apply({method:'post',url:'api/v4/slack/trigger',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{string:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  }
})