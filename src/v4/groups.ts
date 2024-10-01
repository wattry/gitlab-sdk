export default (client: any, request: any) => ({
  groups: {
    get: {
      method: "get",
      url: "api/v4/groups",
      resource: "groups",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get a groups list",
      query: [
        {
          name: "statistics",
          type: "string"
        },
        {
          name: "skip_groups",
          type: "string"
        },
        {
          name: "all_available",
          type: "string"
        },
        {
          name: "visibility",
          type: "string"
        },
        {
          name: "search",
          type: "string"
        },
        {
          name: "owned",
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
          name: "min_access_level",
          type: "string"
        },
        {
          name: "top_level_only",
          type: "string"
        },
        {
          name: "repository_storage",
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
          name: "with_custom_attributes",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/groups",
      resource: "groups",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Create a group. Available only for users who can create groups.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          name: "string",
          path: "string",
          parent_id: "number",
          organization_id: {},
          description: "string",
          visibility: "string",
          avatar: "binary",
          share_with_group_lock: "boolean",
          require_two_factor_authentication: "boolean",
          two_factor_grace_period: "number",
          project_creation_level: "string",
          auto_devops_enabled: "boolean",
          subgroup_creation_level: "string",
          emails_disabled: "boolean",
          emails_enabled: "boolean",
          show_diff_preview_in_email: "boolean",
          mentions_disabled: "boolean",
          lfs_enabled: "boolean",
          request_access_enabled: "boolean",
          default_branch: "string",
          default_branch_protection: "number",
          default_branch_protection_defaults: {
            allowed_to_push: [
              {
                access_level: "number"
              },
              {
                access_level: "number"
              }
            ],
            allow_force_push: "boolean",
            allowed_to_merge: [
              {
                access_level: "number"
              },
              {
                access_level: "number"
              }
            ],
            code_owner_approval_required: "boolean",
            developer_can_initial_push: "boolean"
          },
          shared_runners_setting: "string",
          enabled_git_access_protocol: "string",
          membership_lock: "boolean",
          ldap_cn: "string",
          ldap_access: "number",
          shared_runners_minutes_limit: "number",
          extra_shared_runners_minutes_limit: "number",
          wiki_access_level: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{name:string,path:string,parent_id:number,organization_id:{},description:string,visibility:string,avatar:binary,share_with_group_lock:boolean,require_two_factor_authentication:boolean,two_factor_grace_period:number,project_creation_level:string,auto_devops_enabled:boolean,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,show_diff_preview_in_email:boolean,mentions_disabled:boolean,lfs_enabled:boolean,request_access_enabled:boolean,default_branch:string,default_branch_protection:number,default_branch_protection_defaults:{allowed_to_push:[{access_level:number},{access_level:number}],allow_force_push:boolean,allowed_to_merge:[{access_level:number},{access_level:number}],code_owner_approval_required:boolean,developer_can_initial_push:boolean},shared_runners_setting:string,enabled_git_access_protocol:string,membership_lock:boolean,ldap_cn:string,ldap_access:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,wiki_access_level:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/groups/:id",
      resource: "groups",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Update a group. Available only for users who can administrate groups.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          name: "string",
          path: "string",
          description: "string",
          visibility: "string",
          avatar: "binary",
          share_with_group_lock: "boolean",
          require_two_factor_authentication: "boolean",
          two_factor_grace_period: "number",
          project_creation_level: "string",
          auto_devops_enabled: "boolean",
          subgroup_creation_level: "string",
          emails_disabled: "boolean",
          emails_enabled: "boolean",
          show_diff_preview_in_email: "boolean",
          mentions_disabled: "boolean",
          lfs_enabled: "boolean",
          request_access_enabled: "boolean",
          default_branch: "string",
          default_branch_protection: "number",
          default_branch_protection_defaults: {
            allowed_to_push: [
              {
                access_level: "number"
              },
              {
                access_level: "number"
              }
            ],
            allow_force_push: "boolean",
            allowed_to_merge: [
              {
                access_level: "number"
              },
              {
                access_level: "number"
              }
            ],
            code_owner_approval_required: "boolean",
            developer_can_initial_push: "boolean"
          },
          shared_runners_setting: "string",
          enabled_git_access_protocol: "string",
          membership_lock: "boolean",
          ldap_cn: "string",
          ldap_access: "number",
          shared_runners_minutes_limit: "number",
          extra_shared_runners_minutes_limit: "number",
          wiki_access_level: "string",
          prevent_sharing_groups_outside_hierarchy: "boolean",
          lock_math_rendering_limits_enabled: "boolean",
          math_rendering_limits_enabled: "boolean",
          file_template_project_id: "number",
          prevent_forking_outside_group: "boolean",
          unique_project_download_limit: "number",
          unique_project_download_limit_interval_in_seconds: "number",
          unique_project_download_limit_allowlist: [
            "string",
            "string"
          ],
          unique_project_download_limit_alertlist: [
            "number",
            "number"
          ],
          auto_ban_user_on_excessive_projects_download: "boolean",
          ip_restriction_ranges: "string",
          service_access_tokens_expiration_enforced: "boolean",
          duo_features_enabled: "boolean",
          lock_duo_features_enabled: "boolean"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{name:string,path:string,description:string,visibility:string,avatar:binary,share_with_group_lock:boolean,require_two_factor_authentication:boolean,two_factor_grace_period:number,project_creation_level:string,auto_devops_enabled:boolean,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,show_diff_preview_in_email:boolean,mentions_disabled:boolean,lfs_enabled:boolean,request_access_enabled:boolean,default_branch:string,default_branch_protection:number,default_branch_protection_defaults:{allowed_to_push:[{access_level:number},{access_level:number}],allow_force_push:boolean,allowed_to_merge:[{access_level:number},{access_level:number}],code_owner_approval_required:boolean,developer_can_initial_push:boolean},shared_runners_setting:string,enabled_git_access_protocol:string,membership_lock:boolean,ldap_cn:string,ldap_access:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,wiki_access_level:string,prevent_sharing_groups_outside_hierarchy:boolean,lock_math_rendering_limits_enabled:boolean,math_rendering_limits_enabled:boolean,file_template_project_id:number,prevent_forking_outside_group:boolean,unique_project_download_limit:number,unique_project_download_limit_interval_in_seconds:number,unique_project_download_limit_allowlist:[string,string],unique_project_download_limit_alertlist:[number,number],auto_ban_user_on_excessive_projects_download:boolean,ip_restriction_ranges:string,service_access_tokens_expiration_enforced:boolean,duo_features_enabled:boolean,lock_duo_features_enabled:boolean},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/groups/:id",
      resource: "groups",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get a single group, with containing projects.",
      query: [
        {
          name: "with_custom_attributes",
          type: "string"
        },
        {
          name: "with_projects",
          type: "string"
        }
      ],
      data: null,
      /** @param {{params:{id:string},query:{with_custom_attributes:string,with_projects:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/groups/:id",
      resource: "groups",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Remove a group.",
      query: [],

      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    access_requests: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/access_requests",
        resource: "access_requests",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 8.11.",
        query: [
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
        /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/access_requests",
        resource: "access_requests",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 8.11.",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/access_requests/:user_id",
        resource: "access_requests",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "user_id",
            type: "string"
          }
        ],
        headers: {},
        description: "This feature was introduced in GitLab 8.11.",
        query: [],
        data: null,
        /** @param {{params:{id:string,user_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      approve: {
        put: {
          method: "put",
          url: "api/v4/groups/:id/access_requests/:user_id/approve",
          resource: "approve",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "user_id",
              type: "string"
            }
          ],
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          description: "This feature was introduced in GitLab 8.11.",
          query: [],
          data: {
            mode: "raw",
            raw: {
              access_level: 30
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{params:{id:string,user_id:string},data:{access_level:30},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}]} */
          send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
        }
      }
    },
    badges: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/badges",
        resource: "badges",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 10.6.",
        query: [
          {
            name: "page",
            type: "string"
          },
          {
            name: "per_page",
            type: "string"
          },
          {
            name: "name",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{page:string,per_page:string,name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string},{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}]}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/badges",
        resource: "badges",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 10.6.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            link_url: "string",
            image_url: "string",
            name: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{link_url:string,image_url:string,name:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      render: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/badges/render",
          resource: "render",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "This feature was introduced in GitLab 10.6.",
          query: [
            {
              name: "link_url",
              type: "string"
            },
            {
              name: "image_url",
              type: "string"
            }
          ],
          data: null,
          /** @param {{params:{id:string},query:{link_url:string,image_url:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string}}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/badges/:badge_id",
        resource: "badges",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "badge_id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 10.6.",
        query: [],
        data: null,
        /** @param {{params:{id:string,badge_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/groups/:id/badges/:badge_id",
        resource: "badges",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "badge_id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 10.6.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            link_url: "string",
            image_url: "string",
            name: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string,badge_id:string},data:{link_url:string,image_url:string,name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/badges/:badge_id",
        resource: "badges",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "badge_id",
            type: "string"
          }
        ],
        headers: {},
        description: "This feature was introduced in GitLab 10.6.",
        query: [],
        data: null,
        /** @param {{params:{id:string,badge_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    custom_attributes: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/custom_attributes",
        resource: "custom_attributes",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get all custom attributes on a group",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{key:string,value:string}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/custom_attributes/:key",
        resource: "custom_attributes",
        variable: [
          {
            name: "key",
            type: "string"
          },
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a custom attribute on a group",
        query: [],
        data: null,
        /** @param {{params:{key:string,id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{key:string,value:string}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/groups/:id/custom_attributes/:key",
        resource: "custom_attributes",
        variable: [
          {
            name: "key",
            type: "string"
          },
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json"
        },
        description: "Set a custom attribute on a group",
        query: [],
        data: {
          mode: "raw",
          raw: {
            value: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{key:string,id:string},data:{value:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/custom_attributes/:key",
        resource: "custom_attributes",
        variable: [
          {
            name: "key",
            type: "string"
          },
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {},
        description: "Delete a custom attribute on a group",
        query: [],
        data: null,
        /** @param {{params:{key:string,id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    projects: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/projects",
        resource: "projects",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of projects in this group.",
        query: [
          {
            name: "archived",
            type: "string"
          },
          {
            name: "visibility",
            type: "string"
          },
          {
            name: "search",
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
            name: "simple",
            type: "string"
          },
          {
            name: "owned",
            type: "string"
          },
          {
            name: "starred",
            type: "string"
          },
          {
            name: "with_issues_enabled",
            type: "string"
          },
          {
            name: "with_merge_requests_enabled",
            type: "string"
          },
          {
            name: "with_shared",
            type: "string"
          },
          {
            name: "include_subgroups",
            type: "string"
          },
          {
            name: "include_ancestor_groups",
            type: "string"
          },
          {
            name: "min_access_level",
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
            name: "with_custom_attributes",
            type: "string"
          },
          {
            name: "with_security_reports",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{archived:string,visibility:string,search:string,order_by:string,sort:string,simple:string,owned:string,starred:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_shared:string,include_subgroups:string,include_ancestor_groups:string,min_access_level:string,page:string,per_page:string,with_custom_attributes:string,with_security_reports:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string}]}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      shared: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/projects/shared",
          resource: "shared",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Get a list of shared projects in this group",
          query: [
            {
              name: "archived",
              type: "string"
            },
            {
              name: "visibility",
              type: "string"
            },
            {
              name: "search",
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
              name: "simple",
              type: "string"
            },
            {
              name: "starred",
              type: "string"
            },
            {
              name: "with_issues_enabled",
              type: "string"
            },
            {
              name: "with_merge_requests_enabled",
              type: "string"
            },
            {
              name: "min_access_level",
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
              name: "with_custom_attributes",
              type: "string"
            }
          ],
          data: null,
          /** @param {{params:{id:string},query:{archived:string,visibility:string,search:string,order_by:string,sort:string,simple:string,starred:string,with_issues_enabled:string,with_merge_requests_enabled:string,min_access_level:string,page:string,per_page:string,with_custom_attributes:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string}]}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/projects/:project_id",
        resource: "projects",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "project_id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Transfer a project to the group namespace. Available only for admin.",
        query: [],
        data: null,
        /** @param {{params:{id:string,project_id:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    subgroups: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/subgroups",
        resource: "subgroups",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of subgroups in this group.",
        query: [
          {
            name: "statistics",
            type: "string"
          },
          {
            name: "skip_groups",
            type: "string"
          },
          {
            name: "all_available",
            type: "string"
          },
          {
            name: "visibility",
            type: "string"
          },
          {
            name: "search",
            type: "string"
          },
          {
            name: "owned",
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
            name: "min_access_level",
            type: "string"
          },
          {
            name: "top_level_only",
            type: "string"
          },
          {
            name: "repository_storage",
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
            name: "with_custom_attributes",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    descendant_groups: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/descendant_groups",
        resource: "descendant_groups",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of descendant groups of this group.",
        query: [
          {
            name: "statistics",
            type: "string"
          },
          {
            name: "skip_groups",
            type: "string"
          },
          {
            name: "all_available",
            type: "string"
          },
          {
            name: "visibility",
            type: "string"
          },
          {
            name: "search",
            type: "string"
          },
          {
            name: "owned",
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
            name: "min_access_level",
            type: "string"
          },
          {
            name: "top_level_only",
            type: "string"
          },
          {
            name: "repository_storage",
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
            name: "with_custom_attributes",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    transfer_locations: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/transfer_locations",
        resource: "transfer_locations",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get the groups to where the current group can be transferred to",
        query: [
          {
            name: "search",
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
        /** @param {{params:{id:string},query:{search:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    transfer: {
      post: {
        method: "post",
        url: "api/v4/groups/:id/transfer",
        resource: "transfer",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json"
        },
        description: "Transfer a group to a new parent group or promote a subgroup to a root group",
        query: [],
        data: {
          mode: "raw",
          raw: {
            group_id: "number"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{group_id:number},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      }
    },
    share: {
      post: {
        method: "post",
        url: "api/v4/groups/:id/share",
        resource: "share",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Share a group with a group",
        query: [],
        data: {
          mode: "raw",
          raw: {
            group_id: "number",
            group_access: "number",
            expires_at: "date"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{group_id:number,group_access:number,expires_at:date},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:dateTime,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/share/:group_id",
        resource: "share",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "group_id",
            type: "string"
          }
        ],
        headers: {},
        description: "",
        query: [],
        data: null,
        /** @param {{params:{id:string,group_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    ldap_sync: {
      post: {
        method: "post",
        url: "api/v4/groups/:id/ldap_sync",
        resource: "ldap_sync",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {},
        description: "Sync a group with LDAP.",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    restore: {
      post: {
        method: "post",
        url: "api/v4/groups/:id/restore",
        resource: "restore",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {},
        description: "Restore a group.",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    provisioned_users: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/provisioned_users",
        resource: "provisioned_users",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of users provisioned by the group",
        query: [
          {
            name: "username",
            type: "string"
          },
          {
            name: "search",
            type: "string"
          },
          {
            name: "active",
            type: "string"
          },
          {
            name: "blocked",
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
            name: "page",
            type: "string"
          },
          {
            name: "per_page",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{username:string,search:string,active:string,blocked:string,created_after:string,created_before:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:dateTime,confirmed_at:dateTime,last_activity_on:dateTime,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:dateTime,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string}}}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    users: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/users",
        resource: "users",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of users for the group",
        query: [
          {
            name: "search",
            type: "string"
          },
          {
            name: "active",
            type: "string"
          },
          {
            name: "include_saml_users",
            type: "string"
          },
          {
            name: "include_service_accounts",
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
        /** @param {{params:{id:string},query:{search:string,active:string,include_saml_users:string,include_service_accounts:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:dateTime,confirmed_at:dateTime,last_activity_on:dateTime,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:dateTime,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string}}},{code:400},{code:403},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    ssh_certificates: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/ssh_certificates",
        resource: "ssh_certificates",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of ssh certificates created for a group.",
        query: [
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
        /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,title:string,key:string,created_at:dateTime},{id:number,title:string,key:string,created_at:dateTime}]},{code:401},{code:403},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/ssh_certificates",
        resource: "ssh_certificates",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Create a ssh certificate for a group.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            title: "string",
            key: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{title:string,key:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,title:string,key:string,created_at:dateTime}},{code:400},{code:401},{code:403},{code:404}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/ssh_certificates/:ssh_certificates_id",
        resource: "ssh_certificates",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "ssh_certificates_id",
            type: "string"
          }
        ],
        headers: {},
        description: "Removes a Groups::SshCertificate",
        query: [],
        data: null,
        /** @param {{params:{id:string,ssh_certificates_id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:401},{code:403},{code:422}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    runners: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/runners",
        resource: "runners",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "List all runners available in the group as well as its ancestor groups, including any allowed shared runners.",
        query: [
          {
            name: "type",
            type: "string"
          },
          {
            name: "paused",
            type: "string"
          },
          {
            name: "status",
            type: "string"
          },
          {
            name: "tag_list",
            type: "string"
          },
          {
            name: "version_prefix",
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
        /** @param {{params:{id:string},query:{type:string,paused:string,status:string,tag_list:string,version_prefix:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}},{code:400},{code:403}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      reset_registration_token: {
        post: {
          method: "post",
          url: "api/v4/groups/:id/runners/reset_registration_token",
          resource: "reset_registration_token",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Reset runner registration token",
          query: [],
          data: null,
          /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{token:string,token_expires_at:string}},{code:401},{code:403},{code:404}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      }
    },
    dependency_proxy: {
      cache: {
        delete: {
          method: "delete",
          url: "api/v4/groups/:id/dependency_proxy/cache",
          resource: "cache",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {},
          description: "Schedules for deletion the cached manifests and blobs for a group.This endpoint requires the Owner role for the group.",
          query: [],
          data: null,
          /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:202},{code:401}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      }
    },
    deploy_tokens: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/deploy_tokens",
        resource: "deploy_tokens",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of a group's deploy tokens. This feature was introduced in GitLab 12.9.",
        query: [
          {
            name: "page",
            type: "string"
          },
          {
            name: "per_page",
            type: "string"
          },
          {
            name: "active",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{page:string,per_page:string,active:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,name:string,username:string,expires_at:dateTime,revoked:boolean,expired:boolean},{id:number,name:string,username:string,expires_at:dateTime,revoked:boolean,expired:boolean}]},{code:401},{code:403},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/deploy_tokens",
        resource: "deploy_tokens",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Creates a new deploy token for a group. This feature was introduced in GitLab 12.9.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            name: "string",
            scopes: [
              "string",
              "string"
            ],
            expires_at: "dateTime",
            username: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{name:string,scopes:[string,string],expires_at:dateTime,username:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,username:string,expires_at:dateTime,revoked:boolean,expired:boolean,token:string}},{code:400},{code:401},{code:404}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/deploy_tokens/:token_id",
        resource: "deploy_tokens",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "token_id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a single group's deploy token by ID. This feature was introduced in GitLab 14.9. ",
        query: [],
        data: null,
        /** @param {{params:{id:string,token_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,username:string,expires_at:dateTime,revoked:boolean,expired:boolean}},{code:401},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/deploy_tokens/:token_id",
        resource: "deploy_tokens",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "token_id",
            type: "string"
          }
        ],
        headers: {},
        description: "Removes a deploy token from the group. This feature was introduced in GitLab 12.9.",
        query: [],
        data: null,
        /** @param {{params:{id:string,token_id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:401},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    avatar: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/avatar",
        resource: "avatar",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {},
        description: "This feature was introduced in GitLab 14.0",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    clusters: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/clusters",
        resource: "clusters",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 12.1. Returns a list of group clusters.",
        query: [
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
        /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},platform_kubernetes:{api_url:{value:{}},namespace:{value:{}},authorization_type:{value:{}},ca_cert:{value:{}}},provider_gcp:{cluster_id:{value:{}},status_name:{value:{}},gcp_project_id:{value:{}},zone:{value:{}},machine_type:{value:{}},num_nodes:{value:{}},endpoint:{value:{}}},management_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}},{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},platform_kubernetes:{api_url:{value:{}},namespace:{value:{}},authorization_type:{value:{}},ca_cert:{value:{}}},provider_gcp:{cluster_id:{value:{}},status_name:{value:{}},gcp_project_id:{value:{}},zone:{value:{}},machine_type:{value:{}},num_nodes:{value:{}},endpoint:{value:{}}},management_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}}]},{code:403}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/clusters/:cluster_id",
        resource: "clusters",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "cluster_id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 12.1. Gets a single group cluster.",
        query: [],
        data: null,
        /** @param {{params:{id:string,cluster_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime},group:{id:string,web_url:string,name:string}}},{code:403},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/groups/:id/clusters/:cluster_id",
        resource: "clusters",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "cluster_id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 12.1. Updates an existing group cluster.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            name: "string",
            enabled: "boolean",
            domain: "string",
            environment_scope: "string",
            namespace_per_environment: true,
            management_project_id: "number",
            managed: "boolean",
            platform_kubernetes_attributes: {
              api_url: "string",
              token: "string",
              ca_cert: "string",
              namespace: "string"
            }
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string,cluster_id:string},data:{name:string,enabled:boolean,domain:string,environment_scope:string,namespace_per_environment:true,management_project_id:number,managed:boolean,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string}},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime},group:{id:string,web_url:string,name:string}}},{code:400},{code:403},{code:404}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/clusters/:cluster_id",
        resource: "clusters",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "cluster_id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 12.1. Deletes an existing group cluster. Does not remove existing resources within the connected Kubernetes cluster.",
        query: [],
        data: null,
        /** @param {{params:{id:string,cluster_id:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime},group:{id:string,web_url:string,name:string}}},{code:403},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      user: {
        post: {
          method: "post",
          url: "api/v4/groups/:id/clusters/user",
          resource: "user",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          description: "This feature was introduced in GitLab 12.1. Adds an existing Kubernetes cluster to the group.",
          query: [],
          data: {
            mode: "raw",
            raw: {
              name: "string",
              platform_kubernetes_attributes: {
                api_url: "string",
                token: "string",
                ca_cert: "string",
                namespace: "string",
                authorization_type: "rbac"
              },
              enabled: true,
              environment_scope: "*",
              namespace_per_environment: true,
              domain: "string",
              management_project_id: "number",
              managed: true
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{params:{id:string},data:{name:string,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string,authorization_type:rbac},enabled:true,environment_scope:*,namespace_per_environment:true,domain:string,management_project_id:number,managed:true},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime},group:{id:string,web_url:string,name:string}}},{code:400},{code:403},{code:404}]} */
          send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
        }
      }
    },
    registry: {
      repositories: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/registry/repositories",
          resource: "repositories",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Get a list of registry repositories in a group. This feature was introduced in GitLab 12.2.",
          query: [
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
          /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,name:string,path:string,project_id:number,location:string,created_at:dateTime,cleanup_policy_started_at:dateTime,tags_count:number,tags:{name:{value:{}},path:{value:{}},location:{value:{}}},delete_api_path:string,size:number,status:string},{id:number,name:string,path:string,project_id:number,location:string,created_at:dateTime,cleanup_policy_started_at:dateTime,tags_count:number,tags:{name:{value:{}},path:{value:{}},location:{value:{}}},delete_api_path:string,size:number,status:string}]},{code:401},{code:404}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        }
      }
    },
    export: {
      post: {
        method: "post",
        url: "api/v4/groups/:id/export",
        resource: "export",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {},
        description: "This feature was introduced in GitLab 12.5.",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:202},{code:401},{code:403},{code:404},{code:429},{code:503}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      download: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/export/download",
          resource: "download",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {},
          description: "This feature was introduced in GitLab 12.5.",
          query: [],
          data: null,
          /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:401},{code:403},{code:404},{code:503}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      }
    },
    export_relations: {
      post: {
        method: "post",
        url: "api/v4/groups/:id/export_relations",
        resource: "export_relations",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json"
        },
        description: "This feature was introduced in GitLab 13.12",
        query: [],
        data: {
          mode: "raw",
          raw: {
            batched: "boolean"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{batched:boolean},clientOptions:{}}} requestOptions * @return {[{code:202},{code:401},{code:403},{code:404},{code:503}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      download: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/export_relations/download",
          resource: "download",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {},
          description: "This feature was introduced in GitLab 13.12",
          query: [
            {
              name: "relation",
              type: "string"
            },
            {
              name: "batched",
              type: "string"
            },
            {
              name: "batch_number",
              type: "string"
            }
          ],
          data: null,
          /** @param {{params:{id:string},query:{relation:string,batched:string,batch_number:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404},{code:503}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        }
      },
      status: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/export_relations/status",
          resource: "status",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "This feature was introduced in GitLab 13.12",
          query: [
            {
              name: "relation",
              type: "string"
            }
          ],
          data: null,
          /** @param {{params:{id:string},query:{relation:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{relation:string,status:string,error:string,updated_at:dateTime,batched:boolean,batches_count:number,total_objects_count:number,batches:{status:{value:{}},batch_number:{value:{}},objects_count:{value:{}},error:{value:{}},updated_at:{value:{}}}},{relation:string,status:string,error:string,updated_at:dateTime,batched:boolean,batches_count:number,total_objects_count:number,batches:{status:{value:{}},batch_number:{value:{}},objects_count:{value:{}},error:{value:{}},updated_at:{value:{}}}}]},{code:401},{code:403},{code:404},{code:503}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        }
      }
    },
    packages: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/packages",
        resource: "packages",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of project packages at the group level. This feature was introduced in GitLab 12.5",
        query: [
          {
            name: "exclude_subgroups",
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
            name: "order_by",
            type: "string"
          },
          {
            name: "sort",
            type: "string"
          },
          {
            name: "package_type",
            type: "string"
          },
          {
            name: "package_name",
            type: "string"
          },
          {
            name: "package_version",
            type: "string"
          },
          {
            name: "include_versionless",
            type: "string"
          },
          {
            name: "status",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{exclude_subgroups:string,page:string,per_page:string,order_by:string,sort:string,package_type:string,package_name:string,package_version:string,include_versionless:string,status:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,name:string,conan_package_name:string,version:string,package_type:string,status:string,_links:{web_path:string,delete_api_path:string},created_at:dateTime,last_downloaded_at:dateTime,project_id:number,project_path:string,tags:string,pipeline:{id:{value:{}},iid:{value:{}},project_id:{value:{}},sha:{value:{}},ref:{value:{}},status:{value:{}},source:{value:{}},created_at:{value:{}},updated_at:{value:{}},web_url:{value:{}},user:{value:{}}},pipelines:{id:{value:{}},iid:{value:{}},project_id:{value:{}},sha:{value:{}},ref:{value:{}},status:{value:{}},source:{value:{}},created_at:{value:{}},updated_at:{value:{}},web_url:{value:{}},user:{value:{}}},versions:{id:{value:{}},version:{value:{}},created_at:{value:{}},tags:{value:{}},pipeline:{value:{}}}},{id:number,name:string,conan_package_name:string,version:string,package_type:string,status:string,_links:{web_path:string,delete_api_path:string},created_at:dateTime,last_downloaded_at:dateTime,project_id:number,project_path:string,tags:string,pipeline:{id:{value:{}},iid:{value:{}},project_id:{value:{}},sha:{value:{}},ref:{value:{}},status:{value:{}},source:{value:{}},created_at:{value:{}},updated_at:{value:{}},web_url:{value:{}},user:{value:{}}},pipelines:{id:{value:{}},iid:{value:{}},project_id:{value:{}},sha:{value:{}},ref:{value:{}},status:{value:{}},source:{value:{}},created_at:{value:{}},updated_at:{value:{}},web_url:{value:{}},user:{value:{}}},versions:{id:{value:{}},version:{value:{}},created_at:{value:{}},tags:{value:{}},pipeline:{value:{}}}}]},{code:401},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    variables: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/variables",
        resource: "variables",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of group-level variables",
        query: [
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
        /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/variables",
        resource: "variables",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Create a new variable in a group",
        query: [],
        data: {
          mode: "raw",
          raw: {
            key: "string",
            value: "string",
            protected: "string",
            masked_and_hidden: "string",
            masked: "string",
            raw: "string",
            variable_type: "string",
            environment_scope: "string",
            description: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{key:string,value:string,protected:string,masked_and_hidden:string,masked:string,raw:string,variable_type:string,environment_scope:string,description:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:400}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/variables/:key",
        resource: "variables",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "key",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get the details of a group’s specific variable",
        query: [],
        data: null,
        /** @param {{params:{id:string,key:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/groups/:id/variables/:key",
        resource: "variables",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "key",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Update an existing variable from a group",
        query: [],
        data: {
          mode: "raw",
          raw: {
            value: "string",
            protected: "string",
            masked: "string",
            raw: "string",
            variable_type: "string",
            environment_scope: "string",
            description: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string,key:string},data:{value:string,protected:string,masked:string,raw:string,variable_type:string,environment_scope:string,description:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:400},{code:404}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/variables/:key",
        resource: "variables",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "key",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Delete an existing variable from a group",
        query: [],
        data: null,
        /** @param {{params:{id:string,key:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    invitations: {
      post: {
        method: "post",
        url: "api/v4/groups/:id/invitations",
        resource: "invitations",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 13.6",
        query: [],
        data: {
          mode: "raw",
          raw: {
            access_level: "number",
            email: [
              "string",
              "string"
            ],
            user_id: [
              "string",
              "string"
            ],
            expires_at: "dateTime",
            invite_source: "invitations-api"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{access_level:number,email:[string,string],user_id:[string,string],expires_at:dateTime,invite_source:invitations-api},clientOptions:{}}} requestOptions * @return {[{code:201,data:{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      get: {
        method: "get",
        url: "api/v4/groups/:id/invitations",
        resource: "invitations",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 13.6",
        query: [
          {
            name: "page",
            type: "string"
          },
          {
            name: "per_page",
            type: "string"
          },
          {
            name: "query",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{page:string,per_page:string,query:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string},{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}]}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/groups/:id/invitations/:email",
        resource: "invitations",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "email",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Updates a group or project invitation.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            access_level: "number",
            expires_at: "dateTime"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string,email:string},data:{access_level:number,expires_at:dateTime},clientOptions:{}}} requestOptions * @return {[{code:200,data:{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/invitations/:email",
        resource: "invitations",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "email",
            type: "string"
          }
        ],
        headers: {},
        description: "Removes an invitation from a group or project.",
        query: [],
        data: null,
        /** @param {{params:{id:string,email:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:403},{code:404},{code:409}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    "-": {
      packages: {
        maven: {
          "*path": {
            get: {
              method: "get",
              url: "api/v4/groups/:id/-/packages/maven/*path/:file_name",
              resource: "*path",
              variable: [
                {
                  name: "id",
                  type: "string"
                },
                {
                  name: "file_name",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 11.7",
              query: [
                {
                  name: "path",
                  type: "string"
                }
              ],
              data: null,
              /** @param {{params:{id:string,file_name:string},query:{path:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:302},{code:401},{code:403},{code:404}]} */
              send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
            }
          }
        },
        debian: {
          dists: {
            "*distribution": {
              "Release.gpg": {
                get: {
                  method: "get",
                  url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/Release.gpg",
                  resource: "Release.gpg",
                  variable: [
                    {
                      name: "id",
                      type: "string"
                    }
                  ],
                  headers: {},
                  description: "This feature was introduced in GitLab 13.5",
                  query: [
                    {
                      name: "distribution",
                      type: "string"
                    }
                  ],
                  data: null,
                  /** @param {{params:{id:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:401},{code:403},{code:404}]} */
                  send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                }
              },
              Release: {
                get: {
                  method: "get",
                  url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/Release",
                  resource: "Release",
                  variable: [
                    {
                      name: "id",
                      type: "string"
                    }
                  ],
                  headers: {},
                  description: "This feature was introduced in GitLab 13.5",
                  query: [
                    {
                      name: "distribution",
                      type: "string"
                    }
                  ],
                  data: null,
                  /** @param {{params:{id:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:401},{code:403},{code:404}]} */
                  send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                }
              },
              InRelease: {
                get: {
                  method: "get",
                  url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/InRelease",
                  resource: "InRelease",
                  variable: [
                    {
                      name: "id",
                      type: "string"
                    }
                  ],
                  headers: {},
                  description: "This feature was introduced in GitLab 13.5",
                  query: [
                    {
                      name: "distribution",
                      type: "string"
                    }
                  ],
                  data: null,
                  /** @param {{params:{id:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:401},{code:403},{code:404}]} */
                  send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                }
              },
              "debian-installer": {
                "binary-{{architecture}}": {
                  Packages: {
                    get: {
                      method: "get",
                      url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/debian-installer/binary-{{architecture}}/Packages",
                      resource: "Packages",
                      variable: [
                        {
                          name: "id",
                          type: "string"
                        },
                        {
                          name: "component",
                          type: "string"
                        }
                      ],
                      headers: {},
                      description: "This feature was introduced in GitLab 15.4",
                      query: [
                        {
                          name: "distribution",
                          type: "string"
                        }
                      ],
                      data: null,
                      /** @param {{params:{id:string,component:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]} */
                      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                    }
                  },
                  "by-hash": {
                    SHA256: {
                      get: {
                        method: "get",
                        url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/debian-installer/binary-{{architecture}}/by-hash/SHA256/:file_sha256",
                        resource: "SHA256",
                        variable: [
                          {
                            name: "id",
                            type: "string"
                          },
                          {
                            name: "component",
                            type: "string"
                          },
                          {
                            name: "file_sha256",
                            type: "string"
                          }
                        ],
                        headers: {},
                        description: "This feature was introduced in GitLab 15.4",
                        query: [
                          {
                            name: "distribution",
                            type: "string"
                          }
                        ],
                        data: null,
                        /** @param {{params:{id:string,component:string,file_sha256:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]} */
                        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                      }
                    }
                  }
                }
              },
              source: {
                Sources: {
                  get: {
                    method: "get",
                    url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/source/Sources",
                    resource: "Sources",
                    variable: [
                      {
                        name: "id",
                        type: "string"
                      },
                      {
                        name: "component",
                        type: "string"
                      }
                    ],
                    headers: {},
                    description: "This feature was introduced in GitLab 15.4",
                    query: [
                      {
                        name: "distribution",
                        type: "string"
                      }
                    ],
                    data: null,
                    /** @param {{params:{id:string,component:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]} */
                    send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                  }
                },
                "by-hash": {
                  SHA256: {
                    get: {
                      method: "get",
                      url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/source/by-hash/SHA256/:file_sha256",
                      resource: "SHA256",
                      variable: [
                        {
                          name: "id",
                          type: "string"
                        },
                        {
                          name: "component",
                          type: "string"
                        },
                        {
                          name: "file_sha256",
                          type: "string"
                        }
                      ],
                      headers: {},
                      description: "This feature was introduced in GitLab 15.4",
                      query: [
                        {
                          name: "distribution",
                          type: "string"
                        }
                      ],
                      data: null,
                      /** @param {{params:{id:string,component:string,file_sha256:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]} */
                      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                    }
                  }
                }
              },
              "binary-{{architecture}}": {
                Packages: {
                  get: {
                    method: "get",
                    url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/binary-{{architecture}}/Packages",
                    resource: "Packages",
                    variable: [
                      {
                        name: "id",
                        type: "string"
                      },
                      {
                        name: "component",
                        type: "string"
                      }
                    ],
                    headers: {},
                    description: "This feature was introduced in GitLab 13.5",
                    query: [
                      {
                        name: "distribution",
                        type: "string"
                      }
                    ],
                    data: null,
                    /** @param {{params:{id:string,component:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]} */
                    send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                  }
                },
                "by-hash": {
                  SHA256: {
                    get: {
                      method: "get",
                      url: "api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/binary-{{architecture}}/by-hash/SHA256/:file_sha256",
                      resource: "SHA256",
                      variable: [
                        {
                          name: "id",
                          type: "string"
                        },
                        {
                          name: "component",
                          type: "string"
                        },
                        {
                          name: "file_sha256",
                          type: "string"
                        }
                      ],
                      headers: {},
                      description: "This feature was introduced in GitLab 15.4",
                      query: [
                        {
                          name: "distribution",
                          type: "string"
                        }
                      ],
                      data: null,
                      /** @param {{params:{id:string,component:string,file_sha256:string},query:{distribution:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]} */
                      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                    }
                  }
                }
              }
            }
          },
          pool: {
            get: {
              method: "get",
              url: "api/v4/groups/:id/-/packages/debian/pool/:distribution/:project_id/:letter/:package_name/:package_version/:file_name",
              resource: "pool",
              variable: [
                {
                  name: "id",
                  type: "string"
                },
                {
                  name: "project_id",
                  type: "string"
                },
                {
                  name: "distribution",
                  type: "string"
                },
                {
                  name: "letter",
                  type: "string"
                },
                {
                  name: "package_name",
                  type: "string"
                },
                {
                  name: "package_version",
                  type: "string"
                },
                {
                  name: "file_name",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 14.2",
              query: [],
              data: null,
              /** @param {{params:{id:string,project_id:string,distribution:string,letter:string,package_name:string,package_version:string,file_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          }
        },
        npm: {
          "-": {
            package: {
              "*package_name": {
                "dist-tags": {
                  get: {
                    method: "get",
                    url: "api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags",
                    resource: "dist-tags",
                    variable: [
                      {
                        name: "id",
                        type: "string"
                      }
                    ],
                    headers: {
                      Accept: "application/json"
                    },
                    description: "This feature was introduced in GitLab 12.7",
                    query: [
                      {
                        name: "package_name",
                        type: "string"
                      }
                    ],
                    data: null,
                    /** @param {{params:{id:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{dist_tags:object}},{code:400},{code:401},{code:403},{code:404}]} */
                    send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                  },
                  put: {
                    method: "put",
                    url: "api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags/:tag",
                    resource: "dist-tags",
                    variable: [
                      {
                        name: "id",
                        type: "string"
                      },
                      {
                        name: "tag",
                        type: "string"
                      }
                    ],
                    headers: {
                      "Content-Type": "application/json"
                    },
                    description: "This feature was introduced in GitLab 12.7",
                    query: [],
                    data: {
                      mode: "raw",
                      raw: {
                        package_name: "string"
                      },
                      options: {
                        raw: {
                          language: "json"
                        }
                      }
                    },

                    /** @param {{params:{id:string,tag:string},data:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:401},{code:403},{code:404}]} */
                    send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
                  },
                  delete: {
                    method: "delete",
                    url: "api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags/:tag",
                    resource: "dist-tags",
                    variable: [
                      {
                        name: "id",
                        type: "string"
                      },
                      {
                        name: "tag",
                        type: "string"
                      }
                    ],
                    headers: {},
                    description: "This feature was introduced in GitLab 12.7",
                    query: [
                      {
                        name: "package_name",
                        type: "string"
                      }
                    ],
                    data: null,
                    /** @param {{params:{id:string,tag:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:401},{code:403},{code:404}]} */
                    send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                  }
                }
              }
            },
            npm: {
              v1: {
                security: {
                  advisories: {
                    bulk: {
                      post: {
                        method: "post",
                        url: "api/v4/groups/:id/-/packages/npm/-/npm/v1/security/advisories/bulk",
                        resource: "bulk",
                        variable: [
                          {
                            name: "id",
                            type: "string"
                          }
                        ],
                        headers: {},
                        description: "This feature was introduced in GitLab 15.6",
                        query: [],
                        data: null,
                        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:307},{code:401},{code:403},{code:404}]} */
                        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
                      }
                    }
                  },
                  audits: {
                    quick: {
                      post: {
                        method: "post",
                        url: "api/v4/groups/:id/-/packages/npm/-/npm/v1/security/audits/quick",
                        resource: "quick",
                        variable: [
                          {
                            name: "id",
                            type: "string"
                          }
                        ],
                        headers: {},
                        description: "This feature was introduced in GitLab 15.6",
                        query: [],
                        data: null,
                        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:307},{code:401},{code:403},{code:404}]} */
                        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
                      }
                    }
                  }
                }
              }
            }
          },
          "*package_name": {
            get: {
              method: "get",
              url: "api/v4/groups/:id/-/packages/npm/*package_name",
              resource: "*package_name",
              variable: [
                {
                  name: "id",
                  type: "string"
                }
              ],
              headers: {
                Accept: "application/json"
              },
              description: "This feature was introduced in GitLab 11.8",
              query: [
                {
                  name: "package_name",
                  type: "string"
                }
              ],
              data: null,
              /** @param {{params:{id:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{name:string,versions:object,dist-tags:object}},{code:302},{code:400},{code:401},{code:403},{code:404}]} */
              send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
            }
          }
        },
        nuget: {
          index: {
            get: {
              method: "get",
              url: "api/v4/groups/:id/-/packages/nuget/index",
              resource: "index",
              variable: [
                {
                  name: "id",
                  type: "string"
                }
              ],
              headers: {
                Accept: "application/json"
              },
              description: "This feature was introduced in GitLab 12.6",
              query: [],
              data: null,
              /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{version:string,resources:[object,object]}},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          },
          symbolfiles: {
            "*file_name": {
              "*signature": {
                "*same_file_name": {
                  get: {
                    method: "get",
                    url: "api/v4/groups/:id/-/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name",
                    resource: "*same_file_name",
                    variable: [
                      {
                        name: "id",
                        type: "string"
                      }
                    ],
                    headers: {
                      Symbolchecksum: "<string>"
                    },
                    description: "This feature was introduced in GitLab 16.7",
                    query: [
                      {
                        name: "file_name",
                        type: "string"
                      },
                      {
                        name: "signature",
                        type: "string"
                      },
                      {
                        name: "same_file_name",
                        type: "string"
                      }
                    ],
                    data: null,
                    /** @param {{params:{id:string},query:{file_name:string,signature:string,same_file_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:403},{code:404}]} */
                    send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                  }
                }
              }
            }
          },
          v2: {
            get: {
              method: "get",
              url: "api/v4/groups/:id/-/packages/nuget/v2",
              resource: "v2",
              variable: [
                {
                  name: "id",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 16.2",
              query: [],
              data: null,
              /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            },
            "$metadata": {
              get: {
                method: "get",
                url: "api/v4/groups/:id/-/packages/nuget/v2/$metadata",
                resource: "$metadata",
                variable: [
                  {
                    name: "id",
                    type: "string"
                  }
                ],
                headers: {},
                description: "This feature was introduced in GitLab 16.3",
                query: [],
                data: null,
                /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
                send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
              }
            }
          },
          metadata: {
            "*package_name": {
              index: {
                get: {
                  method: "get",
                  url: "api/v4/groups/:id/-/packages/nuget/metadata/*package_name/index",
                  resource: "index",
                  variable: [
                    {
                      name: "id",
                      type: "string"
                    }
                  ],
                  headers: {
                    Accept: "application/json"
                  },
                  description: "This feature was introduced in GitLab 12.8",
                  query: [
                    {
                      name: "package_name",
                      type: "string"
                    }
                  ],
                  data: null,
                  /** @param {{params:{id:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{count:number,items:[{@id:string,lower:string,upper:string,count:number,items:[{value:{}},{value:{}}]},{@id:string,lower:string,upper:string,count:number,items:[{value:{}},{value:{}}]}]}},{code:401},{code:403},{code:404}]} */
                  send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                }
              },
              "*package_version": {
                get: {
                  method: "get",
                  url: "api/v4/groups/:id/-/packages/nuget/metadata/*package_name/*package_version",
                  resource: "*package_version",
                  variable: [
                    {
                      name: "id",
                      type: "string"
                    }
                  ],
                  headers: {
                    Accept: "application/json"
                  },
                  description: "This feature was introduced in GitLab 12.8",
                  query: [
                    {
                      name: "package_name",
                      type: "string"
                    },
                    {
                      name: "package_version",
                      type: "string"
                    }
                  ],
                  data: null,
                  /** @param {{params:{id:string},query:{package_name:string,package_version:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{@id:string,packageContent:string,catalogEntry:{@id:string,dependencyGroups:[{value:{}},{value:{}}],id:string,version:string,tags:string,packageContent:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string,published:string}}},{code:401},{code:403},{code:404}]} */
                  send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
                }
              }
            }
          },
          query: {
            get: {
              method: "get",
              url: "api/v4/groups/:id/-/packages/nuget/query",
              resource: "query",
              variable: [
                {
                  name: "id",
                  type: "string"
                }
              ],
              headers: {
                Accept: "application/json"
              },
              description: "This feature was introduced in GitLab 12.8",
              query: [
                {
                  name: "q",
                  type: "string"
                },
                {
                  name: "skip",
                  type: "string"
                },
                {
                  name: "take",
                  type: "string"
                },
                {
                  name: "prerelease",
                  type: "string"
                }
              ],
              data: null,
              /** @param {{params:{id:string},query:{q:string,skip:string,take:string,prerelease:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{totalHits:number,data:[{@type:string,id:string,title:string,totalDownloads:number,verified:boolean,version:string,versions:{value:{}},tags:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string},{@type:string,id:string,title:string,totalDownloads:number,verified:boolean,version:string,versions:{value:{}},tags:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string}]}},{code:401},{code:403},{code:404}]} */
              send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
            }
          }
        },
        pypi: {
          files: {
            "*file_identifier": {
              get: {
                method: "get",
                url: "api/v4/groups/:id/-/packages/pypi/files/:sha256/*file_identifier",
                resource: "*file_identifier",
                variable: [
                  {
                    name: "id",
                    type: "string"
                  },
                  {
                    name: "sha256",
                    type: "string"
                  }
                ],
                headers: {},
                description: "This feature was introduced in GitLab 13.12",
                query: [
                  {
                    name: "file_identifier",
                    type: "string"
                  }
                ],
                data: null,
                /** @param {{params:{id:string,sha256:string},query:{file_identifier:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
                send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
              }
            }
          },
          simple: {
            get: {
              method: "get",
              url: "api/v4/groups/:id/-/packages/pypi/simple",
              resource: "simple",
              variable: [
                {
                  name: "id",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 15.1",
              query: [],
              data: null,
              /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            },
            "*package_name": {
              get: {
                method: "get",
                url: "api/v4/groups/:id/-/packages/pypi/simple/*package_name",
                resource: "*package_name",
                variable: [
                  {
                    name: "id",
                    type: "string"
                  }
                ],
                headers: {},
                description: "This feature was introduced in GitLab 12.10",
                query: [
                  {
                    name: "package_name",
                    type: "string"
                  }
                ],
                data: null,
                /** @param {{params:{id:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
                send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
              }
            }
          }
        }
      },
      debian_distributions: {
        post: {
          method: "post",
          url: "api/v4/groups/:id/-/debian_distributions",
          resource: "debian_distributions",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          description: "This feature was introduced in 14.0",
          query: [],
          data: {
            mode: "raw",
            raw: {
              codename: "string",
              suite: "string",
              origin: "string",
              label: "string",
              version: "string",
              description: "string",
              valid_time_duration_seconds: "number",
              components: [
                "string",
                "string"
              ],
              architectures: [
                "string",
                "string"
              ]
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{params:{id:string},data:{codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:400},{code:401},{code:403},{code:404}]} */
          send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
        },
        get: {
          method: "get",
          url: "api/v4/groups/:id/-/debian_distributions",
          resource: "debian_distributions",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "This feature was introduced in 14.0",
          query: [
            {
              name: "page",
              type: "string"
            },
            {
              name: "per_page",
              type: "string"
            },
            {
              name: "codename",
              type: "string"
            },
            {
              name: "suite",
              type: "string"
            },
            {
              name: "origin",
              type: "string"
            },
            {
              name: "label",
              type: "string"
            },
            {
              name: "version",
              type: "string"
            },
            {
              name: "description",
              type: "string"
            },
            {
              name: "valid_time_duration_seconds",
              type: "string"
            },
            {
              name: "components",
              type: "string"
            },
            {
              name: "architectures",
              type: "string"
            }
          ],
          data: null,
          /** @param {{params:{id:string},query:{page:string,per_page:string,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:string,components:string,architectures:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:401},{code:403},{code:404}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        },
        getOne: {
          method: "get",
          url: "api/v4/groups/:id/-/debian_distributions/:codename",
          resource: "debian_distributions",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "codename",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "This feature was introduced in 14.0",
          query: [],
          data: null,
          /** @param {{params:{id:string,codename:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:401},{code:403},{code:404}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        },
        put: {
          method: "put",
          url: "api/v4/groups/:id/-/debian_distributions/:codename",
          resource: "debian_distributions",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "codename",
              type: "string"
            }
          ],
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          description: "This feature was introduced in 14.0",
          query: [],
          data: {
            mode: "raw",
            raw: {
              suite: "string",
              origin: "string",
              label: "string",
              version: "string",
              description: "string",
              valid_time_duration_seconds: "number",
              components: [
                "string",
                "string"
              ],
              architectures: [
                "string",
                "string"
              ]
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{params:{id:string,codename:string},data:{suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:400},{code:401},{code:403},{code:404}]} */
          send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
        },
        delete: {
          method: "delete",
          url: "api/v4/groups/:id/-/debian_distributions/:codename",
          resource: "debian_distributions",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "codename",
              type: "string"
            }
          ],
          headers: {},
          description: "This feature was introduced in 14.0",
          query: [
            {
              name: "suite",
              type: "string"
            },
            {
              name: "origin",
              type: "string"
            },
            {
              name: "label",
              type: "string"
            },
            {
              name: "version",
              type: "string"
            },
            {
              name: "description",
              type: "string"
            },
            {
              name: "valid_time_duration_seconds",
              type: "string"
            },
            {
              name: "components",
              type: "string"
            },
            {
              name: "architectures",
              type: "string"
            }
          ],
          data: null,
          /** @param {{params:{id:string,codename:string},query:{suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:string,components:string,architectures:string},clientOptions:{}}} requestOptions * @return {[{code:202},{code:400},{code:401},{code:403},{code:404}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        },
        "key.asc": {
          get: {
            method: "get",
            url: "api/v4/groups/:id/-/debian_distributions/:codename/key.asc",
            resource: "key.asc",
            variable: [
              {
                name: "id",
                type: "string"
              },
              {
                name: "codename",
                type: "string"
              }
            ],
            headers: {
              Accept: "application/json"
            },
            description: "This feature was introduced in 14.4",
            query: [],
            data: null,
            /** @param {{params:{id:string,codename:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:401},{code:403},{code:404}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          }
        }
      }
    },
    members: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/members",
        resource: "members",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Gets a list of group or project members viewable by the authenticated user.",
        query: [
          {
            name: "query",
            type: "string"
          },
          {
            name: "user_ids",
            type: "string"
          },
          {
            name: "skip_users",
            type: "string"
          },
          {
            name: "show_seat_info",
            type: "string"
          },
          {
            name: "with_saml_identity",
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
        /** @param {{params:{id:string},query:{query:string,user_ids:string,skip_users:string,show_seat_info:string,with_saml_identity:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,access_level:string,created_at:string,created_by:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},expires_at:string,group_saml_identity:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:{value:{}},group_id:{value:{}},name:{value:{}},description:{value:{}},base_access_level:{value:{}},admin_cicd_variables:{value:{}},admin_compliance_framework:{value:{}},admin_group_member:{value:{}},admin_merge_request:{value:{}},admin_push_rules:{value:{}},admin_terraform_state:{value:{}},admin_vulnerability:{value:{}},admin_web_hook:{value:{}},archive_project:{value:{}},manage_deploy_tokens:{value:{}},manage_group_access_tokens:{value:{}},manage_merge_request_settings:{value:{}},manage_project_access_tokens:{value:{}},manage_security_policy_link:{value:{}},read_code:{value:{}},read_dependency:{value:{}},read_vulnerability:{value:{}},remove_group:{value:{}},remove_project:{value:{}}}},{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,access_level:string,created_at:string,created_by:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},expires_at:string,group_saml_identity:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:{value:{}},group_id:{value:{}},name:{value:{}},description:{value:{}},base_access_level:{value:{}},admin_cicd_variables:{value:{}},admin_compliance_framework:{value:{}},admin_group_member:{value:{}},admin_merge_request:{value:{}},admin_push_rules:{value:{}},admin_terraform_state:{value:{}},admin_vulnerability:{value:{}},admin_web_hook:{value:{}},archive_project:{value:{}},manage_deploy_tokens:{value:{}},manage_group_access_tokens:{value:{}},manage_merge_request_settings:{value:{}},manage_project_access_tokens:{value:{}},manage_security_policy_link:{value:{}},read_code:{value:{}},read_dependency:{value:{}},read_vulnerability:{value:{}},remove_group:{value:{}},remove_project:{value:{}}}}]}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/members",
        resource: "members",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Adds a member to a group or project.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            access_level: "number",
            user_id: "number",
            username: "string",
            expires_at: "dateTime",
            invite_source: "members-api"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{access_level:number,user_id:number,username:string,expires_at:dateTime,invite_source:members-api},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:text,description:text,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      all: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/members/all",
          resource: "all",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Gets a list of group or project members viewable by the authenticated user, including those who gained membership through ancestor group.",
          query: [
            {
              name: "query",
              type: "string"
            },
            {
              name: "user_ids",
              type: "string"
            },
            {
              name: "show_seat_info",
              type: "string"
            },
            {
              name: "state",
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
          /** @param {{params:{id:string},query:{query:string,user_ids:string,show_seat_info:string,state:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,access_level:string,created_at:string,created_by:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},expires_at:string,group_saml_identity:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:{value:{}},group_id:{value:{}},name:{value:{}},description:{value:{}},base_access_level:{value:{}},admin_cicd_variables:{value:{}},admin_compliance_framework:{value:{}},admin_group_member:{value:{}},admin_merge_request:{value:{}},admin_push_rules:{value:{}},admin_terraform_state:{value:{}},admin_vulnerability:{value:{}},admin_web_hook:{value:{}},archive_project:{value:{}},manage_deploy_tokens:{value:{}},manage_group_access_tokens:{value:{}},manage_merge_request_settings:{value:{}},manage_project_access_tokens:{value:{}},manage_security_policy_link:{value:{}},read_code:{value:{}},read_dependency:{value:{}},read_vulnerability:{value:{}},remove_group:{value:{}},remove_project:{value:{}}}},{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,access_level:string,created_at:string,created_by:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},expires_at:string,group_saml_identity:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:{value:{}},group_id:{value:{}},name:{value:{}},description:{value:{}},base_access_level:{value:{}},admin_cicd_variables:{value:{}},admin_compliance_framework:{value:{}},admin_group_member:{value:{}},admin_merge_request:{value:{}},admin_push_rules:{value:{}},admin_terraform_state:{value:{}},admin_vulnerability:{value:{}},admin_web_hook:{value:{}},archive_project:{value:{}},manage_deploy_tokens:{value:{}},manage_group_access_tokens:{value:{}},manage_merge_request_settings:{value:{}},manage_project_access_tokens:{value:{}},manage_security_policy_link:{value:{}},read_code:{value:{}},read_dependency:{value:{}},read_vulnerability:{value:{}},remove_group:{value:{}},remove_project:{value:{}}}}]}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        },
        getOne: {
          method: "get",
          url: "api/v4/groups/:id/members/all/:user_id",
          resource: "all",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "user_id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Gets a member of a group or project, including those who gained membership through ancestor group",
          query: [],
          data: null,
          /** @param {{params:{id:string,user_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:text,description:text,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/members/:user_id",
        resource: "members",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "user_id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Gets a member of a group or project.",
        query: [],
        data: null,
        /** @param {{params:{id:string,user_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:text,description:text,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/groups/:id/members/:user_id",
        resource: "members",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "user_id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Updates a member of a group or project.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            access_level: "number",
            expires_at: "dateTime",
            member_role_id: "number"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string,user_id:string},data:{access_level:number,expires_at:dateTime,member_role_id:number},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:text,description:text,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/members/:user_id",
        resource: "members",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "user_id",
            type: "string"
          }
        ],
        headers: {},
        description: "Removes a user from a group or project.",
        query: [
          {
            name: "skip_subresources",
            type: "string"
          },
          {
            name: "unassign_issuables",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string,user_id:string},query:{skip_subresources:string,unassign_issuables:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      override: {
        post: {
          method: "post",
          url: "api/v4/groups/:id/members/:user_id/override",
          resource: "override",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "user_id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Overrides the access level of an LDAP group member.",
          query: [],
          data: null,
          /** @param {{params:{id:string,user_id:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:text,description:text,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        },
        delete: {
          method: "delete",
          url: "api/v4/groups/:id/members/:user_id/override",
          resource: "override",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "user_id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Remove an LDAP group member access level override.",
          query: [],
          data: null,
          /** @param {{params:{id:string,user_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:text,description:text,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      },
      state: {
        put: {
          method: "put",
          url: "api/v4/groups/:id/members/:user_id/state",
          resource: "state",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "user_id",
              type: "string"
            }
          ],
          headers: {
            "Content-Type": "application/json"
          },
          description: "Changes the state of the memberships of a user in the group",
          query: [],
          data: {
            mode: "raw",
            raw: {
              state: "string"
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{params:{id:string,user_id:string},data:{state:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
          send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
        }
      },
      approve: {
        put: {
          method: "put",
          url: "api/v4/groups/:id/members/:member_id/approve",
          resource: "approve",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "member_id",
              type: "string"
            }
          ],
          headers: {},
          description: "Approves a pending member",
          query: [],
          data: null,
          /** @param {{params:{id:string,member_id:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      },
      approve_all: {
        post: {
          method: "post",
          url: "api/v4/groups/:id/members/approve_all",
          resource: "approve_all",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {},
          description: "Approves all pending members",
          query: [],
          data: null,
          /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      }
    },
    pending_members: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/pending_members",
        resource: "pending_members",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {},
        description: "Lists all pending members for a group including invited users",
        query: [
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
        /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    billable_members: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/billable_members",
        resource: "billable_members",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Gets a list of billable users of root group.",
        query: [
          {
            name: "page",
            type: "string"
          },
          {
            name: "per_page",
            type: "string"
          },
          {
            name: "search",
            type: "string"
          },
          {
            name: "sort",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{page:string,per_page:string,search:string,sort:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:text,description:text,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/billable_members/:user_id",
        resource: "billable_members",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "user_id",
            type: "string"
          }
        ],
        headers: {},
        description: "Removes a billable member from a group or project.",
        query: [],
        data: null,
        /** @param {{params:{id:string,user_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      memberships: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/billable_members/:user_id/memberships",
          resource: "memberships",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "user_id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Get the direct memberships of a billable user of a root group.",
          query: [
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
          /** @param {{params:{id:string,user_id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,source_id:string,source_full_name:string,source_members_url:string,created_at:string,expires_at:string,access_level:{string_value:string,number_value:string,custom_role:string}}}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        }
      },
      indirect: {
        get: {
          method: "get",
          url: "api/v4/groups/:id/billable_members/:user_id/indirect",
          resource: "indirect",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "user_id",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Get the indirect memberships of a billable user of a root group.",
          query: [
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
          /** @param {{params:{id:string,user_id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,source_id:string,source_full_name:string,source_members_url:string,created_at:string,expires_at:string,access_level:{string_value:string,number_value:string,custom_role:string}}}]} */
          send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
        }
      }
    },
    merge_requests: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/merge_requests",
        resource: "merge_requests",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get all merge requests for this group and its subgroups.",
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
          },
          {
            name: "non_archived",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{author_id:string,author_username:string,assignee_id:string,assignee_username:string,reviewer_username:string,labels:string,milestone:string,my_reaction_emoji:string,reviewer_id:string,state:string,order_by:string,sort:string,with_labels_details:string,with_merge_status_recheck:string,created_after:string,created_before:string,updated_after:string,updated_before:string,view:string,scope:string,source_branch:string,source_project_id:string,target_branch:string,search:string,in:string,wip:string,not[author_id]:string,not[author_username]:string,not[assignee_id]:string,not[assignee_username]:string,not[reviewer_username]:string,not[labels]:string,not[milestone]:string,not[my_reaction_emoji]:string,not[reviewer_id]:string,deployed_before:string,deployed_after:string,environment:string,approved:string,merge_user_id:string,merge_user_username:string,approver_ids:string,approved_by_ids:string,approved_by_usernames:string,page:string,per_page:string,non_archived:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,iid:number,project_id:number,title:string,description:string,state:string,created_at:dateTime,updated_at:dateTime,merged_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},merge_user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},merged_at:string,closed_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},closed_at:string,title_html:string,description_html:string,target_branch:string,source_branch:string,user_notes_count:string,upvotes:string,downvotes:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},assignees:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},assignee:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},reviewers:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},source_project_id:string,target_project_id:string,labels:string,draft:string,imported:string,imported_from:string,work_in_progress:string,milestone:{id:string,iid:string,project_id:string,group_id:string,title:string,description:string,state:string,created_at:string,updated_at:string,due_date:string,start_date:string,expired:string,web_url:string},merge_when_pipeline_succeeds:string,merge_status:string,detailed_merge_status:string,sha:string,merge_commit_sha:string,squash_commit_sha:string,discussion_locked:string,should_remove_source_branch:string,force_remove_source_branch:string,prepared_at:string,allow_collaboration:string,allow_maintainer_to_push:string,reference:string,references:{short:string,relative:string,full:string},web_url:string,time_stats:{time_estimate:number,total_time_spent:number,human_time_estimate:string,human_total_time_spent:string},squash:string,squash_on_merge:string,task_completion_status:string,has_conflicts:string,blocking_discussions_resolved:string,approvals_before_merge:string}},{code:401},{code:404},{code:422}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    releases: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/releases",
        resource: "releases",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Returns a list of group releases.",
        query: [
          {
            name: "sort",
            type: "string"
          },
          {
            name: "simple",
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
        /** @param {{params:{id:string},query:{sort:string,simple:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{name:string,tag_name:string,description:string,created_at:dateTime,released_at:dateTime,upcoming_release:boolean,description_html:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},commit:{id:{value:{}},short_id:{value:{}},created_at:{value:{}},parent_ids:{value:{}},title:{value:{}},message:{value:{}},author_name:{value:{}},author_email:{value:{}},authored_date:{value:{}},committer_name:{value:{}},committer_email:{value:{}},committed_date:{value:{}},trailers:{value:{}},extended_trailers:{value:{}},web_url:{value:{}}},milestones:{id:{value:{}},iid:{value:{}},project_id:{value:{}},group_id:{value:{}},title:{value:{}},description:{value:{}},state:{value:{}},created_at:{value:{}},updated_at:{value:{}},due_date:{value:{}},start_date:{value:{}},expired:{value:{}},web_url:{value:{}},issue_stats:{value:{}}},commit_path:string,tag_path:string,assets:{count:number,sources:{value:{}},links:{value:{}}},evidences:{sha:{value:{}},filepath:{value:{}},collected_at:{value:{}}},_links:{closed_issues_url:string,closed_merge_requests_url:string,edit_url:string,merged_merge_requests_url:string,opened_issues_url:string,opened_merge_requests_url:string,self:string}},{name:string,tag_name:string,description:string,created_at:dateTime,released_at:dateTime,upcoming_release:boolean,description_html:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},commit:{id:{value:{}},short_id:{value:{}},created_at:{value:{}},parent_ids:{value:{}},title:{value:{}},message:{value:{}},author_name:{value:{}},author_email:{value:{}},authored_date:{value:{}},committer_name:{value:{}},committer_email:{value:{}},committed_date:{value:{}},trailers:{value:{}},extended_trailers:{value:{}},web_url:{value:{}}},milestones:{id:{value:{}},iid:{value:{}},project_id:{value:{}},group_id:{value:{}},title:{value:{}},description:{value:{}},state:{value:{}},created_at:{value:{}},updated_at:{value:{}},due_date:{value:{}},start_date:{value:{}},expired:{value:{}},web_url:{value:{}},issue_stats:{value:{}}},commit_path:string,tag_path:string,assets:{count:number,sources:{value:{}},links:{value:{}}},evidences:{sha:{value:{}},filepath:{value:{}},collected_at:{value:{}}},_links:{closed_issues_url:string,closed_merge_requests_url:string,edit_url:string,merged_merge_requests_url:string,opened_issues_url:string,opened_merge_requests_url:string,self:string}}]},{code:400},{code:403},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    access_tokens: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/access_tokens",
        resource: "access_tokens",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 13.9.",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,access_level:number},{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,access_level:number}]}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/access_tokens",
        resource: "access_tokens",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 13.9.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            name: "string",
            scopes: [
              "string",
              "string"
            ],
            expires_at: "2025-05-23T21:13:09.000Z",
            access_level: 40
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{name:string,scopes:[string,string],expires_at:2025-05-23T21:13:09.000Z,access_level:40},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,access_level:number,token:string}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/access_tokens/:token_id",
        resource: "access_tokens",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "token_id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 14.10.",
        query: [],
        data: null,
        /** @param {{params:{id:string,token_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,access_level:number}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/access_tokens/:token_id",
        resource: "access_tokens",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "token_id",
            type: "string"
          }
        ],
        headers: {},
        description: "This feature was introduced in GitLab 13.9.",
        query: [],
        data: null,
        /** @param {{params:{id:string,token_id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      rotate: {
        post: {
          method: "post",
          url: "api/v4/groups/:id/access_tokens/:token_id/rotate",
          resource: "rotate",
          variable: [
            {
              name: "id",
              type: "string"
            },
            {
              name: "token_id",
              type: "string"
            }
          ],
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          description: "This feature was introduced in GitLab 16.0.",
          query: [],
          data: {
            mode: "raw",
            raw: {
              expires_at: "date"
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{params:{id:string,token_id:string},data:{expires_at:date},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,access_level:number,token:string}}]} */
          send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
        }
      }
    },
    wikis: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/wikis",
        resource: "wikis",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of wiki pages",
        query: [
          {
            name: "with_content",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{with_content:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{format:string,slug:string,title:string},{format:string,slug:string,title:string}]},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/groups/:id/wikis",
        resource: "wikis",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Create a wiki page",
        query: [],
        data: {
          mode: "raw",
          raw: {
            title: "string",
            content: "string",
            front_matter: {
              title: "string"
            },
            format: "markdown"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{title:string,content:string,front_matter:{title:string},format:markdown},clientOptions:{}}} requestOptions * @return {[{code:201,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:object}},{code:400},{code:404},{code:422}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/wikis/:slug",
        resource: "wikis",
        variable: [
          {
            name: "slug",
            type: "string"
          },
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a wiki page",
        query: [
          {
            name: "version",
            type: "string"
          },
          {
            name: "render_html",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{slug:string,id:string},query:{version:string,render_html:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:object}},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/groups/:id/wikis/:slug",
        resource: "wikis",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "slug",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Update a wiki page",
        query: [],
        data: {
          mode: "raw",
          raw: {
            title: "string",
            front_matter: {
              title: "string"
            },
            content: "string",
            format: "markdown"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string,slug:string},data:{title:string,front_matter:{title:string},content:string,format:markdown},clientOptions:{}}} requestOptions * @return {[{code:200,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:object}},{code:400},{code:404},{code:422}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/groups/:id/wikis/:slug",
        resource: "wikis",
        variable: [
          {
            name: "slug",
            type: "string"
          },
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {},
        description: "Delete a wiki page",
        query: [],
        data: null,
        /** @param {{params:{slug:string,id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      attachments: {
        post: {
          method: "post",
          url: "api/v4/groups/:id/wikis/attachments",
          resource: "attachments",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          description: "This feature was introduced in GitLab 11.3.",
          query: [],
          data: {
            mode: "raw",
            raw: {
              file: "binary",
              branch: "string"
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{params:{id:string},data:{file:binary,branch:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{file_name:string,file_path:string,branch:string,link:{url:string,markdown:string}}},{code:404}]} */
          send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
        }
      }
    },
    audit_events: {
      get: {
        method: "get",
        url: "api/v4/groups/:id/audit_events",
        resource: "audit_events",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of audit events in this group.",
        query: [
          {
            name: "created_after",
            type: "string"
          },
          {
            name: "created_before",
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
        /** @param {{params:{id:string},query:{created_after:string,created_before:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string},{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string}]}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      },
      getOne: {
        method: "get",
        url: "api/v4/groups/:id/audit_events/:audit_event_id",
        resource: "audit_events",
        variable: [
          {
            name: "audit_event_id",
            type: "string"
          },
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get a specific audit event in this group.",
        query: [],
        data: null,
        /** @param {{params:{audit_event_id:string,id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    import: {
      post: {
        method: "post",
        url: "api/v4/groups/import",
        resource: "import",
        variable: [],
        headers: {
          "Content-Type": "multipart/form-data"
        },
        description: "This feature was introduced in GitLab 12.8",
        query: [],
        data: {
          mode: "formdata",
          formdata: {
            path: "string",
            name: "string",
            parent_id: "number",
            organization_id: "number"
          }
        },

        /** @param {{data:{path:string,name:string,parent_id:number,organization_id:number},clientOptions:{}}} requestOptions * @return {[{code:202},{code:400},{code:401},{code:403},{code:503}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      },
      authorize: {
        post: {
          method: "post",
          url: "api/v4/groups/import/authorize",
          resource: "authorize",
          variable: [],
          headers: {},
          description: "This feature was introduced in GitLab 12.8",
          query: [],
          data: null,
          /** @param {{clientOptions:{}}} requestOptions * @return {[{code:201}]} */
          send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
        }
      }
    }
  }
});
