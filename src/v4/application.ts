export default (client: any, request: any) => ({
  plan_limits: {
    get: {
      method: "get",
      url: "api/v4/application/plan_limits",
      resource: "plan_limits",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "List the current limits of a plan on the GitLab instance.",
      query: [
        {
          name: "plan_name",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{plan_name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{ci_instance_level_variables:number,ci_pipeline_size:number,ci_active_jobs:number,ci_project_subscriptions:number,ci_pipeline_schedules:number,ci_needs_size_limit:number,ci_registered_group_runners:number,ci_registered_project_runners:number,conan_max_file_size:number,enforcement_limit:number,generic_packages_max_file_size:number,helm_max_file_size:number,limits_history:object,maven_max_file_size:number,notification_limit:number,npm_max_file_size:number,nuget_max_file_size:number,pipeline_hierarchy_size:number,pypi_max_file_size:number,terraform_module_max_file_size:number,storage_size_limit:number}},{code:401},{code:403}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/application/plan_limits",
      resource: "plan_limits",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Modify the limits of a plan on the GitLab instance.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          plan_name: "string",
          ci_instance_level_variables: "number",
          ci_pipeline_size: "number",
          ci_active_jobs: "number",
          ci_project_subscriptions: "number",
          ci_pipeline_schedules: "number",
          ci_needs_size_limit: "number",
          ci_registered_group_runners: "number",
          ci_registered_project_runners: "number",
          conan_max_file_size: "number",
          enforcement_limit: "number",
          generic_packages_max_file_size: "number",
          helm_max_file_size: "number",
          maven_max_file_size: "number",
          notification_limit: "number",
          npm_max_file_size: "number",
          nuget_max_file_size: "number",
          pypi_max_file_size: "number",
          terraform_module_max_file_size: "number",
          storage_size_limit: "number",
          pipeline_hierarchy_size: "number"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },
      /** @param {{data:{plan_name:string,ci_instance_level_variables:number,ci_pipeline_size:number,ci_active_jobs:number,ci_project_subscriptions:number,ci_pipeline_schedules:number,ci_needs_size_limit:number,ci_registered_group_runners:number,ci_registered_project_runners:number,conan_max_file_size:number,enforcement_limit:number,generic_packages_max_file_size:number,helm_max_file_size:number,maven_max_file_size:number,notification_limit:number,npm_max_file_size:number,nuget_max_file_size:number,pypi_max_file_size:number,terraform_module_max_file_size:number,storage_size_limit:number,pipeline_hierarchy_size:number},clientOptions:{}}} requestOptions * @return {[{code:200,data:{ci_instance_level_variables:number,ci_pipeline_size:number,ci_active_jobs:number,ci_project_subscriptions:number,ci_pipeline_schedules:number,ci_needs_size_limit:number,ci_registered_group_runners:number,ci_registered_project_runners:number,conan_max_file_size:number,enforcement_limit:number,generic_packages_max_file_size:number,helm_max_file_size:number,limits_history:object,maven_max_file_size:number,notification_limit:number,npm_max_file_size:number,nuget_max_file_size:number,pipeline_hierarchy_size:number,pypi_max_file_size:number,terraform_module_max_file_size:number,storage_size_limit:number}},{code:400},{code:401},{code:403}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  },
  appearance: {
    get: {
      method: "get",
      url: "api/v4/application/appearance",
      resource: "appearance",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get the current appearance",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{title:string,description:string,pwa_name:string,pwa_short_name:string,pwa_description:string,logo:string,pwa_icon:string,header_logo:string,favicon:string,new_project_guidelines:string,member_guidelines:string,profile_image_guidelines:string,header_message:string,footer_message:string,message_background_color:string,message_font_color:string,email_header_and_footer_enabled:string}}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/application/appearance",
      resource: "appearance",
      variable: [],
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json"
      },
      description: "Modify appearance",
      query: [],
      data: {
        mode: "formdata",
        formdata: {
          title: "string",
          description: "string",
          pwa_name: "string",
          pwa_short_name: "string",
          pwa_description: "string",
          member_guidelines: "string",
          new_project_guidelines: "string",
          profile_image_guidelines: "string",
          header_message: "string",
          footer_message: "string",
          message_background_color: "string",
          message_font_color: "string",
          email_header_and_footer_enabled: "boolean"
        }
      },
      /** @param {{data:{title:string,description:string,pwa_name:string,pwa_short_name:string,pwa_description:string,member_guidelines:string,new_project_guidelines:string,profile_image_guidelines:string,header_message:string,footer_message:string,message_background_color:string,message_font_color:string,email_header_and_footer_enabled:boolean},clientOptions:{}}} requestOptions * @return {[{code:200,data:{title:string,description:string,pwa_name:string,pwa_short_name:string,pwa_description:string,logo:string,pwa_icon:string,header_logo:string,favicon:string,new_project_guidelines:string,member_guidelines:string,profile_image_guidelines:string,header_message:string,footer_message:string,message_background_color:string,message_font_color:string,email_header_and_footer_enabled:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  },
  statistics: {
    get: {
      method: "get",
      url: "api/v4/application/statistics",
      resource: "statistics",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get the current application statistics",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{forks:number,issues:number,merge_requests:number,notes:number,snippets:number,ssh_keys:number,milestones:number,users:number,projects:number,groups:number,active_users:number}}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  }
});