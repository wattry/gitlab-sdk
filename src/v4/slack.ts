export default (client: any, request: any) => ({
  slack: {
    trigger: {
      post: {
        method: "post",
        url: "api/v4/slack/trigger",
        resource: "trigger",
        variable: [],
        headers: {
          "Content-Type": "application/json"
        },
        description: "Added in GitLab 9.4",
        query: [],
        data: {
          mode: "raw",
          raw: {
            text: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{data:{text:string},clientOptions:{}}} requestOptions * @return {[{code:201},{code:401}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    }
  }
});