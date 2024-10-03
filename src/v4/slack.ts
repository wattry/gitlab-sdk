export default (client: any, handler: any) => ({
  "trigger": {
    post: ({data,clientOptions}: {data:{text:string},clientOptions:any}): Promise<[{code:201},{code:401}]> => handler.apply({method:'post',url:'api/v4/slack/trigger',resource:'v4',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{text:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  }
})