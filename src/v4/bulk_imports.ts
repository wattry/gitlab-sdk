export default (client: any, request: any) => ({
  post: {
    method: "post",
    url: "api/v4/bulk_imports",
    resource: "bulk_imports",
    variable: [],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 14.2.",
    query: [],
    data: {
      mode: "urlencoded",
      urlencoded: {
        "configuration[url]": "string",
        "configuration[access_token]": "string",
        "entities[source_type]": "string",
        "entities[source_full_path]": "string",
        "entities[destination_namespace]": "string",
        "entities[destination_slug]": "string",
        "entities[destination_name]": "string",
        "entities[migrate_projects]": "true"
      }
    },

    /** @param {{data:{configuration[url]:string,configuration[access_token]:string,entities[source_type]:string,entities[source_full_path]:string,entities[destination_namespace]:string,entities[destination_slug]:string,entities[destination_name]:string,entities[migrate_projects]:true},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,status:string,source_type:string,created_at:dateTime,updated_at:dateTime,has_failures:boolean}},{code:400},{code:401},{code:404},{code:422},{code:503}]} */
    send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
  },
  get: {
    method: "get",
    url: "api/v4/bulk_imports",
    resource: "bulk_imports",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 14.1.",
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
        name: "sort",
        type: "string"
      },
      {
        name: "status",
        type: "string"
      }
    ],
    data: null,
    /** @param {{query:{page:string,per_page:string,sort:string,status:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,status:string,source_type:string,created_at:dateTime,updated_at:dateTime,has_failures:boolean},{id:number,status:string,source_type:string,created_at:dateTime,updated_at:dateTime,has_failures:boolean}]},{code:401},{code:404},{code:503}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  },
  entities: {
    get: {
      method: "get",
      url: "api/v4/bulk_imports/entities",
      resource: "entities",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 14.1.",
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
          name: "sort",
          type: "string"
        },
        {
          name: "status",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{page:string,per_page:string,sort:string,status:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:dateTime,updated_at:dateTime,failures:[{value:{}},{value:{}}],migrate_projects:boolean,has_failures:boolean,stats:object},{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:dateTime,updated_at:dateTime,failures:[{value:{}},{value:{}}],migrate_projects:boolean,has_failures:boolean,stats:object}]},{code:401},{code:404},{code:503}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/bulk_imports/:import_id/entities/:entity_id",
      resource: "entities",
      variable: [
        {
          name: "import_id",
          type: "string"
        },
        {
          name: "entity_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 14.1.",
      query: [],
      data: null,
      /** @param {{params:{import_id:string,entity_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:dateTime,updated_at:dateTime,failures:[{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string},{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string}],migrate_projects:boolean,has_failures:boolean,stats:object}},{code:401},{code:404},{code:503}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    failures: {
      get: {
        method: "get",
        url: "api/v4/bulk_imports/:import_id/entities/:entity_id/failures",
        resource: "failures",
        variable: [
          {
            name: "import_id",
            type: "string"
          },
          {
            name: "entity_id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 16.6",
        query: [],
        data: null,
        /** @param {{params:{import_id:string,entity_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string}},{code:401},{code:404},{code:503}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    }
  },
  getOne: {
    method: "get",
    url: "api/v4/bulk_imports/:import_id",
    resource: "bulk_imports",
    variable: [
      {
        name: "import_id",
        type: "string"
      }
    ],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 14.1.",
    query: [],
    data: null,
    /** @param {{params:{import_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,status:string,source_type:string,created_at:dateTime,updated_at:dateTime,has_failures:boolean}},{code:401},{code:404},{code:503}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  },
  cancel: {
    post: {
      method: "post",
      url: "api/v4/bulk_imports/:import_id/cancel",
      resource: "cancel",
      variable: [
        {
          name: "import_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 17.1",
      query: [],
      data: null,
      /** @param {{params:{import_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,status:string,source_type:string,created_at:dateTime,updated_at:dateTime,has_failures:boolean}},{code:401},{code:403},{code:404},{code:503}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  }
});