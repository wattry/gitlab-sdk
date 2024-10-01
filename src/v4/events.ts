export default (client: any, request: any) => ({
  events: {
    get: {
      method: "get",
      url: "api/v4/events",
      resource: "events",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 9.3.",
      query: [
        {
          name: "scope",
          type: "string"
        },
        {
          name: "page",
          type: "string"
        },
        {
          name: "per_page",
          type: "string"
        },
        {
          name: "action",
          type: "string"
        },
        {
          name: "target_type",
          type: "string"
        },
        {
          name: "before",
          type: "string"
        },
        {
          name: "after",
          type: "string"
        },
        {
          name: "sort",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{scope:string,page:string,per_page:string,action:string,target_type:string,before:string,after:string,sort:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:{value:{}},type:{value:{}},body:{value:{}},attachment:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},system:{value:{}},noteable_id:{value:{}},noteable_type:{value:{}},project_id:{value:{}},commit_id:{value:{}},position:{value:{}},resolvable:{value:{}},resolved:{value:{}},resolved_by:{value:{}},resolved_at:{value:{}},confidential:{value:{}},internal:{value:{}},imported:{value:{}},imported_from:{value:{}},noteable_iid:{value:{}},commands_changes:{value:{}}},author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},wiki_page:{format:{value:{}},slug:{value:{}},title:{value:{}}},imported:boolean,imported_from:string,push_data:{commit_count:{value:{}},action:{value:{}},ref_type:{value:{}},commit_from:{value:{}},commit_to:{value:{}},ref:{value:{}},commit_title:{value:{}},ref_count:{value:{}}},author_username:string},{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:{value:{}},type:{value:{}},body:{value:{}},attachment:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},system:{value:{}},noteable_id:{value:{}},noteable_type:{value:{}},project_id:{value:{}},commit_id:{value:{}},position:{value:{}},resolvable:{value:{}},resolved:{value:{}},resolved_by:{value:{}},resolved_at:{value:{}},confidential:{value:{}},internal:{value:{}},imported:{value:{}},imported_from:{value:{}},noteable_iid:{value:{}},commands_changes:{value:{}}},author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},wiki_page:{format:{value:{}},slug:{value:{}},title:{value:{}}},imported:boolean,imported_from:string,push_data:{commit_count:{value:{}},action:{value:{}},ref_type:{value:{}},commit_from:{value:{}},commit_to:{value:{}},ref:{value:{}},commit_title:{value:{}},ref_count:{value:{}}},author_username:string}]},{code:401}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    }
  }
});