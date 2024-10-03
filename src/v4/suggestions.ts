export default (client: any, handler: any) => ({
  "apply": {
    put: ({params,data,clientOptions}: {params:{id:string},data:{commit_message:string},clientOptions:any}): Promise<[{code:200,data:{id:string,from_line:string,to_line:string,appliable:string,applied:string,from_content:string,to_content:string}}]> => handler.apply({method:'put',url:'api/v4/suggestions/:id/apply',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{commit_message:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
  },
  "batch_apply": {
    put: ({data,clientOptions}: {data:{ids:[number,number],commit_message:string},clientOptions:any}): Promise<[{code:200,data:{id:string,from_line:string,to_line:string,appliable:string,applied:string,from_content:string,to_content:string}}]> => handler.apply({method:'put',url:'api/v4/suggestions/batch_apply',resource:'v4',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{ids:['number','number'],commit_message:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  }
})