export default (client: any, request: any) => ({

  get: {
    method: "get",
    url: "api/v4/avatar",
    resource: "avatar",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "Return avatar url for a user",
    query: [
      {
        name: "email",
        type: "string"
      },
      {
        name: "size",
        type: "string"
      }
    ],
    data: null,
    /** @param {{query:{email:string,size:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{avatar_url:string}}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  }

});