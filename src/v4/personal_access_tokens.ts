export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/personal_access_tokens",
    resource: "personal_access_tokens",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "Get all personal access tokens the authenticated user has access to.",
    query: [
      {
        name: "user_id",
        type: "string"
      },
      {
        name: "revoked",
        type: "string"
      },
      {
        name: "state",
        type: "string"
      },
      {
        name: "created_before",
        type: "string"
      },
      {
        name: "created_after",
        type: "string"
      },
      {
        name: "last_used_before",
        type: "string"
      },
      {
        name: "last_used_after",
        type: "string"
      },
      {
        name: "search",
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
    /** @param {{query:{user_id:string,revoked:string,state:string,created_before:string,created_after:string,last_used_before:string,last_used_after:string,search:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime},{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime}]},{code:401}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  },
  self: {
    get: {
      method: "get",
      url: "api/v4/personal_access_tokens/self",
      resource: "self",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get the details of a personal access token by passing it to the API in a header",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime}},{code:401},{code:404}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/personal_access_tokens/self",
      resource: "self",
      variable: [],
      headers: {},
      description: "Revoke a personal access token by passing it to the API in a header",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:204},{code:400}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    },
    rotate: {
      post: {
        method: "post",
        url: "api/v4/personal_access_tokens/self/rotate",
        resource: "rotate",
        variable: [],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Rotates a personal access token by passing it to the API in a header",
        query: [],
        data: {
          mode: "raw",
          raw: {
            expires_at: "date"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{data:{expires_at:date},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,token:string}},{code:400},{code:401},{code:403},{code:405}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    }
  },
  getOne: {
    method: "get",
    url: "api/v4/personal_access_tokens/:id",
    resource: "personal_access_tokens",
    variable: [
      {
        name: "id",
        type: "string"
      }
    ],
    headers: {
      Accept: "application/json"
    },
    description: "Get a personal access token by using the ID of the personal access token.",
    query: [],
    data: null,
    /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime}},{code:401},{code:404}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  },
  delete: {
    method: "delete",
    url: "api/v4/personal_access_tokens/:id",
    resource: "personal_access_tokens",
    variable: [
      {
        name: "id",
        type: "string"
      }
    ],
    headers: {},
    description: "Revoke a personal access token by using the ID of the personal access token.",
    query: [],
    data: null,
    /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400}]} */
    send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
  },
  rotate: {
    post: {
      method: "post",
      url: "api/v4/personal_access_tokens/:id/rotate",
      resource: "rotate",
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
      description: "Roates a personal access token.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          expires_at: "date"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },
      /** @param {{params:{id:string},data:{expires_at:date},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,token:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    }
  }
});