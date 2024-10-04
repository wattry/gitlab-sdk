export interface Groups {
  get: ({ query, clientOptions }: {
    query: {
      statistics: string;
      skip_groups: string;
      all_available: string;
      visibility: string;
      search: string;
      owned: string;
      order_by: string;
      sort: string;
      min_access_level: string;
      top_level_only: string;
      repository_storage: string;
      page: string;
      per_page: string;
      with_custom_attributes: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: string;
      web_url: string;
      name: string;
      path: string;
      description: string;
      visibility: string;
      share_with_group_lock: string;
      require_two_factor_authentication: string;
      two_factor_grace_period: string;
      project_creation_level: string;
      auto_devops_enabled: string;
      subgroup_creation_level: string;
      emails_disabled: boolean;
      emails_enabled: boolean;
      mentions_disabled: string;
      lfs_enabled: string;
      math_rendering_limits_enabled: boolean;
      lock_math_rendering_limits_enabled: boolean;
      default_branch: string;
      default_branch_protection: string;
      default_branch_protection_defaults: string;
      avatar_url: string;
      request_access_enabled: string;
      full_name: string;
      full_path: string;
      created_at: string;
      parent_id: string;
      organization_id: string;
      shared_runners_setting: string;
      custom_attributes: {
        key: {
          value: any;
        };
        value: {
          value: any;
        };
      };
      statistics: {
        storage_size: string;
        repository_size: string;
        wiki_size: string;
        lfs_objects_size: string;
        job_artifacts_size: string;
        pipeline_artifacts_size: string;
        packages_size: string;
        snippets_size: string;
        uploads_size: string;
      };
      ldap_cn: string;
      ldap_access: string;
      ldap_group_links: {
        cn: {
          value: any;
        };
        group_access: {
          value: any;
        };
        provider: {
          value: any;
        };
        filter: {
          value: any;
        };
      };
      saml_group_links: {
        name: {
          value: any;
        };
        access_level: {
          value: any;
        };
        member_role_id: {
          value: any;
        };
      };
      file_template_project_id: string;
      marked_for_deletion_on: string;
      wiki_access_level: string;
      repository_storage: string;
      duo_features_enabled: string;
      lock_duo_features_enabled: string;
    }, {
      id: string;
      web_url: string;
      name: string;
      path: string;
      description: string;
      visibility: string;
      share_with_group_lock: string;
      require_two_factor_authentication: string;
      two_factor_grace_period: string;
      project_creation_level: string;
      auto_devops_enabled: string;
      subgroup_creation_level: string;
      emails_disabled: boolean;
      emails_enabled: boolean;
      mentions_disabled: string;
      lfs_enabled: string;
      math_rendering_limits_enabled: boolean;
      lock_math_rendering_limits_enabled: boolean;
      default_branch: string;
      default_branch_protection: string;
      default_branch_protection_defaults: string;
      avatar_url: string;
      request_access_enabled: string;
      full_name: string;
      full_path: string;
      created_at: string;
      parent_id: string;
      organization_id: string;
      shared_runners_setting: string;
      custom_attributes: {
        key: {
          value: any;
        };
        value: {
          value: any;
        };
      };
      statistics: {
        storage_size: string;
        repository_size: string;
        wiki_size: string;
        lfs_objects_size: string;
        job_artifacts_size: string;
        pipeline_artifacts_size: string;
        packages_size: string;
        snippets_size: string;
        uploads_size: string;
      };
      ldap_cn: string;
      ldap_access: string;
      ldap_group_links: {
        cn: {
          value: any;
        };
        group_access: {
          value: any;
        };
        provider: {
          value: any;
        };
        filter: {
          value: any;
        };
      };
      saml_group_links: {
        name: {
          value: any;
        };
        access_level: {
          value: any;
        };
        member_role_id: {
          value: any;
        };
      };
      file_template_project_id: string;
      marked_for_deletion_on: string;
      wiki_access_level: string;
      repository_storage: string;
      duo_features_enabled: string;
      lock_duo_features_enabled: string;
    }];
  }]>;
  post: ({ data, clientOptions }: {
    data: {
      name: string;
      path: string;
      parent_id: number;
      organization_id: {};
      description: string;
      visibility: string;
      avatar: string;
      share_with_group_lock: boolean;
      require_two_factor_authentication: boolean;
      two_factor_grace_period: number;
      project_creation_level: string;
      auto_devops_enabled: boolean;
      subgroup_creation_level: string;
      emails_disabled: boolean;
      emails_enabled: boolean;
      show_diff_preview_in_email: boolean;
      mentions_disabled: boolean;
      lfs_enabled: boolean;
      request_access_enabled: boolean;
      default_branch: string;
      default_branch_protection: number;
      default_branch_protection_defaults: {
        allowed_to_push: [{
          access_level: number;
        }, {
          access_level: number;
        }];
        allow_force_push: boolean;
        allowed_to_merge: [{
          access_level: number;
        }, {
          access_level: number;
        }];
        code_owner_approval_required: boolean;
        developer_can_initial_push: boolean;
      };
      shared_runners_setting: string;
      enabled_git_access_protocol: string;
      membership_lock: boolean;
      ldap_cn: string;
      ldap_access: number;
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      wiki_access_level: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 201;
    data: {
      id: string;
      web_url: string;
      name: string;
      path: string;
      description: string;
      visibility: string;
      share_with_group_lock: string;
      require_two_factor_authentication: string;
      two_factor_grace_period: string;
      project_creation_level: string;
      auto_devops_enabled: string;
      subgroup_creation_level: string;
      emails_disabled: boolean;
      emails_enabled: boolean;
      mentions_disabled: string;
      lfs_enabled: string;
      math_rendering_limits_enabled: boolean;
      lock_math_rendering_limits_enabled: boolean;
      default_branch: string;
      default_branch_protection: string;
      default_branch_protection_defaults: string;
      avatar_url: string;
      request_access_enabled: string;
      full_name: string;
      full_path: string;
      created_at: string;
      parent_id: string;
      organization_id: string;
      shared_runners_setting: string;
      custom_attributes: {
        key: string;
        value: string;
      };
      statistics: {
        storage_size: string;
        repository_size: string;
        wiki_size: string;
        lfs_objects_size: string;
        job_artifacts_size: string;
        pipeline_artifacts_size: string;
        packages_size: string;
        snippets_size: string;
        uploads_size: string;
      };
      ldap_cn: string;
      ldap_access: string;
      ldap_group_links: {
        cn: string;
        group_access: number;
        provider: string;
        filter: string;
      };
      saml_group_links: {
        name: string;
        access_level: number;
        member_role_id: number;
      };
      file_template_project_id: string;
      marked_for_deletion_on: string;
      wiki_access_level: string;
      repository_storage: string;
      duo_features_enabled: string;
      lock_duo_features_enabled: string;
    };
  }]>;
  put: ({ params, data, clientOptions }: {
    params: {
      id: string;
    };
    data: {
      name: string;
      path: string;
      description: string;
      visibility: string;
      avatar: string;
      share_with_group_lock: boolean;
      require_two_factor_authentication: boolean;
      two_factor_grace_period: number;
      project_creation_level: string;
      auto_devops_enabled: boolean;
      subgroup_creation_level: string;
      emails_disabled: boolean;
      emails_enabled: boolean;
      show_diff_preview_in_email: boolean;
      mentions_disabled: boolean;
      lfs_enabled: boolean;
      request_access_enabled: boolean;
      default_branch: string;
      default_branch_protection: number;
      default_branch_protection_defaults: {
        allowed_to_push: [{
          access_level: number;
        }, {
          access_level: number;
        }];
        allow_force_push: boolean;
        allowed_to_merge: [{
          access_level: number;
        }, {
          access_level: number;
        }];
        code_owner_approval_required: boolean;
        developer_can_initial_push: boolean;
      };
      shared_runners_setting: string;
      enabled_git_access_protocol: string;
      membership_lock: boolean;
      ldap_cn: string;
      ldap_access: number;
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      wiki_access_level: string;
      prevent_sharing_groups_outside_hierarchy: boolean;
      lock_math_rendering_limits_enabled: boolean;
      math_rendering_limits_enabled: boolean;
      file_template_project_id: number;
      prevent_forking_outside_group: boolean;
      unique_project_download_limit: number;
      unique_project_download_limit_interval_in_seconds: number;
      unique_project_download_limit_allowlist: [string, string];
      unique_project_download_limit_alertlist: [number, number];
      auto_ban_user_on_excessive_projects_download: boolean;
      ip_restriction_ranges: string;
      service_access_tokens_expiration_enforced: boolean;
      duo_features_enabled: boolean;
      lock_duo_features_enabled: boolean;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      web_url: string;
      name: string;
      path: string;
      description: string;
      visibility: string;
      share_with_group_lock: string;
      require_two_factor_authentication: string;
      two_factor_grace_period: string;
      project_creation_level: string;
      auto_devops_enabled: string;
      subgroup_creation_level: string;
      emails_disabled: boolean;
      emails_enabled: boolean;
      mentions_disabled: string;
      lfs_enabled: string;
      math_rendering_limits_enabled: boolean;
      lock_math_rendering_limits_enabled: boolean;
      default_branch: string;
      default_branch_protection: string;
      default_branch_protection_defaults: string;
      avatar_url: string;
      request_access_enabled: string;
      full_name: string;
      full_path: string;
      created_at: string;
      parent_id: string;
      organization_id: string;
      shared_runners_setting: string;
      custom_attributes: {
        key: string;
        value: string;
      };
      statistics: {
        storage_size: string;
        repository_size: string;
        wiki_size: string;
        lfs_objects_size: string;
        job_artifacts_size: string;
        pipeline_artifacts_size: string;
        packages_size: string;
        snippets_size: string;
        uploads_size: string;
      };
      ldap_cn: string;
      ldap_access: string;
      ldap_group_links: {
        cn: string;
        group_access: number;
        provider: string;
        filter: string;
      };
      saml_group_links: {
        name: string;
        access_level: number;
        member_role_id: number;
      };
      file_template_project_id: string;
      marked_for_deletion_on: string;
      wiki_access_level: string;
      repository_storage: string;
      duo_features_enabled: string;
      lock_duo_features_enabled: string;
    };
  }]>;
  getOne: ({ params, query, clientOptions }: {
    params: {
      id: string;
    };
    query: {
      with_custom_attributes: string;
      with_projects: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      web_url: string;
      name: string;
      path: string;
      description: string;
      visibility: string;
      share_with_group_lock: string;
      require_two_factor_authentication: string;
      two_factor_grace_period: string;
      project_creation_level: string;
      auto_devops_enabled: string;
      subgroup_creation_level: string;
      emails_disabled: boolean;
      emails_enabled: boolean;
      mentions_disabled: string;
      lfs_enabled: string;
      math_rendering_limits_enabled: boolean;
      lock_math_rendering_limits_enabled: boolean;
      default_branch: string;
      default_branch_protection: string;
      default_branch_protection_defaults: string;
      avatar_url: string;
      request_access_enabled: string;
      full_name: string;
      full_path: string;
      created_at: string;
      parent_id: string;
      organization_id: string;
      shared_runners_setting: string;
      custom_attributes: {
        key: string;
        value: string;
      };
      statistics: {
        storage_size: string;
        repository_size: string;
        wiki_size: string;
        lfs_objects_size: string;
        job_artifacts_size: string;
        pipeline_artifacts_size: string;
        packages_size: string;
        snippets_size: string;
        uploads_size: string;
      };
      ldap_cn: string;
      ldap_access: string;
      ldap_group_links: {
        cn: string;
        group_access: number;
        provider: string;
        filter: string;
      };
      saml_group_links: {
        name: string;
        access_level: number;
        member_role_id: number;
      };
      file_template_project_id: string;
      marked_for_deletion_on: string;
      wiki_access_level: string;
      repository_storage: string;
      duo_features_enabled: string;
      lock_duo_features_enabled: string;
      shared_with_groups: string;
      runners_token: string;
      enabled_git_access_protocol: string;
      prevent_sharing_groups_outside_hierarchy: string;
      projects: {
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: Date;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        repository_storage: string;
        container_registry_image_prefix: string;
        _links: {
          self: string;
          issues: string;
          merge_requests: string;
          repo_branches: string;
          labels: string;
          events: string;
          members: string;
          cluster_agents: string;
        };
        packages_enabled: boolean;
        empty_repo: boolean;
        archived: boolean;
        visibility: string;
        owner: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        resolve_outdated_diff_discussions: boolean;
        container_expiration_policy: {
          cadence: {
            value: any;
          };
          enabled: {
            value: any;
          };
          keep_n: {
            value: any;
          };
          older_than: {
            value: any;
          };
          name_regex: {
            value: any;
          };
          name_regex_keep: {
            value: any;
          };
          next_run_at: {
            value: any;
          };
        };
        repository_object_format: string;
        issues_enabled: boolean;
        merge_requests_enabled: boolean;
        wiki_enabled: boolean;
        jobs_enabled: boolean;
        snippets_enabled: boolean;
        container_registry_enabled: boolean;
        service_desk_enabled: boolean;
        service_desk_address: string;
        can_create_merge_request_in: boolean;
        issues_access_level: string;
        repository_access_level: string;
        merge_requests_access_level: string;
        forking_access_level: string;
        wiki_access_level: string;
        builds_access_level: string;
        snippets_access_level: string;
        pages_access_level: string;
        analytics_access_level: string;
        container_registry_access_level: string;
        security_and_compliance_access_level: string;
        releases_access_level: string;
        environments_access_level: string;
        feature_flags_access_level: string;
        infrastructure_access_level: string;
        monitor_access_level: string;
        model_experiments_access_level: string;
        model_registry_access_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        shared_runners_enabled: boolean;
        lfs_enabled: boolean;
        creator_id: number;
        forked_from_project: {
          id: {
            value: any;
          };
          description: {
            value: any;
          };
          name: {
            value: any;
          };
          name_with_namespace: {
            value: any;
          };
          path: {
            value: any;
          };
          path_with_namespace: {
            value: any;
          };
          created_at: {
            value: any;
          };
          default_branch: {
            value: any;
          };
          tag_list: {
            value: any;
          };
          topics: {
            value: any;
          };
          ssh_url_to_repo: {
            value: any;
          };
          http_url_to_repo: {
            value: any;
          };
          web_url: {
            value: any;
          };
          readme_url: {
            value: any;
          };
          forks_count: {
            value: any;
          };
          license_url: {
            value: any;
          };
          license: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          star_count: {
            value: any;
          };
          last_activity_at: {
            value: any;
          };
          namespace: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          repository_storage: {
            value: any;
          };
        };
        mr_default_target_self: boolean;
        import_url: string;
        import_type: string;
        import_status: string;
        import_error: string;
        open_issues_count: number;
        description_html: string;
        updated_at: Date;
        ci_default_git_depth: number;
        ci_forward_deployment_enabled: boolean;
        ci_forward_deployment_rollback_allowed: boolean;
        ci_job_token_scope_enabled: boolean;
        ci_separated_caches: boolean;
        ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
        build_git_strategy: string;
        keep_latest_artifact: boolean;
        restrict_user_defined_variables: boolean;
        ci_pipeline_variables_minimum_override_role: string;
        runners_token: string;
        runner_token_expiration_interval: number;
        group_runners_enabled: boolean;
        auto_cancel_pending_pipelines: string;
        build_timeout: number;
        auto_devops_enabled: boolean;
        auto_devops_deploy_strategy: string;
        ci_config_path: string;
        public_jobs: boolean;
        shared_with_groups: [string, string];
        only_allow_merge_if_pipeline_succeeds: boolean;
        allow_merge_on_skipped_pipeline: boolean;
        request_access_enabled: boolean;
        only_allow_merge_if_all_discussions_are_resolved: boolean;
        remove_source_branch_after_merge: boolean;
        printing_merge_request_link_enabled: boolean;
        merge_method: string;
        squash_option: string;
        enforce_auth_checks_on_uploads: boolean;
        suggestion_commit_message: string;
        merge_commit_template: string;
        squash_commit_template: string;
        issue_branch_template: string;
        statistics: {
          commit_count: {
            value: any;
          };
          storage_size: {
            value: any;
          };
          repository_size: {
            value: any;
          };
          wiki_size: {
            value: any;
          };
          lfs_objects_size: {
            value: any;
          };
          job_artifacts_size: {
            value: any;
          };
          pipeline_artifacts_size: {
            value: any;
          };
          packages_size: {
            value: any;
          };
          snippets_size: {
            value: any;
          };
          uploads_size: {
            value: any;
          };
          container_registry_size: {
            value: any;
          };
        };
        warn_about_potentially_unwanted_characters: boolean;
        autoclose_referenced_issues: boolean;
        approvals_before_merge: string;
        mirror: string;
        mirror_user_id: string;
        mirror_trigger_builds: string;
        only_mirror_protected_branches: string;
        mirror_overwrites_diverged_branches: string;
        external_authorization_classification_label: string;
        marked_for_deletion_at: string;
        marked_for_deletion_on: string;
        requirements_enabled: string;
        requirements_access_level: string;
        security_and_compliance_enabled: string;
        compliance_frameworks: string;
        issues_template: string;
        merge_requests_template: string;
        ci_restrict_pipeline_cancellation_role: string;
        merge_pipelines_enabled: string;
        merge_trains_enabled: string;
        merge_trains_skip_train_allowed: string;
        only_allow_merge_if_all_status_checks_passed: string;
        allow_pipeline_trigger_approve_deployment: boolean;
        prevent_merge_without_jira_issue: string;
      };
      shared_projects: {
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: Date;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        repository_storage: string;
        container_registry_image_prefix: string;
        _links: {
          self: string;
          issues: string;
          merge_requests: string;
          repo_branches: string;
          labels: string;
          events: string;
          members: string;
          cluster_agents: string;
        };
        packages_enabled: boolean;
        empty_repo: boolean;
        archived: boolean;
        visibility: string;
        owner: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        resolve_outdated_diff_discussions: boolean;
        container_expiration_policy: {
          cadence: {
            value: any;
          };
          enabled: {
            value: any;
          };
          keep_n: {
            value: any;
          };
          older_than: {
            value: any;
          };
          name_regex: {
            value: any;
          };
          name_regex_keep: {
            value: any;
          };
          next_run_at: {
            value: any;
          };
        };
        repository_object_format: string;
        issues_enabled: boolean;
        merge_requests_enabled: boolean;
        wiki_enabled: boolean;
        jobs_enabled: boolean;
        snippets_enabled: boolean;
        container_registry_enabled: boolean;
        service_desk_enabled: boolean;
        service_desk_address: string;
        can_create_merge_request_in: boolean;
        issues_access_level: string;
        repository_access_level: string;
        merge_requests_access_level: string;
        forking_access_level: string;
        wiki_access_level: string;
        builds_access_level: string;
        snippets_access_level: string;
        pages_access_level: string;
        analytics_access_level: string;
        container_registry_access_level: string;
        security_and_compliance_access_level: string;
        releases_access_level: string;
        environments_access_level: string;
        feature_flags_access_level: string;
        infrastructure_access_level: string;
        monitor_access_level: string;
        model_experiments_access_level: string;
        model_registry_access_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        shared_runners_enabled: boolean;
        lfs_enabled: boolean;
        creator_id: number;
        forked_from_project: {
          id: {
            value: any;
          };
          description: {
            value: any;
          };
          name: {
            value: any;
          };
          name_with_namespace: {
            value: any;
          };
          path: {
            value: any;
          };
          path_with_namespace: {
            value: any;
          };
          created_at: {
            value: any;
          };
          default_branch: {
            value: any;
          };
          tag_list: {
            value: any;
          };
          topics: {
            value: any;
          };
          ssh_url_to_repo: {
            value: any;
          };
          http_url_to_repo: {
            value: any;
          };
          web_url: {
            value: any;
          };
          readme_url: {
            value: any;
          };
          forks_count: {
            value: any;
          };
          license_url: {
            value: any;
          };
          license: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          star_count: {
            value: any;
          };
          last_activity_at: {
            value: any;
          };
          namespace: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          repository_storage: {
            value: any;
          };
        };
        mr_default_target_self: boolean;
        import_url: string;
        import_type: string;
        import_status: string;
        import_error: string;
        open_issues_count: number;
        description_html: string;
        updated_at: Date;
        ci_default_git_depth: number;
        ci_forward_deployment_enabled: boolean;
        ci_forward_deployment_rollback_allowed: boolean;
        ci_job_token_scope_enabled: boolean;
        ci_separated_caches: boolean;
        ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
        build_git_strategy: string;
        keep_latest_artifact: boolean;
        restrict_user_defined_variables: boolean;
        ci_pipeline_variables_minimum_override_role: string;
        runners_token: string;
        runner_token_expiration_interval: number;
        group_runners_enabled: boolean;
        auto_cancel_pending_pipelines: string;
        build_timeout: number;
        auto_devops_enabled: boolean;
        auto_devops_deploy_strategy: string;
        ci_config_path: string;
        public_jobs: boolean;
        shared_with_groups: [string, string];
        only_allow_merge_if_pipeline_succeeds: boolean;
        allow_merge_on_skipped_pipeline: boolean;
        request_access_enabled: boolean;
        only_allow_merge_if_all_discussions_are_resolved: boolean;
        remove_source_branch_after_merge: boolean;
        printing_merge_request_link_enabled: boolean;
        merge_method: string;
        squash_option: string;
        enforce_auth_checks_on_uploads: boolean;
        suggestion_commit_message: string;
        merge_commit_template: string;
        squash_commit_template: string;
        issue_branch_template: string;
        statistics: {
          commit_count: {
            value: any;
          };
          storage_size: {
            value: any;
          };
          repository_size: {
            value: any;
          };
          wiki_size: {
            value: any;
          };
          lfs_objects_size: {
            value: any;
          };
          job_artifacts_size: {
            value: any;
          };
          pipeline_artifacts_size: {
            value: any;
          };
          packages_size: {
            value: any;
          };
          snippets_size: {
            value: any;
          };
          uploads_size: {
            value: any;
          };
          container_registry_size: {
            value: any;
          };
        };
        warn_about_potentially_unwanted_characters: boolean;
        autoclose_referenced_issues: boolean;
        approvals_before_merge: string;
        mirror: string;
        mirror_user_id: string;
        mirror_trigger_builds: string;
        only_mirror_protected_branches: string;
        mirror_overwrites_diverged_branches: string;
        external_authorization_classification_label: string;
        marked_for_deletion_at: string;
        marked_for_deletion_on: string;
        requirements_enabled: string;
        requirements_access_level: string;
        security_and_compliance_enabled: string;
        compliance_frameworks: string;
        issues_template: string;
        merge_requests_template: string;
        ci_restrict_pipeline_cancellation_role: string;
        merge_pipelines_enabled: string;
        merge_trains_enabled: string;
        merge_trains_skip_train_allowed: string;
        only_allow_merge_if_all_status_checks_passed: string;
        allow_pipeline_trigger_approve_deployment: boolean;
        prevent_merge_without_jira_issue: string;
      };
      shared_runners_minutes_limit: string;
      extra_shared_runners_minutes_limit: string;
      prevent_forking_outside_group: string;
      service_access_tokens_expiration_enforced: string;
      membership_lock: string;
      ip_restriction_ranges: string;
      unique_project_download_limit: string;
      unique_project_download_limit_interval_in_seconds: string;
      unique_project_download_limit_allowlist: string;
      unique_project_download_limit_alertlist: string;
      auto_ban_user_on_excessive_projects_download: string;
    };
  }]>;
  delete: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 204;
  }]>;
  access_requests: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          key: string;
          value: string;
        }, {
          key: string;
          value: string;
        }];
        web_url: string;
        requested_at: string;
      };
    }]>;
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          key: string;
          value: string;
        }, {
          key: string;
          value: string;
        }];
        web_url: string;
        requested_at: string;
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        user_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
    approve: {
      put: ({ params, data, clientOptions }: {
        params: {
          id: string;
          user_id: string;
        };
        data: {
          access_level: 30;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            key: string;
            value: string;
          }, {
            key: string;
            value: string;
          }];
          web_url: string;
          requested_at: string;
        };
      }]>;
    };
  };
  badges: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
        name: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        name: string;
        link_url: string;
        image_url: string;
        rendered_link_url: string;
        rendered_image_url: string;
        id: string;
        kind: string;
      }, {
        name: string;
        link_url: string;
        image_url: string;
        rendered_link_url: string;
        rendered_image_url: string;
        id: string;
        kind: string;
      }];
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        link_url: string;
        image_url: string;
        name: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        name: string;
        link_url: string;
        image_url: string;
        rendered_link_url: string;
        rendered_image_url: string;
        id: string;
        kind: string;
      };
    }]>;
    render: {
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
        };
        query: {
          link_url: string;
          image_url: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          name: string;
          link_url: string;
          image_url: string;
          rendered_link_url: string;
          rendered_image_url: string;
        };
      }]>;
    };
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        badge_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        name: string;
        link_url: string;
        image_url: string;
        rendered_link_url: string;
        rendered_image_url: string;
        id: string;
        kind: string;
      };
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        id: string;
        badge_id: string;
      };
      data: {
        link_url: string;
        image_url: string;
        name: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        name: string;
        link_url: string;
        image_url: string;
        rendered_link_url: string;
        rendered_image_url: string;
        id: string;
        kind: string;
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        badge_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
  };
  custom_attributes: {
    get: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        key: string;
        value: string;
      };
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        key: string;
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        key: string;
        value: string;
      };
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        key: string;
        id: string;
      };
      data: {
        value: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        key: string;
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
  };
  projects: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        archived: string;
        visibility: string;
        search: string;
        order_by: string;
        sort: string;
        simple: string;
        owned: string;
        starred: string;
        with_issues_enabled: string;
        with_merge_requests_enabled: string;
        with_shared: string;
        include_subgroups: string;
        include_ancestor_groups: string;
        min_access_level: string;
        page: string;
        per_page: string;
        with_custom_attributes: string;
        with_security_reports: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: Date;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        repository_storage: string;
        container_registry_image_prefix: string;
        _links: {
          self: string;
          issues: string;
          merge_requests: string;
          repo_branches: string;
          labels: string;
          events: string;
          members: string;
          cluster_agents: string;
        };
        packages_enabled: boolean;
        empty_repo: boolean;
        archived: boolean;
        visibility: string;
        owner: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        resolve_outdated_diff_discussions: boolean;
        container_expiration_policy: {
          cadence: {
            value: any;
          };
          enabled: {
            value: any;
          };
          keep_n: {
            value: any;
          };
          older_than: {
            value: any;
          };
          name_regex: {
            value: any;
          };
          name_regex_keep: {
            value: any;
          };
          next_run_at: {
            value: any;
          };
        };
        repository_object_format: string;
        issues_enabled: boolean;
        merge_requests_enabled: boolean;
        wiki_enabled: boolean;
        jobs_enabled: boolean;
        snippets_enabled: boolean;
        container_registry_enabled: boolean;
        service_desk_enabled: boolean;
        service_desk_address: string;
        can_create_merge_request_in: boolean;
        issues_access_level: string;
        repository_access_level: string;
        merge_requests_access_level: string;
        forking_access_level: string;
        wiki_access_level: string;
        builds_access_level: string;
        snippets_access_level: string;
        pages_access_level: string;
        analytics_access_level: string;
        container_registry_access_level: string;
        security_and_compliance_access_level: string;
        releases_access_level: string;
        environments_access_level: string;
        feature_flags_access_level: string;
        infrastructure_access_level: string;
        monitor_access_level: string;
        model_experiments_access_level: string;
        model_registry_access_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        shared_runners_enabled: boolean;
        lfs_enabled: boolean;
        creator_id: number;
        forked_from_project: {
          id: {
            value: any;
          };
          description: {
            value: any;
          };
          name: {
            value: any;
          };
          name_with_namespace: {
            value: any;
          };
          path: {
            value: any;
          };
          path_with_namespace: {
            value: any;
          };
          created_at: {
            value: any;
          };
          default_branch: {
            value: any;
          };
          tag_list: {
            value: any;
          };
          topics: {
            value: any;
          };
          ssh_url_to_repo: {
            value: any;
          };
          http_url_to_repo: {
            value: any;
          };
          web_url: {
            value: any;
          };
          readme_url: {
            value: any;
          };
          forks_count: {
            value: any;
          };
          license_url: {
            value: any;
          };
          license: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          star_count: {
            value: any;
          };
          last_activity_at: {
            value: any;
          };
          namespace: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          repository_storage: {
            value: any;
          };
        };
        mr_default_target_self: boolean;
        import_url: string;
        import_type: string;
        import_status: string;
        import_error: string;
        open_issues_count: number;
        description_html: string;
        updated_at: Date;
        ci_default_git_depth: number;
        ci_forward_deployment_enabled: boolean;
        ci_forward_deployment_rollback_allowed: boolean;
        ci_job_token_scope_enabled: boolean;
        ci_separated_caches: boolean;
        ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
        build_git_strategy: string;
        keep_latest_artifact: boolean;
        restrict_user_defined_variables: boolean;
        ci_pipeline_variables_minimum_override_role: string;
        runners_token: string;
        runner_token_expiration_interval: number;
        group_runners_enabled: boolean;
        auto_cancel_pending_pipelines: string;
        build_timeout: number;
        auto_devops_enabled: boolean;
        auto_devops_deploy_strategy: string;
        ci_config_path: string;
        public_jobs: boolean;
        shared_with_groups: [string, string];
        only_allow_merge_if_pipeline_succeeds: boolean;
        allow_merge_on_skipped_pipeline: boolean;
        request_access_enabled: boolean;
        only_allow_merge_if_all_discussions_are_resolved: boolean;
        remove_source_branch_after_merge: boolean;
        printing_merge_request_link_enabled: boolean;
        merge_method: string;
        squash_option: string;
        enforce_auth_checks_on_uploads: boolean;
        suggestion_commit_message: string;
        merge_commit_template: string;
        squash_commit_template: string;
        issue_branch_template: string;
        statistics: {
          commit_count: {
            value: any;
          };
          storage_size: {
            value: any;
          };
          repository_size: {
            value: any;
          };
          wiki_size: {
            value: any;
          };
          lfs_objects_size: {
            value: any;
          };
          job_artifacts_size: {
            value: any;
          };
          pipeline_artifacts_size: {
            value: any;
          };
          packages_size: {
            value: any;
          };
          snippets_size: {
            value: any;
          };
          uploads_size: {
            value: any;
          };
          container_registry_size: {
            value: any;
          };
        };
        warn_about_potentially_unwanted_characters: boolean;
        autoclose_referenced_issues: boolean;
        approvals_before_merge: string;
        mirror: string;
        mirror_user_id: string;
        mirror_trigger_builds: string;
        only_mirror_protected_branches: string;
        mirror_overwrites_diverged_branches: string;
        external_authorization_classification_label: string;
        marked_for_deletion_at: string;
        marked_for_deletion_on: string;
        requirements_enabled: string;
        requirements_access_level: string;
        security_and_compliance_enabled: string;
        compliance_frameworks: string;
        issues_template: string;
        merge_requests_template: string;
        ci_restrict_pipeline_cancellation_role: string;
        merge_pipelines_enabled: string;
        merge_trains_enabled: string;
        merge_trains_skip_train_allowed: string;
        only_allow_merge_if_all_status_checks_passed: string;
        allow_pipeline_trigger_approve_deployment: boolean;
        prevent_merge_without_jira_issue: string;
      }, {
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: Date;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        repository_storage: string;
        container_registry_image_prefix: string;
        _links: {
          self: string;
          issues: string;
          merge_requests: string;
          repo_branches: string;
          labels: string;
          events: string;
          members: string;
          cluster_agents: string;
        };
        packages_enabled: boolean;
        empty_repo: boolean;
        archived: boolean;
        visibility: string;
        owner: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        resolve_outdated_diff_discussions: boolean;
        container_expiration_policy: {
          cadence: {
            value: any;
          };
          enabled: {
            value: any;
          };
          keep_n: {
            value: any;
          };
          older_than: {
            value: any;
          };
          name_regex: {
            value: any;
          };
          name_regex_keep: {
            value: any;
          };
          next_run_at: {
            value: any;
          };
        };
        repository_object_format: string;
        issues_enabled: boolean;
        merge_requests_enabled: boolean;
        wiki_enabled: boolean;
        jobs_enabled: boolean;
        snippets_enabled: boolean;
        container_registry_enabled: boolean;
        service_desk_enabled: boolean;
        service_desk_address: string;
        can_create_merge_request_in: boolean;
        issues_access_level: string;
        repository_access_level: string;
        merge_requests_access_level: string;
        forking_access_level: string;
        wiki_access_level: string;
        builds_access_level: string;
        snippets_access_level: string;
        pages_access_level: string;
        analytics_access_level: string;
        container_registry_access_level: string;
        security_and_compliance_access_level: string;
        releases_access_level: string;
        environments_access_level: string;
        feature_flags_access_level: string;
        infrastructure_access_level: string;
        monitor_access_level: string;
        model_experiments_access_level: string;
        model_registry_access_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        shared_runners_enabled: boolean;
        lfs_enabled: boolean;
        creator_id: number;
        forked_from_project: {
          id: {
            value: any;
          };
          description: {
            value: any;
          };
          name: {
            value: any;
          };
          name_with_namespace: {
            value: any;
          };
          path: {
            value: any;
          };
          path_with_namespace: {
            value: any;
          };
          created_at: {
            value: any;
          };
          default_branch: {
            value: any;
          };
          tag_list: {
            value: any;
          };
          topics: {
            value: any;
          };
          ssh_url_to_repo: {
            value: any;
          };
          http_url_to_repo: {
            value: any;
          };
          web_url: {
            value: any;
          };
          readme_url: {
            value: any;
          };
          forks_count: {
            value: any;
          };
          license_url: {
            value: any;
          };
          license: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          star_count: {
            value: any;
          };
          last_activity_at: {
            value: any;
          };
          namespace: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          repository_storage: {
            value: any;
          };
        };
        mr_default_target_self: boolean;
        import_url: string;
        import_type: string;
        import_status: string;
        import_error: string;
        open_issues_count: number;
        description_html: string;
        updated_at: Date;
        ci_default_git_depth: number;
        ci_forward_deployment_enabled: boolean;
        ci_forward_deployment_rollback_allowed: boolean;
        ci_job_token_scope_enabled: boolean;
        ci_separated_caches: boolean;
        ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
        build_git_strategy: string;
        keep_latest_artifact: boolean;
        restrict_user_defined_variables: boolean;
        ci_pipeline_variables_minimum_override_role: string;
        runners_token: string;
        runner_token_expiration_interval: number;
        group_runners_enabled: boolean;
        auto_cancel_pending_pipelines: string;
        build_timeout: number;
        auto_devops_enabled: boolean;
        auto_devops_deploy_strategy: string;
        ci_config_path: string;
        public_jobs: boolean;
        shared_with_groups: [string, string];
        only_allow_merge_if_pipeline_succeeds: boolean;
        allow_merge_on_skipped_pipeline: boolean;
        request_access_enabled: boolean;
        only_allow_merge_if_all_discussions_are_resolved: boolean;
        remove_source_branch_after_merge: boolean;
        printing_merge_request_link_enabled: boolean;
        merge_method: string;
        squash_option: string;
        enforce_auth_checks_on_uploads: boolean;
        suggestion_commit_message: string;
        merge_commit_template: string;
        squash_commit_template: string;
        issue_branch_template: string;
        statistics: {
          commit_count: {
            value: any;
          };
          storage_size: {
            value: any;
          };
          repository_size: {
            value: any;
          };
          wiki_size: {
            value: any;
          };
          lfs_objects_size: {
            value: any;
          };
          job_artifacts_size: {
            value: any;
          };
          pipeline_artifacts_size: {
            value: any;
          };
          packages_size: {
            value: any;
          };
          snippets_size: {
            value: any;
          };
          uploads_size: {
            value: any;
          };
          container_registry_size: {
            value: any;
          };
        };
        warn_about_potentially_unwanted_characters: boolean;
        autoclose_referenced_issues: boolean;
        approvals_before_merge: string;
        mirror: string;
        mirror_user_id: string;
        mirror_trigger_builds: string;
        only_mirror_protected_branches: string;
        mirror_overwrites_diverged_branches: string;
        external_authorization_classification_label: string;
        marked_for_deletion_at: string;
        marked_for_deletion_on: string;
        requirements_enabled: string;
        requirements_access_level: string;
        security_and_compliance_enabled: string;
        compliance_frameworks: string;
        issues_template: string;
        merge_requests_template: string;
        ci_restrict_pipeline_cancellation_role: string;
        merge_pipelines_enabled: string;
        merge_trains_enabled: string;
        merge_trains_skip_train_allowed: string;
        only_allow_merge_if_all_status_checks_passed: string;
        allow_pipeline_trigger_approve_deployment: boolean;
        prevent_merge_without_jira_issue: string;
      }];
    }]>;
    shared: {
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
        };
        query: {
          archived: string;
          visibility: string;
          search: string;
          order_by: string;
          sort: string;
          simple: string;
          starred: string;
          with_issues_enabled: string;
          with_merge_requests_enabled: string;
          min_access_level: string;
          page: string;
          per_page: string;
          with_custom_attributes: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: [{
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
          default_branch: string;
          tag_list: [string, string];
          topics: [string, string];
          ssh_url_to_repo: string;
          http_url_to_repo: string;
          web_url: string;
          readme_url: string;
          forks_count: number;
          license_url: string;
          license: {
            key: {
              value: any;
            };
            name: {
              value: any;
            };
            nickname: {
              value: any;
            };
            html_url: {
              value: any;
            };
            source_url: {
              value: any;
            };
          };
          avatar_url: string;
          star_count: number;
          last_activity_at: Date;
          namespace: {
            id: {
              value: any;
            };
            name: {
              value: any;
            };
            path: {
              value: any;
            };
            kind: {
              value: any;
            };
            full_path: {
              value: any;
            };
            parent_id: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          custom_attributes: {
            key: {
              value: any;
            };
            value: {
              value: any;
            };
          };
          repository_storage: string;
          container_registry_image_prefix: string;
          _links: {
            self: string;
            issues: string;
            merge_requests: string;
            repo_branches: string;
            labels: string;
            events: string;
            members: string;
            cluster_agents: string;
          };
          packages_enabled: boolean;
          empty_repo: boolean;
          archived: boolean;
          visibility: string;
          owner: {
            id: {
              value: any;
            };
            username: {
              value: any;
            };
            name: {
              value: any;
            };
            state: {
              value: any;
            };
            locked: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            avatar_path: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          resolve_outdated_diff_discussions: boolean;
          container_expiration_policy: {
            cadence: {
              value: any;
            };
            enabled: {
              value: any;
            };
            keep_n: {
              value: any;
            };
            older_than: {
              value: any;
            };
            name_regex: {
              value: any;
            };
            name_regex_keep: {
              value: any;
            };
            next_run_at: {
              value: any;
            };
          };
          repository_object_format: string;
          issues_enabled: boolean;
          merge_requests_enabled: boolean;
          wiki_enabled: boolean;
          jobs_enabled: boolean;
          snippets_enabled: boolean;
          container_registry_enabled: boolean;
          service_desk_enabled: boolean;
          service_desk_address: string;
          can_create_merge_request_in: boolean;
          issues_access_level: string;
          repository_access_level: string;
          merge_requests_access_level: string;
          forking_access_level: string;
          wiki_access_level: string;
          builds_access_level: string;
          snippets_access_level: string;
          pages_access_level: string;
          analytics_access_level: string;
          container_registry_access_level: string;
          security_and_compliance_access_level: string;
          releases_access_level: string;
          environments_access_level: string;
          feature_flags_access_level: string;
          infrastructure_access_level: string;
          monitor_access_level: string;
          model_experiments_access_level: string;
          model_registry_access_level: string;
          emails_disabled: boolean;
          emails_enabled: boolean;
          shared_runners_enabled: boolean;
          lfs_enabled: boolean;
          creator_id: number;
          forked_from_project: {
            id: {
              value: any;
            };
            description: {
              value: any;
            };
            name: {
              value: any;
            };
            name_with_namespace: {
              value: any;
            };
            path: {
              value: any;
            };
            path_with_namespace: {
              value: any;
            };
            created_at: {
              value: any;
            };
            default_branch: {
              value: any;
            };
            tag_list: {
              value: any;
            };
            topics: {
              value: any;
            };
            ssh_url_to_repo: {
              value: any;
            };
            http_url_to_repo: {
              value: any;
            };
            web_url: {
              value: any;
            };
            readme_url: {
              value: any;
            };
            forks_count: {
              value: any;
            };
            license_url: {
              value: any;
            };
            license: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            star_count: {
              value: any;
            };
            last_activity_at: {
              value: any;
            };
            namespace: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            repository_storage: {
              value: any;
            };
          };
          mr_default_target_self: boolean;
          import_url: string;
          import_type: string;
          import_status: string;
          import_error: string;
          open_issues_count: number;
          description_html: string;
          updated_at: Date;
          ci_default_git_depth: number;
          ci_forward_deployment_enabled: boolean;
          ci_forward_deployment_rollback_allowed: boolean;
          ci_job_token_scope_enabled: boolean;
          ci_separated_caches: boolean;
          ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
          build_git_strategy: string;
          keep_latest_artifact: boolean;
          restrict_user_defined_variables: boolean;
          ci_pipeline_variables_minimum_override_role: string;
          runners_token: string;
          runner_token_expiration_interval: number;
          group_runners_enabled: boolean;
          auto_cancel_pending_pipelines: string;
          build_timeout: number;
          auto_devops_enabled: boolean;
          auto_devops_deploy_strategy: string;
          ci_config_path: string;
          public_jobs: boolean;
          shared_with_groups: [string, string];
          only_allow_merge_if_pipeline_succeeds: boolean;
          allow_merge_on_skipped_pipeline: boolean;
          request_access_enabled: boolean;
          only_allow_merge_if_all_discussions_are_resolved: boolean;
          remove_source_branch_after_merge: boolean;
          printing_merge_request_link_enabled: boolean;
          merge_method: string;
          squash_option: string;
          enforce_auth_checks_on_uploads: boolean;
          suggestion_commit_message: string;
          merge_commit_template: string;
          squash_commit_template: string;
          issue_branch_template: string;
          statistics: {
            commit_count: {
              value: any;
            };
            storage_size: {
              value: any;
            };
            repository_size: {
              value: any;
            };
            wiki_size: {
              value: any;
            };
            lfs_objects_size: {
              value: any;
            };
            job_artifacts_size: {
              value: any;
            };
            pipeline_artifacts_size: {
              value: any;
            };
            packages_size: {
              value: any;
            };
            snippets_size: {
              value: any;
            };
            uploads_size: {
              value: any;
            };
            container_registry_size: {
              value: any;
            };
          };
          warn_about_potentially_unwanted_characters: boolean;
          autoclose_referenced_issues: boolean;
          approvals_before_merge: string;
          mirror: string;
          mirror_user_id: string;
          mirror_trigger_builds: string;
          only_mirror_protected_branches: string;
          mirror_overwrites_diverged_branches: string;
          external_authorization_classification_label: string;
          marked_for_deletion_at: string;
          marked_for_deletion_on: string;
          requirements_enabled: string;
          requirements_access_level: string;
          security_and_compliance_enabled: string;
          compliance_frameworks: string;
          issues_template: string;
          merge_requests_template: string;
          ci_restrict_pipeline_cancellation_role: string;
          merge_pipelines_enabled: string;
          merge_trains_enabled: string;
          merge_trains_skip_train_allowed: string;
          only_allow_merge_if_all_status_checks_passed: string;
          allow_pipeline_trigger_approve_deployment: boolean;
          prevent_merge_without_jira_issue: string;
        }, {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
          default_branch: string;
          tag_list: [string, string];
          topics: [string, string];
          ssh_url_to_repo: string;
          http_url_to_repo: string;
          web_url: string;
          readme_url: string;
          forks_count: number;
          license_url: string;
          license: {
            key: {
              value: any;
            };
            name: {
              value: any;
            };
            nickname: {
              value: any;
            };
            html_url: {
              value: any;
            };
            source_url: {
              value: any;
            };
          };
          avatar_url: string;
          star_count: number;
          last_activity_at: Date;
          namespace: {
            id: {
              value: any;
            };
            name: {
              value: any;
            };
            path: {
              value: any;
            };
            kind: {
              value: any;
            };
            full_path: {
              value: any;
            };
            parent_id: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          custom_attributes: {
            key: {
              value: any;
            };
            value: {
              value: any;
            };
          };
          repository_storage: string;
          container_registry_image_prefix: string;
          _links: {
            self: string;
            issues: string;
            merge_requests: string;
            repo_branches: string;
            labels: string;
            events: string;
            members: string;
            cluster_agents: string;
          };
          packages_enabled: boolean;
          empty_repo: boolean;
          archived: boolean;
          visibility: string;
          owner: {
            id: {
              value: any;
            };
            username: {
              value: any;
            };
            name: {
              value: any;
            };
            state: {
              value: any;
            };
            locked: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            avatar_path: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          resolve_outdated_diff_discussions: boolean;
          container_expiration_policy: {
            cadence: {
              value: any;
            };
            enabled: {
              value: any;
            };
            keep_n: {
              value: any;
            };
            older_than: {
              value: any;
            };
            name_regex: {
              value: any;
            };
            name_regex_keep: {
              value: any;
            };
            next_run_at: {
              value: any;
            };
          };
          repository_object_format: string;
          issues_enabled: boolean;
          merge_requests_enabled: boolean;
          wiki_enabled: boolean;
          jobs_enabled: boolean;
          snippets_enabled: boolean;
          container_registry_enabled: boolean;
          service_desk_enabled: boolean;
          service_desk_address: string;
          can_create_merge_request_in: boolean;
          issues_access_level: string;
          repository_access_level: string;
          merge_requests_access_level: string;
          forking_access_level: string;
          wiki_access_level: string;
          builds_access_level: string;
          snippets_access_level: string;
          pages_access_level: string;
          analytics_access_level: string;
          container_registry_access_level: string;
          security_and_compliance_access_level: string;
          releases_access_level: string;
          environments_access_level: string;
          feature_flags_access_level: string;
          infrastructure_access_level: string;
          monitor_access_level: string;
          model_experiments_access_level: string;
          model_registry_access_level: string;
          emails_disabled: boolean;
          emails_enabled: boolean;
          shared_runners_enabled: boolean;
          lfs_enabled: boolean;
          creator_id: number;
          forked_from_project: {
            id: {
              value: any;
            };
            description: {
              value: any;
            };
            name: {
              value: any;
            };
            name_with_namespace: {
              value: any;
            };
            path: {
              value: any;
            };
            path_with_namespace: {
              value: any;
            };
            created_at: {
              value: any;
            };
            default_branch: {
              value: any;
            };
            tag_list: {
              value: any;
            };
            topics: {
              value: any;
            };
            ssh_url_to_repo: {
              value: any;
            };
            http_url_to_repo: {
              value: any;
            };
            web_url: {
              value: any;
            };
            readme_url: {
              value: any;
            };
            forks_count: {
              value: any;
            };
            license_url: {
              value: any;
            };
            license: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            star_count: {
              value: any;
            };
            last_activity_at: {
              value: any;
            };
            namespace: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            repository_storage: {
              value: any;
            };
          };
          mr_default_target_self: boolean;
          import_url: string;
          import_type: string;
          import_status: string;
          import_error: string;
          open_issues_count: number;
          description_html: string;
          updated_at: Date;
          ci_default_git_depth: number;
          ci_forward_deployment_enabled: boolean;
          ci_forward_deployment_rollback_allowed: boolean;
          ci_job_token_scope_enabled: boolean;
          ci_separated_caches: boolean;
          ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
          build_git_strategy: string;
          keep_latest_artifact: boolean;
          restrict_user_defined_variables: boolean;
          ci_pipeline_variables_minimum_override_role: string;
          runners_token: string;
          runner_token_expiration_interval: number;
          group_runners_enabled: boolean;
          auto_cancel_pending_pipelines: string;
          build_timeout: number;
          auto_devops_enabled: boolean;
          auto_devops_deploy_strategy: string;
          ci_config_path: string;
          public_jobs: boolean;
          shared_with_groups: [string, string];
          only_allow_merge_if_pipeline_succeeds: boolean;
          allow_merge_on_skipped_pipeline: boolean;
          request_access_enabled: boolean;
          only_allow_merge_if_all_discussions_are_resolved: boolean;
          remove_source_branch_after_merge: boolean;
          printing_merge_request_link_enabled: boolean;
          merge_method: string;
          squash_option: string;
          enforce_auth_checks_on_uploads: boolean;
          suggestion_commit_message: string;
          merge_commit_template: string;
          squash_commit_template: string;
          issue_branch_template: string;
          statistics: {
            commit_count: {
              value: any;
            };
            storage_size: {
              value: any;
            };
            repository_size: {
              value: any;
            };
            wiki_size: {
              value: any;
            };
            lfs_objects_size: {
              value: any;
            };
            job_artifacts_size: {
              value: any;
            };
            pipeline_artifacts_size: {
              value: any;
            };
            packages_size: {
              value: any;
            };
            snippets_size: {
              value: any;
            };
            uploads_size: {
              value: any;
            };
            container_registry_size: {
              value: any;
            };
          };
          warn_about_potentially_unwanted_characters: boolean;
          autoclose_referenced_issues: boolean;
          approvals_before_merge: string;
          mirror: string;
          mirror_user_id: string;
          mirror_trigger_builds: string;
          only_mirror_protected_branches: string;
          mirror_overwrites_diverged_branches: string;
          external_authorization_classification_label: string;
          marked_for_deletion_at: string;
          marked_for_deletion_on: string;
          requirements_enabled: string;
          requirements_access_level: string;
          security_and_compliance_enabled: string;
          compliance_frameworks: string;
          issues_template: string;
          merge_requests_template: string;
          ci_restrict_pipeline_cancellation_role: string;
          merge_pipelines_enabled: string;
          merge_trains_enabled: string;
          merge_trains_skip_train_allowed: string;
          only_allow_merge_if_all_status_checks_passed: string;
          allow_pipeline_trigger_approve_deployment: boolean;
          prevent_merge_without_jira_issue: string;
        }];
      }]>;
    };
    post: ({ params, clientOptions }: {
      params: {
        id: string;
        project_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: string;
        web_url: string;
        name: string;
        path: string;
        description: string;
        visibility: string;
        share_with_group_lock: string;
        require_two_factor_authentication: string;
        two_factor_grace_period: string;
        project_creation_level: string;
        auto_devops_enabled: string;
        subgroup_creation_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        mentions_disabled: string;
        lfs_enabled: string;
        math_rendering_limits_enabled: boolean;
        lock_math_rendering_limits_enabled: boolean;
        default_branch: string;
        default_branch_protection: string;
        default_branch_protection_defaults: string;
        avatar_url: string;
        request_access_enabled: string;
        full_name: string;
        full_path: string;
        created_at: string;
        parent_id: string;
        organization_id: string;
        shared_runners_setting: string;
        custom_attributes: {
          key: string;
          value: string;
        };
        statistics: {
          storage_size: string;
          repository_size: string;
          wiki_size: string;
          lfs_objects_size: string;
          job_artifacts_size: string;
          pipeline_artifacts_size: string;
          packages_size: string;
          snippets_size: string;
          uploads_size: string;
        };
        ldap_cn: string;
        ldap_access: string;
        ldap_group_links: {
          cn: string;
          group_access: number;
          provider: string;
          filter: string;
        };
        saml_group_links: {
          name: string;
          access_level: number;
          member_role_id: number;
        };
        file_template_project_id: string;
        marked_for_deletion_on: string;
        wiki_access_level: string;
        repository_storage: string;
        duo_features_enabled: string;
        lock_duo_features_enabled: string;
        shared_with_groups: string;
        runners_token: string;
        enabled_git_access_protocol: string;
        prevent_sharing_groups_outside_hierarchy: string;
        projects: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
          default_branch: string;
          tag_list: [string, string];
          topics: [string, string];
          ssh_url_to_repo: string;
          http_url_to_repo: string;
          web_url: string;
          readme_url: string;
          forks_count: number;
          license_url: string;
          license: {
            key: {
              value: any;
            };
            name: {
              value: any;
            };
            nickname: {
              value: any;
            };
            html_url: {
              value: any;
            };
            source_url: {
              value: any;
            };
          };
          avatar_url: string;
          star_count: number;
          last_activity_at: Date;
          namespace: {
            id: {
              value: any;
            };
            name: {
              value: any;
            };
            path: {
              value: any;
            };
            kind: {
              value: any;
            };
            full_path: {
              value: any;
            };
            parent_id: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          custom_attributes: {
            key: {
              value: any;
            };
            value: {
              value: any;
            };
          };
          repository_storage: string;
          container_registry_image_prefix: string;
          _links: {
            self: string;
            issues: string;
            merge_requests: string;
            repo_branches: string;
            labels: string;
            events: string;
            members: string;
            cluster_agents: string;
          };
          packages_enabled: boolean;
          empty_repo: boolean;
          archived: boolean;
          visibility: string;
          owner: {
            id: {
              value: any;
            };
            username: {
              value: any;
            };
            name: {
              value: any;
            };
            state: {
              value: any;
            };
            locked: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            avatar_path: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          resolve_outdated_diff_discussions: boolean;
          container_expiration_policy: {
            cadence: {
              value: any;
            };
            enabled: {
              value: any;
            };
            keep_n: {
              value: any;
            };
            older_than: {
              value: any;
            };
            name_regex: {
              value: any;
            };
            name_regex_keep: {
              value: any;
            };
            next_run_at: {
              value: any;
            };
          };
          repository_object_format: string;
          issues_enabled: boolean;
          merge_requests_enabled: boolean;
          wiki_enabled: boolean;
          jobs_enabled: boolean;
          snippets_enabled: boolean;
          container_registry_enabled: boolean;
          service_desk_enabled: boolean;
          service_desk_address: string;
          can_create_merge_request_in: boolean;
          issues_access_level: string;
          repository_access_level: string;
          merge_requests_access_level: string;
          forking_access_level: string;
          wiki_access_level: string;
          builds_access_level: string;
          snippets_access_level: string;
          pages_access_level: string;
          analytics_access_level: string;
          container_registry_access_level: string;
          security_and_compliance_access_level: string;
          releases_access_level: string;
          environments_access_level: string;
          feature_flags_access_level: string;
          infrastructure_access_level: string;
          monitor_access_level: string;
          model_experiments_access_level: string;
          model_registry_access_level: string;
          emails_disabled: boolean;
          emails_enabled: boolean;
          shared_runners_enabled: boolean;
          lfs_enabled: boolean;
          creator_id: number;
          forked_from_project: {
            id: {
              value: any;
            };
            description: {
              value: any;
            };
            name: {
              value: any;
            };
            name_with_namespace: {
              value: any;
            };
            path: {
              value: any;
            };
            path_with_namespace: {
              value: any;
            };
            created_at: {
              value: any;
            };
            default_branch: {
              value: any;
            };
            tag_list: {
              value: any;
            };
            topics: {
              value: any;
            };
            ssh_url_to_repo: {
              value: any;
            };
            http_url_to_repo: {
              value: any;
            };
            web_url: {
              value: any;
            };
            readme_url: {
              value: any;
            };
            forks_count: {
              value: any;
            };
            license_url: {
              value: any;
            };
            license: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            star_count: {
              value: any;
            };
            last_activity_at: {
              value: any;
            };
            namespace: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            repository_storage: {
              value: any;
            };
          };
          mr_default_target_self: boolean;
          import_url: string;
          import_type: string;
          import_status: string;
          import_error: string;
          open_issues_count: number;
          description_html: string;
          updated_at: Date;
          ci_default_git_depth: number;
          ci_forward_deployment_enabled: boolean;
          ci_forward_deployment_rollback_allowed: boolean;
          ci_job_token_scope_enabled: boolean;
          ci_separated_caches: boolean;
          ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
          build_git_strategy: string;
          keep_latest_artifact: boolean;
          restrict_user_defined_variables: boolean;
          ci_pipeline_variables_minimum_override_role: string;
          runners_token: string;
          runner_token_expiration_interval: number;
          group_runners_enabled: boolean;
          auto_cancel_pending_pipelines: string;
          build_timeout: number;
          auto_devops_enabled: boolean;
          auto_devops_deploy_strategy: string;
          ci_config_path: string;
          public_jobs: boolean;
          shared_with_groups: [string, string];
          only_allow_merge_if_pipeline_succeeds: boolean;
          allow_merge_on_skipped_pipeline: boolean;
          request_access_enabled: boolean;
          only_allow_merge_if_all_discussions_are_resolved: boolean;
          remove_source_branch_after_merge: boolean;
          printing_merge_request_link_enabled: boolean;
          merge_method: string;
          squash_option: string;
          enforce_auth_checks_on_uploads: boolean;
          suggestion_commit_message: string;
          merge_commit_template: string;
          squash_commit_template: string;
          issue_branch_template: string;
          statistics: {
            commit_count: {
              value: any;
            };
            storage_size: {
              value: any;
            };
            repository_size: {
              value: any;
            };
            wiki_size: {
              value: any;
            };
            lfs_objects_size: {
              value: any;
            };
            job_artifacts_size: {
              value: any;
            };
            pipeline_artifacts_size: {
              value: any;
            };
            packages_size: {
              value: any;
            };
            snippets_size: {
              value: any;
            };
            uploads_size: {
              value: any;
            };
            container_registry_size: {
              value: any;
            };
          };
          warn_about_potentially_unwanted_characters: boolean;
          autoclose_referenced_issues: boolean;
          approvals_before_merge: string;
          mirror: string;
          mirror_user_id: string;
          mirror_trigger_builds: string;
          only_mirror_protected_branches: string;
          mirror_overwrites_diverged_branches: string;
          external_authorization_classification_label: string;
          marked_for_deletion_at: string;
          marked_for_deletion_on: string;
          requirements_enabled: string;
          requirements_access_level: string;
          security_and_compliance_enabled: string;
          compliance_frameworks: string;
          issues_template: string;
          merge_requests_template: string;
          ci_restrict_pipeline_cancellation_role: string;
          merge_pipelines_enabled: string;
          merge_trains_enabled: string;
          merge_trains_skip_train_allowed: string;
          only_allow_merge_if_all_status_checks_passed: string;
          allow_pipeline_trigger_approve_deployment: boolean;
          prevent_merge_without_jira_issue: string;
        };
        shared_projects: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
          default_branch: string;
          tag_list: [string, string];
          topics: [string, string];
          ssh_url_to_repo: string;
          http_url_to_repo: string;
          web_url: string;
          readme_url: string;
          forks_count: number;
          license_url: string;
          license: {
            key: {
              value: any;
            };
            name: {
              value: any;
            };
            nickname: {
              value: any;
            };
            html_url: {
              value: any;
            };
            source_url: {
              value: any;
            };
          };
          avatar_url: string;
          star_count: number;
          last_activity_at: Date;
          namespace: {
            id: {
              value: any;
            };
            name: {
              value: any;
            };
            path: {
              value: any;
            };
            kind: {
              value: any;
            };
            full_path: {
              value: any;
            };
            parent_id: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          custom_attributes: {
            key: {
              value: any;
            };
            value: {
              value: any;
            };
          };
          repository_storage: string;
          container_registry_image_prefix: string;
          _links: {
            self: string;
            issues: string;
            merge_requests: string;
            repo_branches: string;
            labels: string;
            events: string;
            members: string;
            cluster_agents: string;
          };
          packages_enabled: boolean;
          empty_repo: boolean;
          archived: boolean;
          visibility: string;
          owner: {
            id: {
              value: any;
            };
            username: {
              value: any;
            };
            name: {
              value: any;
            };
            state: {
              value: any;
            };
            locked: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            avatar_path: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          resolve_outdated_diff_discussions: boolean;
          container_expiration_policy: {
            cadence: {
              value: any;
            };
            enabled: {
              value: any;
            };
            keep_n: {
              value: any;
            };
            older_than: {
              value: any;
            };
            name_regex: {
              value: any;
            };
            name_regex_keep: {
              value: any;
            };
            next_run_at: {
              value: any;
            };
          };
          repository_object_format: string;
          issues_enabled: boolean;
          merge_requests_enabled: boolean;
          wiki_enabled: boolean;
          jobs_enabled: boolean;
          snippets_enabled: boolean;
          container_registry_enabled: boolean;
          service_desk_enabled: boolean;
          service_desk_address: string;
          can_create_merge_request_in: boolean;
          issues_access_level: string;
          repository_access_level: string;
          merge_requests_access_level: string;
          forking_access_level: string;
          wiki_access_level: string;
          builds_access_level: string;
          snippets_access_level: string;
          pages_access_level: string;
          analytics_access_level: string;
          container_registry_access_level: string;
          security_and_compliance_access_level: string;
          releases_access_level: string;
          environments_access_level: string;
          feature_flags_access_level: string;
          infrastructure_access_level: string;
          monitor_access_level: string;
          model_experiments_access_level: string;
          model_registry_access_level: string;
          emails_disabled: boolean;
          emails_enabled: boolean;
          shared_runners_enabled: boolean;
          lfs_enabled: boolean;
          creator_id: number;
          forked_from_project: {
            id: {
              value: any;
            };
            description: {
              value: any;
            };
            name: {
              value: any;
            };
            name_with_namespace: {
              value: any;
            };
            path: {
              value: any;
            };
            path_with_namespace: {
              value: any;
            };
            created_at: {
              value: any;
            };
            default_branch: {
              value: any;
            };
            tag_list: {
              value: any;
            };
            topics: {
              value: any;
            };
            ssh_url_to_repo: {
              value: any;
            };
            http_url_to_repo: {
              value: any;
            };
            web_url: {
              value: any;
            };
            readme_url: {
              value: any;
            };
            forks_count: {
              value: any;
            };
            license_url: {
              value: any;
            };
            license: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            star_count: {
              value: any;
            };
            last_activity_at: {
              value: any;
            };
            namespace: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            repository_storage: {
              value: any;
            };
          };
          mr_default_target_self: boolean;
          import_url: string;
          import_type: string;
          import_status: string;
          import_error: string;
          open_issues_count: number;
          description_html: string;
          updated_at: Date;
          ci_default_git_depth: number;
          ci_forward_deployment_enabled: boolean;
          ci_forward_deployment_rollback_allowed: boolean;
          ci_job_token_scope_enabled: boolean;
          ci_separated_caches: boolean;
          ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
          build_git_strategy: string;
          keep_latest_artifact: boolean;
          restrict_user_defined_variables: boolean;
          ci_pipeline_variables_minimum_override_role: string;
          runners_token: string;
          runner_token_expiration_interval: number;
          group_runners_enabled: boolean;
          auto_cancel_pending_pipelines: string;
          build_timeout: number;
          auto_devops_enabled: boolean;
          auto_devops_deploy_strategy: string;
          ci_config_path: string;
          public_jobs: boolean;
          shared_with_groups: [string, string];
          only_allow_merge_if_pipeline_succeeds: boolean;
          allow_merge_on_skipped_pipeline: boolean;
          request_access_enabled: boolean;
          only_allow_merge_if_all_discussions_are_resolved: boolean;
          remove_source_branch_after_merge: boolean;
          printing_merge_request_link_enabled: boolean;
          merge_method: string;
          squash_option: string;
          enforce_auth_checks_on_uploads: boolean;
          suggestion_commit_message: string;
          merge_commit_template: string;
          squash_commit_template: string;
          issue_branch_template: string;
          statistics: {
            commit_count: {
              value: any;
            };
            storage_size: {
              value: any;
            };
            repository_size: {
              value: any;
            };
            wiki_size: {
              value: any;
            };
            lfs_objects_size: {
              value: any;
            };
            job_artifacts_size: {
              value: any;
            };
            pipeline_artifacts_size: {
              value: any;
            };
            packages_size: {
              value: any;
            };
            snippets_size: {
              value: any;
            };
            uploads_size: {
              value: any;
            };
            container_registry_size: {
              value: any;
            };
          };
          warn_about_potentially_unwanted_characters: boolean;
          autoclose_referenced_issues: boolean;
          approvals_before_merge: string;
          mirror: string;
          mirror_user_id: string;
          mirror_trigger_builds: string;
          only_mirror_protected_branches: string;
          mirror_overwrites_diverged_branches: string;
          external_authorization_classification_label: string;
          marked_for_deletion_at: string;
          marked_for_deletion_on: string;
          requirements_enabled: string;
          requirements_access_level: string;
          security_and_compliance_enabled: string;
          compliance_frameworks: string;
          issues_template: string;
          merge_requests_template: string;
          ci_restrict_pipeline_cancellation_role: string;
          merge_pipelines_enabled: string;
          merge_trains_enabled: string;
          merge_trains_skip_train_allowed: string;
          only_allow_merge_if_all_status_checks_passed: string;
          allow_pipeline_trigger_approve_deployment: boolean;
          prevent_merge_without_jira_issue: string;
        };
        shared_runners_minutes_limit: string;
        extra_shared_runners_minutes_limit: string;
        prevent_forking_outside_group: string;
        service_access_tokens_expiration_enforced: string;
        membership_lock: string;
        ip_restriction_ranges: string;
        unique_project_download_limit: string;
        unique_project_download_limit_interval_in_seconds: string;
        unique_project_download_limit_allowlist: string;
        unique_project_download_limit_alertlist: string;
        auto_ban_user_on_excessive_projects_download: string;
      };
    }]>;
  };
  subgroups: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        statistics: string;
        skip_groups: string;
        all_available: string;
        visibility: string;
        search: string;
        owned: string;
        order_by: string;
        sort: string;
        min_access_level: string;
        top_level_only: string;
        repository_storage: string;
        page: string;
        per_page: string;
        with_custom_attributes: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: string;
        web_url: string;
        name: string;
        path: string;
        description: string;
        visibility: string;
        share_with_group_lock: string;
        require_two_factor_authentication: string;
        two_factor_grace_period: string;
        project_creation_level: string;
        auto_devops_enabled: string;
        subgroup_creation_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        mentions_disabled: string;
        lfs_enabled: string;
        math_rendering_limits_enabled: boolean;
        lock_math_rendering_limits_enabled: boolean;
        default_branch: string;
        default_branch_protection: string;
        default_branch_protection_defaults: string;
        avatar_url: string;
        request_access_enabled: string;
        full_name: string;
        full_path: string;
        created_at: string;
        parent_id: string;
        organization_id: string;
        shared_runners_setting: string;
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        statistics: {
          storage_size: string;
          repository_size: string;
          wiki_size: string;
          lfs_objects_size: string;
          job_artifacts_size: string;
          pipeline_artifacts_size: string;
          packages_size: string;
          snippets_size: string;
          uploads_size: string;
        };
        ldap_cn: string;
        ldap_access: string;
        ldap_group_links: {
          cn: {
            value: any;
          };
          group_access: {
            value: any;
          };
          provider: {
            value: any;
          };
          filter: {
            value: any;
          };
        };
        saml_group_links: {
          name: {
            value: any;
          };
          access_level: {
            value: any;
          };
          member_role_id: {
            value: any;
          };
        };
        file_template_project_id: string;
        marked_for_deletion_on: string;
        wiki_access_level: string;
        repository_storage: string;
        duo_features_enabled: string;
        lock_duo_features_enabled: string;
      }, {
        id: string;
        web_url: string;
        name: string;
        path: string;
        description: string;
        visibility: string;
        share_with_group_lock: string;
        require_two_factor_authentication: string;
        two_factor_grace_period: string;
        project_creation_level: string;
        auto_devops_enabled: string;
        subgroup_creation_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        mentions_disabled: string;
        lfs_enabled: string;
        math_rendering_limits_enabled: boolean;
        lock_math_rendering_limits_enabled: boolean;
        default_branch: string;
        default_branch_protection: string;
        default_branch_protection_defaults: string;
        avatar_url: string;
        request_access_enabled: string;
        full_name: string;
        full_path: string;
        created_at: string;
        parent_id: string;
        organization_id: string;
        shared_runners_setting: string;
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        statistics: {
          storage_size: string;
          repository_size: string;
          wiki_size: string;
          lfs_objects_size: string;
          job_artifacts_size: string;
          pipeline_artifacts_size: string;
          packages_size: string;
          snippets_size: string;
          uploads_size: string;
        };
        ldap_cn: string;
        ldap_access: string;
        ldap_group_links: {
          cn: {
            value: any;
          };
          group_access: {
            value: any;
          };
          provider: {
            value: any;
          };
          filter: {
            value: any;
          };
        };
        saml_group_links: {
          name: {
            value: any;
          };
          access_level: {
            value: any;
          };
          member_role_id: {
            value: any;
          };
        };
        file_template_project_id: string;
        marked_for_deletion_on: string;
        wiki_access_level: string;
        repository_storage: string;
        duo_features_enabled: string;
        lock_duo_features_enabled: string;
      }];
    }]>;
  };
  descendant_groups: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        statistics: string;
        skip_groups: string;
        all_available: string;
        visibility: string;
        search: string;
        owned: string;
        order_by: string;
        sort: string;
        min_access_level: string;
        top_level_only: string;
        repository_storage: string;
        page: string;
        per_page: string;
        with_custom_attributes: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: string;
        web_url: string;
        name: string;
        path: string;
        description: string;
        visibility: string;
        share_with_group_lock: string;
        require_two_factor_authentication: string;
        two_factor_grace_period: string;
        project_creation_level: string;
        auto_devops_enabled: string;
        subgroup_creation_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        mentions_disabled: string;
        lfs_enabled: string;
        math_rendering_limits_enabled: boolean;
        lock_math_rendering_limits_enabled: boolean;
        default_branch: string;
        default_branch_protection: string;
        default_branch_protection_defaults: string;
        avatar_url: string;
        request_access_enabled: string;
        full_name: string;
        full_path: string;
        created_at: string;
        parent_id: string;
        organization_id: string;
        shared_runners_setting: string;
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        statistics: {
          storage_size: string;
          repository_size: string;
          wiki_size: string;
          lfs_objects_size: string;
          job_artifacts_size: string;
          pipeline_artifacts_size: string;
          packages_size: string;
          snippets_size: string;
          uploads_size: string;
        };
        ldap_cn: string;
        ldap_access: string;
        ldap_group_links: {
          cn: {
            value: any;
          };
          group_access: {
            value: any;
          };
          provider: {
            value: any;
          };
          filter: {
            value: any;
          };
        };
        saml_group_links: {
          name: {
            value: any;
          };
          access_level: {
            value: any;
          };
          member_role_id: {
            value: any;
          };
        };
        file_template_project_id: string;
        marked_for_deletion_on: string;
        wiki_access_level: string;
        repository_storage: string;
        duo_features_enabled: string;
        lock_duo_features_enabled: string;
      }, {
        id: string;
        web_url: string;
        name: string;
        path: string;
        description: string;
        visibility: string;
        share_with_group_lock: string;
        require_two_factor_authentication: string;
        two_factor_grace_period: string;
        project_creation_level: string;
        auto_devops_enabled: string;
        subgroup_creation_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        mentions_disabled: string;
        lfs_enabled: string;
        math_rendering_limits_enabled: boolean;
        lock_math_rendering_limits_enabled: boolean;
        default_branch: string;
        default_branch_protection: string;
        default_branch_protection_defaults: string;
        avatar_url: string;
        request_access_enabled: string;
        full_name: string;
        full_path: string;
        created_at: string;
        parent_id: string;
        organization_id: string;
        shared_runners_setting: string;
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        statistics: {
          storage_size: string;
          repository_size: string;
          wiki_size: string;
          lfs_objects_size: string;
          job_artifacts_size: string;
          pipeline_artifacts_size: string;
          packages_size: string;
          snippets_size: string;
          uploads_size: string;
        };
        ldap_cn: string;
        ldap_access: string;
        ldap_group_links: {
          cn: {
            value: any;
          };
          group_access: {
            value: any;
          };
          provider: {
            value: any;
          };
          filter: {
            value: any;
          };
        };
        saml_group_links: {
          name: {
            value: any;
          };
          access_level: {
            value: any;
          };
          member_role_id: {
            value: any;
          };
        };
        file_template_project_id: string;
        marked_for_deletion_on: string;
        wiki_access_level: string;
        repository_storage: string;
        duo_features_enabled: string;
        lock_duo_features_enabled: string;
      }];
    }]>;
  };
  transfer_locations: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        search: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: string;
        web_url: string;
        name: string;
        path: string;
        description: string;
        visibility: string;
        share_with_group_lock: string;
        require_two_factor_authentication: string;
        two_factor_grace_period: string;
        project_creation_level: string;
        auto_devops_enabled: string;
        subgroup_creation_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        mentions_disabled: string;
        lfs_enabled: string;
        math_rendering_limits_enabled: boolean;
        lock_math_rendering_limits_enabled: boolean;
        default_branch: string;
        default_branch_protection: string;
        default_branch_protection_defaults: string;
        avatar_url: string;
        request_access_enabled: string;
        full_name: string;
        full_path: string;
        created_at: string;
        parent_id: string;
        organization_id: string;
        shared_runners_setting: string;
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        statistics: {
          storage_size: string;
          repository_size: string;
          wiki_size: string;
          lfs_objects_size: string;
          job_artifacts_size: string;
          pipeline_artifacts_size: string;
          packages_size: string;
          snippets_size: string;
          uploads_size: string;
        };
        ldap_cn: string;
        ldap_access: string;
        ldap_group_links: {
          cn: {
            value: any;
          };
          group_access: {
            value: any;
          };
          provider: {
            value: any;
          };
          filter: {
            value: any;
          };
        };
        saml_group_links: {
          name: {
            value: any;
          };
          access_level: {
            value: any;
          };
          member_role_id: {
            value: any;
          };
        };
        file_template_project_id: string;
        marked_for_deletion_on: string;
        wiki_access_level: string;
        repository_storage: string;
        duo_features_enabled: string;
        lock_duo_features_enabled: string;
      }, {
        id: string;
        web_url: string;
        name: string;
        path: string;
        description: string;
        visibility: string;
        share_with_group_lock: string;
        require_two_factor_authentication: string;
        two_factor_grace_period: string;
        project_creation_level: string;
        auto_devops_enabled: string;
        subgroup_creation_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        mentions_disabled: string;
        lfs_enabled: string;
        math_rendering_limits_enabled: boolean;
        lock_math_rendering_limits_enabled: boolean;
        default_branch: string;
        default_branch_protection: string;
        default_branch_protection_defaults: string;
        avatar_url: string;
        request_access_enabled: string;
        full_name: string;
        full_path: string;
        created_at: string;
        parent_id: string;
        organization_id: string;
        shared_runners_setting: string;
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        statistics: {
          storage_size: string;
          repository_size: string;
          wiki_size: string;
          lfs_objects_size: string;
          job_artifacts_size: string;
          pipeline_artifacts_size: string;
          packages_size: string;
          snippets_size: string;
          uploads_size: string;
        };
        ldap_cn: string;
        ldap_access: string;
        ldap_group_links: {
          cn: {
            value: any;
          };
          group_access: {
            value: any;
          };
          provider: {
            value: any;
          };
          filter: {
            value: any;
          };
        };
        saml_group_links: {
          name: {
            value: any;
          };
          access_level: {
            value: any;
          };
          member_role_id: {
            value: any;
          };
        };
        file_template_project_id: string;
        marked_for_deletion_on: string;
        wiki_access_level: string;
        repository_storage: string;
        duo_features_enabled: string;
        lock_duo_features_enabled: string;
      }];
    }]>;
  };
  transfer: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        group_id: number;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  share: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        group_id: number;
        group_access: number;
        expires_at: Date;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: string;
        web_url: string;
        name: string;
        path: string;
        description: string;
        visibility: string;
        share_with_group_lock: string;
        require_two_factor_authentication: string;
        two_factor_grace_period: string;
        project_creation_level: string;
        auto_devops_enabled: string;
        subgroup_creation_level: string;
        emails_disabled: boolean;
        emails_enabled: boolean;
        mentions_disabled: string;
        lfs_enabled: string;
        math_rendering_limits_enabled: boolean;
        lock_math_rendering_limits_enabled: boolean;
        default_branch: string;
        default_branch_protection: string;
        default_branch_protection_defaults: string;
        avatar_url: string;
        request_access_enabled: string;
        full_name: string;
        full_path: string;
        created_at: string;
        parent_id: string;
        organization_id: string;
        shared_runners_setting: string;
        custom_attributes: {
          key: string;
          value: string;
        };
        statistics: {
          storage_size: string;
          repository_size: string;
          wiki_size: string;
          lfs_objects_size: string;
          job_artifacts_size: string;
          pipeline_artifacts_size: string;
          packages_size: string;
          snippets_size: string;
          uploads_size: string;
        };
        ldap_cn: string;
        ldap_access: string;
        ldap_group_links: {
          cn: string;
          group_access: number;
          provider: string;
          filter: string;
        };
        saml_group_links: {
          name: string;
          access_level: number;
          member_role_id: number;
        };
        file_template_project_id: string;
        marked_for_deletion_on: string;
        wiki_access_level: string;
        repository_storage: string;
        duo_features_enabled: string;
        lock_duo_features_enabled: string;
        shared_with_groups: string;
        runners_token: string;
        enabled_git_access_protocol: string;
        prevent_sharing_groups_outside_hierarchy: string;
        projects: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
          default_branch: string;
          tag_list: [string, string];
          topics: [string, string];
          ssh_url_to_repo: string;
          http_url_to_repo: string;
          web_url: string;
          readme_url: string;
          forks_count: number;
          license_url: string;
          license: {
            key: {
              value: any;
            };
            name: {
              value: any;
            };
            nickname: {
              value: any;
            };
            html_url: {
              value: any;
            };
            source_url: {
              value: any;
            };
          };
          avatar_url: string;
          star_count: number;
          last_activity_at: Date;
          namespace: {
            id: {
              value: any;
            };
            name: {
              value: any;
            };
            path: {
              value: any;
            };
            kind: {
              value: any;
            };
            full_path: {
              value: any;
            };
            parent_id: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          custom_attributes: {
            key: {
              value: any;
            };
            value: {
              value: any;
            };
          };
          repository_storage: string;
          container_registry_image_prefix: string;
          _links: {
            self: string;
            issues: string;
            merge_requests: string;
            repo_branches: string;
            labels: string;
            events: string;
            members: string;
            cluster_agents: string;
          };
          packages_enabled: boolean;
          empty_repo: boolean;
          archived: boolean;
          visibility: string;
          owner: {
            id: {
              value: any;
            };
            username: {
              value: any;
            };
            name: {
              value: any;
            };
            state: {
              value: any;
            };
            locked: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            avatar_path: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          resolve_outdated_diff_discussions: boolean;
          container_expiration_policy: {
            cadence: {
              value: any;
            };
            enabled: {
              value: any;
            };
            keep_n: {
              value: any;
            };
            older_than: {
              value: any;
            };
            name_regex: {
              value: any;
            };
            name_regex_keep: {
              value: any;
            };
            next_run_at: {
              value: any;
            };
          };
          repository_object_format: string;
          issues_enabled: boolean;
          merge_requests_enabled: boolean;
          wiki_enabled: boolean;
          jobs_enabled: boolean;
          snippets_enabled: boolean;
          container_registry_enabled: boolean;
          service_desk_enabled: boolean;
          service_desk_address: string;
          can_create_merge_request_in: boolean;
          issues_access_level: string;
          repository_access_level: string;
          merge_requests_access_level: string;
          forking_access_level: string;
          wiki_access_level: string;
          builds_access_level: string;
          snippets_access_level: string;
          pages_access_level: string;
          analytics_access_level: string;
          container_registry_access_level: string;
          security_and_compliance_access_level: string;
          releases_access_level: string;
          environments_access_level: string;
          feature_flags_access_level: string;
          infrastructure_access_level: string;
          monitor_access_level: string;
          model_experiments_access_level: string;
          model_registry_access_level: string;
          emails_disabled: boolean;
          emails_enabled: boolean;
          shared_runners_enabled: boolean;
          lfs_enabled: boolean;
          creator_id: number;
          forked_from_project: {
            id: {
              value: any;
            };
            description: {
              value: any;
            };
            name: {
              value: any;
            };
            name_with_namespace: {
              value: any;
            };
            path: {
              value: any;
            };
            path_with_namespace: {
              value: any;
            };
            created_at: {
              value: any;
            };
            default_branch: {
              value: any;
            };
            tag_list: {
              value: any;
            };
            topics: {
              value: any;
            };
            ssh_url_to_repo: {
              value: any;
            };
            http_url_to_repo: {
              value: any;
            };
            web_url: {
              value: any;
            };
            readme_url: {
              value: any;
            };
            forks_count: {
              value: any;
            };
            license_url: {
              value: any;
            };
            license: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            star_count: {
              value: any;
            };
            last_activity_at: {
              value: any;
            };
            namespace: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            repository_storage: {
              value: any;
            };
          };
          mr_default_target_self: boolean;
          import_url: string;
          import_type: string;
          import_status: string;
          import_error: string;
          open_issues_count: number;
          description_html: string;
          updated_at: Date;
          ci_default_git_depth: number;
          ci_forward_deployment_enabled: boolean;
          ci_forward_deployment_rollback_allowed: boolean;
          ci_job_token_scope_enabled: boolean;
          ci_separated_caches: boolean;
          ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
          build_git_strategy: string;
          keep_latest_artifact: boolean;
          restrict_user_defined_variables: boolean;
          ci_pipeline_variables_minimum_override_role: string;
          runners_token: string;
          runner_token_expiration_interval: number;
          group_runners_enabled: boolean;
          auto_cancel_pending_pipelines: string;
          build_timeout: number;
          auto_devops_enabled: boolean;
          auto_devops_deploy_strategy: string;
          ci_config_path: string;
          public_jobs: boolean;
          shared_with_groups: [string, string];
          only_allow_merge_if_pipeline_succeeds: boolean;
          allow_merge_on_skipped_pipeline: boolean;
          request_access_enabled: boolean;
          only_allow_merge_if_all_discussions_are_resolved: boolean;
          remove_source_branch_after_merge: boolean;
          printing_merge_request_link_enabled: boolean;
          merge_method: string;
          squash_option: string;
          enforce_auth_checks_on_uploads: boolean;
          suggestion_commit_message: string;
          merge_commit_template: string;
          squash_commit_template: string;
          issue_branch_template: string;
          statistics: {
            commit_count: {
              value: any;
            };
            storage_size: {
              value: any;
            };
            repository_size: {
              value: any;
            };
            wiki_size: {
              value: any;
            };
            lfs_objects_size: {
              value: any;
            };
            job_artifacts_size: {
              value: any;
            };
            pipeline_artifacts_size: {
              value: any;
            };
            packages_size: {
              value: any;
            };
            snippets_size: {
              value: any;
            };
            uploads_size: {
              value: any;
            };
            container_registry_size: {
              value: any;
            };
          };
          warn_about_potentially_unwanted_characters: boolean;
          autoclose_referenced_issues: boolean;
          approvals_before_merge: string;
          mirror: string;
          mirror_user_id: string;
          mirror_trigger_builds: string;
          only_mirror_protected_branches: string;
          mirror_overwrites_diverged_branches: string;
          external_authorization_classification_label: string;
          marked_for_deletion_at: string;
          marked_for_deletion_on: string;
          requirements_enabled: string;
          requirements_access_level: string;
          security_and_compliance_enabled: string;
          compliance_frameworks: string;
          issues_template: string;
          merge_requests_template: string;
          ci_restrict_pipeline_cancellation_role: string;
          merge_pipelines_enabled: string;
          merge_trains_enabled: string;
          merge_trains_skip_train_allowed: string;
          only_allow_merge_if_all_status_checks_passed: string;
          allow_pipeline_trigger_approve_deployment: boolean;
          prevent_merge_without_jira_issue: string;
        };
        shared_projects: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
          default_branch: string;
          tag_list: [string, string];
          topics: [string, string];
          ssh_url_to_repo: string;
          http_url_to_repo: string;
          web_url: string;
          readme_url: string;
          forks_count: number;
          license_url: string;
          license: {
            key: {
              value: any;
            };
            name: {
              value: any;
            };
            nickname: {
              value: any;
            };
            html_url: {
              value: any;
            };
            source_url: {
              value: any;
            };
          };
          avatar_url: string;
          star_count: number;
          last_activity_at: Date;
          namespace: {
            id: {
              value: any;
            };
            name: {
              value: any;
            };
            path: {
              value: any;
            };
            kind: {
              value: any;
            };
            full_path: {
              value: any;
            };
            parent_id: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          custom_attributes: {
            key: {
              value: any;
            };
            value: {
              value: any;
            };
          };
          repository_storage: string;
          container_registry_image_prefix: string;
          _links: {
            self: string;
            issues: string;
            merge_requests: string;
            repo_branches: string;
            labels: string;
            events: string;
            members: string;
            cluster_agents: string;
          };
          packages_enabled: boolean;
          empty_repo: boolean;
          archived: boolean;
          visibility: string;
          owner: {
            id: {
              value: any;
            };
            username: {
              value: any;
            };
            name: {
              value: any;
            };
            state: {
              value: any;
            };
            locked: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            avatar_path: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          resolve_outdated_diff_discussions: boolean;
          container_expiration_policy: {
            cadence: {
              value: any;
            };
            enabled: {
              value: any;
            };
            keep_n: {
              value: any;
            };
            older_than: {
              value: any;
            };
            name_regex: {
              value: any;
            };
            name_regex_keep: {
              value: any;
            };
            next_run_at: {
              value: any;
            };
          };
          repository_object_format: string;
          issues_enabled: boolean;
          merge_requests_enabled: boolean;
          wiki_enabled: boolean;
          jobs_enabled: boolean;
          snippets_enabled: boolean;
          container_registry_enabled: boolean;
          service_desk_enabled: boolean;
          service_desk_address: string;
          can_create_merge_request_in: boolean;
          issues_access_level: string;
          repository_access_level: string;
          merge_requests_access_level: string;
          forking_access_level: string;
          wiki_access_level: string;
          builds_access_level: string;
          snippets_access_level: string;
          pages_access_level: string;
          analytics_access_level: string;
          container_registry_access_level: string;
          security_and_compliance_access_level: string;
          releases_access_level: string;
          environments_access_level: string;
          feature_flags_access_level: string;
          infrastructure_access_level: string;
          monitor_access_level: string;
          model_experiments_access_level: string;
          model_registry_access_level: string;
          emails_disabled: boolean;
          emails_enabled: boolean;
          shared_runners_enabled: boolean;
          lfs_enabled: boolean;
          creator_id: number;
          forked_from_project: {
            id: {
              value: any;
            };
            description: {
              value: any;
            };
            name: {
              value: any;
            };
            name_with_namespace: {
              value: any;
            };
            path: {
              value: any;
            };
            path_with_namespace: {
              value: any;
            };
            created_at: {
              value: any;
            };
            default_branch: {
              value: any;
            };
            tag_list: {
              value: any;
            };
            topics: {
              value: any;
            };
            ssh_url_to_repo: {
              value: any;
            };
            http_url_to_repo: {
              value: any;
            };
            web_url: {
              value: any;
            };
            readme_url: {
              value: any;
            };
            forks_count: {
              value: any;
            };
            license_url: {
              value: any;
            };
            license: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            star_count: {
              value: any;
            };
            last_activity_at: {
              value: any;
            };
            namespace: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            repository_storage: {
              value: any;
            };
          };
          mr_default_target_self: boolean;
          import_url: string;
          import_type: string;
          import_status: string;
          import_error: string;
          open_issues_count: number;
          description_html: string;
          updated_at: Date;
          ci_default_git_depth: number;
          ci_forward_deployment_enabled: boolean;
          ci_forward_deployment_rollback_allowed: boolean;
          ci_job_token_scope_enabled: boolean;
          ci_separated_caches: boolean;
          ci_allow_fork_pipelines_to_run_in_parent_project: boolean;
          build_git_strategy: string;
          keep_latest_artifact: boolean;
          restrict_user_defined_variables: boolean;
          ci_pipeline_variables_minimum_override_role: string;
          runners_token: string;
          runner_token_expiration_interval: number;
          group_runners_enabled: boolean;
          auto_cancel_pending_pipelines: string;
          build_timeout: number;
          auto_devops_enabled: boolean;
          auto_devops_deploy_strategy: string;
          ci_config_path: string;
          public_jobs: boolean;
          shared_with_groups: [string, string];
          only_allow_merge_if_pipeline_succeeds: boolean;
          allow_merge_on_skipped_pipeline: boolean;
          request_access_enabled: boolean;
          only_allow_merge_if_all_discussions_are_resolved: boolean;
          remove_source_branch_after_merge: boolean;
          printing_merge_request_link_enabled: boolean;
          merge_method: string;
          squash_option: string;
          enforce_auth_checks_on_uploads: boolean;
          suggestion_commit_message: string;
          merge_commit_template: string;
          squash_commit_template: string;
          issue_branch_template: string;
          statistics: {
            commit_count: {
              value: any;
            };
            storage_size: {
              value: any;
            };
            repository_size: {
              value: any;
            };
            wiki_size: {
              value: any;
            };
            lfs_objects_size: {
              value: any;
            };
            job_artifacts_size: {
              value: any;
            };
            pipeline_artifacts_size: {
              value: any;
            };
            packages_size: {
              value: any;
            };
            snippets_size: {
              value: any;
            };
            uploads_size: {
              value: any;
            };
            container_registry_size: {
              value: any;
            };
          };
          warn_about_potentially_unwanted_characters: boolean;
          autoclose_referenced_issues: boolean;
          approvals_before_merge: string;
          mirror: string;
          mirror_user_id: string;
          mirror_trigger_builds: string;
          only_mirror_protected_branches: string;
          mirror_overwrites_diverged_branches: string;
          external_authorization_classification_label: string;
          marked_for_deletion_at: string;
          marked_for_deletion_on: string;
          requirements_enabled: string;
          requirements_access_level: string;
          security_and_compliance_enabled: string;
          compliance_frameworks: string;
          issues_template: string;
          merge_requests_template: string;
          ci_restrict_pipeline_cancellation_role: string;
          merge_pipelines_enabled: string;
          merge_trains_enabled: string;
          merge_trains_skip_train_allowed: string;
          only_allow_merge_if_all_status_checks_passed: string;
          allow_pipeline_trigger_approve_deployment: boolean;
          prevent_merge_without_jira_issue: string;
        };
        shared_runners_minutes_limit: string;
        extra_shared_runners_minutes_limit: string;
        prevent_forking_outside_group: string;
        service_access_tokens_expiration_enforced: string;
        membership_lock: string;
        ip_restriction_ranges: string;
        unique_project_download_limit: string;
        unique_project_download_limit_interval_in_seconds: string;
        unique_project_download_limit_allowlist: string;
        unique_project_download_limit_alertlist: string;
        auto_ban_user_on_excessive_projects_download: string;
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        group_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
  };
  ldap_sync: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  restore: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  provisioned_users: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        username: string;
        search: string;
        active: string;
        blocked: string;
        created_after: string;
        created_before: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          key: string;
          value: string;
        }, {
          key: string;
          value: string;
        }];
        web_url: string;
        created_at: string;
        bio: string;
        location: string;
        public_email: string;
        skype: string;
        linkedin: string;
        twitter: string;
        discord: string;
        website_url: string;
        organization: string;
        job_title: string;
        pronouns: string;
        bot: string;
        work_information: string;
        followers: string;
        following: string;
        is_followed: string;
        local_time: string;
        last_sign_in_at: Date;
        confirmed_at: Date;
        last_activity_on: Date;
        email: string;
        theme_id: number;
        color_scheme_id: number;
        projects_limit: number;
        current_sign_in_at: Date;
        identities: {
          provider: string;
          extern_uid: string;
          saml_provider_id: string;
        };
        can_create_group: boolean;
        can_create_project: boolean;
        two_factor_enabled: boolean;
        external: string;
        private_profile: boolean;
        commit_email: string;
        shared_runners_minutes_limit: string;
        extra_shared_runners_minutes_limit: string;
        scim_identities: {
          extern_uid: string;
          group_id: string;
          active: string;
        };
      };
    }]>;
  };
  users: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        search: string;
        active: string;
        include_saml_users: string;
        include_service_accounts: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          key: string;
          value: string;
        }, {
          key: string;
          value: string;
        }];
        web_url: string;
        created_at: string;
        bio: string;
        location: string;
        public_email: string;
        skype: string;
        linkedin: string;
        twitter: string;
        discord: string;
        website_url: string;
        organization: string;
        job_title: string;
        pronouns: string;
        bot: string;
        work_information: string;
        followers: string;
        following: string;
        is_followed: string;
        local_time: string;
        last_sign_in_at: Date;
        confirmed_at: Date;
        last_activity_on: Date;
        email: string;
        theme_id: number;
        color_scheme_id: number;
        projects_limit: number;
        current_sign_in_at: Date;
        identities: {
          provider: string;
          extern_uid: string;
          saml_provider_id: string;
        };
        can_create_group: boolean;
        can_create_project: boolean;
        two_factor_enabled: boolean;
        external: string;
        private_profile: boolean;
        commit_email: string;
        shared_runners_minutes_limit: string;
        extra_shared_runners_minutes_limit: string;
        scim_identities: {
          extern_uid: string;
          group_id: string;
          active: string;
        };
      };
    }, {
      code: 400;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
  ssh_certificates: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        title: string;
        key: string;
        created_at: Date;
      }, {
        id: number;
        title: string;
        key: string;
        created_at: Date;
      }];
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        title: string;
        key: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        title: string;
        key: string;
        created_at: Date;
      };
    }, {
      code: 400;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        ssh_certificates_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }, {
      code: 400;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 422;
    }]>;
  };
  runners: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        type: string;
        paused: string;
        status: string;
        tag_list: string;
        version_prefix: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        description: string;
        ip_address: string;
        active: boolean;
        paused: boolean;
        is_shared: boolean;
        runner_type: string;
        name: string;
        online: boolean;
        status: string;
      };
    }, {
      code: 400;
    }, {
      code: 403;
    }]>;
    reset_registration_token: {
      post: ({ params, clientOptions }: {
        params: {
          id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
        data: {
          token: string;
          token_expires_at: string;
        };
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }]>;
    };
  };
  dependency_proxy: {
    cache: {
      delete: ({ params, clientOptions }: {
        params: {
          id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 202;
      }, {
        code: 401;
      }]>;
    };
  };
  deploy_tokens: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
        active: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        name: string;
        username: string;
        expires_at: Date;
        revoked: boolean;
        expired: boolean;
      }, {
        id: number;
        name: string;
        username: string;
        expires_at: Date;
        revoked: boolean;
        expired: boolean;
      }];
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        name: string;
        scopes: [string, string];
        expires_at: Date;
        username: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        name: string;
        username: string;
        expires_at: Date;
        revoked: boolean;
        expired: boolean;
        token: string;
      };
    }, {
      code: 400;
    }, {
      code: 401;
    }, {
      code: 404;
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        token_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        name: string;
        username: string;
        expires_at: Date;
        revoked: boolean;
        expired: boolean;
      };
    }, {
      code: 401;
    }, {
      code: 404;
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        token_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }, {
      code: 401;
    }, {
      code: 404;
    }]>;
  };
  avatar: {
    get: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }]>;
  };
  clusters: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: string;
        name: string;
        created_at: string;
        domain: string;
        enabled: string;
        managed: string;
        provider_type: string;
        platform_type: string;
        environment_scope: string;
        cluster_type: string;
        namespace_per_environment: string;
        user: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        platform_kubernetes: {
          api_url: {
            value: any;
          };
          namespace: {
            value: any;
          };
          authorization_type: {
            value: any;
          };
          ca_cert: {
            value: any;
          };
        };
        provider_gcp: {
          cluster_id: {
            value: any;
          };
          status_name: {
            value: any;
          };
          gcp_project_id: {
            value: any;
          };
          zone: {
            value: any;
          };
          machine_type: {
            value: any;
          };
          num_nodes: {
            value: any;
          };
          endpoint: {
            value: any;
          };
        };
        management_project: {
          id: {
            value: any;
          };
          description: {
            value: any;
          };
          name: {
            value: any;
          };
          name_with_namespace: {
            value: any;
          };
          path: {
            value: any;
          };
          path_with_namespace: {
            value: any;
          };
          created_at: {
            value: any;
          };
        };
      }, {
        id: string;
        name: string;
        created_at: string;
        domain: string;
        enabled: string;
        managed: string;
        provider_type: string;
        platform_type: string;
        environment_scope: string;
        cluster_type: string;
        namespace_per_environment: string;
        user: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        platform_kubernetes: {
          api_url: {
            value: any;
          };
          namespace: {
            value: any;
          };
          authorization_type: {
            value: any;
          };
          ca_cert: {
            value: any;
          };
        };
        provider_gcp: {
          cluster_id: {
            value: any;
          };
          status_name: {
            value: any;
          };
          gcp_project_id: {
            value: any;
          };
          zone: {
            value: any;
          };
          machine_type: {
            value: any;
          };
          num_nodes: {
            value: any;
          };
          endpoint: {
            value: any;
          };
        };
        management_project: {
          id: {
            value: any;
          };
          description: {
            value: any;
          };
          name: {
            value: any;
          };
          name_with_namespace: {
            value: any;
          };
          path: {
            value: any;
          };
          path_with_namespace: {
            value: any;
          };
          created_at: {
            value: any;
          };
        };
      }];
    }, {
      code: 403;
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        cluster_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        name: string;
        created_at: string;
        domain: string;
        enabled: string;
        managed: string;
        provider_type: string;
        platform_type: string;
        environment_scope: string;
        cluster_type: string;
        namespace_per_environment: string;
        user: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        platform_kubernetes: {
          api_url: string;
          namespace: string;
          authorization_type: string;
          ca_cert: string;
        };
        provider_gcp: {
          cluster_id: string;
          status_name: string;
          gcp_project_id: string;
          zone: string;
          machine_type: string;
          num_nodes: string;
          endpoint: string;
        };
        management_project: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
        };
        group: {
          id: string;
          web_url: string;
          name: string;
        };
      };
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        id: string;
        cluster_id: string;
      };
      data: {
        name: string;
        enabled: boolean;
        domain: string;
        environment_scope: string;
        namespace_per_environment: true;
        management_project_id: number;
        managed: boolean;
        platform_kubernetes_attributes: {
          api_url: string;
          token: string;
          ca_cert: string;
          namespace: string;
        };
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        name: string;
        created_at: string;
        domain: string;
        enabled: string;
        managed: string;
        provider_type: string;
        platform_type: string;
        environment_scope: string;
        cluster_type: string;
        namespace_per_environment: string;
        user: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        platform_kubernetes: {
          api_url: string;
          namespace: string;
          authorization_type: string;
          ca_cert: string;
        };
        provider_gcp: {
          cluster_id: string;
          status_name: string;
          gcp_project_id: string;
          zone: string;
          machine_type: string;
          num_nodes: string;
          endpoint: string;
        };
        management_project: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
        };
        group: {
          id: string;
          web_url: string;
          name: string;
        };
      };
    }, {
      code: 400;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        cluster_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
      data: {
        id: string;
        name: string;
        created_at: string;
        domain: string;
        enabled: string;
        managed: string;
        provider_type: string;
        platform_type: string;
        environment_scope: string;
        cluster_type: string;
        namespace_per_environment: string;
        user: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        platform_kubernetes: {
          api_url: string;
          namespace: string;
          authorization_type: string;
          ca_cert: string;
        };
        provider_gcp: {
          cluster_id: string;
          status_name: string;
          gcp_project_id: string;
          zone: string;
          machine_type: string;
          num_nodes: string;
          endpoint: string;
        };
        management_project: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
        };
        group: {
          id: string;
          web_url: string;
          name: string;
        };
      };
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    user: {
      post: ({ params, data, clientOptions }: {
        params: {
          id: string;
        };
        data: {
          name: string;
          platform_kubernetes_attributes: {
            api_url: string;
            token: string;
            ca_cert: string;
            namespace: string;
            authorization_type: string;
          };
          enabled: true;
          environment_scope: string;
          namespace_per_environment: true;
          domain: string;
          management_project_id: number;
          managed: true;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
        data: {
          id: string;
          name: string;
          created_at: string;
          domain: string;
          enabled: string;
          managed: string;
          provider_type: string;
          platform_type: string;
          environment_scope: string;
          cluster_type: string;
          namespace_per_environment: string;
          user: {
            id: number;
            username: string;
            name: string;
            state: string;
            locked: boolean;
            avatar_url: string;
            avatar_path: string;
            custom_attributes: [{
              value: any;
            }, {
              value: any;
            }];
            web_url: string;
          };
          platform_kubernetes: {
            api_url: string;
            namespace: string;
            authorization_type: string;
            ca_cert: string;
          };
          provider_gcp: {
            cluster_id: string;
            status_name: string;
            gcp_project_id: string;
            zone: string;
            machine_type: string;
            num_nodes: string;
            endpoint: string;
          };
          management_project: {
            id: number;
            description: string;
            name: string;
            name_with_namespace: string;
            path: string;
            path_with_namespace: string;
            created_at: Date;
          };
          group: {
            id: string;
            web_url: string;
            name: string;
          };
        };
      }, {
        code: 400;
      }, {
        code: 403;
      }, {
        code: 404;
      }]>;
    };
  };
  registry: {
    repositories: {
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
        };
        query: {
          page: string;
          per_page: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: [{
          id: number;
          name: string;
          path: string;
          project_id: number;
          location: string;
          created_at: Date;
          cleanup_policy_started_at: Date;
          tags_count: number;
          tags: {
            name: {
              value: any;
            };
            path: {
              value: any;
            };
            location: {
              value: any;
            };
          };
          delete_api_path: string;
          size: number;
          status: string;
        }, {
          id: number;
          name: string;
          path: string;
          project_id: number;
          location: string;
          created_at: Date;
          cleanup_policy_started_at: Date;
          tags_count: number;
          tags: {
            name: {
              value: any;
            };
            path: {
              value: any;
            };
            location: {
              value: any;
            };
          };
          delete_api_path: string;
          size: number;
          status: string;
        }];
      }, {
        code: 401;
      }, {
        code: 404;
      }]>;
    };
  };
  export: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 202;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }, {
      code: 429;
    }, {
      code: 503;
    }]>;
    download: {
      get: ({ params, clientOptions }: {
        params: {
          id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
      }, {
        code: 400;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }, {
        code: 503;
      }]>;
    };
  };
  export_relations: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        batched: boolean;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 202;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }, {
      code: 503;
    }]>;
    download: {
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
        };
        query: {
          relation: string;
          batched: string;
          batch_number: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }, {
        code: 503;
      }]>;
    };
    status: {
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
        };
        query: {
          relation: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: [{
          relation: string;
          status: string;
          error: string;
          updated_at: Date;
          batched: boolean;
          batches_count: number;
          total_objects_count: number;
          batches: {
            status: {
              value: any;
            };
            batch_number: {
              value: any;
            };
            objects_count: {
              value: any;
            };
            error: {
              value: any;
            };
            updated_at: {
              value: any;
            };
          };
        }, {
          relation: string;
          status: string;
          error: string;
          updated_at: Date;
          batched: boolean;
          batches_count: number;
          total_objects_count: number;
          batches: {
            status: {
              value: any;
            };
            batch_number: {
              value: any;
            };
            objects_count: {
              value: any;
            };
            error: {
              value: any;
            };
            updated_at: {
              value: any;
            };
          };
        }];
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }, {
        code: 503;
      }]>;
    };
  };
  packages: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        exclude_subgroups: string;
        page: string;
        per_page: string;
        order_by: string;
        sort: string;
        package_type: string;
        package_name: string;
        package_version: string;
        include_versionless: string;
        status: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        name: string;
        conan_package_name: string;
        version: string;
        package_type: string;
        status: string;
        _links: {
          web_path: string;
          delete_api_path: string;
        };
        created_at: Date;
        last_downloaded_at: Date;
        project_id: number;
        project_path: string;
        tags: string;
        pipeline: {
          id: {
            value: any;
          };
          iid: {
            value: any;
          };
          project_id: {
            value: any;
          };
          sha: {
            value: any;
          };
          ref: {
            value: any;
          };
          status: {
            value: any;
          };
          source: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          web_url: {
            value: any;
          };
          user: {
            value: any;
          };
        };
        pipelines: {
          id: {
            value: any;
          };
          iid: {
            value: any;
          };
          project_id: {
            value: any;
          };
          sha: {
            value: any;
          };
          ref: {
            value: any;
          };
          status: {
            value: any;
          };
          source: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          web_url: {
            value: any;
          };
          user: {
            value: any;
          };
        };
        versions: {
          id: {
            value: any;
          };
          version: {
            value: any;
          };
          created_at: {
            value: any;
          };
          tags: {
            value: any;
          };
          pipeline: {
            value: any;
          };
        };
      }, {
        id: number;
        name: string;
        conan_package_name: string;
        version: string;
        package_type: string;
        status: string;
        _links: {
          web_path: string;
          delete_api_path: string;
        };
        created_at: Date;
        last_downloaded_at: Date;
        project_id: number;
        project_path: string;
        tags: string;
        pipeline: {
          id: {
            value: any;
          };
          iid: {
            value: any;
          };
          project_id: {
            value: any;
          };
          sha: {
            value: any;
          };
          ref: {
            value: any;
          };
          status: {
            value: any;
          };
          source: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          web_url: {
            value: any;
          };
          user: {
            value: any;
          };
        };
        pipelines: {
          id: {
            value: any;
          };
          iid: {
            value: any;
          };
          project_id: {
            value: any;
          };
          sha: {
            value: any;
          };
          ref: {
            value: any;
          };
          status: {
            value: any;
          };
          source: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          web_url: {
            value: any;
          };
          user: {
            value: any;
          };
        };
        versions: {
          id: {
            value: any;
          };
          version: {
            value: any;
          };
          created_at: {
            value: any;
          };
          tags: {
            value: any;
          };
          pipeline: {
            value: any;
          };
        };
      }];
    }, {
      code: 401;
    }, {
      code: 404;
    }]>;
  };
  variables: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        variable_type: string;
        key: string;
        value: string;
        hidden: boolean;
        protected: boolean;
        masked: boolean;
        raw: boolean;
        environment_scope: string;
        description: string;
      };
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        key: string;
        value: string;
        protected: string;
        masked_and_hidden: string;
        masked: string;
        raw: string;
        variable_type: string;
        environment_scope: string;
        description: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        variable_type: string;
        key: string;
        value: string;
        hidden: boolean;
        protected: boolean;
        masked: boolean;
        raw: boolean;
        environment_scope: string;
        description: string;
      };
    }, {
      code: 400;
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        key: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        variable_type: string;
        key: string;
        value: string;
        hidden: boolean;
        protected: boolean;
        masked: boolean;
        raw: boolean;
        environment_scope: string;
        description: string;
      };
    }, {
      code: 404;
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        id: string;
        key: string;
      };
      data: {
        value: string;
        protected: string;
        masked: string;
        raw: string;
        variable_type: string;
        environment_scope: string;
        description: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        variable_type: string;
        key: string;
        value: string;
        hidden: boolean;
        protected: boolean;
        masked: boolean;
        raw: boolean;
        environment_scope: string;
        description: string;
      };
    }, {
      code: 400;
    }, {
      code: 404;
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        key: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
      data: {
        variable_type: string;
        key: string;
        value: string;
        hidden: boolean;
        protected: boolean;
        masked: boolean;
        raw: boolean;
        environment_scope: string;
        description: string;
      };
    }, {
      code: 404;
    }]>;
  };
  invitations: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        access_level: number;
        email: [string, string];
        user_id: [string, string];
        expires_at: Date;
        invite_source: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        access_level: string;
        created_at: string;
        expires_at: string;
        invite_email: string;
        invite_token: string;
        user_name: string;
        created_by_name: string;
      };
    }]>;
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
        query: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        access_level: string;
        created_at: string;
        expires_at: string;
        invite_email: string;
        invite_token: string;
        user_name: string;
        created_by_name: string;
      }, {
        access_level: string;
        created_at: string;
        expires_at: string;
        invite_email: string;
        invite_token: string;
        user_name: string;
        created_by_name: string;
      }];
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        id: string;
        email: string;
      };
      data: {
        access_level: number;
        expires_at: Date;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        access_level: string;
        created_at: string;
        expires_at: string;
        invite_email: string;
        invite_token: string;
        user_name: string;
        created_by_name: string;
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        email: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }, {
      code: 403;
    }, {
      code: 404;
    }, {
      code: 409;
    }]>;
  };
  "-": {
    packages: {
      maven: {
        "*path": {
          getOne: ({ params, query, clientOptions }: {
            params: {
              id: string;
              file_name: string;
            };
            query: {
              path: string;
            };
            clientOptions: any;
          }) => Promise<[{
            code: 200;
          }, {
            code: 302;
          }, {
            code: 401;
          }, {
            code: 403;
          }, {
            code: 404;
          }]>;
        };
      };
      debian: {
        dists: {
          "*distribution": {
            "Release.gpg": {
              get: ({ params, query, clientOptions }: {
                params: {
                  id: string;
                };
                query: {
                  distribution: string;
                };
                clientOptions: any;
              }) => Promise<[{
                code: 200;
              }, {
                code: 400;
              }, {
                code: 401;
              }, {
                code: 403;
              }, {
                code: 404;
              }]>;
            };
            Release: {
              get: ({ params, query, clientOptions }: {
                params: {
                  id: string;
                };
                query: {
                  distribution: string;
                };
                clientOptions: any;
              }) => Promise<[{
                code: 200;
              }, {
                code: 400;
              }, {
                code: 401;
              }, {
                code: 403;
              }, {
                code: 404;
              }]>;
            };
            InRelease: {
              get: ({ params, query, clientOptions }: {
                params: {
                  id: string;
                };
                query: {
                  distribution: string;
                };
                clientOptions: any;
              }) => Promise<[{
                code: 200;
              }, {
                code: 400;
              }, {
                code: 401;
              }, {
                code: 403;
              }, {
                code: 404;
              }]>;
            };
            "debian-installer": {
              "binary-{{architecture}}": {
                Packages: {
                  get: ({ params, query, clientOptions }: {
                    params: {
                      id: string;
                      component: string;
                    };
                    query: {
                      distribution: string;
                    };
                    clientOptions: any;
                  }) => Promise<[{
                    code: 200;
                  }, {
                    code: 202;
                  }, {
                    code: 400;
                  }, {
                    code: 401;
                  }, {
                    code: 403;
                  }, {
                    code: 404;
                  }]>;
                };
                "by-hash": {
                  SHA256: {
                    getOne: ({ params, query, clientOptions }: {
                      params: {
                        id: string;
                        component: string;
                        file_sha256: string;
                      };
                      query: {
                        distribution: string;
                      };
                      clientOptions: any;
                    }) => Promise<[{
                      code: 200;
                    }, {
                      code: 202;
                    }, {
                      code: 400;
                    }, {
                      code: 401;
                    }, {
                      code: 403;
                    }, {
                      code: 404;
                    }]>;
                  };
                };
              };
            };
            source: {
              Sources: {
                get: ({ params, query, clientOptions }: {
                  params: {
                    id: string;
                    component: string;
                  };
                  query: {
                    distribution: string;
                  };
                  clientOptions: any;
                }) => Promise<[{
                  code: 200;
                }, {
                  code: 202;
                }, {
                  code: 400;
                }, {
                  code: 401;
                }, {
                  code: 403;
                }, {
                  code: 404;
                }]>;
              };
              "by-hash": {
                SHA256: {
                  getOne: ({ params, query, clientOptions }: {
                    params: {
                      id: string;
                      component: string;
                      file_sha256: string;
                    };
                    query: {
                      distribution: string;
                    };
                    clientOptions: any;
                  }) => Promise<[{
                    code: 200;
                  }, {
                    code: 202;
                  }, {
                    code: 400;
                  }, {
                    code: 401;
                  }, {
                    code: 403;
                  }, {
                    code: 404;
                  }]>;
                };
              };
            };
            "binary-{{architecture}}": {
              Packages: {
                get: ({ params, query, clientOptions }: {
                  params: {
                    id: string;
                    component: string;
                  };
                  query: {
                    distribution: string;
                  };
                  clientOptions: any;
                }) => Promise<[{
                  code: 200;
                }, {
                  code: 202;
                }, {
                  code: 400;
                }, {
                  code: 401;
                }, {
                  code: 403;
                }, {
                  code: 404;
                }]>;
              };
              "by-hash": {
                SHA256: {
                  getOne: ({ params, query, clientOptions }: {
                    params: {
                      id: string;
                      component: string;
                      file_sha256: string;
                    };
                    query: {
                      distribution: string;
                    };
                    clientOptions: any;
                  }) => Promise<[{
                    code: 200;
                  }, {
                    code: 202;
                  }, {
                    code: 400;
                  }, {
                    code: 401;
                  }, {
                    code: 403;
                  }, {
                    code: 404;
                  }]>;
                };
              };
            };
          };
        };
        pool: {
          getOne: ({ params, clientOptions }: {
            params: {
              id: string;
              project_id: string;
              distribution: string;
              letter: string;
              package_name: string;
              package_version: string;
              file_name: string;
            };
            clientOptions: any;
          }) => Promise<[{
            code: 200;
          }, {
            code: 401;
          }, {
            code: 403;
          }, {
            code: 404;
          }]>;
        };
      };
      npm: {
        "-": {
          package: {
            "*package_name": {
              "dist-tags": {
                get: ({ params, query, clientOptions }: {
                  params: {
                    id: string;
                  };
                  query: {
                    package_name: string;
                  };
                  clientOptions: any;
                }) => Promise<[{
                  code: 200;
                  data: {
                    dist_tags: any;
                  };
                }, {
                  code: 400;
                }, {
                  code: 401;
                }, {
                  code: 403;
                }, {
                  code: 404;
                }]>;
                put: ({ params, data, clientOptions }: {
                  params: {
                    id: string;
                    tag: string;
                  };
                  data: {
                    package_name: string;
                  };
                  clientOptions: any;
                }) => Promise<[{
                  code: 204;
                }, {
                  code: 400;
                }, {
                  code: 401;
                }, {
                  code: 403;
                }, {
                  code: 404;
                }]>;
                delete: ({ params, query, clientOptions }: {
                  params: {
                    id: string;
                    tag: string;
                  };
                  query: {
                    package_name: string;
                  };
                  clientOptions: any;
                }) => Promise<[{
                  code: 204;
                }, {
                  code: 400;
                }, {
                  code: 401;
                }, {
                  code: 403;
                }, {
                  code: 404;
                }]>;
              };
            };
          };
          npm: {
            v1: {
              security: {
                advisories: {
                  bulk: {
                    post: ({ params, clientOptions }: {
                      params: {
                        id: string;
                      };
                      clientOptions: any;
                    }) => Promise<[{
                      code: 200;
                    }, {
                      code: 307;
                    }, {
                      code: 401;
                    }, {
                      code: 403;
                    }, {
                      code: 404;
                    }]>;
                  };
                };
                audits: {
                  quick: {
                    post: ({ params, clientOptions }: {
                      params: {
                        id: string;
                      };
                      clientOptions: any;
                    }) => Promise<[{
                      code: 200;
                    }, {
                      code: 307;
                    }, {
                      code: 401;
                    }, {
                      code: 403;
                    }, {
                      code: 404;
                    }]>;
                  };
                };
              };
            };
          };
        };
        "*package_name": {
          get: ({ params, query, clientOptions }: {
            params: {
              id: string;
            };
            query: {
              package_name: string;
            };
            clientOptions: any;
          }) => Promise<[{
            code: 200;
            data: {
              name: string;
              versions: any;
              "dist-tags": any;
            };
          }, {
            code: 302;
          }, {
            code: 400;
          }, {
            code: 401;
          }, {
            code: 403;
          }, {
            code: 404;
          }]>;
        };
      };
      nuget: {
        index: {
          get: ({ params, clientOptions }: {
            params: {
              id: string;
            };
            clientOptions: any;
          }) => Promise<[{
            code: 200;
            data: {
              version: string;
              resources: [object, object];
            };
          }, {
            code: 404;
          }]>;
        };
        symbolfiles: {
          "*file_name": {
            "*signature": {
              "*same_file_name": {
                get: ({ params, query, clientOptions }: {
                  params: {
                    id: string;
                  };
                  query: {
                    file_name: string;
                    signature: string;
                    same_file_name: string;
                  };
                  clientOptions: any;
                }) => Promise<[{
                  code: 200;
                }, {
                  code: 400;
                }, {
                  code: 403;
                }, {
                  code: 404;
                }]>;
              };
            };
          };
        };
        v2: {
          get: ({ params, clientOptions }: {
            params: {
              id: string;
            };
            clientOptions: any;
          }) => Promise<[{
            code: 200;
          }, {
            code: 404;
          }]>;
          $metadata: {
            get: ({ params, clientOptions }: {
              params: {
                id: string;
              };
              clientOptions: any;
            }) => Promise<[{
              code: 200;
            }]>;
          };
        };
        metadata: {
          "*package_name": {
            index: {
              get: ({ params, query, clientOptions }: {
                params: {
                  id: string;
                };
                query: {
                  package_name: string;
                };
                clientOptions: any;
              }) => Promise<[{
                code: 200;
                data: {
                  count: number;
                  items: [{
                    "@id": string;
                    lower: string;
                    upper: string;
                    count: number;
                    items: [{
                      value: any;
                    }, {
                      value: any;
                    }];
                  }, {
                    "@id": string;
                    lower: string;
                    upper: string;
                    count: number;
                    items: [{
                      value: any;
                    }, {
                      value: any;
                    }];
                  }];
                };
              }, {
                code: 401;
              }, {
                code: 403;
              }, {
                code: 404;
              }]>;
            };
            "*package_version": {
              get: ({ params, query, clientOptions }: {
                params: {
                  id: string;
                };
                query: {
                  package_name: string;
                  package_version: string;
                };
                clientOptions: any;
              }) => Promise<[{
                code: 200;
                data: {
                  "@id": string;
                  packageContent: string;
                  catalogEntry: {
                    "@id": string;
                    dependencyGroups: [{
                      value: any;
                    }, {
                      value: any;
                    }];
                    id: string;
                    version: string;
                    tags: string;
                    packageContent: string;
                    authors: string;
                    description: string;
                    summary: string;
                    projectUrl: string;
                    licenseUrl: string;
                    iconUrl: string;
                    published: string;
                  };
                };
              }, {
                code: 401;
              }, {
                code: 403;
              }, {
                code: 404;
              }]>;
            };
          };
        };
        query: {
          get: ({ params, query, clientOptions }: {
            params: {
              id: string;
            };
            query: {
              q: string;
              skip: string;
              take: string;
              prerelease: string;
            };
            clientOptions: any;
          }) => Promise<[{
            code: 200;
            data: {
              totalHits: number;
              data: [{
                "@type": string;
                id: string;
                title: string;
                totalDownloads: number;
                verified: boolean;
                version: string;
                versions: {
                  value: any;
                };
                tags: string;
                authors: string;
                description: string;
                summary: string;
                projectUrl: string;
                licenseUrl: string;
                iconUrl: string;
              }, {
                "@type": string;
                id: string;
                title: string;
                totalDownloads: number;
                verified: boolean;
                version: string;
                versions: {
                  value: any;
                };
                tags: string;
                authors: string;
                description: string;
                summary: string;
                projectUrl: string;
                licenseUrl: string;
                iconUrl: string;
              }];
            };
          }, {
            code: 401;
          }, {
            code: 403;
          }, {
            code: 404;
          }]>;
        };
      };
      pypi: {
        files: {
          "*file_identifier": {
            get: ({ params, query, clientOptions }: {
              params: {
                id: string;
                sha256: string;
              };
              query: {
                file_identifier: string;
              };
              clientOptions: any;
            }) => Promise<[{
              code: 200;
            }, {
              code: 401;
            }, {
              code: 403;
            }, {
              code: 404;
            }]>;
          };
        };
        simple: {
          get: ({ params, clientOptions }: {
            params: {
              id: string;
            };
            clientOptions: any;
          }) => Promise<[{
            code: 200;
          }, {
            code: 401;
          }, {
            code: 403;
          }, {
            code: 404;
          }]>;
          "*package_name": {
            get: ({ params, query, clientOptions }: {
              params: {
                id: string;
              };
              query: {
                package_name: string;
              };
              clientOptions: any;
            }) => Promise<[{
              code: 200;
            }, {
              code: 401;
            }, {
              code: 403;
            }, {
              code: 404;
            }]>;
          };
        };
      };
    };
    debian_distributions: {
      post: ({ params, data, clientOptions }: {
        params: {
          id: string;
        };
        data: {
          codename: string;
          suite: string;
          origin: string;
          label: string;
          version: string;
          description: string;
          valid_time_duration_seconds: number;
          components: [string, string];
          architectures: [string, string];
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
        data: {
          id: number;
          codename: string;
          suite: string;
          origin: string;
          label: string;
          version: string;
          description: string;
          valid_time_duration_seconds: number;
          components: [string, string];
          architectures: [string, string];
        };
      }, {
        code: 400;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }]>;
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
        };
        query: {
          page: string;
          per_page: string;
          codename: string;
          suite: string;
          origin: string;
          label: string;
          version: string;
          description: string;
          valid_time_duration_seconds: string;
          components: string;
          architectures: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          codename: string;
          suite: string;
          origin: string;
          label: string;
          version: string;
          description: string;
          valid_time_duration_seconds: number;
          components: [string, string];
          architectures: [string, string];
        };
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }]>;
      getOne: ({ params, clientOptions }: {
        params: {
          id: string;
          codename: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          codename: string;
          suite: string;
          origin: string;
          label: string;
          version: string;
          description: string;
          valid_time_duration_seconds: number;
          components: [string, string];
          architectures: [string, string];
        };
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }]>;
      put: ({ params, data, clientOptions }: {
        params: {
          id: string;
          codename: string;
        };
        data: {
          suite: string;
          origin: string;
          label: string;
          version: string;
          description: string;
          valid_time_duration_seconds: number;
          components: [string, string];
          architectures: [string, string];
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          codename: string;
          suite: string;
          origin: string;
          label: string;
          version: string;
          description: string;
          valid_time_duration_seconds: number;
          components: [string, string];
          architectures: [string, string];
        };
      }, {
        code: 400;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }]>;
      delete: ({ params, query, clientOptions }: {
        params: {
          id: string;
          codename: string;
        };
        query: {
          suite: string;
          origin: string;
          label: string;
          version: string;
          description: string;
          valid_time_duration_seconds: string;
          components: string;
          architectures: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 202;
      }, {
        code: 400;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }]>;
      "key.asc": {
        get: ({ params, clientOptions }: {
          params: {
            id: string;
            codename: string;
          };
          clientOptions: any;
        }) => Promise<[{
          code: 200;
          data: {
            id: number;
            codename: string;
            suite: string;
            origin: string;
            label: string;
            version: string;
            description: string;
            valid_time_duration_seconds: number;
            components: [string, string];
            architectures: [string, string];
          };
        }, {
          code: 401;
        }, {
          code: 403;
        }, {
          code: 404;
        }]>;
      };
    };
  };
  members: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        query: string;
        user_ids: string;
        skip_users: string;
        show_seat_info: string;
        with_saml_identity: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          value: any;
        }, {
          value: any;
        }];
        web_url: string;
        access_level: string;
        created_at: string;
        created_by: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        expires_at: string;
        group_saml_identity: {
          provider: {
            value: any;
          };
          extern_uid: {
            value: any;
          };
          saml_provider_id: {
            value: any;
          };
        };
        email: string;
        is_using_seat: string;
        override: string;
        membership_state: string;
        member_role: {
          id: {
            value: any;
          };
          group_id: {
            value: any;
          };
          name: {
            value: any;
          };
          description: {
            value: any;
          };
          base_access_level: {
            value: any;
          };
          admin_cicd_variables: {
            value: any;
          };
          admin_compliance_framework: {
            value: any;
          };
          admin_group_member: {
            value: any;
          };
          admin_merge_request: {
            value: any;
          };
          admin_push_rules: {
            value: any;
          };
          admin_terraform_state: {
            value: any;
          };
          admin_vulnerability: {
            value: any;
          };
          admin_web_hook: {
            value: any;
          };
          archive_project: {
            value: any;
          };
          manage_deploy_tokens: {
            value: any;
          };
          manage_group_access_tokens: {
            value: any;
          };
          manage_merge_request_settings: {
            value: any;
          };
          manage_project_access_tokens: {
            value: any;
          };
          manage_security_policy_link: {
            value: any;
          };
          read_code: {
            value: any;
          };
          read_dependency: {
            value: any;
          };
          read_vulnerability: {
            value: any;
          };
          remove_group: {
            value: any;
          };
          remove_project: {
            value: any;
          };
        };
      }, {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          value: any;
        }, {
          value: any;
        }];
        web_url: string;
        access_level: string;
        created_at: string;
        created_by: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        expires_at: string;
        group_saml_identity: {
          provider: {
            value: any;
          };
          extern_uid: {
            value: any;
          };
          saml_provider_id: {
            value: any;
          };
        };
        email: string;
        is_using_seat: string;
        override: string;
        membership_state: string;
        member_role: {
          id: {
            value: any;
          };
          group_id: {
            value: any;
          };
          name: {
            value: any;
          };
          description: {
            value: any;
          };
          base_access_level: {
            value: any;
          };
          admin_cicd_variables: {
            value: any;
          };
          admin_compliance_framework: {
            value: any;
          };
          admin_group_member: {
            value: any;
          };
          admin_merge_request: {
            value: any;
          };
          admin_push_rules: {
            value: any;
          };
          admin_terraform_state: {
            value: any;
          };
          admin_vulnerability: {
            value: any;
          };
          admin_web_hook: {
            value: any;
          };
          archive_project: {
            value: any;
          };
          manage_deploy_tokens: {
            value: any;
          };
          manage_group_access_tokens: {
            value: any;
          };
          manage_merge_request_settings: {
            value: any;
          };
          manage_project_access_tokens: {
            value: any;
          };
          manage_security_policy_link: {
            value: any;
          };
          read_code: {
            value: any;
          };
          read_dependency: {
            value: any;
          };
          read_vulnerability: {
            value: any;
          };
          remove_group: {
            value: any;
          };
          remove_project: {
            value: any;
          };
        };
      }];
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        access_level: number;
        user_id: number;
        username: string;
        expires_at: Date;
        invite_source: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          key: string;
          value: string;
        }, {
          key: string;
          value: string;
        }];
        web_url: string;
        access_level: string;
        created_at: string;
        created_by: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        expires_at: string;
        group_saml_identity: {
          provider: string;
          extern_uid: string;
          saml_provider_id: string;
        };
        email: string;
        is_using_seat: string;
        override: string;
        membership_state: string;
        member_role: {
          id: number;
          group_id: number;
          name: string;
          description: string;
          base_access_level: number;
          admin_cicd_variables: boolean;
          admin_compliance_framework: boolean;
          admin_group_member: boolean;
          admin_merge_request: boolean;
          admin_push_rules: boolean;
          admin_terraform_state: boolean;
          admin_vulnerability: boolean;
          admin_web_hook: boolean;
          archive_project: boolean;
          manage_deploy_tokens: boolean;
          manage_group_access_tokens: boolean;
          manage_merge_request_settings: boolean;
          manage_project_access_tokens: boolean;
          manage_security_policy_link: boolean;
          read_code: boolean;
          read_dependency: boolean;
          read_vulnerability: boolean;
          remove_group: boolean;
          remove_project: boolean;
        };
      };
    }]>;
    all: {
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
        };
        query: {
          query: string;
          user_ids: string;
          show_seat_info: string;
          state: string;
          page: string;
          per_page: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: [{
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
          access_level: string;
          created_at: string;
          created_by: {
            id: {
              value: any;
            };
            username: {
              value: any;
            };
            name: {
              value: any;
            };
            state: {
              value: any;
            };
            locked: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            avatar_path: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          expires_at: string;
          group_saml_identity: {
            provider: {
              value: any;
            };
            extern_uid: {
              value: any;
            };
            saml_provider_id: {
              value: any;
            };
          };
          email: string;
          is_using_seat: string;
          override: string;
          membership_state: string;
          member_role: {
            id: {
              value: any;
            };
            group_id: {
              value: any;
            };
            name: {
              value: any;
            };
            description: {
              value: any;
            };
            base_access_level: {
              value: any;
            };
            admin_cicd_variables: {
              value: any;
            };
            admin_compliance_framework: {
              value: any;
            };
            admin_group_member: {
              value: any;
            };
            admin_merge_request: {
              value: any;
            };
            admin_push_rules: {
              value: any;
            };
            admin_terraform_state: {
              value: any;
            };
            admin_vulnerability: {
              value: any;
            };
            admin_web_hook: {
              value: any;
            };
            archive_project: {
              value: any;
            };
            manage_deploy_tokens: {
              value: any;
            };
            manage_group_access_tokens: {
              value: any;
            };
            manage_merge_request_settings: {
              value: any;
            };
            manage_project_access_tokens: {
              value: any;
            };
            manage_security_policy_link: {
              value: any;
            };
            read_code: {
              value: any;
            };
            read_dependency: {
              value: any;
            };
            read_vulnerability: {
              value: any;
            };
            remove_group: {
              value: any;
            };
            remove_project: {
              value: any;
            };
          };
        }, {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
          access_level: string;
          created_at: string;
          created_by: {
            id: {
              value: any;
            };
            username: {
              value: any;
            };
            name: {
              value: any;
            };
            state: {
              value: any;
            };
            locked: {
              value: any;
            };
            avatar_url: {
              value: any;
            };
            avatar_path: {
              value: any;
            };
            custom_attributes: {
              value: any;
            };
            web_url: {
              value: any;
            };
          };
          expires_at: string;
          group_saml_identity: {
            provider: {
              value: any;
            };
            extern_uid: {
              value: any;
            };
            saml_provider_id: {
              value: any;
            };
          };
          email: string;
          is_using_seat: string;
          override: string;
          membership_state: string;
          member_role: {
            id: {
              value: any;
            };
            group_id: {
              value: any;
            };
            name: {
              value: any;
            };
            description: {
              value: any;
            };
            base_access_level: {
              value: any;
            };
            admin_cicd_variables: {
              value: any;
            };
            admin_compliance_framework: {
              value: any;
            };
            admin_group_member: {
              value: any;
            };
            admin_merge_request: {
              value: any;
            };
            admin_push_rules: {
              value: any;
            };
            admin_terraform_state: {
              value: any;
            };
            admin_vulnerability: {
              value: any;
            };
            admin_web_hook: {
              value: any;
            };
            archive_project: {
              value: any;
            };
            manage_deploy_tokens: {
              value: any;
            };
            manage_group_access_tokens: {
              value: any;
            };
            manage_merge_request_settings: {
              value: any;
            };
            manage_project_access_tokens: {
              value: any;
            };
            manage_security_policy_link: {
              value: any;
            };
            read_code: {
              value: any;
            };
            read_dependency: {
              value: any;
            };
            read_vulnerability: {
              value: any;
            };
            remove_group: {
              value: any;
            };
            remove_project: {
              value: any;
            };
          };
        }];
      }]>;
      getOne: ({ params, clientOptions }: {
        params: {
          id: string;
          user_id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            key: string;
            value: string;
          }, {
            key: string;
            value: string;
          }];
          web_url: string;
          access_level: string;
          created_at: string;
          created_by: {
            id: number;
            username: string;
            name: string;
            state: string;
            locked: boolean;
            avatar_url: string;
            avatar_path: string;
            custom_attributes: [{
              value: any;
            }, {
              value: any;
            }];
            web_url: string;
          };
          expires_at: string;
          group_saml_identity: {
            provider: string;
            extern_uid: string;
            saml_provider_id: string;
          };
          email: string;
          is_using_seat: string;
          override: string;
          membership_state: string;
          member_role: {
            id: number;
            group_id: number;
            name: string;
            description: string;
            base_access_level: number;
            admin_cicd_variables: boolean;
            admin_compliance_framework: boolean;
            admin_group_member: boolean;
            admin_merge_request: boolean;
            admin_push_rules: boolean;
            admin_terraform_state: boolean;
            admin_vulnerability: boolean;
            admin_web_hook: boolean;
            archive_project: boolean;
            manage_deploy_tokens: boolean;
            manage_group_access_tokens: boolean;
            manage_merge_request_settings: boolean;
            manage_project_access_tokens: boolean;
            manage_security_policy_link: boolean;
            read_code: boolean;
            read_dependency: boolean;
            read_vulnerability: boolean;
            remove_group: boolean;
            remove_project: boolean;
          };
        };
      }]>;
    };
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        user_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          key: string;
          value: string;
        }, {
          key: string;
          value: string;
        }];
        web_url: string;
        access_level: string;
        created_at: string;
        created_by: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        expires_at: string;
        group_saml_identity: {
          provider: string;
          extern_uid: string;
          saml_provider_id: string;
        };
        email: string;
        is_using_seat: string;
        override: string;
        membership_state: string;
        member_role: {
          id: number;
          group_id: number;
          name: string;
          description: string;
          base_access_level: number;
          admin_cicd_variables: boolean;
          admin_compliance_framework: boolean;
          admin_group_member: boolean;
          admin_merge_request: boolean;
          admin_push_rules: boolean;
          admin_terraform_state: boolean;
          admin_vulnerability: boolean;
          admin_web_hook: boolean;
          archive_project: boolean;
          manage_deploy_tokens: boolean;
          manage_group_access_tokens: boolean;
          manage_merge_request_settings: boolean;
          manage_project_access_tokens: boolean;
          manage_security_policy_link: boolean;
          read_code: boolean;
          read_dependency: boolean;
          read_vulnerability: boolean;
          remove_group: boolean;
          remove_project: boolean;
        };
      };
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        id: string;
        user_id: string;
      };
      data: {
        access_level: number;
        expires_at: Date;
        member_role_id: number;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          key: string;
          value: string;
        }, {
          key: string;
          value: string;
        }];
        web_url: string;
        access_level: string;
        created_at: string;
        created_by: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        expires_at: string;
        group_saml_identity: {
          provider: string;
          extern_uid: string;
          saml_provider_id: string;
        };
        email: string;
        is_using_seat: string;
        override: string;
        membership_state: string;
        member_role: {
          id: number;
          group_id: number;
          name: string;
          description: string;
          base_access_level: number;
          admin_cicd_variables: boolean;
          admin_compliance_framework: boolean;
          admin_group_member: boolean;
          admin_merge_request: boolean;
          admin_push_rules: boolean;
          admin_terraform_state: boolean;
          admin_vulnerability: boolean;
          admin_web_hook: boolean;
          archive_project: boolean;
          manage_deploy_tokens: boolean;
          manage_group_access_tokens: boolean;
          manage_merge_request_settings: boolean;
          manage_project_access_tokens: boolean;
          manage_security_policy_link: boolean;
          read_code: boolean;
          read_dependency: boolean;
          read_vulnerability: boolean;
          remove_group: boolean;
          remove_project: boolean;
        };
      };
    }]>;
    delete: ({ params, query, clientOptions }: {
      params: {
        id: string;
        user_id: string;
      };
      query: {
        skip_subresources: string;
        unassign_issuables: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
    override: {
      post: ({ params, clientOptions }: {
        params: {
          id: string;
          user_id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
        data: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            key: string;
            value: string;
          }, {
            key: string;
            value: string;
          }];
          web_url: string;
          access_level: string;
          created_at: string;
          created_by: {
            id: number;
            username: string;
            name: string;
            state: string;
            locked: boolean;
            avatar_url: string;
            avatar_path: string;
            custom_attributes: [{
              value: any;
            }, {
              value: any;
            }];
            web_url: string;
          };
          expires_at: string;
          group_saml_identity: {
            provider: string;
            extern_uid: string;
            saml_provider_id: string;
          };
          email: string;
          is_using_seat: string;
          override: string;
          membership_state: string;
          member_role: {
            id: number;
            group_id: number;
            name: string;
            description: string;
            base_access_level: number;
            admin_cicd_variables: boolean;
            admin_compliance_framework: boolean;
            admin_group_member: boolean;
            admin_merge_request: boolean;
            admin_push_rules: boolean;
            admin_terraform_state: boolean;
            admin_vulnerability: boolean;
            admin_web_hook: boolean;
            archive_project: boolean;
            manage_deploy_tokens: boolean;
            manage_group_access_tokens: boolean;
            manage_merge_request_settings: boolean;
            manage_project_access_tokens: boolean;
            manage_security_policy_link: boolean;
            read_code: boolean;
            read_dependency: boolean;
            read_vulnerability: boolean;
            remove_group: boolean;
            remove_project: boolean;
          };
        };
      }]>;
      delete: ({ params, clientOptions }: {
        params: {
          id: string;
          user_id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            key: string;
            value: string;
          }, {
            key: string;
            value: string;
          }];
          web_url: string;
          access_level: string;
          created_at: string;
          created_by: {
            id: number;
            username: string;
            name: string;
            state: string;
            locked: boolean;
            avatar_url: string;
            avatar_path: string;
            custom_attributes: [{
              value: any;
            }, {
              value: any;
            }];
            web_url: string;
          };
          expires_at: string;
          group_saml_identity: {
            provider: string;
            extern_uid: string;
            saml_provider_id: string;
          };
          email: string;
          is_using_seat: string;
          override: string;
          membership_state: string;
          member_role: {
            id: number;
            group_id: number;
            name: string;
            description: string;
            base_access_level: number;
            admin_cicd_variables: boolean;
            admin_compliance_framework: boolean;
            admin_group_member: boolean;
            admin_merge_request: boolean;
            admin_push_rules: boolean;
            admin_terraform_state: boolean;
            admin_vulnerability: boolean;
            admin_web_hook: boolean;
            archive_project: boolean;
            manage_deploy_tokens: boolean;
            manage_group_access_tokens: boolean;
            manage_merge_request_settings: boolean;
            manage_project_access_tokens: boolean;
            manage_security_policy_link: boolean;
            read_code: boolean;
            read_dependency: boolean;
            read_vulnerability: boolean;
            remove_group: boolean;
            remove_project: boolean;
          };
        };
      }]>;
    };
    state: {
      put: ({ params, data, clientOptions }: {
        params: {
          id: string;
          user_id: string;
        };
        data: {
          state: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
      }]>;
    };
    approve: {
      put: ({ params, clientOptions }: {
        params: {
          id: string;
          member_id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
      }]>;
    };
    approve_all: {
      post: ({ params, clientOptions }: {
        params: {
          id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
      }]>;
    };
  };
  pending_members: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }]>;
  };
  billable_members: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
        search: string;
        sort: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [{
          key: string;
          value: string;
        }, {
          key: string;
          value: string;
        }];
        web_url: string;
        access_level: string;
        created_at: string;
        created_by: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        expires_at: string;
        group_saml_identity: {
          provider: string;
          extern_uid: string;
          saml_provider_id: string;
        };
        email: string;
        is_using_seat: string;
        override: string;
        membership_state: string;
        member_role: {
          id: number;
          group_id: number;
          name: string;
          description: string;
          base_access_level: number;
          admin_cicd_variables: boolean;
          admin_compliance_framework: boolean;
          admin_group_member: boolean;
          admin_merge_request: boolean;
          admin_push_rules: boolean;
          admin_terraform_state: boolean;
          admin_vulnerability: boolean;
          admin_web_hook: boolean;
          archive_project: boolean;
          manage_deploy_tokens: boolean;
          manage_group_access_tokens: boolean;
          manage_merge_request_settings: boolean;
          manage_project_access_tokens: boolean;
          manage_security_policy_link: boolean;
          read_code: boolean;
          read_dependency: boolean;
          read_vulnerability: boolean;
          remove_group: boolean;
          remove_project: boolean;
        };
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        user_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
    memberships: {
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
          user_id: string;
        };
        query: {
          page: string;
          per_page: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: string;
          source_id: string;
          source_full_name: string;
          source_members_url: string;
          created_at: string;
          expires_at: string;
          access_level: {
            string_value: string;
            number_value: string;
            custom_role: string;
          };
        };
      }]>;
    };
    indirect: {
      get: ({ params, query, clientOptions }: {
        params: {
          id: string;
          user_id: string;
        };
        query: {
          page: string;
          per_page: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: string;
          source_id: string;
          source_full_name: string;
          source_members_url: string;
          created_at: string;
          expires_at: string;
          access_level: {
            string_value: string;
            number_value: string;
            custom_role: string;
          };
        };
      }]>;
    };
  };
  merge_requests: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        author_id: string;
        author_username: string;
        assignee_id: string;
        assignee_username: string;
        reviewer_username: string;
        labels: string;
        milestone: string;
        my_reaction_emoji: string;
        reviewer_id: string;
        state: string;
        order_by: string;
        sort: string;
        with_labels_details: string;
        with_merge_status_recheck: string;
        created_after: string;
        created_before: string;
        updated_after: string;
        updated_before: string;
        view: string;
        scope: string;
        source_branch: string;
        source_project_id: string;
        target_branch: string;
        search: string;
        in: string;
        wip: string;
        not: string;
        deployed_before: string;
        deployed_after: string;
        environment: string;
        approved: string;
        merge_user_id: string;
        merge_user_username: string;
        approver_ids: string;
        approved_by_ids: string;
        approved_by_usernames: string;
        page: string;
        per_page: string;
        non_archived: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        iid: number;
        project_id: number;
        title: string;
        description: string;
        state: string;
        created_at: Date;
        updated_at: Date;
        merged_by: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        merge_user: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        merged_at: string;
        closed_by: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        closed_at: string;
        title_html: string;
        description_html: string;
        target_branch: string;
        source_branch: string;
        user_notes_count: string;
        upvotes: string;
        downvotes: string;
        author: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        assignees: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        assignee: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        reviewers: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: any;
          }, {
            value: any;
          }];
          web_url: string;
        };
        source_project_id: string;
        target_project_id: string;
        labels: string;
        draft: string;
        imported: string;
        imported_from: string;
        work_in_progress: string;
        milestone: {
          id: string;
          iid: string;
          project_id: string;
          group_id: string;
          title: string;
          description: string;
          state: string;
          created_at: string;
          updated_at: string;
          due_date: string;
          start_date: string;
          expired: string;
          web_url: string;
        };
        merge_when_pipeline_succeeds: string;
        merge_status: string;
        detailed_merge_status: string;
        sha: string;
        merge_commit_sha: string;
        squash_commit_sha: string;
        discussion_locked: string;
        should_remove_source_branch: string;
        force_remove_source_branch: string;
        prepared_at: string;
        allow_collaboration: string;
        allow_maintainer_to_push: string;
        reference: string;
        references: {
          short: string;
          relative: string;
          full: string;
        };
        web_url: string;
        time_stats: {
          time_estimate: number;
          total_time_spent: number;
          human_time_estimate: string;
          human_total_time_spent: string;
        };
        squash: string;
        squash_on_merge: string;
        task_completion_status: string;
        has_conflicts: string;
        blocking_discussions_resolved: string;
        approvals_before_merge: string;
      };
    }, {
      code: 401;
    }, {
      code: 404;
    }, {
      code: 422;
    }]>;
  };
  releases: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        sort: string;
        simple: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        name: string;
        tag_name: string;
        description: string;
        created_at: Date;
        released_at: Date;
        upcoming_release: boolean;
        description_html: string;
        author: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        commit: {
          id: {
            value: any;
          };
          short_id: {
            value: any;
          };
          created_at: {
            value: any;
          };
          parent_ids: {
            value: any;
          };
          title: {
            value: any;
          };
          message: {
            value: any;
          };
          author_name: {
            value: any;
          };
          author_email: {
            value: any;
          };
          authored_date: {
            value: any;
          };
          committer_name: {
            value: any;
          };
          committer_email: {
            value: any;
          };
          committed_date: {
            value: any;
          };
          trailers: {
            value: any;
          };
          extended_trailers: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        milestones: {
          id: {
            value: any;
          };
          iid: {
            value: any;
          };
          project_id: {
            value: any;
          };
          group_id: {
            value: any;
          };
          title: {
            value: any;
          };
          description: {
            value: any;
          };
          state: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          due_date: {
            value: any;
          };
          start_date: {
            value: any;
          };
          expired: {
            value: any;
          };
          web_url: {
            value: any;
          };
          issue_stats: {
            value: any;
          };
        };
        commit_path: string;
        tag_path: string;
        assets: {
          count: number;
          sources: {
            value: any;
          };
          links: {
            value: any;
          };
        };
        evidences: {
          sha: {
            value: any;
          };
          filepath: {
            value: any;
          };
          collected_at: {
            value: any;
          };
        };
        _links: {
          closed_issues_url: string;
          closed_merge_requests_url: string;
          edit_url: string;
          merged_merge_requests_url: string;
          opened_issues_url: string;
          opened_merge_requests_url: string;
          self: string;
        };
      }, {
        name: string;
        tag_name: string;
        description: string;
        created_at: Date;
        released_at: Date;
        upcoming_release: boolean;
        description_html: string;
        author: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        commit: {
          id: {
            value: any;
          };
          short_id: {
            value: any;
          };
          created_at: {
            value: any;
          };
          parent_ids: {
            value: any;
          };
          title: {
            value: any;
          };
          message: {
            value: any;
          };
          author_name: {
            value: any;
          };
          author_email: {
            value: any;
          };
          authored_date: {
            value: any;
          };
          committer_name: {
            value: any;
          };
          committer_email: {
            value: any;
          };
          committed_date: {
            value: any;
          };
          trailers: {
            value: any;
          };
          extended_trailers: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        milestones: {
          id: {
            value: any;
          };
          iid: {
            value: any;
          };
          project_id: {
            value: any;
          };
          group_id: {
            value: any;
          };
          title: {
            value: any;
          };
          description: {
            value: any;
          };
          state: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          due_date: {
            value: any;
          };
          start_date: {
            value: any;
          };
          expired: {
            value: any;
          };
          web_url: {
            value: any;
          };
          issue_stats: {
            value: any;
          };
        };
        commit_path: string;
        tag_path: string;
        assets: {
          count: number;
          sources: {
            value: any;
          };
          links: {
            value: any;
          };
        };
        evidences: {
          sha: {
            value: any;
          };
          filepath: {
            value: any;
          };
          collected_at: {
            value: any;
          };
        };
        _links: {
          closed_issues_url: string;
          closed_merge_requests_url: string;
          edit_url: string;
          merged_merge_requests_url: string;
          opened_issues_url: string;
          opened_merge_requests_url: string;
          self: string;
        };
      }];
    }, {
      code: 400;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
  };
  access_tokens: {
    get: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        access_level: number;
      }, {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        access_level: number;
      }];
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        name: string;
        scopes: [string, string];
        expires_at: Date;
        access_level: 40;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        access_level: number;
        token: string;
      };
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        token_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        access_level: number;
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        token_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }, {
      code: 400;
    }, {
      code: 404;
    }]>;
    rotate: {
      post: ({ params, data, clientOptions }: {
        params: {
          id: string;
          token_id: string;
        };
        data: {
          expires_at: Date;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
        data: {
          id: number;
          name: string;
          revoked: boolean;
          created_at: Date;
          user_id: number;
          last_used_at: Date;
          active: boolean;
          expires_at: Date;
          access_level: number;
          token: string;
        };
      }]>;
    };
  };
  wikis: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        with_content: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        format: string;
        slug: string;
        title: string;
      }, {
        format: string;
        slug: string;
        title: string;
      }];
    }, {
      code: 404;
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        title: string;
        content: string;
        front_matter: {
          title: string;
        };
        format: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        format: string;
        slug: string;
        title: string;
        content: string;
        encoding: string;
        front_matter: any;
      };
    }, {
      code: 400;
    }, {
      code: 404;
    }, {
      code: 422;
    }]>;
    getOne: ({ params, query, clientOptions }: {
      params: {
        slug: string;
        id: string;
      };
      query: {
        version: string;
        render_html: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        format: string;
        slug: string;
        title: string;
        content: string;
        encoding: string;
        front_matter: any;
      };
    }, {
      code: 404;
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        id: string;
        slug: string;
      };
      data: {
        title: string;
        front_matter: {
          title: string;
        };
        content: string;
        format: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        format: string;
        slug: string;
        title: string;
        content: string;
        encoding: string;
        front_matter: any;
      };
    }, {
      code: 400;
    }, {
      code: 404;
    }, {
      code: 422;
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        slug: string;
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }, {
      code: 400;
    }, {
      code: 404;
    }]>;
    attachments: {
      post: ({ params, data, clientOptions }: {
        params: {
          id: string;
        };
        data: {
          file: string;
          branch: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
        data: {
          file_name: string;
          file_path: string;
          branch: string;
          link: {
            url: string;
            markdown: string;
          };
        };
      }, {
        code: 404;
      }]>;
    };
  };
  audit_events: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        created_after: string;
        created_before: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: string;
        author_id: string;
        entity_id: string;
        entity_type: string;
        details: string;
        created_at: string;
      }, {
        id: string;
        author_id: string;
        entity_id: string;
        entity_type: string;
        details: string;
        created_at: string;
      }];
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        audit_event_id: string;
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        author_id: string;
        entity_id: string;
        entity_type: string;
        details: string;
        created_at: string;
      };
    }]>;
  };
  import: {
    post: ({ data, clientOptions }: {
      data: {
        path: string;
        name: string;
        parent_id: number;
        organization_id: number;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 202;
    }, {
      code: 400;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 503;
    }]>;
    authorize: {
      post: ({ clientOptions }: {
        clientOptions: any;
      }) => Promise<[{
        code: 201;
      }]>;
    };
  };
};

