/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface UsageData {
  service_ping: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 401;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
  increment_counter: {
    post: ({ data }: {
      data: {
        event: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
  increment_unique_users: {
    post: ({ data }: {
      data: {
        event: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
  track_event: {
    post: ({ data }: {
      data: {
        event: string;
        namespace_id: number;
        project_id: number;
      };
    }, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
  metric_definitions: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
  non_sql_metrics: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 401;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
  queries: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 401;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
};

export default (client: Client, handler: Handler): UsageData => ({
  "service_ping": {
    get: ({}: {}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/usage_data/service_ping',variable:[]}, [client, {}, options])
  },
  "increment_counter": {
    post: ({data}: {data:{event:string}}, options?: {}): Promise<{code:200}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/usage_data/increment_counter',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{event:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "increment_unique_users": {
    post: ({data}: {data:{event:string}}, options?: {}): Promise<{code:200}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/usage_data/increment_unique_users',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{event:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "track_event": {
    post: ({data}: {data:{event:string,namespace_id:number,project_id:number}}, options?: {}): Promise<{code:200}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/usage_data/track_event',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{event:'string',namespace_id:'number',project_id:'number'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "metric_definitions": {
    get: ({}: {}, options?: {}): Promise<{code:200}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/usage_data/metric_definitions',variable:[]}, [client, {}, options])
  },
  "non_sql_metrics": {
    get: ({}: {}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/usage_data/non_sql_metrics',variable:[]}, [client, {}, options])
  },
  "queries": {
    get: ({}: {}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/usage_data/queries',variable:[]}, [client, {}, options])
  }
})