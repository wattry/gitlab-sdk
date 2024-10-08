/* eslint-disable max-len */
export default (client, handler) => ({
  /** @param {{data:{string:string,gfm:boolean,project:string}}} request @param {any} [options={}] @return {Promise<{code:201,data:{html:string}}|{code:400}|{code:401}>} */
  post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/markdown',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{string:'string',gfm:'boolean',project:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
});