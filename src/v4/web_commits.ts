export default (client: any, request: any) => ({
  public_key: {
    get: {
      method: "get",
      url: "api/v4/web_commits/public_key",
      resource: "public_key",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 17.4.",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{public_key:string}},{code:404},{code:503}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  }
});