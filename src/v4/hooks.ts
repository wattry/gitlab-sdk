export default (client: any, request: any) => ({
  hooks: {
    get: {
      method: "get",
      url: "api/v4/hooks",
      resource: "hooks",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get a list of all system hooks",
      query: [
        {
          name: "page",
          type: "string"
        },
        {
          name: "per_page",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,url:string,name:string,description:string,created_at:dateTime,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:dateTime,url_variables:[object,object],custom_webhook_template:string},{id:string,url:string,name:string,description:string,created_at:dateTime,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:dateTime,url_variables:[object,object],custom_webhook_template:string}]}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/hooks/:hook_id",
      resource: "hooks",
      variable: [
        {
          name: "hook_id",
          type: "string"
        }
      ],
      headers: {},
      description: "",
      query: [],
      data: null,
      /** @param {{params:{hook_id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/hooks/:hook_id",
      resource: "hooks",
      variable: [
        {
          name: "hook_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get a system hook by its ID. Introduced in GitLab 14.9.",
      query: [],
      data: null,
      /** @param {{params:{hook_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,url:string,name:string,description:string,created_at:dateTime,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:dateTime,url_variables:[object,object],custom_webhook_template:string}},{code:404}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/hooks/:hook_id",
      resource: "hooks",
      variable: [
        {
          name: "hook_id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Edits a system hook",
      query: [],
      data: {
        mode: "raw",
        raw: {
          url: "string",
          name: "string",
          description: "string",
          token: "string",
          push_events: "boolean",
          tag_push_events: "boolean",
          merge_requests_events: "boolean",
          repository_update_events: "boolean",
          enable_ssl_verification: "boolean",
          url_variables: [
            {
              key: "string",
              value: "string"
            },
            {
              key: "string",
              value: "string"
            }
          ]
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{hook_id:string},data:{url:string,name:string,description:string,token:string,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,url_variables:[{key:string,value:string},{key:string,value:string}]},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,url:string,name:string,description:string,created_at:dateTime,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:dateTime,url_variables:[object,object],custom_webhook_template:string}},{code:400},{code:404},{code:422}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/hooks/:hook_id",
      resource: "hooks",
      variable: [
        {
          name: "hook_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Deletes a system hook",
      query: [],
      data: null,
      /** @param {{params:{hook_id:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{id:string,url:string,name:string,description:string,created_at:dateTime,push_events:boolean,tag_push_events:boolean,merge_requests_events:boolean,repository_update_events:boolean,enable_ssl_verification:boolean,alert_status:symbol,disabled_until:dateTime,url_variables:[object,object],custom_webhook_template:string}},{code:404}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    url_variables: {
      put: {
        method: "put",
        url: "api/v4/hooks/:hook_id/url_variables/:key",
        resource: "url_variables",
        variable: [
          {
            name: "hook_id",
            type: "string"
          },
          {
            name: "key",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json"
        },
        description: "Set a url variable",
        query: [],
        data: {
          mode: "raw",
          raw: {
            value: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{hook_id:string,key:string},data:{value:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/hooks/:hook_id/url_variables/:key",
        resource: "url_variables",
        variable: [
          {
            name: "hook_id",
            type: "string"
          },
          {
            name: "key",
            type: "string"
          }
        ],
        headers: {},
        description: "Un-Set a url variable",
        query: [],
        data: null,
        /** @param {{params:{hook_id:string,key:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    }
  }
});