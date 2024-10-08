/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{merge_requests:number,assigned_issues:number,assigned_merge_requests:number,review_requested_merge_requests:number,todos:number}}>} */
  get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/user_counts',headers:{Accept:'application/json'},variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
});