export default (client: any, request: any) => ({
  post: {
    method: "post",
    url: "api/v4/markdown",
    resource: "markdown",
    variable: [],
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 11.0.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        text: "string",
        gfm: "boolean",
        project: "string"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },
    /** @param {{data:{text:string,gfm:boolean,project:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{html:string}},{code:400},{code:401}]} */
    send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
  }
});