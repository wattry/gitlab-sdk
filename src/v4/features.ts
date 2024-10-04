export interface Features {
  get: ({ clientOptions }: {
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      name: string;
      state: string;
      gates: {
        key: {
          value: any;
        };
        value: {
          value: any;
        };
      };
      definition: {
        name: {
          value: any;
        };
        feature_issue_url: {
          value: any;
        };
        introduced_by_url: {
          value: any;
        };
        rollout_issue_url: {
          value: any;
        };
        milestone: {
          value: any;
        };
        log_state_changes: {
          value: any;
        };
        type: {
          value: any;
        };
        group: {
          value: any;
        };
        default_enabled: {
          value: any;
        };
      };
    }, {
      name: string;
      state: string;
      gates: {
        key: {
          value: any;
        };
        value: {
          value: any;
        };
      };
      definition: {
        name: {
          value: any;
        };
        feature_issue_url: {
          value: any;
        };
        introduced_by_url: {
          value: any;
        };
        rollout_issue_url: {
          value: any;
        };
        milestone: {
          value: any;
        };
        log_state_changes: {
          value: any;
        };
        type: {
          value: any;
        };
        group: {
          value: any;
        };
        default_enabled: {
          value: any;
        };
      };
    }];
  }]>;
  definitions: {
    get: ({ clientOptions }: {
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        name: string;
        feature_issue_url: string;
        introduced_by_url: string;
        rollout_issue_url: string;
        milestone: string;
        log_state_changes: string;
        type: string;
        group: string;
        default_enabled: string;
      }, {
        name: string;
        feature_issue_url: string;
        introduced_by_url: string;
        rollout_issue_url: string;
        milestone: string;
        log_state_changes: string;
        type: string;
        group: string;
        default_enabled: string;
      }];
    }]>;
  };
  post: ({ params, data, clientOptions }: {
    params: {
      name: string;
    };
    data: {
      value: string;
      key: string;
      feature_group: string;
      user: string;
      group: string;
      namespace: string;
      project: string;
      repository: string;
      force: boolean;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 201;
    data: {
      name: string;
      state: string;
      gates: {
        key: string;
        value: number;
      };
      definition: {
        name: string;
        feature_issue_url: string;
        introduced_by_url: string;
        rollout_issue_url: string;
        milestone: string;
        log_state_changes: string;
        type: string;
        group: string;
        default_enabled: string;
      };
    };
  }, {
    code: 400;
  }]>;
  delete: ({ params, clientOptions }: {
    params: {
      name: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 204;
  }]>;
};

export default (client: any, handler: any): Features => ({
  get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200,data:[{name:string,state:string,gates:{key:{value:{}},value:{value:{}}},definition:{name:{value:{}},feature_issue_url:{value:{}},introduced_by_url:{value:{}},rollout_issue_url:{value:{}},milestone:{value:{}},log_state_changes:{value:{}},type:{value:{}},group:{value:{}},default_enabled:{value:{}}}},{name:string,state:string,gates:{key:{value:{}},value:{value:{}}},definition:{name:{value:{}},feature_issue_url:{value:{}},introduced_by_url:{value:{}},rollout_issue_url:{value:{}},milestone:{value:{}},log_state_changes:{value:{}},type:{value:{}},group:{value:{}},default_enabled:{value:{}}}}]}]> => handler.apply({method:'get',url:'api/v4/features',resource:'api',variable:[],headers:{Accept:'application/json'},query:[],data:null}, [client, {clientOptions}]),
  "definitions": {
    get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200,data:[{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string},{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string}]}]> => handler.apply({method:'get',url:'api/v4/features/definitions',resource:'v4',variable:[],headers:{Accept:'application/json'},query:[],data:null}, [client, {clientOptions}])
  },
  post: ({params,data,clientOptions}: {params:{name:string},data:{value:string,key:string,feature_group:string,user:string,group:string,namespace:string,project:string,repository:string,force:boolean},clientOptions:any}): Promise<[{code:201,data:{name:string,state:string,gates:{key:string,value:number},definition:{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string}}},{code:400}]> => handler.apply({method:'post',url:'api/v4/features/:name',resource:'api',variable:[{name:'name',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{value:'string',key:'string',feature_group:'string',user:'string',group:'string',namespace:'string',project:'string',repository:'string',force:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  delete: ({params,clientOptions}: {params:{name:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/features/:name',resource:'api',variable:[{name:'name',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
})