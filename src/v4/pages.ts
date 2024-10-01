export default (client: any, request: any) => ({
  pages: {
    domains: {
      get: {
        method: "get",
        url: "api/v4/pages/domains",
        resource: "domains",
        variable: [],
        headers: {
          Accept: "application/json"
        },
        description: "Get all pages domains",
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
        /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{domain:string,url:string,project_id:string,verified:string,verification_code:string,enabled_until:string,auto_ssl_enabled:string,certificate_expiration:{expired:string,expiration:string}}}]} */
        send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
      }
    }
  }
});