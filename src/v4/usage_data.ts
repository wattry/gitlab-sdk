export default (client: any, request: any) => ({
  service_ping: {
    get: {
      method: "get",
      url: "api/v4/usage_data/service_ping",
      resource: "service_ping",
      variable: [],
      headers: {},
      description: "Introduces in Gitlab 16.9. Requires Personal Access Token with read_service_ping scope.",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  },
  increment_counter: {
    post: {
      method: "post",
      url: "api/v4/usage_data/increment_counter",
      resource: "increment_counter",
      variable: [],
      headers: {
        "Content-Type": "application/json"
      },
      description: "This feature was introduced in GitLab 13.4.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          event: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{event:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  },
  increment_unique_users: {
    post: {
      method: "post",
      url: "api/v4/usage_data/increment_unique_users",
      resource: "increment_unique_users",
      variable: [],
      headers: {
        "Content-Type": "application/json"
      },
      description: "Track usage data event for the current user",
      query: [],
      data: {
        mode: "raw",
        raw: {
          event: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{event:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  },
  track_event: {
    post: {
      method: "post",
      url: "api/v4/usage_data/track_event",
      resource: "track_event",
      variable: [],
      headers: {
        "Content-Type": "application/json"
      },
      description: "This feature was introduced in GitLab 16.2.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          event: "string",
          namespace_id: "number",
          project_id: "number"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{event:string,namespace_id:number,project_id:number},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  },
  metric_definitions: {
    get: {
      method: "get",
      url: "api/v4/usage_data/metric_definitions",
      resource: "metric_definitions",
      variable: [],
      headers: {},
      description: "This feature was introduced in GitLab 13.11.",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  },
  non_sql_metrics: {
    get: {
      method: "get",
      url: "api/v4/usage_data/non_sql_metrics",
      resource: "non_sql_metrics",
      variable: [],
      headers: {},
      description: "This feature was introduced in GitLab 13.11.",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  },
  queries: {
    get: {
      method: "get",
      url: "api/v4/usage_data/queries",
      resource: "queries",
      variable: [],
      headers: {},
      description: "This feature was introduced in GitLab 13.11.",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  }
});