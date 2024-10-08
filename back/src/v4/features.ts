/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Features {
  get: ({ }: {}, options?: {}) => Promise<{
    code: 200;
    data: [{
      name: string;
      state: string;
      gates: {
        key: any;
        value: any;
      };
      definition: {
        name: any;
        feature_issue_url: any;
        introduced_by_url: any;
        rollout_issue_url: any;
        milestone: any;
        log_state_changes: any;
        type: any;
        group: any;
        default_enabled: any;
      };
    }, {
      name: string;
      state: string;
      gates: {
        key: any;
        value: any;
      };
      definition: {
        name: any;
        feature_issue_url: any;
        introduced_by_url: any;
        rollout_issue_url: any;
        milestone: any;
        log_state_changes: any;
        type: any;
        group: any;
        default_enabled: any;
      };
    }];
  }>;
  definitions: {
    get: ({ }: {}, options?: {}) => Promise<{
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
    }>;
  };
  post: ({ params, data }: {
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
  }, options?: {}) => Promise<{
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
  } | {
    code: 400;
  }>;
  delete: ({ params }: {
    params: {
      name: string;
    };
  }, options?: {}) => Promise<{
    code: 204;
  }>;
};

export default (client: any, handler: any): Features => ({
  get: ({}: {}, options?: {}): Promise<{code:200,data:[{name:string,state:string,gates:{key:any,value:any},definition:{name:any,feature_issue_url:any,introduced_by_url:any,rollout_issue_url:any,milestone:any,log_state_changes:any,type:any,group:any,default_enabled:any}},{name:string,state:string,gates:{key:any,value:any},definition:{name:any,feature_issue_url:any,introduced_by_url:any,rollout_issue_url:any,milestone:any,log_state_changes:any,type:any,group:any,default_enabled:any}}]}> => handler.apply({method:'get',url:'api/v4/features',headers:{Accept:'application/json'},variable:[]}, [client, {}, options]),
  "definitions": {
    get: ({}: {}, options?: {}): Promise<{code:200,data:[{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string},{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string}]}> => handler.apply({method:'get',url:'api/v4/features/definitions',headers:{Accept:'application/json'},variable:[]}, [client, {}, options])
  },
  post: ({params,data}: {params:{name:string},data:{value:string,key:string,feature_group:string,user:string,group:string,namespace:string,project:string,repository:string,force:boolean}}, options?: {}): Promise<{code:201,data:{name:string,state:string,gates:{key:string,value:number},definition:{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string}}}|{code:400}> => handler.apply({method:'post',url:'api/v4/features/:name',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'name',type:'string'}],data:{mode:'raw',raw:{value:'string',key:'string',feature_group:'string',user:'string',group:'string',namespace:'string',project:'string',repository:'string',force:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  delete: ({params}: {params:{name:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/features/:name',variable:[{name:'name',type:'string'}]}, [client, { params}, options])
})