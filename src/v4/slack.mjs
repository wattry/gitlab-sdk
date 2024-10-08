/* eslint-disable max-len */
export default (client, handler) => ({
  "trigger": {
    /** @param {{data:{string:string}}} request @param {any} [options={}] @return {Promise<{code:201}|{code:401}>} */
    post: ({data} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/slack/trigger',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{string:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  }
});