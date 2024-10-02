export default (client: any, handler: any) => ({
  /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{merge_requests:number,assigned_issues:number,assigned_merge_requests:number,review_requested_merge_requests:number,todos:number}}]} */
  get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/user_counts",resource:"api",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}])
})