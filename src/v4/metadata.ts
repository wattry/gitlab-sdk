export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/metadata",
    resource: "metadata",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "This feature was introduced in GitLab 15.2.",
    query: [],
    data: null,
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{version:string,revision:string,kas:{enabled:boolean,externalUrl:string,version:string},enterprise:boolean}},{code:401}]} */
    send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
  }
});