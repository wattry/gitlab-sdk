export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/version",
    resource: "version",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 8.13 and deprecated in 15.5. We recommend you instead use the Metadata API.",
    query: [],
    data: null,
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{version:string,revision:string,kas:{enabled:boolean,externalUrl:string,version:string},enterprise:boolean}},{code:401}]} */
    send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
  }
});