/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface UserCounts {
  get: ({ }: {}, options?: {}) => Promise<{
    code: 200;
    data: {
      merge_requests: number;
      assigned_issues: number;
      assigned_merge_requests: number;
      review_requested_merge_requests: number;
      todos: number;
    };
  }>;
};

export default (client: Client, handler: Handler): UserCounts => ({
  get: ({}: {}, options?: {}): Promise<{code:200,data:{merge_requests:number,assigned_issues:number,assigned_merge_requests:number,review_requested_merge_requests:number,todos:number}}> => handler.apply({method:'get',url:'api/v4/user_counts',headers:{Accept:'application/json'},variable:[]}, [client, {}, options])
})