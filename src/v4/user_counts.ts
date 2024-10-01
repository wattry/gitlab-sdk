export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/user_counts",
    resource: "user_counts",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "Assigned open issues, assigned MRs and pending todos count",
    query: [],
    data: null,
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{merge_requests:number,assigned_issues:number,assigned_merge_requests:number,review_requested_merge_requests:number,todos:number}}]} */
    send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
  }

});