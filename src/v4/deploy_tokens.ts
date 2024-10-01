export default (client: any, request: any) => ({
  deploy_tokens: {
    get: {
      method: "get",
      url: "api/v4/deploy_tokens",
      resource: "deploy_tokens",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get a list of all deploy tokens across the GitLab instance. This endpoint requires administrator access. This feature was introduced in GitLab 12.9.",
      query: [
        {
          name: "page",
          type: "string"
        },
        {
          name: "per_page",
          type: "string"
        },
        {
          name: "active",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{page:string,per_page:string,active:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,name:string,username:string,expires_at:dateTime,revoked:boolean,expired:boolean},{id:number,name:string,username:string,expires_at:dateTime,revoked:boolean,expired:boolean}]},{code:401},{code:403}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    }
  }
});