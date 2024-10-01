export default (client: any, request: any) => ({
  feature_flags: {
    unleash: {
      get: {
        method: "get",
        url: "api/v4/feature_flags/unleash/:project_id",
        resource: "unleash",
        variable: [
          {
            name: "project_id",
            type: "string"
          }
        ],
        headers: {},
        description: "",
        query: [
          {
            name: "instance_id",
            type: "string"
          },
          {
            name: "app_name",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{project_id:string},query:{instance_id:string,app_name:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      features: {
        get: {
          method: "get",
          url: "api/v4/feature_flags/unleash/:project_id/features",
          resource: "features",
          variable: [
            {
              name: "project_id",
              type: "string"
            }
          ],
          headers: {},
          description: "Get a list of features (deprecated, v2 client support)",
          query: [
            {
              name: "instance_id",
              type: "string"
            },
            {
              name: "app_name",
              type: "string"
            }
          ],
          data: null,
          /** @param {{params:{project_id:string},query:{instance_id:string,app_name:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        }
      },
      client: {
        features: {
          get: {
            method: "get",
            url: "api/v4/feature_flags/unleash/:project_id/client/features",
            resource: "features",
            variable: [
              {
                name: "project_id",
                type: "string"
              }
            ],
            headers: {},
            description: "Get a list of features",
            query: [
              {
                name: "instance_id",
                type: "string"
              },
              {
                name: "app_name",
                type: "string"
              }
            ],
            data: null,
            /** @param {{params:{project_id:string},query:{instance_id:string,app_name:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
            send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
          }
        },
        register: {
          post: {
            method: "post",
            url: "api/v4/feature_flags/unleash/:project_id/client/register",
            resource: "register",
            variable: [
              {
                name: "project_id",
                type: "string"
              }
            ],
            headers: {
              "Content-Type": "application/json"
            },
            description: "",
            query: [],
            data: {
              mode: "raw",
              raw: {
                instance_id: "string",
                app_name: "string"
              },
              options: {
                raw: {
                  language: "json"
                }
              }
            },

            /** @param {{params:{project_id:string},data:{instance_id:string,app_name:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
            send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
          }
        },
        metrics: {
          post: {
            method: "post",
            url: "api/v4/feature_flags/unleash/:project_id/client/metrics",
            resource: "metrics",
            variable: [
              {
                name: "project_id",
                type: "string"
              }
            ],
            headers: {
              "Content-Type": "application/json"
            },
            description: "",
            query: [],
            data: {
              mode: "raw",
              raw: {
                instance_id: "string",
                app_name: "string"
              },
              options: {
                raw: {
                  language: "json"
                }
              }
            },

            /** @param {{params:{project_id:string},data:{instance_id:string,app_name:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
            send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
          }
        }
      }
    }
  }
});