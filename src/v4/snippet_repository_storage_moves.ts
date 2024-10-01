export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/snippet_repository_storage_moves",
    resource: "snippet_repository_storage_moves",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 13.8.",
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
    /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:{value:{}},title:{value:{}},description:{value:{}},visibility:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},project_id:{value:{}},web_url:{value:{}},raw_url:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}}}},{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:{value:{}},title:{value:{}},description:{value:{}},visibility:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},project_id:{value:{}},web_url:{value:{}},raw_url:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}}}}]}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  },
  post: {
    method: "post",
    url: "api/v4/snippet_repository_storage_moves",
    resource: "snippet_repository_storage_moves",
    variable: [],
    headers: {
      "Content-Type": "application/json"
    },
    description: "This feature was introduced in GitLab 13.8.",
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
    url: "api/v4/snippet_repository_storage_moves/:repository_storage_move_id",
    resource: "snippet_repository_storage_moves",
    variable: [
      {
        name: "repository_storage_move_id",
        type: "string"
      }
    ],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 13.8.",
    query: [],
    data: null,
    /** @param {{params:{repository_storage_move_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  }
});