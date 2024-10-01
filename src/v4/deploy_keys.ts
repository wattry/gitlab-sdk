export default (client: any, request: any) => ({
  deploy_keys: {
    get: {
      method: "get",
      url: "api/v4/deploy_keys",
      resource: "deploy_keys",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get a list of all deploy keys across all projects of the GitLab instance. This endpoint requires administrator access and is not available on GitLab.com.",
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
          name: "public",
          type: "string"
        }
      ],
      data: null,      /** @param {{query:{page:string,per_page:string,public:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}},projects_with_readonly_access:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}},{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}},projects_with_readonly_access:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}}]},{code:401},{code:403}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    }
  }
});