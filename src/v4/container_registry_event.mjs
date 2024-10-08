/* eslint-disable max-len */
export default (client, handler) => ({
  "events": {
    /** @param {{}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}>} */
    post: (request = {}, options = {}) => handler.apply({method:'post',url:'api/v4/container_registry_event/events',variable:[]}, [client, request, options])
  }
});