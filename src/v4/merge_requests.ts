export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/merge_requests",
    resource: "merge_requests",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "Get all merge requests the authenticated user has access to. By default it returns only merge requests created by the current user. To get all merge requests, use parameter `scope=all`.",
    query: [
      {
        name: "author_id",
        type: "string"
      },
      {
        name: "author_username",
        type: "string"
      },
      {
        name: "assignee_id",
        type: "string"
      },
      {
        name: "assignee_username",
        type: "string"
      },
      {
        name: "reviewer_username",
        type: "string"
      },
      {
        name: "labels",
        type: "string"
      },
      {
        name: "milestone",
        type: "string"
      },
      {
        name: "my_reaction_emoji",
        type: "string"
      },
      {
        name: "reviewer_id",
        type: "string"
      },
      {
        name: "state",
        type: "string"
      },
      {
        name: "order_by",
        type: "string"
      },
      {
        name: "sort",
        type: "string"
      },
      {
        name: "with_labels_details",
        type: "string"
      },
      {
        name: "with_merge_status_recheck",
        type: "string"
      },
      {
        name: "created_after",
        type: "string"
      },
      {
        name: "created_before",
        type: "string"
      },
      {
        name: "updated_after",
        type: "string"
      },
      {
        name: "updated_before",
        type: "string"
      },
      {
        name: "view",
        type: "string"
      },
      {
        name: "scope",
        type: "string"
      },
      {
        name: "source_branch",
        type: "string"
      },
      {
        name: "source_project_id",
        type: "string"
      },
      {
        name: "target_branch",
        type: "string"
      },
      {
        name: "search",
        type: "string"
      },
      {
        name: "in",
        type: "string"
      },
      {
        name: "wip",
        type: "string"
      },
      {
        name: "not[author_id]",
        type: "string"
      },
      {
        name: "not[author_username]",
        type: "string"
      },
      {
        name: "not[assignee_id]",
        type: "string"
      },
      {
        name: "not[assignee_username]",
        type: "string"
      },
      {
        name: "not[reviewer_username]",
        type: "string"
      },
      {
        name: "not[labels]",
        type: "string"
      },
      {
        name: "not[milestone]",
        type: "string"
      },
      {
        name: "not[my_reaction_emoji]",
        type: "string"
      },
      {
        name: "not[reviewer_id]",
        type: "string"
      },
      {
        name: "deployed_before",
        type: "string"
      },
      {
        name: "deployed_after",
        type: "string"
      },
      {
        name: "environment",
        type: "string"
      },
      {
        name: "approved",
        type: "string"
      },
      {
        name: "merge_user_id",
        type: "string"
      },
      {
        name: "merge_user_username",
        type: "string"
      },
      {
        name: "approver_ids",
        type: "string"
      },
      {
        name: "approved_by_ids",
        type: "string"
      },
      {
        name: "approved_by_usernames",
        type: "string"
      },
      {
        name: "page",
        type: "string"
      },
      {
        name: "per_page",
        type: "string"
      }
    ],
    data: null,
    /** @param {{query:{author_id:string,author_username:string,assignee_id:string,assignee_username:string,reviewer_username:string,labels:string,milestone:string,my_reaction_emoji:string,reviewer_id:string,state:string,order_by:string,sort:string,with_labels_details:string,with_merge_status_recheck:string,created_after:string,created_before:string,updated_after:string,updated_before:string,view:string,scope:string,source_branch:string,source_project_id:string,target_branch:string,search:string,in:string,wip:string,not[author_id]:string,not[author_username]:string,not[assignee_id]:string,not[assignee_username]:string,not[reviewer_username]:string,not[labels]:string,not[milestone]:string,not[my_reaction_emoji]:string,not[reviewer_id]:string,deployed_before:string,deployed_after:string,environment:string,approved:string,merge_user_id:string,merge_user_username:string,approver_ids:string,approved_by_ids:string,approved_by_usernames:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,iid:number,project_id:number,title:string,description:string,state:string,created_at:dateTime,updated_at:dateTime,merged_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},merge_user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},merged_at:string,closed_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},closed_at:string,title_html:string,description_html:string,target_branch:string,source_branch:string,user_notes_count:string,upvotes:string,downvotes:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},assignees:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},assignee:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},reviewers:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},source_project_id:string,target_project_id:string,labels:string,draft:string,imported:string,imported_from:string,work_in_progress:string,milestone:{id:string,iid:string,project_id:string,group_id:string,title:string,description:string,state:string,created_at:string,updated_at:string,due_date:string,start_date:string,expired:string,web_url:string},merge_when_pipeline_succeeds:string,merge_status:string,detailed_merge_status:string,sha:string,merge_commit_sha:string,squash_commit_sha:string,discussion_locked:string,should_remove_source_branch:string,force_remove_source_branch:string,prepared_at:string,allow_collaboration:string,allow_maintainer_to_push:string,reference:string,references:{short:string,relative:string,full:string},web_url:string,time_stats:{time_estimate:number,total_time_spent:number,human_time_estimate:string,human_total_time_spent:string},squash:string,squash_on_merge:string,task_completion_status:string,has_conflicts:string,blocking_discussions_resolved:string,approvals_before_merge:string}},{code:401},{code:422}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  }
});