export default (client: any, handler: any): Groups => ({
  get: ({query,clientOptions}: {query:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string},clientOptions:any}): Promise<[{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}]> => handler.apply({method:'get',url:'api/v4/groups',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'statistics',type:'string'},{name:'skip_groups',type:'string'},{name:'all_available',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'owned',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'min_access_level',type:'string'},{name:'top_level_only',type:'string'},{name:'repository_storage',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'}],data:null}, [client, {query, clientOptions}]),
  post: ({data,clientOptions}: {data:{name:string,path:string,parent_id:number,organization_id:{},description:string,visibility:string,avatar:string,share_with_group_lock:boolean,require_two_factor_authentication:boolean,two_factor_grace_period:number,project_creation_level:string,auto_devops_enabled:boolean,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,show_diff_preview_in_email:boolean,mentions_disabled:boolean,lfs_enabled:boolean,request_access_enabled:boolean,default_branch:string,default_branch_protection:number,default_branch_protection_defaults:{allowed_to_push:[{access_level:number},{access_level:number}],allow_force_push:boolean,allowed_to_merge:[{access_level:number},{access_level:number}],code_owner_approval_required:boolean,developer_can_initial_push:boolean},shared_runners_setting:string,enabled_git_access_protocol:string,membership_lock:boolean,ldap_cn:string,ldap_access:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,wiki_access_level:string},clientOptions:any}): Promise<[{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}}]> => handler.apply({method:'post',url:'api/v4/groups',resource:'api',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',path:'string',parent_id:'number',organization_id:{},description:'string',visibility:'string',avatar:'binary',share_with_group_lock:'boolean',require_two_factor_authentication:'boolean',two_factor_grace_period:'number',project_creation_level:'string',auto_devops_enabled:'boolean',subgroup_creation_level:'string',emails_disabled:'boolean',emails_enabled:'boolean',show_diff_preview_in_email:'boolean',mentions_disabled:'boolean',lfs_enabled:'boolean',request_access_enabled:'boolean',default_branch:'string',default_branch_protection:'number',default_branch_protection_defaults:{allowed_to_push:[{access_level:'number'},{access_level:'number'}],allow_force_push:'boolean',allowed_to_merge:[{access_level:'number'},{access_level:'number'}],code_owner_approval_required:'boolean',developer_can_initial_push:'boolean'},shared_runners_setting:'string',enabled_git_access_protocol:'string',membership_lock:'boolean',ldap_cn:'string',ldap_access:'number',shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',wiki_access_level:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
  put: ({params,data,clientOptions}: {params:{id:string},data:{name:string,path:string,description:string,visibility:string,avatar:string,share_with_group_lock:boolean,require_two_factor_authentication:boolean,two_factor_grace_period:number,project_creation_level:string,auto_devops_enabled:boolean,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,show_diff_preview_in_email:boolean,mentions_disabled:boolean,lfs_enabled:boolean,request_access_enabled:boolean,default_branch:string,default_branch_protection:number,default_branch_protection_defaults:{allowed_to_push:[{access_level:number},{access_level:number}],allow_force_push:boolean,allowed_to_merge:[{access_level:number},{access_level:number}],code_owner_approval_required:boolean,developer_can_initial_push:boolean},shared_runners_setting:string,enabled_git_access_protocol:string,membership_lock:boolean,ldap_cn:string,ldap_access:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,wiki_access_level:string,prevent_sharing_groups_outside_hierarchy:boolean,lock_math_rendering_limits_enabled:boolean,math_rendering_limits_enabled:boolean,file_template_project_id:number,prevent_forking_outside_group:boolean,unique_project_download_limit:number,unique_project_download_limit_interval_in_seconds:number,unique_project_download_limit_allowlist:[string,string],unique_project_download_limit_alertlist:[number,number],auto_ban_user_on_excessive_projects_download:boolean,ip_restriction_ranges:string,service_access_tokens_expiration_enforced:boolean,duo_features_enabled:boolean,lock_duo_features_enabled:boolean},clientOptions:any}): Promise<[{code:200,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}}]> => handler.apply({method:'put',url:'api/v4/groups/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',path:'string',description:'string',visibility:'string',avatar:'binary',share_with_group_lock:'boolean',require_two_factor_authentication:'boolean',two_factor_grace_period:'number',project_creation_level:'string',auto_devops_enabled:'boolean',subgroup_creation_level:'string',emails_disabled:'boolean',emails_enabled:'boolean',show_diff_preview_in_email:'boolean',mentions_disabled:'boolean',lfs_enabled:'boolean',request_access_enabled:'boolean',default_branch:'string',default_branch_protection:'number',default_branch_protection_defaults:{allowed_to_push:[{access_level:'number'},{access_level:'number'}],allow_force_push:'boolean',allowed_to_merge:[{access_level:'number'},{access_level:'number'}],code_owner_approval_required:'boolean',developer_can_initial_push:'boolean'},shared_runners_setting:'string',enabled_git_access_protocol:'string',membership_lock:'boolean',ldap_cn:'string',ldap_access:'number',shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',wiki_access_level:'string',prevent_sharing_groups_outside_hierarchy:'boolean',lock_math_rendering_limits_enabled:'boolean',math_rendering_limits_enabled:'boolean',file_template_project_id:'number',prevent_forking_outside_group:'boolean',unique_project_download_limit:'number',unique_project_download_limit_interval_in_seconds:'number',unique_project_download_limit_allowlist:['string','string'],unique_project_download_limit_alertlist:['number','number'],auto_ban_user_on_excessive_projects_download:'boolean',ip_restriction_ranges:'string',service_access_tokens_expiration_enforced:'boolean',duo_features_enabled:'boolean',lock_duo_features_enabled:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  getOne: ({params,query,clientOptions}: {params:{id:string},query:{with_custom_attributes:string,with_projects:string},clientOptions:any}): Promise<[{code:200,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}]> => handler.apply({method:'get',url:'api/v4/groups/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'with_custom_attributes',type:'string'},{name:'with_projects',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
  delete: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/groups/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
  "access_requests": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/access_requests',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/access_requests',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,user_id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/access_requests/:user_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
    "approve": {
      put: ({params,data,clientOptions}: {params:{id:string,user_id:string},data:{access_level:30},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}]> => handler.apply({method:'put',url:'api/v4/groups/:id/access_requests/:user_id/approve',resource:'groups',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{access_level:30},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    }
  },
  "badges": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string,name:string},clientOptions:any}): Promise<[{code:200,data:[{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string},{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/badges',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'name',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{id:string},data:{link_url:string,image_url:string,name:string},clientOptions:any}): Promise<[{code:201,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/badges',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{link_url:'string',image_url:'string',name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    "render": {
      get: ({params,query,clientOptions}: {params:{id:string},query:{link_url:string,image_url:string},clientOptions:any}): Promise<[{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/badges/render',resource:'groups',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'link_url',type:'string'},{name:'image_url',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    },
    getOne: ({params,clientOptions}: {params:{id:string,badge_id:string},clientOptions:any}): Promise<[{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/badges/:badge_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'badge_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{id:string,badge_id:string},data:{link_url:string,image_url:string,name:string},clientOptions:any}): Promise<[{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}]> => handler.apply({method:'put',url:'api/v4/groups/:id/badges/:badge_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'badge_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{link_url:'string',image_url:'string',name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,badge_id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/badges/:badge_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'badge_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "custom_attributes": {
    get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{key:string,value:string}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/custom_attributes',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{key:string,id:string},clientOptions:any}): Promise<[{code:200,data:{key:string,value:string}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/custom_attributes/:key',resource:'v4',variable:[{name:'key',type:'string'},{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{key:string,id:string},data:{value:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'put',url:'api/v4/groups/:id/custom_attributes/:key',resource:'v4',variable:[{name:'key',type:'string'},{name:'id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{value:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{key:string,id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/custom_attributes/:key',resource:'v4',variable:[{name:'key',type:'string'},{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "projects": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{archived:string,visibility:string,search:string,order_by:string,sort:string,simple:string,owned:string,starred:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_shared:string,include_subgroups:string,include_ancestor_groups:string,min_access_level:string,page:string,per_page:string,with_custom_attributes:string,with_security_reports:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/projects',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'archived',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'simple',type:'string'},{name:'owned',type:'string'},{name:'starred',type:'string'},{name:'with_issues_enabled',type:'string'},{name:'with_merge_requests_enabled',type:'string'},{name:'with_shared',type:'string'},{name:'include_subgroups',type:'string'},{name:'include_ancestor_groups',type:'string'},{name:'min_access_level',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'},{name:'with_security_reports',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    "shared": {
      get: ({params,query,clientOptions}: {params:{id:string},query:{archived:string,visibility:string,search:string,order_by:string,sort:string,simple:string,starred:string,with_issues_enabled:string,with_merge_requests_enabled:string,min_access_level:string,page:string,per_page:string,with_custom_attributes:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/projects/shared',resource:'groups',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'archived',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'simple',type:'string'},{name:'starred',type:'string'},{name:'with_issues_enabled',type:'string'},{name:'with_merge_requests_enabled',type:'string'},{name:'min_access_level',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    },
    post: ({params,clientOptions}: {params:{id:string,project_id:string},clientOptions:any}): Promise<[{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/projects/:project_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'project_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "subgroups": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string},clientOptions:any}): Promise<[{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/subgroups',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'statistics',type:'string'},{name:'skip_groups',type:'string'},{name:'all_available',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'owned',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'min_access_level',type:'string'},{name:'top_level_only',type:'string'},{name:'repository_storage',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "descendant_groups": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string},clientOptions:any}): Promise<[{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/descendant_groups',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'statistics',type:'string'},{name:'skip_groups',type:'string'},{name:'all_available',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'owned',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'min_access_level',type:'string'},{name:'top_level_only',type:'string'},{name:'repository_storage',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "transfer_locations": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{search:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:{value:{}},value:{value:{}}},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:{value:{}},group_access:{value:{}},provider:{value:{}},filter:{value:{}}},saml_group_links:{name:{value:{}},access_level:{value:{}},member_role_id:{value:{}}},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/transfer_locations',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'search',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "transfer": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{group_id:number},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/groups/:id/transfer',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{group_id:'number'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
  },
  "share": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{group_id:number,group_access:number,expires_at:Date},clientOptions:any}): Promise<[{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},resolve_outdated_diff_discussions:boolean,container_expiration_policy:{cadence:{value:{}},enabled:{value:{}},keep_n:{value:{}},older_than:{value:{}},name_regex:{value:{}},name_regex_keep:{value:{}},next_run_at:{value:{}}},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}},default_branch:{value:{}},tag_list:{value:{}},topics:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}},web_url:{value:{}},readme_url:{value:{}},forks_count:{value:{}},license_url:{value:{}},license:{value:{}},avatar_url:{value:{}},star_count:{value:{}},last_activity_at:{value:{}},namespace:{value:{}},custom_attributes:{value:{}},repository_storage:{value:{}}},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,updated_at:Date,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:{value:{}},storage_size:{value:{}},repository_size:{value:{}},wiki_size:{value:{}},lfs_objects_size:{value:{}},job_artifacts_size:{value:{}},pipeline_artifacts_size:{value:{}},packages_size:{value:{}},snippets_size:{value:{}},uploads_size:{value:{}},container_registry_size:{value:{}}},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/share',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{group_id:'number',group_access:'number',expires_at:'date'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,group_id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/share/:group_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'group_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "ldap_sync": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/groups/:id/ldap_sync',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "restore": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/groups/:id/restore',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "provisioned_users": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{username:string,search:string,active:string,blocked:string,created_after:string,created_before:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:Date,confirmed_at:Date,last_activity_on:Date,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:Date,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string}}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/provisioned_users',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'username',type:'string'},{name:'search',type:'string'},{name:'active',type:'string'},{name:'blocked',type:'string'},{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "users": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{search:string,active:string,include_saml_users:string,include_service_accounts:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:Date,confirmed_at:Date,last_activity_on:Date,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:Date,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string}}},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/users',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'search',type:'string'},{name:'active',type:'string'},{name:'include_saml_users',type:'string'},{name:'include_service_accounts',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "ssh_certificates": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,title:string,key:string,created_at:Date},{id:number,title:string,key:string,created_at:Date}]},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/ssh_certificates',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{id:string},data:{title:string,key:string},clientOptions:any}): Promise<[{code:201,data:{id:number,title:string,key:string,created_at:Date}},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/groups/:id/ssh_certificates',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{title:'string',key:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,ssh_certificates_id:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:401},{code:403},{code:422}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/ssh_certificates/:ssh_certificates_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'ssh_certificates_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "runners": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{type:string,paused:string,status:string,tag_list:string,version_prefix:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}},{code:400},{code:403}]> => handler.apply({method:'get',url:'api/v4/groups/:id/runners',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'type',type:'string'},{name:'paused',type:'string'},{name:'status',type:'string'},{name:'tag_list',type:'string'},{name:'version_prefix',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    "reset_registration_token": {
      post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201,data:{token:string,token_expires_at:string}},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/groups/:id/runners/reset_registration_token',resource:'groups',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  "dependency_proxy": {
    "cache": {
      delete: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:202},{code:401}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/dependency_proxy/cache',resource:'groups',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  "deploy_tokens": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string,active:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,name:string,username:string,expires_at:Date,revoked:boolean,expired:boolean},{id:number,name:string,username:string,expires_at:Date,revoked:boolean,expired:boolean}]},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/deploy_tokens',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'active',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{id:string},data:{name:string,scopes:[string,string],expires_at:Date,username:string},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,username:string,expires_at:Date,revoked:boolean,expired:boolean,token:string}},{code:400},{code:401},{code:404}]> => handler.apply({method:'post',url:'api/v4/groups/:id/deploy_tokens',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',scopes:['string','string'],expires_at:'dateTime',username:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{id:string,token_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,username:string,expires_at:Date,revoked:boolean,expired:boolean}},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/deploy_tokens/:token_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,token_id:string},clientOptions:any}): Promise<[{code:204},{code:401},{code:404}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/deploy_tokens/:token_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "avatar": {
    get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'get',url:'api/v4/groups/:id/avatar',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "clusters": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},platform_kubernetes:{api_url:{value:{}},namespace:{value:{}},authorization_type:{value:{}},ca_cert:{value:{}}},provider_gcp:{cluster_id:{value:{}},status_name:{value:{}},gcp_project_id:{value:{}},zone:{value:{}},machine_type:{value:{}},num_nodes:{value:{}},endpoint:{value:{}}},management_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}},{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},platform_kubernetes:{api_url:{value:{}},namespace:{value:{}},authorization_type:{value:{}},ca_cert:{value:{}}},provider_gcp:{cluster_id:{value:{}},status_name:{value:{}},gcp_project_id:{value:{}},zone:{value:{}},machine_type:{value:{}},num_nodes:{value:{}},endpoint:{value:{}}},management_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}}]},{code:403}]> => handler.apply({method:'get',url:'api/v4/groups/:id/clusters',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{id:string,cluster_id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date},group:{id:string,web_url:string,name:string}}},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/clusters/:cluster_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'cluster_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{id:string,cluster_id:string},data:{name:string,enabled:boolean,domain:string,environment_scope:string,namespace_per_environment:true,management_project_id:number,managed:boolean,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string}},clientOptions:any}): Promise<[{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date},group:{id:string,web_url:string,name:string}}},{code:400},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/groups/:id/clusters/:cluster_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'cluster_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',enabled:'boolean',domain:'string',environment_scope:'string',namespace_per_environment:true,management_project_id:'number',managed:'boolean',platform_kubernetes_attributes:{api_url:'string',token:'string',ca_cert:'string',namespace:'string'}},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,cluster_id:string},clientOptions:any}): Promise<[{code:204,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date},group:{id:string,web_url:string,name:string}}},{code:403},{code:404}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/clusters/:cluster_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'cluster_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    "user": {
      post: ({params,data,clientOptions}: {params:{id:string},data:{name:string,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string,authorization_type:string},enabled:true,environment_scope:string,namespace_per_environment:true,domain:string,management_project_id:number,managed:true},clientOptions:any}): Promise<[{code:201,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date},group:{id:string,web_url:string,name:string}}},{code:400},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/groups/:id/clusters/user',resource:'groups',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',platform_kubernetes_attributes:{api_url:'string',token:'string',ca_cert:'string',namespace:'string',authorization_type:'rbac'},enabled:true,environment_scope:'*',namespace_per_environment:true,domain:'string',management_project_id:'number',managed:true},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    }
  },
  "registry": {
    "repositories": {
      get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,name:string,path:string,project_id:number,location:string,created_at:Date,cleanup_policy_started_at:Date,tags_count:number,tags:{name:{value:{}},path:{value:{}},location:{value:{}}},delete_api_path:string,size:number,status:string},{id:number,name:string,path:string,project_id:number,location:string,created_at:Date,cleanup_policy_started_at:Date,tags_count:number,tags:{name:{value:{}},path:{value:{}},location:{value:{}}},delete_api_path:string,size:number,status:string}]},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/registry/repositories',resource:'groups',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    }
  },
  "export": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:202},{code:401},{code:403},{code:404},{code:429},{code:503}]> => handler.apply({method:'post',url:'api/v4/groups/:id/export',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
    "download": {
      get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:401},{code:403},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/groups/:id/export/download',resource:'groups',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  "export_relations": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{batched:boolean},clientOptions:any}): Promise<[{code:202},{code:401},{code:403},{code:404},{code:503}]> => handler.apply({method:'post',url:'api/v4/groups/:id/export_relations',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{batched:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    "download": {
      get: ({params,query,clientOptions}: {params:{id:string},query:{relation:string,batched:string,batch_number:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/groups/:id/export_relations/download',resource:'groups',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'relation',type:'string'},{name:'batched',type:'string'},{name:'batch_number',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    },
    "status": {
      get: ({params,query,clientOptions}: {params:{id:string},query:{relation:string},clientOptions:any}): Promise<[{code:200,data:[{relation:string,status:string,error:string,updated_at:Date,batched:boolean,batches_count:number,total_objects_count:number,batches:{status:{value:{}},batch_number:{value:{}},objects_count:{value:{}},error:{value:{}},updated_at:{value:{}}}},{relation:string,status:string,error:string,updated_at:Date,batched:boolean,batches_count:number,total_objects_count:number,batches:{status:{value:{}},batch_number:{value:{}},objects_count:{value:{}},error:{value:{}},updated_at:{value:{}}}}]},{code:401},{code:403},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/groups/:id/export_relations/status',resource:'groups',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'relation',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    }
  },
  "packages": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{exclude_subgroups:string,page:string,per_page:string,order_by:string,sort:string,package_type:string,package_name:string,package_version:string,include_versionless:string,status:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,name:string,conan_package_name:string,version:string,package_type:string,status:string,_links:{web_path:string,delete_api_path:string},created_at:Date,last_downloaded_at:Date,project_id:number,project_path:string,tags:string,pipeline:{id:{value:{}},iid:{value:{}},project_id:{value:{}},sha:{value:{}},ref:{value:{}},status:{value:{}},source:{value:{}},created_at:{value:{}},updated_at:{value:{}},web_url:{value:{}},user:{value:{}}},pipelines:{id:{value:{}},iid:{value:{}},project_id:{value:{}},sha:{value:{}},ref:{value:{}},status:{value:{}},source:{value:{}},created_at:{value:{}},updated_at:{value:{}},web_url:{value:{}},user:{value:{}}},versions:{id:{value:{}},version:{value:{}},created_at:{value:{}},tags:{value:{}},pipeline:{value:{}}}},{id:number,name:string,conan_package_name:string,version:string,package_type:string,status:string,_links:{web_path:string,delete_api_path:string},created_at:Date,last_downloaded_at:Date,project_id:number,project_path:string,tags:string,pipeline:{id:{value:{}},iid:{value:{}},project_id:{value:{}},sha:{value:{}},ref:{value:{}},status:{value:{}},source:{value:{}},created_at:{value:{}},updated_at:{value:{}},web_url:{value:{}},user:{value:{}}},pipelines:{id:{value:{}},iid:{value:{}},project_id:{value:{}},sha:{value:{}},ref:{value:{}},status:{value:{}},source:{value:{}},created_at:{value:{}},updated_at:{value:{}},web_url:{value:{}},user:{value:{}}},versions:{id:{value:{}},version:{value:{}},created_at:{value:{}},tags:{value:{}},pipeline:{value:{}}}}]},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/packages',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'exclude_subgroups',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'package_type',type:'string'},{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'include_versionless',type:'string'},{name:'status',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "variables": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/variables',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{id:string},data:{key:string,value:string,protected:string,masked_and_hidden:string,masked:string,raw:string,variable_type:string,environment_scope:string,description:string},clientOptions:any}): Promise<[{code:201,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:400}]> => handler.apply({method:'post',url:'api/v4/groups/:id/variables',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{key:'string',value:'string',protected:'string',masked_and_hidden:'string',masked:'string',raw:'string',variable_type:'string',environment_scope:'string',description:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{id:string,key:string},clientOptions:any}): Promise<[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/variables/:key',resource:'v4',variable:[{name:'id',type:'string'},{name:'key',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{id:string,key:string},data:{value:string,protected:string,masked:string,raw:string,variable_type:string,environment_scope:string,description:string},clientOptions:any}): Promise<[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:400},{code:404}]> => handler.apply({method:'put',url:'api/v4/groups/:id/variables/:key',resource:'v4',variable:[{name:'id',type:'string'},{name:'key',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{value:'string',protected:'string',masked:'string',raw:'string',variable_type:'string',environment_scope:'string',description:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,key:string},clientOptions:any}): Promise<[{code:204,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/variables/:key',resource:'v4',variable:[{name:'id',type:'string'},{name:'key',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "invitations": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{access_level:number,email:[string,string],user_id:[string,string],expires_at:Date,invite_source:string},clientOptions:any}): Promise<[{code:201,data:{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/invitations',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{access_level:'number',email:['string','string'],user_id:['string','string'],expires_at:'dateTime',invite_source:'invitations-api'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string,query:string},clientOptions:any}): Promise<[{code:200,data:[{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string},{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/invitations',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'query',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{id:string,email:string},data:{access_level:number,expires_at:Date},clientOptions:any}): Promise<[{code:200,data:{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}}]> => handler.apply({method:'put',url:'api/v4/groups/:id/invitations/:email',resource:'v4',variable:[{name:'id',type:'string'},{name:'email',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{access_level:'number',expires_at:'dateTime'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,email:string},clientOptions:any}): Promise<[{code:204},{code:403},{code:404},{code:409}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/invitations/:email',resource:'v4',variable:[{name:'id',type:'string'},{name:'email',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "-": {
    "packages": {
      "maven": {
        "*path": {
          getOne: ({params,query,clientOptions}: {params:{id:string,file_name:string},query:{path:string},clientOptions:any}): Promise<[{code:200},{code:302},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/maven/*path/:file_name',resource:'packages',variable:[{name:'id',type:'string'},{name:'file_name',type:'string'}],headers:{},query:[{name:'path',type:'string'}],data:null}, [client, { params, query, clientOptions}])
        }
      },
      "debian": {
        "dists": {
          "*distribution": {
            "Release.gpg": {
              get: ({params,query,clientOptions}: {params:{id:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/Release.gpg',resource:'dists',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
            },
            "Release": {
              get: ({params,query,clientOptions}: {params:{id:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/Release',resource:'dists',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
            },
            "InRelease": {
              get: ({params,query,clientOptions}: {params:{id:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/InRelease',resource:'dists',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
            },
            "debian-installer": {
              "binary-{{architecture}}": {
                "Packages": {
                  get: ({params,query,clientOptions}: {params:{id:string,component:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/debian-installer/binary-{{architecture}}/Packages',resource:'debian-installer',variable:[{name:'id',type:'string'},{name:'component',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
                },
                "by-hash": {
                  "SHA256": {
                    getOne: ({params,query,clientOptions}: {params:{id:string,component:string,file_sha256:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/debian-installer/binary-{{architecture}}/by-hash/SHA256/:file_sha256',resource:'binary-{{architecture}}',variable:[{name:'id',type:'string'},{name:'component',type:'string'},{name:'file_sha256',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
                  }
                }
              }
            },
            "source": {
              "Sources": {
                get: ({params,query,clientOptions}: {params:{id:string,component:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/source/Sources',resource:'*distribution',variable:[{name:'id',type:'string'},{name:'component',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
              },
              "by-hash": {
                "SHA256": {
                  getOne: ({params,query,clientOptions}: {params:{id:string,component:string,file_sha256:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/source/by-hash/SHA256/:file_sha256',resource:'source',variable:[{name:'id',type:'string'},{name:'component',type:'string'},{name:'file_sha256',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
                }
              }
            },
            "binary-{{architecture}}": {
              "Packages": {
                get: ({params,query,clientOptions}: {params:{id:string,component:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/binary-{{architecture}}/Packages',resource:'*distribution',variable:[{name:'id',type:'string'},{name:'component',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
              },
              "by-hash": {
                "SHA256": {
                  getOne: ({params,query,clientOptions}: {params:{id:string,component:string,file_sha256:string},query:{distribution:string},clientOptions:any}): Promise<[{code:200},{code:202},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/binary-{{architecture}}/by-hash/SHA256/:file_sha256',resource:'binary-{{architecture}}',variable:[{name:'id',type:'string'},{name:'component',type:'string'},{name:'file_sha256',type:'string'}],headers:{},query:[{name:'distribution',type:'string'}],data:null}, [client, { params, query, clientOptions}])
                }
              }
            }
          }
        },
        "pool": {
          getOne: ({params,clientOptions}: {params:{id:string,project_id:string,distribution:string,letter:string,package_name:string,package_version:string,file_name:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/pool/:distribution/:project_id/:letter/:package_name/:package_version/:file_name',resource:'packages',variable:[{name:'id',type:'string'},{name:'project_id',type:'string'},{name:'distribution',type:'string'},{name:'letter',type:'string'},{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'file_name',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
        }
      },
      "npm": {
        "-": {
          "package": {
            "*package_name": {
              "dist-tags": {
                get: ({params,query,clientOptions}: {params:{id:string},query:{package_name:string},clientOptions:any}): Promise<[{code:200,data:{dist_tags:any}},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags',resource:'package',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'package_name',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
                put: ({params,data,clientOptions}: {params:{id:string,tag:string},data:{package_name:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags/:tag',resource:'package',variable:[{name:'id',type:'string'},{name:'tag',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{package_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
                delete: ({params,query,clientOptions}: {params:{id:string,tag:string},query:{package_name:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags/:tag',resource:'package',variable:[{name:'id',type:'string'},{name:'tag',type:'string'}],headers:{},query:[{name:'package_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
              }
            }
          },
          "npm": {
            "v1": {
              "security": {
                "advisories": {
                  "bulk": {
                    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200},{code:307},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/groups/:id/-/packages/npm/-/npm/v1/security/advisories/bulk',resource:'security',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
                  }
                },
                "audits": {
                  "quick": {
                    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200},{code:307},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/groups/:id/-/packages/npm/-/npm/v1/security/audits/quick',resource:'security',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
                  }
                }
              }
            }
          }
        },
        "*package_name": {
          get: ({params,query,clientOptions}: {params:{id:string},query:{package_name:string},clientOptions:any}): Promise<[{code:200,data:{name:string,versions:any,'dist-tags':any}},{code:302},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/npm/*package_name',resource:'packages',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'package_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
        }
      },
      "nuget": {
        "index": {
          get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{version:string,resources:[object,object]}},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/index',resource:'packages',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
        },
        "symbolfiles": {
          "*file_name": {
            "*signature": {
              "*same_file_name": {
                get: ({params,query,clientOptions}: {params:{id:string},query:{file_name:string,signature:string,same_file_name:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name',resource:'*file_name',variable:[{name:'id',type:'string'}],headers:{Symbolchecksum:'<string>'},query:[{name:'file_name',type:'string'},{name:'signature',type:'string'},{name:'same_file_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
              }
            }
          }
        },
        "v2": {
          get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/v2',resource:'packages',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
          "$metadata": {
            get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/v2/$metadata',resource:'nuget',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
          }
        },
        "metadata": {
          "*package_name": {
            "index": {
              get: ({params,query,clientOptions}: {params:{id:string},query:{package_name:string},clientOptions:any}): Promise<[{code:200,data:{count:number,items:[{'@id':string,lower:string,upper:string,count:number,items:[{value:{}},{value:{}}]},{'@id':string,lower:string,upper:string,count:number,items:[{value:{}},{value:{}}]}]}},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/metadata/*package_name/index',resource:'metadata',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'package_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
            },
            "*package_version": {
              get: ({params,query,clientOptions}: {params:{id:string},query:{package_name:string,package_version:string},clientOptions:any}): Promise<[{code:200,data:{'@id':string,packageContent:string,catalogEntry:{'@id':string,dependencyGroups:[{value:{}},{value:{}}],id:string,version:string,tags:string,packageContent:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string,published:string}}},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/metadata/*package_name/*package_version',resource:'metadata',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'package_name',type:'string'},{name:'package_version',type:'string'}],data:null}, [client, { params, query, clientOptions}])
            }
          }
        },
        "query": {
          get: ({params,query,clientOptions}: {params:{id:string},query:{q:string,skip:string,take:string,prerelease:string},clientOptions:any}): Promise<[{code:200,data:{totalHits:number,data:[{'@type':string,id:string,title:string,totalDownloads:number,verified:boolean,version:string,versions:{value:{}},tags:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string},{'@type':string,id:string,title:string,totalDownloads:number,verified:boolean,version:string,versions:{value:{}},tags:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string}]}},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/query',resource:'packages',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'q',type:'string'},{name:'skip',type:'string'},{name:'take',type:'string'},{name:'prerelease',type:'string'}],data:null}, [client, { params, query, clientOptions}])
        }
      },
      "pypi": {
        "files": {
          "*file_identifier": {
            get: ({params,query,clientOptions}: {params:{id:string,sha256:string},query:{file_identifier:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/pypi/files/:sha256/*file_identifier',resource:'pypi',variable:[{name:'id',type:'string'},{name:'sha256',type:'string'}],headers:{},query:[{name:'file_identifier',type:'string'}],data:null}, [client, { params, query, clientOptions}])
          }
        },
        "simple": {
          get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/pypi/simple',resource:'packages',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
          "*package_name": {
            get: ({params,query,clientOptions}: {params:{id:string},query:{package_name:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/pypi/simple/*package_name',resource:'pypi',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'package_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
          }
        }
      }
    },
    "debian_distributions": {
      post: ({params,data,clientOptions}: {params:{id:string},data:{codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]},clientOptions:any}): Promise<[{code:201,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/groups/:id/-/debian_distributions',resource:'groups',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{codename:'string',suite:'string',origin:'string',label:'string',version:'string',description:'string',valid_time_duration_seconds:'number',components:['string','string'],architectures:['string','string']},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
      get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:string,components:string,architectures:string},clientOptions:any}): Promise<[{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/debian_distributions',resource:'groups',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'codename',type:'string'},{name:'suite',type:'string'},{name:'origin',type:'string'},{name:'label',type:'string'},{name:'version',type:'string'},{name:'description',type:'string'},{name:'valid_time_duration_seconds',type:'string'},{name:'components',type:'string'},{name:'architectures',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
      getOne: ({params,clientOptions}: {params:{id:string,codename:string},clientOptions:any}): Promise<[{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/debian_distributions/:codename',resource:'groups',variable:[{name:'id',type:'string'},{name:'codename',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
      put: ({params,data,clientOptions}: {params:{id:string,codename:string},data:{suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]},clientOptions:any}): Promise<[{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/groups/:id/-/debian_distributions/:codename',resource:'groups',variable:[{name:'id',type:'string'},{name:'codename',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{suite:'string',origin:'string',label:'string',version:'string',description:'string',valid_time_duration_seconds:'number',components:['string','string'],architectures:['string','string']},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
      delete: ({params,query,clientOptions}: {params:{id:string,codename:string},query:{suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:string,components:string,architectures:string},clientOptions:any}): Promise<[{code:202},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/-/debian_distributions/:codename',resource:'groups',variable:[{name:'id',type:'string'},{name:'codename',type:'string'}],headers:{},query:[{name:'suite',type:'string'},{name:'origin',type:'string'},{name:'label',type:'string'},{name:'version',type:'string'},{name:'description',type:'string'},{name:'valid_time_duration_seconds',type:'string'},{name:'components',type:'string'},{name:'architectures',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
      "key.asc": {
        get: ({params,clientOptions}: {params:{id:string,codename:string},clientOptions:any}): Promise<[{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/-/debian_distributions/:codename/key.asc',resource:'-',variable:[{name:'id',type:'string'},{name:'codename',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
      }
    }
  },
  "members": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{query:string,user_ids:string,skip_users:string,show_seat_info:string,with_saml_identity:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,access_level:string,created_at:string,created_by:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},expires_at:string,group_saml_identity:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:{value:{}},group_id:{value:{}},name:{value:{}},description:{value:{}},base_access_level:{value:{}},admin_cicd_variables:{value:{}},admin_compliance_framework:{value:{}},admin_group_member:{value:{}},admin_merge_request:{value:{}},admin_push_rules:{value:{}},admin_terraform_state:{value:{}},admin_vulnerability:{value:{}},admin_web_hook:{value:{}},archive_project:{value:{}},manage_deploy_tokens:{value:{}},manage_group_access_tokens:{value:{}},manage_merge_request_settings:{value:{}},manage_project_access_tokens:{value:{}},manage_security_policy_link:{value:{}},read_code:{value:{}},read_dependency:{value:{}},read_vulnerability:{value:{}},remove_group:{value:{}},remove_project:{value:{}}}},{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,access_level:string,created_at:string,created_by:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},expires_at:string,group_saml_identity:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:{value:{}},group_id:{value:{}},name:{value:{}},description:{value:{}},base_access_level:{value:{}},admin_cicd_variables:{value:{}},admin_compliance_framework:{value:{}},admin_group_member:{value:{}},admin_merge_request:{value:{}},admin_push_rules:{value:{}},admin_terraform_state:{value:{}},admin_vulnerability:{value:{}},admin_web_hook:{value:{}},archive_project:{value:{}},manage_deploy_tokens:{value:{}},manage_group_access_tokens:{value:{}},manage_merge_request_settings:{value:{}},manage_project_access_tokens:{value:{}},manage_security_policy_link:{value:{}},read_code:{value:{}},read_dependency:{value:{}},read_vulnerability:{value:{}},remove_group:{value:{}},remove_project:{value:{}}}}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/members',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'query',type:'string'},{name:'user_ids',type:'string'},{name:'skip_users',type:'string'},{name:'show_seat_info',type:'string'},{name:'with_saml_identity',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{id:string},data:{access_level:number,user_id:number,username:string,expires_at:Date,invite_source:string},clientOptions:any}): Promise<[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/members',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{access_level:'number',user_id:'number',username:'string',expires_at:'dateTime',invite_source:'members-api'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    "all": {
      get: ({params,query,clientOptions}: {params:{id:string},query:{query:string,user_ids:string,show_seat_info:string,state:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,access_level:string,created_at:string,created_by:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},expires_at:string,group_saml_identity:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:{value:{}},group_id:{value:{}},name:{value:{}},description:{value:{}},base_access_level:{value:{}},admin_cicd_variables:{value:{}},admin_compliance_framework:{value:{}},admin_group_member:{value:{}},admin_merge_request:{value:{}},admin_push_rules:{value:{}},admin_terraform_state:{value:{}},admin_vulnerability:{value:{}},admin_web_hook:{value:{}},archive_project:{value:{}},manage_deploy_tokens:{value:{}},manage_group_access_tokens:{value:{}},manage_merge_request_settings:{value:{}},manage_project_access_tokens:{value:{}},manage_security_policy_link:{value:{}},read_code:{value:{}},read_dependency:{value:{}},read_vulnerability:{value:{}},remove_group:{value:{}},remove_project:{value:{}}}},{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,access_level:string,created_at:string,created_by:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},expires_at:string,group_saml_identity:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:{value:{}},group_id:{value:{}},name:{value:{}},description:{value:{}},base_access_level:{value:{}},admin_cicd_variables:{value:{}},admin_compliance_framework:{value:{}},admin_group_member:{value:{}},admin_merge_request:{value:{}},admin_push_rules:{value:{}},admin_terraform_state:{value:{}},admin_vulnerability:{value:{}},admin_web_hook:{value:{}},archive_project:{value:{}},manage_deploy_tokens:{value:{}},manage_group_access_tokens:{value:{}},manage_merge_request_settings:{value:{}},manage_project_access_tokens:{value:{}},manage_security_policy_link:{value:{}},read_code:{value:{}},read_dependency:{value:{}},read_vulnerability:{value:{}},remove_group:{value:{}},remove_project:{value:{}}}}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/members/all',resource:'groups',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'query',type:'string'},{name:'user_ids',type:'string'},{name:'show_seat_info',type:'string'},{name:'state',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
      getOne: ({params,clientOptions}: {params:{id:string,user_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/members/all/:user_id',resource:'groups',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
    },
    getOne: ({params,clientOptions}: {params:{id:string,user_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/members/:user_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{id:string,user_id:string},data:{access_level:number,expires_at:Date,member_role_id:number},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]> => handler.apply({method:'put',url:'api/v4/groups/:id/members/:user_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{access_level:'number',expires_at:'dateTime',member_role_id:'number'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,query,clientOptions}: {params:{id:string,user_id:string},query:{skip_subresources:string,unassign_issuables:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/members/:user_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{},query:[{name:'skip_subresources',type:'string'},{name:'unassign_issuables',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    "override": {
      post: ({params,clientOptions}: {params:{id:string,user_id:string},clientOptions:any}): Promise<[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/members/:user_id/override',resource:'groups',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
      delete: ({params,clientOptions}: {params:{id:string,user_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/members/:user_id/override',resource:'groups',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
    },
    "state": {
      put: ({params,data,clientOptions}: {params:{id:string,user_id:string},data:{state:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'put',url:'api/v4/groups/:id/members/:user_id/state',resource:'groups',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{state:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    },
    "approve": {
      put: ({params,clientOptions}: {params:{id:string,member_id:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'put',url:'api/v4/groups/:id/members/:member_id/approve',resource:'groups',variable:[{name:'id',type:'string'},{name:'member_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
    },
    "approve_all": {
      post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/groups/:id/members/approve_all',resource:'groups',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  "pending_members": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'get',url:'api/v4/groups/:id/pending_members',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "billable_members": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string,search:string,sort:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/billable_members',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'search',type:'string'},{name:'sort',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,user_id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/billable_members/:user_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
    "memberships": {
      get: ({params,query,clientOptions}: {params:{id:string,user_id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:string,source_id:string,source_full_name:string,source_members_url:string,created_at:string,expires_at:string,access_level:{string_value:string,number_value:string,custom_role:string}}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/billable_members/:user_id/memberships',resource:'groups',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    },
    "indirect": {
      get: ({params,query,clientOptions}: {params:{id:string,user_id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:string,source_id:string,source_full_name:string,source_members_url:string,created_at:string,expires_at:string,access_level:{string_value:string,number_value:string,custom_role:string}}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/billable_members/:user_id/indirect',resource:'groups',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    }
  },
  "merge_requests": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{author_id:string,author_username:string,assignee_id:string,assignee_username:string,reviewer_username:string,labels:string,milestone:string,my_reaction_emoji:string,reviewer_id:string,state:string,order_by:string,sort:string,with_labels_details:string,with_merge_status_recheck:string,created_after:string,created_before:string,updated_after:string,updated_before:string,view:string,scope:string,source_branch:string,source_project_id:string,target_branch:string,search:string,in:string,wip:string,not:string,deployed_before:string,deployed_after:string,environment:string,approved:string,merge_user_id:string,merge_user_username:string,approver_ids:string,approved_by_ids:string,approved_by_usernames:string,page:string,per_page:string,non_archived:string},clientOptions:any}): Promise<[{code:200,data:{id:number,iid:number,project_id:number,title:string,description:string,state:string,created_at:Date,updated_at:Date,merged_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},merge_user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},merged_at:string,closed_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},closed_at:string,title_html:string,description_html:string,target_branch:string,source_branch:string,user_notes_count:string,upvotes:string,downvotes:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},assignees:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},assignee:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},reviewers:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},source_project_id:string,target_project_id:string,labels:string,draft:string,imported:string,imported_from:string,work_in_progress:string,milestone:{id:string,iid:string,project_id:string,group_id:string,title:string,description:string,state:string,created_at:string,updated_at:string,due_date:string,start_date:string,expired:string,web_url:string},merge_when_pipeline_succeeds:string,merge_status:string,detailed_merge_status:string,sha:string,merge_commit_sha:string,squash_commit_sha:string,discussion_locked:string,should_remove_source_branch:string,force_remove_source_branch:string,prepared_at:string,allow_collaboration:string,allow_maintainer_to_push:string,reference:string,references:{short:string,relative:string,full:string},web_url:string,time_stats:{time_estimate:number,total_time_spent:number,human_time_estimate:string,human_total_time_spent:string},squash:string,squash_on_merge:string,task_completion_status:string,has_conflicts:string,blocking_discussions_resolved:string,approvals_before_merge:string}},{code:401},{code:404},{code:422}]> => handler.apply({method:'get',url:'api/v4/groups/:id/merge_requests',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'author_id',type:'string'},{name:'author_username',type:'string'},{name:'assignee_id',type:'string'},{name:'assignee_username',type:'string'},{name:'reviewer_username',type:'string'},{name:'labels',type:'string'},{name:'milestone',type:'string'},{name:'my_reaction_emoji',type:'string'},{name:'reviewer_id',type:'string'},{name:'state',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'with_labels_details',type:'string'},{name:'with_merge_status_recheck',type:'string'},{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'updated_after',type:'string'},{name:'updated_before',type:'string'},{name:'view',type:'string'},{name:'scope',type:'string'},{name:'source_branch',type:'string'},{name:'source_project_id',type:'string'},{name:'target_branch',type:'string'},{name:'search',type:'string'},{name:'in',type:'string'},{name:'wip',type:'string'},{name:'not[author_id]',type:'string'},{name:'not[author_username]',type:'string'},{name:'not[assignee_id]',type:'string'},{name:'not[assignee_username]',type:'string'},{name:'not[reviewer_username]',type:'string'},{name:'not[labels]',type:'string'},{name:'not[milestone]',type:'string'},{name:'not[my_reaction_emoji]',type:'string'},{name:'not[reviewer_id]',type:'string'},{name:'deployed_before',type:'string'},{name:'deployed_after',type:'string'},{name:'environment',type:'string'},{name:'approved',type:'string'},{name:'merge_user_id',type:'string'},{name:'merge_user_username',type:'string'},{name:'approver_ids',type:'string'},{name:'approved_by_ids',type:'string'},{name:'approved_by_usernames',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'non_archived',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "releases": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{sort:string,simple:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{name:string,tag_name:string,description:string,created_at:Date,released_at:Date,upcoming_release:boolean,description_html:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},commit:{id:{value:{}},short_id:{value:{}},created_at:{value:{}},parent_ids:{value:{}},title:{value:{}},message:{value:{}},author_name:{value:{}},author_email:{value:{}},authored_date:{value:{}},committer_name:{value:{}},committer_email:{value:{}},committed_date:{value:{}},trailers:{value:{}},extended_trailers:{value:{}},web_url:{value:{}}},milestones:{id:{value:{}},iid:{value:{}},project_id:{value:{}},group_id:{value:{}},title:{value:{}},description:{value:{}},state:{value:{}},created_at:{value:{}},updated_at:{value:{}},due_date:{value:{}},start_date:{value:{}},expired:{value:{}},web_url:{value:{}},issue_stats:{value:{}}},commit_path:string,tag_path:string,assets:{count:number,sources:{value:{}},links:{value:{}}},evidences:{sha:{value:{}},filepath:{value:{}},collected_at:{value:{}}},_links:{closed_issues_url:string,closed_merge_requests_url:string,edit_url:string,merged_merge_requests_url:string,opened_issues_url:string,opened_merge_requests_url:string,self:string}},{name:string,tag_name:string,description:string,created_at:Date,released_at:Date,upcoming_release:boolean,description_html:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},commit:{id:{value:{}},short_id:{value:{}},created_at:{value:{}},parent_ids:{value:{}},title:{value:{}},message:{value:{}},author_name:{value:{}},author_email:{value:{}},authored_date:{value:{}},committer_name:{value:{}},committer_email:{value:{}},committed_date:{value:{}},trailers:{value:{}},extended_trailers:{value:{}},web_url:{value:{}}},milestones:{id:{value:{}},iid:{value:{}},project_id:{value:{}},group_id:{value:{}},title:{value:{}},description:{value:{}},state:{value:{}},created_at:{value:{}},updated_at:{value:{}},due_date:{value:{}},start_date:{value:{}},expired:{value:{}},web_url:{value:{}},issue_stats:{value:{}}},commit_path:string,tag_path:string,assets:{count:number,sources:{value:{}},links:{value:{}}},evidences:{sha:{value:{}},filepath:{value:{}},collected_at:{value:{}}},_links:{closed_issues_url:string,closed_merge_requests_url:string,edit_url:string,merged_merge_requests_url:string,opened_issues_url:string,opened_merge_requests_url:string,self:string}}]},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/releases',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'sort',type:'string'},{name:'simple',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "access_tokens": {
    get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,access_level:number},{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,access_level:number}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/access_tokens',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{id:string},data:{name:string,scopes:[string,string],expires_at:Date,access_level:40},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,access_level:number,token:string}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/access_tokens',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',scopes:['string','string'],expires_at:'2025-05-23T21:13:09.000Z',access_level:40},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{id:string,token_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,access_level:number}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/access_tokens/:token_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,token_id:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:404}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/access_tokens/:token_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
    "rotate": {
      post: ({params,data,clientOptions}: {params:{id:string,token_id:string},data:{expires_at:Date},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,access_level:number,token:string}}]> => handler.apply({method:'post',url:'api/v4/groups/:id/access_tokens/:token_id/rotate',resource:'groups',variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{expires_at:'date'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    }
  },
  "wikis": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{with_content:string},clientOptions:any}): Promise<[{code:200,data:[{format:string,slug:string,title:string},{format:string,slug:string,title:string}]},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/wikis',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'with_content',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{id:string},data:{title:string,content:string,front_matter:{title:string},format:string},clientOptions:any}): Promise<[{code:201,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:any}},{code:400},{code:404},{code:422}]> => handler.apply({method:'post',url:'api/v4/groups/:id/wikis',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{title:'string',content:'string',front_matter:{title:'string'},format:'markdown'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    getOne: ({params,query,clientOptions}: {params:{slug:string,id:string},query:{version:string,render_html:string},clientOptions:any}): Promise<[{code:200,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:any}},{code:404}]> => handler.apply({method:'get',url:'api/v4/groups/:id/wikis/:slug',resource:'v4',variable:[{name:'slug',type:'string'},{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'version',type:'string'},{name:'render_html',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{id:string,slug:string},data:{title:string,front_matter:{title:string},content:string,format:string},clientOptions:any}): Promise<[{code:200,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:any}},{code:400},{code:404},{code:422}]> => handler.apply({method:'put',url:'api/v4/groups/:id/wikis/:slug',resource:'v4',variable:[{name:'id',type:'string'},{name:'slug',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{title:'string',front_matter:{title:'string'},content:'string',format:'markdown'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{slug:string,id:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:404}]> => handler.apply({method:'delete',url:'api/v4/groups/:id/wikis/:slug',resource:'v4',variable:[{name:'slug',type:'string'},{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
    "attachments": {
      post: ({params,data,clientOptions}: {params:{id:string},data:{file:string,branch:string},clientOptions:any}): Promise<[{code:201,data:{file_name:string,file_path:string,branch:string,link:{url:string,markdown:string}}},{code:404}]> => handler.apply({method:'post',url:'api/v4/groups/:id/wikis/attachments',resource:'groups',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{file:'binary',branch:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    }
  },
  "audit_events": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{created_after:string,created_before:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string},{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string}]}]> => handler.apply({method:'get',url:'api/v4/groups/:id/audit_events',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{audit_event_id:string,id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string}}]> => handler.apply({method:'get',url:'api/v4/groups/:id/audit_events/:audit_event_id',resource:'v4',variable:[{name:'audit_event_id',type:'string'},{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "import": {
    post: ({data,clientOptions}: {data:{path:string,name:string,parent_id:number,organization_id:number},clientOptions:any}): Promise<[{code:202},{code:400},{code:401},{code:403},{code:503}]> => handler.apply({method:'post',url:'api/v4/groups/import',resource:'v4',variable:[],headers:{'Content-Type':'multipart/form-data'},query:[],data:{mode:'formdata',formdata:{path:'string',name:'string',parent_id:'number',organization_id:'number'}}}, [client, {data, clientOptions}]),
    "authorize": {
      post: ({clientOptions}: {clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/groups/import/authorize',resource:'groups',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
    }
  }
})