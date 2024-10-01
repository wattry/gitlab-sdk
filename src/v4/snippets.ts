export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/snippets",
    resource: "snippets",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.15.",
    query: [
      {
        name: "created_after",
        type: "string"
      },
      {
        name: "created_before",
        type: "string"
      },
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
    /** @param {{query:{created_after:string,created_before:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]},{code:404}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  },
  post: {
    method: "post",
    url: "api/v4/snippets",
    resource: "snippets",
    variable: [],
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.15.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        title: "string",
        file_name: "string",
        description: "string",
        visibility: "internal",
        files: [
          {
            file_path: "string",
            content: "string"
          },
          {
            file_path: "string",
            content: "string"
          }
        ],
        content: "string"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{data:{title:string,file_name:string,description:string,visibility:internal,files:[{file_path:string,content:string},{file_path:string,content:string}],content:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}},{code:400},{code:404},{code:422}]} */
    send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
  },
  public: {
    get: {
      method: "get",
      url: "api/v4/snippets/public",
      resource: "public",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 8.15.",
      query: [
        {
          name: "created_after",
          type: "string"
        },
        {
          name: "created_before",
          type: "string"
        },
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
      /** @param {{query:{created_after:string,created_before:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]},{code:404}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    }
  },
  all: {
    get: {
      method: "get",
      url: "api/v4/snippets/all",
      resource: "all",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 16.3.",
      query: [
        {
          name: "created_after",
          type: "string"
        },
        {
          name: "created_before",
          type: "string"
        },
        {
          name: "page",
          type: "string"
        },
        {
          name: "per_page",
          type: "string"
        },
        {
          name: "repository_storage",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{created_after:string,created_before:string,page:string,per_page:string,repository_storage:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]},{code:404}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    }
  },
  getOne: {
    method: "get",
    url: "api/v4/snippets/:id",
    resource: "snippets",
    variable: [
      {
        name: "id",
        type: "string"
      }
    ],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.15.",
    query: [],
    data: null,
    /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}},{code:404}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  },
  put: {
    method: "put",
    url: "api/v4/snippets/:id",
    resource: "snippets",
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
    description: "This feature was introduced in GitLab 8.15.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        content: "string",
        description: "string",
        file_name: "string",
        title: "string",
        visibility: "string",
        files: [
          {
            action: "string",
            content: "string",
            file_path: "string",
            previous_path: "string"
          },
          {
            action: "string",
            content: "string",
            file_path: "string",
            previous_path: "string"
          }
        ]
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{params:{id:string},data:{content:string,description:string,file_name:string,title:string,visibility:string,files:[{action:string,content:string,file_path:string,previous_path:string},{action:string,content:string,file_path:string,previous_path:string}]},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}},{code:400},{code:404},{code:422}]} */
    send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
  },
  delete: {
    method: "delete",
    url: "api/v4/snippets/:id",
    resource: "snippets",
    variable: [
      {
        name: "id",
        type: "string"
      }
    ],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.15.",
    query: [],
    data: null,
    /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}},{code:400},{code:404}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  },
  raw: {
    get: {
      method: "get",
      url: "api/v4/snippets/:id/raw",
      resource: "raw",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "This feature was introduced in GitLab 8.15.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:404}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  files: {
    raw: {
      get: {
        method: "get",
        url: "api/v4/snippets/:id/files/:ref/:file_path/raw",
        resource: "raw",
        variable: [
          {
            name: "file_path",
            type: "string"
          },
          {
            name: "ref",
            type: "string"
          },
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {},
        description: "Get raw snippet file contents from the repository",
        query: [],
        data: null,
        /** @param {{params:{file_path:string,ref:string,id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    }
  },
  user_agent_detail: {
    get: {
      method: "get",
      url: "api/v4/snippets/:id/user_agent_detail",
      resource: "user_agent_detail",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get the user agent details for a snippet",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{user_agent:string,ip_address:string,akismet_submitted:boolean}},{code:404}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  repository_storage_moves: {
    get: {
      method: "get",
      url: "api/v4/snippets/:id/repository_storage_moves",
      resource: "repository_storage_moves",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
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
      /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:{value:{}},title:{value:{}},description:{value:{}},visibility:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},project_id:{value:{}},web_url:{value:{}},raw_url:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}}}},{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:{value:{}},title:{value:{}},description:{value:{}},visibility:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},project_id:{value:{}},web_url:{value:{}},raw_url:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}}}}]}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/snippets/:id/repository_storage_moves",
      resource: "repository_storage_moves",
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
      description: "This feature was introduced in GitLab 13.8.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          destination_storage_name: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{destination_storage_name:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/snippets/:id/repository_storage_moves/:repository_storage_move_id",
      resource: "repository_storage_moves",
      variable: [
        {
          name: "id",
          type: "string"
        },
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
      /** @param {{params:{id:string,repository_storage_move_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,created_at:dateTime,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:dateTime,updated_at:dateTime,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  }
});