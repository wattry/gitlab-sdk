export default (client: any, handler: any) => ({
  /** @param {{params:{name:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
  get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/features",resource:"api",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}]),
  definitions: {
    /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:[{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string},{name:string,feature_issue_url:string,introduced_by_url:string,rollout_issue_url:string,milestone:string,log_state_changes:string,type:string,group:string,default_enabled:string}]}]} */
    get: ({clientOptions = {}} = {}) => handler.apply({method:"get",url:"api/v4/features/definitions",resource:"v4",variable:[],headers:{Accept:"application/json"},query:[],data:null}, [client, {clientOptions}])
  },
  post: ({params = {},data = {},clientOptions = {}} = {}) => handler.apply({method:"post",url:"api/v4/features/:name",resource:"api",variable:[{name:"name",type:"string"}],headers:{"Content-Type":"application/json",Accept:"application/json"},query:[],data:{mode:"raw",raw:{value:"string",key:"string",feature_group:"string",user:"string",group:"string",namespace:"string",project:"string",repository:"string",force:"boolean"},options:{raw:{language:"json"}}}}, [client, { params, data, clientOptions}]),
  delete: ({params = {},clientOptions = {}} = {}) => handler.apply({method:"delete",url:"api/v4/features/:name",resource:"api",variable:[{name:"name",type:"string"}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
})