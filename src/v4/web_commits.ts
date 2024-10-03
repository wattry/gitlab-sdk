export default (client: any, handler: any) => ({
  "public_key": {
    get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200,data:{public_key:string}},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/web_commits/public_key',resource:'v4',variable:[],headers:{Accept:'application/json'},query:[],data:null}, [client, {clientOptions}])
  }
})