export interface UsageData {
  service_ping: {
    get: ({ clientOptions }: {
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
  increment_counter: {
    post: ({ data, clientOptions }: {
      data: {
        event: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
  increment_unique_users: {
    post: ({ data, clientOptions }: {
      data: {
        event: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
  track_event: {
    post: ({ data, clientOptions }: {
      data: {
        event: string;
        namespace_id: number;
        project_id: number;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
  metric_definitions: {
    get: ({ clientOptions }: {
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
  non_sql_metrics: {
    get: ({ clientOptions }: {
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
  queries: {
    get: ({ clientOptions }: {
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
};

export default (client: any, handler: any): UsageData => ({
  "service_ping": {
    get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/usage_data/service_ping',resource:'v4',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  },
  "increment_counter": {
    post: ({data,clientOptions}: {data:{event:string},clientOptions:any}): Promise<[{code:200},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/usage_data/increment_counter',resource:'v4',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{event:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  },
  "increment_unique_users": {
    post: ({data,clientOptions}: {data:{event:string},clientOptions:any}): Promise<[{code:200},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/usage_data/increment_unique_users',resource:'v4',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{event:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  },
  "track_event": {
    post: ({data,clientOptions}: {data:{event:string,namespace_id:number,project_id:number},clientOptions:any}): Promise<[{code:200},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/usage_data/track_event',resource:'v4',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{event:'string',namespace_id:'number',project_id:'number'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  },
  "metric_definitions": {
    get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/usage_data/metric_definitions',resource:'v4',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  },
  "non_sql_metrics": {
    get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/usage_data/non_sql_metrics',resource:'v4',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  },
  "queries": {
    get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/usage_data/queries',resource:'v4',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  }
})