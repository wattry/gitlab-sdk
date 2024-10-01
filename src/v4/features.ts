export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/features",
    resource: "features",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "Get a list of all persisted features, with its gate values.",
    query: [],
    data: null,
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:[{name:string,state:string,gates:{key:{value:{}},value:{value:{}}},definition:{name:{value:{}},feature_issue_url:{value:{}},introduced_by_url:{value:{}},rollout_issue_url:{value:{}},milestone:{value:{}},log_state_changes:{value:{}},type:{value:{}},group:{value:{}},default_enabled:{value:{}}}},{name:string,state:string,gates:{key:{value:{}},value:{value:{}}},definition:{name:{value:{}},feature_issue_url:{value:{}},introduced_by_url:{value:{}},rollout_issue_url:{value:{}},milestone:{value:{}},log_state_changes:{value:{}},type:{value:{}},group:{value:{}},default_enabled:{value:{}}}}]}]} */
    send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
  },
  definitions: {
    get: {
      method: "get",
      url: "api/v4/features/definitions",
      resource: "definitions",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get a list of all feature definitions.",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:[{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string},{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string}]}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  },
  post: {
    method: "post",
    url: "api/v4/features/:name",
    resource: "features",
    variable: [
      {
        name: "name",
        type: "string"
      }
    ],
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    description: "Set a feature's gate value. If a feature with the given name doesn't exist yet, it's created. The value can be a boolean, or an integer to indicate percentage of time.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        value: "string",
        key: "string",
        feature_group: "string",
        user: "string",
        group: "string",
        namespace: "string",
        project: "string",
        repository: "string",
        force: "boolean"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{params:{name:string},data:{value:string,key:string,feature_group:string,user:string,group:string,namespace:string,project:string,repository:string,force:boolean},clientOptions:{}}} requestOptions * @return {[{code:201,data:{name:string,state:string,gates:{key:string,value:number},definition:{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string}}},{code:400}]} */
    send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
  },
  delete: {
    method: "delete",
    url: "api/v4/features/:name",
    resource: "features",
    variable: [
      {
        name: "name",
        type: "string"
      }
    ],
    headers: {},
    description: "Removes a feature gate. Response is equal when the gate exists, or doesn't.",
    query: [],
    data: null,
    /** @param {{params:{name:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  }
});