export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/broadcast_messages",
    resource: "broadcast_messages",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.12.",
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
    /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  },
  post: {
    method: "post",
    url: "api/v4/broadcast_messages",
    resource: "broadcast_messages",
    variable: [],
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.12.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        message: "string",
        starts_at: {},
        ends_at: {},
        color: "string",
        font: "string",
        target_access_levels: [
          "number",
          "number"
        ],
        target_path: "string",
        broadcast_type: {},
        dismissable: "boolean"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{data:{message:string,starts_at:{},ends_at:{},color:string,font:string,target_access_levels:[number,number],target_path:string,broadcast_type:{},dismissable:boolean},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]} */
    send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
  },
  getOne: {
    method: "get",
    url: "api/v4/broadcast_messages/:id",
    resource: "broadcast_messages",
    variable: [
      {
        name: "id",
        type: "string"
      }
    ],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.12.",
    query: [],
    data: null,
    /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  },
  put: {
    method: "put",
    url: "api/v4/broadcast_messages/:id",
    resource: "broadcast_messages",
    variable: [
      {
        name: "id",
        type: "string"
      }
    ],
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.12.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        message: "string",
        starts_at: "dateTime",
        ends_at: "dateTime",
        color: "string",
        font: "string",
        target_access_levels: [
          "number",
          "number"
        ],
        target_path: "string",
        broadcast_type: "string",
        dismissable: "boolean"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{params:{id:string},data:{message:string,starts_at:dateTime,ends_at:dateTime,color:string,font:string,target_access_levels:[number,number],target_path:string,broadcast_type:string,dismissable:boolean},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]} */
    send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
  },
  delete: {
    method: "delete",
    url: "api/v4/broadcast_messages/:id",
    resource: "broadcast_messages",
    variable: [
      {
        name: "id",
        type: "string"
      }
    ],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.12.",
    query: [],
    data: null,
    /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,message:string,starts_at:string,ends_at:string,color:string,font:string,target_access_levels:string,target_path:string,broadcast_type:string,dismissable:string,active:string}}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  }
});