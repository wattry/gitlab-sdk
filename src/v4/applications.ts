
export default (client: any, request: any) => ({
  applications: {
    post: {
      method: "post",
      url: "api/v4/applications",
      resource: "applications",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 10.5",
      query: [],
      data: {
        mode: "raw",
        raw: {
          name: "string",
          redirect_uri: "string",
          scopes: "string",
          confidential: true
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },
      /** @param {{data:{name:string,redirect_uri:string,scopes:string,confidential:true},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    get: {
      method: "get",
      url: "api/v4/applications",
      resource: "applications",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "List all registered applications",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean},{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean}]}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/applications/:id",
      resource: "applications",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Delete a specific application",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    "renew-secret": {
      post: {
        method: "post",
        url: "api/v4/applications/:id/renew-secret",
        resource: "renew-secret",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Renew the secret of a specific application",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,application_id:string,application_name:string,callback_url:string,confidential:boolean,secret:string}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    }
  }
});