export default (client: any, request: any) => ({
  topics: {
    get: {
      method: "get",
      url: "api/v4/topics",
      resource: "topics",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 14.5.",
      query: [
        {
          name: "search",
          type: "string"
        },
        {
          name: "without_projects",
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
      /** @param {{query:{search:string,without_projects:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/topics",
      resource: "topics",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 14.5.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          name: "string",
          title: "string",
          description: "string",
          avatar: "binary"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{name:string,title:string,description:string,avatar:binary},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/topics/:id",
      resource: "topics",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 14.5.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/topics/:id",
      resource: "topics",
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
      description: "This feature was introduced in GitLab 14.5.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          name: "string",
          title: "string",
          description: "string",
          avatar: "binary"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{name:string,title:string,description:string,avatar:binary},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/topics/:id",
      resource: "topics",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "This feature was introduced in GitLab 14.9.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    merge: {
      post: {
        method: "post",
        url: "api/v4/topics/merge",
        resource: "merge",
        variable: [],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 15.4.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            source_topic_id: "number",
            target_topic_id: "number"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },
        /** @param {{data:{source_topic_id:number,target_topic_id:number},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,name:string,title:string,description:string,total_projects_count:string,avatar_url:string}}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    }
  }
});