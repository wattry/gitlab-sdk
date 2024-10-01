export default (client: any, request: any) => ({
  events: {
    post: {
      method: "post",
      url: "api/v4/container_registry_event/events",
      resource: "events",
      variable: [],
      headers: {},
      description: "This feature was introduced in GitLab 12.10",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  }
});