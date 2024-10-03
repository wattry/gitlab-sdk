export default (client: any, handler: any) => ({
  "events": {
    post: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:401}]> => handler.apply({method:'post',url:'api/v4/container_registry_event/events',resource:'v4',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
  }
})