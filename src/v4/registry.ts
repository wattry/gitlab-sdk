export default (client: any, request: any) => ({
  repositories: {
    get: {
      method: "get",
      url: "api/v4/registry/repositories/:id",
      resource: "repositories",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 13.6.",
      query: [
        {
          name: "tags",
          type: "string"
        },
        {
          name: "tags_count",
          type: "string"
        },
        {
          name: "size",
          type: "string"
        }
      ],
      data: null,
      /** @param {{params:{id:string},query:{tags:string,tags_count:string,size:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,path:string,project_id:number,location:string,created_at:dateTime,cleanup_policy_started_at:dateTime,tags_count:number,tags:{name:string,path:string,location:string},delete_api_path:string,size:number,status:string}},{code:401},{code:404}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  }
});