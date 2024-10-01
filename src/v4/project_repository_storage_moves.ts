export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/project_repository_storage_moves",
    resource: "project_repository_storage_moves",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 13.0.",
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
    /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}},{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}}]}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  },
  post: {
    method: "post",
    url: "api/v4/project_repository_storage_moves",
    resource: "project_repository_storage_moves",
    variable: [],
    headers: {
      "Content-Type": "application/json"
    },
    description: "This feature was introduced in GitLab 13.7.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        source_storage_name: "string",
        destination_storage_name: "string"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{data:{source_storage_name:string,destination_storage_name:string},clientOptions:{}}} requestOptions * @return {[{code:202}]} */
    send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
  },
  getOne: {
    method: "get",
    url: "api/v4/project_repository_storage_moves/:repository_storage_move_id",
    resource: "project_repository_storage_moves",
    variable: [
      {
        name: "repository_storage_move_id",
        type: "string"
      }
    ],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 13.0.",
    query: [],
    data: null,
    /** @param {{params:{repository_storage_move_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  }
});