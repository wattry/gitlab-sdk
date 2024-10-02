export default (client: any, handler: any) => ({
  /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{version:string,revision:string,kas:{enabled:boolean,externalUrl:string,version:string},enterprise:boolean}},{code:401}]} */
  get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/metadata",resource:"api",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}])
})