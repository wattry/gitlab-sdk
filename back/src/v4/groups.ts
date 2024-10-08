/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Groups {
    get: ({ query }: {
        query?: {
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
    }, options?: {}) => Promise<{
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
                    value: {};
                };
                value: {
                    value: {};
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
                    value: {};
                };
                group_access: {
                    value: {};
                };
                provider: {
                    value: {};
                };
                filter: {
                    value: {};
                };
            };
            saml_group_links: {
                name: {
                    value: {};
                };
                access_level: {
                    value: {};
                };
                member_role_id: {
                    value: {};
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
                    value: {};
                };
                value: {
                    value: {};
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
                    value: {};
                };
                group_access: {
                    value: {};
                };
                provider: {
                    value: {};
                };
                filter: {
                    value: {};
                };
            };
            saml_group_links: {
                name: {
                    value: {};
                };
                access_level: {
                    value: {};
                };
                member_role_id: {
                    value: {};
                };
            };
            file_template_project_id: string;
            marked_for_deletion_on: string;
            wiki_access_level: string;
            repository_storage: string;
            duo_features_enabled: string;
            lock_duo_features_enabled: string;
        }];
    }>;
    post: ({ data }: {
        data: {
            name: string;
            path: string;
            parent_id: number;
            organization_id: {};
            description: string;
            visibility: string;
            avatar: ArrayBuffer;
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
    }, options?: {}) => Promise<{
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
    }>;
    put: ({ params, data }: {
        params: {
            id: string;
        };
        data: {
            name: string;
            path: string;
            description: string;
            visibility: string;
            avatar: ArrayBuffer;
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
    }, options?: {}) => Promise<{
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
    }>;
    getOne: ({ params, query }: {
        params: {
            id: string;
        };
        query?: {
            with_custom_attributes: string;
            with_projects: string;
        };
    }, options?: {}) => Promise<{
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
                created_at: string;
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
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    nickname: {
                        value: {};
                    };
                    html_url: {
                        value: {};
                    };
                    source_url: {
                        value: {};
                    };
                };
                avatar_url: string;
                star_count: number;
                last_activity_at: string;
                namespace: {
                    id: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    kind: {
                        value: {};
                    };
                    full_path: {
                        value: {};
                    };
                    parent_id: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                custom_attributes: {
                    key: {
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                resolve_outstringd_diff_discussions: boolean;
                container_expiration_policy: {
                    cadence: {
                        value: {};
                    };
                    enabled: {
                        value: {};
                    };
                    keep_n: {
                        value: {};
                    };
                    older_than: {
                        value: {};
                    };
                    name_regex: {
                        value: {};
                    };
                    name_regex_keep: {
                        value: {};
                    };
                    next_run_at: {
                        value: {};
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
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    name_with_namespace: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    path_with_namespace: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    default_branch: {
                        value: {};
                    };
                    tag_list: {
                        value: {};
                    };
                    topics: {
                        value: {};
                    };
                    ssh_url_to_repo: {
                        value: {};
                    };
                    http_url_to_repo: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    readme_url: {
                        value: {};
                    };
                    forks_count: {
                        value: {};
                    };
                    license_url: {
                        value: {};
                    };
                    license: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    star_count: {
                        value: {};
                    };
                    last_activity_at: {
                        value: {};
                    };
                    namespace: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    repository_storage: {
                        value: {};
                    };
                };
                mr_default_target_self: boolean;
                import_url: string;
                import_type: string;
                import_status: string;
                import_error: string;
                open_issues_count: number;
                description_html: string;
                upstringd_at: string;
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
                        value: {};
                    };
                    storage_size: {
                        value: {};
                    };
                    repository_size: {
                        value: {};
                    };
                    wiki_size: {
                        value: {};
                    };
                    lfs_objects_size: {
                        value: {};
                    };
                    job_artifacts_size: {
                        value: {};
                    };
                    pipeline_artifacts_size: {
                        value: {};
                    };
                    packages_size: {
                        value: {};
                    };
                    snippets_size: {
                        value: {};
                    };
                    uploads_size: {
                        value: {};
                    };
                    container_registry_size: {
                        value: {};
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
                created_at: string;
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
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    nickname: {
                        value: {};
                    };
                    html_url: {
                        value: {};
                    };
                    source_url: {
                        value: {};
                    };
                };
                avatar_url: string;
                star_count: number;
                last_activity_at: string;
                namespace: {
                    id: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    kind: {
                        value: {};
                    };
                    full_path: {
                        value: {};
                    };
                    parent_id: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                custom_attributes: {
                    key: {
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                resolve_outstringd_diff_discussions: boolean;
                container_expiration_policy: {
                    cadence: {
                        value: {};
                    };
                    enabled: {
                        value: {};
                    };
                    keep_n: {
                        value: {};
                    };
                    older_than: {
                        value: {};
                    };
                    name_regex: {
                        value: {};
                    };
                    name_regex_keep: {
                        value: {};
                    };
                    next_run_at: {
                        value: {};
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
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    name_with_namespace: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    path_with_namespace: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    default_branch: {
                        value: {};
                    };
                    tag_list: {
                        value: {};
                    };
                    topics: {
                        value: {};
                    };
                    ssh_url_to_repo: {
                        value: {};
                    };
                    http_url_to_repo: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    readme_url: {
                        value: {};
                    };
                    forks_count: {
                        value: {};
                    };
                    license_url: {
                        value: {};
                    };
                    license: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    star_count: {
                        value: {};
                    };
                    last_activity_at: {
                        value: {};
                    };
                    namespace: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    repository_storage: {
                        value: {};
                    };
                };
                mr_default_target_self: boolean;
                import_url: string;
                import_type: string;
                import_status: string;
                import_error: string;
                open_issues_count: number;
                description_html: string;
                upstringd_at: string;
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
                        value: {};
                    };
                    storage_size: {
                        value: {};
                    };
                    repository_size: {
                        value: {};
                    };
                    wiki_size: {
                        value: {};
                    };
                    lfs_objects_size: {
                        value: {};
                    };
                    job_artifacts_size: {
                        value: {};
                    };
                    pipeline_artifacts_size: {
                        value: {};
                    };
                    packages_size: {
                        value: {};
                    };
                    snippets_size: {
                        value: {};
                    };
                    uploads_size: {
                        value: {};
                    };
                    container_registry_size: {
                        value: {};
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
    }>;
    delete: ({ params }: {
        params: {
            id: string;
        };
    }, options?: {}) => Promise<{
        code: 204;
    }>;
    access_requests: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        post: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                user_id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        }>;
        approve: {
            put: ({ params, data }: {
                params: {
                    id: string;
                    user_id: string;
                };
                data: {
                    access_level: 30;
                };
            }, options?: {}) => Promise<{
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
            }>;
        };
    };
    badges: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
                name: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                link_url: string;
                image_url: string;
                name: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        render: {
            get: ({ params, query }: {
                params: {
                    id: string;
                };
                query?: {
                    link_url: string;
                    image_url: string;
                };
            }, options?: {}) => Promise<{
                code: 200;
                data: {
                    name: string;
                    link_url: string;
                    image_url: string;
                    rendered_link_url: string;
                    rendered_image_url: string;
                };
            }>;
        };
        getOne: ({ params }: {
            params: {
                id: string;
                badge_id: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        put: ({ params, data }: {
            params: {
                id: string;
                badge_id: string;
            };
            data: {
                link_url: string;
                image_url: string;
                name: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                badge_id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        }>;
    };
    custom_attributes: {
        get: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                key: string;
                value: string;
            };
        }>;
        getOne: ({ params }: {
            params: {
                key: string;
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                key: string;
                value: string;
            };
        }>;
        put: ({ params, data }: {
            params: {
                key: string;
                id: string;
            };
            data: {
                value: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
        }>;
        delete: ({ params }: {
            params: {
                key: string;
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        }>;
    };
    projects: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
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
        }, options?: {}) => Promise<{
            code: 200;
            data: [{
                id: number;
                description: string;
                name: string;
                name_with_namespace: string;
                path: string;
                path_with_namespace: string;
                created_at: string;
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
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    nickname: {
                        value: {};
                    };
                    html_url: {
                        value: {};
                    };
                    source_url: {
                        value: {};
                    };
                };
                avatar_url: string;
                star_count: number;
                last_activity_at: string;
                namespace: {
                    id: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    kind: {
                        value: {};
                    };
                    full_path: {
                        value: {};
                    };
                    parent_id: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                custom_attributes: {
                    key: {
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                resolve_outstringd_diff_discussions: boolean;
                container_expiration_policy: {
                    cadence: {
                        value: {};
                    };
                    enabled: {
                        value: {};
                    };
                    keep_n: {
                        value: {};
                    };
                    older_than: {
                        value: {};
                    };
                    name_regex: {
                        value: {};
                    };
                    name_regex_keep: {
                        value: {};
                    };
                    next_run_at: {
                        value: {};
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
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    name_with_namespace: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    path_with_namespace: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    default_branch: {
                        value: {};
                    };
                    tag_list: {
                        value: {};
                    };
                    topics: {
                        value: {};
                    };
                    ssh_url_to_repo: {
                        value: {};
                    };
                    http_url_to_repo: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    readme_url: {
                        value: {};
                    };
                    forks_count: {
                        value: {};
                    };
                    license_url: {
                        value: {};
                    };
                    license: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    star_count: {
                        value: {};
                    };
                    last_activity_at: {
                        value: {};
                    };
                    namespace: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    repository_storage: {
                        value: {};
                    };
                };
                mr_default_target_self: boolean;
                import_url: string;
                import_type: string;
                import_status: string;
                import_error: string;
                open_issues_count: number;
                description_html: string;
                upstringd_at: string;
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
                        value: {};
                    };
                    storage_size: {
                        value: {};
                    };
                    repository_size: {
                        value: {};
                    };
                    wiki_size: {
                        value: {};
                    };
                    lfs_objects_size: {
                        value: {};
                    };
                    job_artifacts_size: {
                        value: {};
                    };
                    pipeline_artifacts_size: {
                        value: {};
                    };
                    packages_size: {
                        value: {};
                    };
                    snippets_size: {
                        value: {};
                    };
                    uploads_size: {
                        value: {};
                    };
                    container_registry_size: {
                        value: {};
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
                created_at: string;
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
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    nickname: {
                        value: {};
                    };
                    html_url: {
                        value: {};
                    };
                    source_url: {
                        value: {};
                    };
                };
                avatar_url: string;
                star_count: number;
                last_activity_at: string;
                namespace: {
                    id: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    kind: {
                        value: {};
                    };
                    full_path: {
                        value: {};
                    };
                    parent_id: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                custom_attributes: {
                    key: {
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                resolve_outstringd_diff_discussions: boolean;
                container_expiration_policy: {
                    cadence: {
                        value: {};
                    };
                    enabled: {
                        value: {};
                    };
                    keep_n: {
                        value: {};
                    };
                    older_than: {
                        value: {};
                    };
                    name_regex: {
                        value: {};
                    };
                    name_regex_keep: {
                        value: {};
                    };
                    next_run_at: {
                        value: {};
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
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    name_with_namespace: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    path_with_namespace: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    default_branch: {
                        value: {};
                    };
                    tag_list: {
                        value: {};
                    };
                    topics: {
                        value: {};
                    };
                    ssh_url_to_repo: {
                        value: {};
                    };
                    http_url_to_repo: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    readme_url: {
                        value: {};
                    };
                    forks_count: {
                        value: {};
                    };
                    license_url: {
                        value: {};
                    };
                    license: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    star_count: {
                        value: {};
                    };
                    last_activity_at: {
                        value: {};
                    };
                    namespace: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    repository_storage: {
                        value: {};
                    };
                };
                mr_default_target_self: boolean;
                import_url: string;
                import_type: string;
                import_status: string;
                import_error: string;
                open_issues_count: number;
                description_html: string;
                upstringd_at: string;
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
                        value: {};
                    };
                    storage_size: {
                        value: {};
                    };
                    repository_size: {
                        value: {};
                    };
                    wiki_size: {
                        value: {};
                    };
                    lfs_objects_size: {
                        value: {};
                    };
                    job_artifacts_size: {
                        value: {};
                    };
                    pipeline_artifacts_size: {
                        value: {};
                    };
                    packages_size: {
                        value: {};
                    };
                    snippets_size: {
                        value: {};
                    };
                    uploads_size: {
                        value: {};
                    };
                    container_registry_size: {
                        value: {};
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
        }>;
        shared: {
            get: ({ params, query }: {
                params: {
                    id: string;
                };
                query?: {
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
            }, options?: {}) => Promise<{
                code: 200;
                data: [{
                    id: number;
                    description: string;
                    name: string;
                    name_with_namespace: string;
                    path: string;
                    path_with_namespace: string;
                    created_at: string;
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
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        nickname: {
                            value: {};
                        };
                        html_url: {
                            value: {};
                        };
                        source_url: {
                            value: {};
                        };
                    };
                    avatar_url: string;
                    star_count: number;
                    last_activity_at: string;
                    namespace: {
                        id: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        kind: {
                            value: {};
                        };
                        full_path: {
                            value: {};
                        };
                        parent_id: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    custom_attributes: {
                        key: {
                            value: {};
                        };
                        value: {
                            value: {};
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
                            value: {};
                        };
                        username: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        state: {
                            value: {};
                        };
                        locked: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        avatar_path: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    resolve_outstringd_diff_discussions: boolean;
                    container_expiration_policy: {
                        cadence: {
                            value: {};
                        };
                        enabled: {
                            value: {};
                        };
                        keep_n: {
                            value: {};
                        };
                        older_than: {
                            value: {};
                        };
                        name_regex: {
                            value: {};
                        };
                        name_regex_keep: {
                            value: {};
                        };
                        next_run_at: {
                            value: {};
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
                            value: {};
                        };
                        description: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        name_with_namespace: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        path_with_namespace: {
                            value: {};
                        };
                        created_at: {
                            value: {};
                        };
                        default_branch: {
                            value: {};
                        };
                        tag_list: {
                            value: {};
                        };
                        topics: {
                            value: {};
                        };
                        ssh_url_to_repo: {
                            value: {};
                        };
                        http_url_to_repo: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                        readme_url: {
                            value: {};
                        };
                        forks_count: {
                            value: {};
                        };
                        license_url: {
                            value: {};
                        };
                        license: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        star_count: {
                            value: {};
                        };
                        last_activity_at: {
                            value: {};
                        };
                        namespace: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        repository_storage: {
                            value: {};
                        };
                    };
                    mr_default_target_self: boolean;
                    import_url: string;
                    import_type: string;
                    import_status: string;
                    import_error: string;
                    open_issues_count: number;
                    description_html: string;
                    upstringd_at: string;
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
                            value: {};
                        };
                        storage_size: {
                            value: {};
                        };
                        repository_size: {
                            value: {};
                        };
                        wiki_size: {
                            value: {};
                        };
                        lfs_objects_size: {
                            value: {};
                        };
                        job_artifacts_size: {
                            value: {};
                        };
                        pipeline_artifacts_size: {
                            value: {};
                        };
                        packages_size: {
                            value: {};
                        };
                        snippets_size: {
                            value: {};
                        };
                        uploads_size: {
                            value: {};
                        };
                        container_registry_size: {
                            value: {};
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
                    created_at: string;
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
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        nickname: {
                            value: {};
                        };
                        html_url: {
                            value: {};
                        };
                        source_url: {
                            value: {};
                        };
                    };
                    avatar_url: string;
                    star_count: number;
                    last_activity_at: string;
                    namespace: {
                        id: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        kind: {
                            value: {};
                        };
                        full_path: {
                            value: {};
                        };
                        parent_id: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    custom_attributes: {
                        key: {
                            value: {};
                        };
                        value: {
                            value: {};
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
                            value: {};
                        };
                        username: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        state: {
                            value: {};
                        };
                        locked: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        avatar_path: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    resolve_outstringd_diff_discussions: boolean;
                    container_expiration_policy: {
                        cadence: {
                            value: {};
                        };
                        enabled: {
                            value: {};
                        };
                        keep_n: {
                            value: {};
                        };
                        older_than: {
                            value: {};
                        };
                        name_regex: {
                            value: {};
                        };
                        name_regex_keep: {
                            value: {};
                        };
                        next_run_at: {
                            value: {};
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
                            value: {};
                        };
                        description: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        name_with_namespace: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        path_with_namespace: {
                            value: {};
                        };
                        created_at: {
                            value: {};
                        };
                        default_branch: {
                            value: {};
                        };
                        tag_list: {
                            value: {};
                        };
                        topics: {
                            value: {};
                        };
                        ssh_url_to_repo: {
                            value: {};
                        };
                        http_url_to_repo: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                        readme_url: {
                            value: {};
                        };
                        forks_count: {
                            value: {};
                        };
                        license_url: {
                            value: {};
                        };
                        license: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        star_count: {
                            value: {};
                        };
                        last_activity_at: {
                            value: {};
                        };
                        namespace: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        repository_storage: {
                            value: {};
                        };
                    };
                    mr_default_target_self: boolean;
                    import_url: string;
                    import_type: string;
                    import_status: string;
                    import_error: string;
                    open_issues_count: number;
                    description_html: string;
                    upstringd_at: string;
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
                            value: {};
                        };
                        storage_size: {
                            value: {};
                        };
                        repository_size: {
                            value: {};
                        };
                        wiki_size: {
                            value: {};
                        };
                        lfs_objects_size: {
                            value: {};
                        };
                        job_artifacts_size: {
                            value: {};
                        };
                        pipeline_artifacts_size: {
                            value: {};
                        };
                        packages_size: {
                            value: {};
                        };
                        snippets_size: {
                            value: {};
                        };
                        uploads_size: {
                            value: {};
                        };
                        container_registry_size: {
                            value: {};
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
            }>;
        };
        post: ({ params }: {
            params: {
                id: string;
                project_id: string;
            };
        }, options?: {}) => Promise<{
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
                    created_at: string;
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
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        nickname: {
                            value: {};
                        };
                        html_url: {
                            value: {};
                        };
                        source_url: {
                            value: {};
                        };
                    };
                    avatar_url: string;
                    star_count: number;
                    last_activity_at: string;
                    namespace: {
                        id: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        kind: {
                            value: {};
                        };
                        full_path: {
                            value: {};
                        };
                        parent_id: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    custom_attributes: {
                        key: {
                            value: {};
                        };
                        value: {
                            value: {};
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
                            value: {};
                        };
                        username: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        state: {
                            value: {};
                        };
                        locked: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        avatar_path: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    resolve_outstringd_diff_discussions: boolean;
                    container_expiration_policy: {
                        cadence: {
                            value: {};
                        };
                        enabled: {
                            value: {};
                        };
                        keep_n: {
                            value: {};
                        };
                        older_than: {
                            value: {};
                        };
                        name_regex: {
                            value: {};
                        };
                        name_regex_keep: {
                            value: {};
                        };
                        next_run_at: {
                            value: {};
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
                            value: {};
                        };
                        description: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        name_with_namespace: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        path_with_namespace: {
                            value: {};
                        };
                        created_at: {
                            value: {};
                        };
                        default_branch: {
                            value: {};
                        };
                        tag_list: {
                            value: {};
                        };
                        topics: {
                            value: {};
                        };
                        ssh_url_to_repo: {
                            value: {};
                        };
                        http_url_to_repo: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                        readme_url: {
                            value: {};
                        };
                        forks_count: {
                            value: {};
                        };
                        license_url: {
                            value: {};
                        };
                        license: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        star_count: {
                            value: {};
                        };
                        last_activity_at: {
                            value: {};
                        };
                        namespace: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        repository_storage: {
                            value: {};
                        };
                    };
                    mr_default_target_self: boolean;
                    import_url: string;
                    import_type: string;
                    import_status: string;
                    import_error: string;
                    open_issues_count: number;
                    description_html: string;
                    upstringd_at: string;
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
                            value: {};
                        };
                        storage_size: {
                            value: {};
                        };
                        repository_size: {
                            value: {};
                        };
                        wiki_size: {
                            value: {};
                        };
                        lfs_objects_size: {
                            value: {};
                        };
                        job_artifacts_size: {
                            value: {};
                        };
                        pipeline_artifacts_size: {
                            value: {};
                        };
                        packages_size: {
                            value: {};
                        };
                        snippets_size: {
                            value: {};
                        };
                        uploads_size: {
                            value: {};
                        };
                        container_registry_size: {
                            value: {};
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
                    created_at: string;
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
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        nickname: {
                            value: {};
                        };
                        html_url: {
                            value: {};
                        };
                        source_url: {
                            value: {};
                        };
                    };
                    avatar_url: string;
                    star_count: number;
                    last_activity_at: string;
                    namespace: {
                        id: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        kind: {
                            value: {};
                        };
                        full_path: {
                            value: {};
                        };
                        parent_id: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    custom_attributes: {
                        key: {
                            value: {};
                        };
                        value: {
                            value: {};
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
                            value: {};
                        };
                        username: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        state: {
                            value: {};
                        };
                        locked: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        avatar_path: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    resolve_outstringd_diff_discussions: boolean;
                    container_expiration_policy: {
                        cadence: {
                            value: {};
                        };
                        enabled: {
                            value: {};
                        };
                        keep_n: {
                            value: {};
                        };
                        older_than: {
                            value: {};
                        };
                        name_regex: {
                            value: {};
                        };
                        name_regex_keep: {
                            value: {};
                        };
                        next_run_at: {
                            value: {};
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
                            value: {};
                        };
                        description: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        name_with_namespace: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        path_with_namespace: {
                            value: {};
                        };
                        created_at: {
                            value: {};
                        };
                        default_branch: {
                            value: {};
                        };
                        tag_list: {
                            value: {};
                        };
                        topics: {
                            value: {};
                        };
                        ssh_url_to_repo: {
                            value: {};
                        };
                        http_url_to_repo: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                        readme_url: {
                            value: {};
                        };
                        forks_count: {
                            value: {};
                        };
                        license_url: {
                            value: {};
                        };
                        license: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        star_count: {
                            value: {};
                        };
                        last_activity_at: {
                            value: {};
                        };
                        namespace: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        repository_storage: {
                            value: {};
                        };
                    };
                    mr_default_target_self: boolean;
                    import_url: string;
                    import_type: string;
                    import_status: string;
                    import_error: string;
                    open_issues_count: number;
                    description_html: string;
                    upstringd_at: string;
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
                            value: {};
                        };
                        storage_size: {
                            value: {};
                        };
                        repository_size: {
                            value: {};
                        };
                        wiki_size: {
                            value: {};
                        };
                        lfs_objects_size: {
                            value: {};
                        };
                        job_artifacts_size: {
                            value: {};
                        };
                        pipeline_artifacts_size: {
                            value: {};
                        };
                        packages_size: {
                            value: {};
                        };
                        snippets_size: {
                            value: {};
                        };
                        uploads_size: {
                            value: {};
                        };
                        container_registry_size: {
                            value: {};
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
        }>;
    };
    subgroups: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
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
        }, options?: {}) => Promise<{
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
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    group_access: {
                        value: {};
                    };
                    provider: {
                        value: {};
                    };
                    filter: {
                        value: {};
                    };
                };
                saml_group_links: {
                    name: {
                        value: {};
                    };
                    access_level: {
                        value: {};
                    };
                    member_role_id: {
                        value: {};
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
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    group_access: {
                        value: {};
                    };
                    provider: {
                        value: {};
                    };
                    filter: {
                        value: {};
                    };
                };
                saml_group_links: {
                    name: {
                        value: {};
                    };
                    access_level: {
                        value: {};
                    };
                    member_role_id: {
                        value: {};
                    };
                };
                file_template_project_id: string;
                marked_for_deletion_on: string;
                wiki_access_level: string;
                repository_storage: string;
                duo_features_enabled: string;
                lock_duo_features_enabled: string;
            }];
        }>;
    };
    descendant_groups: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
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
        }, options?: {}) => Promise<{
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
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    group_access: {
                        value: {};
                    };
                    provider: {
                        value: {};
                    };
                    filter: {
                        value: {};
                    };
                };
                saml_group_links: {
                    name: {
                        value: {};
                    };
                    access_level: {
                        value: {};
                    };
                    member_role_id: {
                        value: {};
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
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    group_access: {
                        value: {};
                    };
                    provider: {
                        value: {};
                    };
                    filter: {
                        value: {};
                    };
                };
                saml_group_links: {
                    name: {
                        value: {};
                    };
                    access_level: {
                        value: {};
                    };
                    member_role_id: {
                        value: {};
                    };
                };
                file_template_project_id: string;
                marked_for_deletion_on: string;
                wiki_access_level: string;
                repository_storage: string;
                duo_features_enabled: string;
                lock_duo_features_enabled: string;
            }];
        }>;
    };
    transfer_locations: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                search: string;
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    group_access: {
                        value: {};
                    };
                    provider: {
                        value: {};
                    };
                    filter: {
                        value: {};
                    };
                };
                saml_group_links: {
                    name: {
                        value: {};
                    };
                    access_level: {
                        value: {};
                    };
                    member_role_id: {
                        value: {};
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
                        value: {};
                    };
                    value: {
                        value: {};
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
                        value: {};
                    };
                    group_access: {
                        value: {};
                    };
                    provider: {
                        value: {};
                    };
                    filter: {
                        value: {};
                    };
                };
                saml_group_links: {
                    name: {
                        value: {};
                    };
                    access_level: {
                        value: {};
                    };
                    member_role_id: {
                        value: {};
                    };
                };
                file_template_project_id: string;
                marked_for_deletion_on: string;
                wiki_access_level: string;
                repository_storage: string;
                duo_features_enabled: string;
                lock_duo_features_enabled: string;
            }];
        }>;
    };
    transfer: {
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                group_id: number;
            };
        }, options?: {}) => Promise<{
            code: 201;
        }>;
    };
    share: {
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                group_id: number;
                group_access: number;
                expires_at: string;
            };
        }, options?: {}) => Promise<{
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
                    created_at: string;
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
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        nickname: {
                            value: {};
                        };
                        html_url: {
                            value: {};
                        };
                        source_url: {
                            value: {};
                        };
                    };
                    avatar_url: string;
                    star_count: number;
                    last_activity_at: string;
                    namespace: {
                        id: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        kind: {
                            value: {};
                        };
                        full_path: {
                            value: {};
                        };
                        parent_id: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    custom_attributes: {
                        key: {
                            value: {};
                        };
                        value: {
                            value: {};
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
                            value: {};
                        };
                        username: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        state: {
                            value: {};
                        };
                        locked: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        avatar_path: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    resolve_outstringd_diff_discussions: boolean;
                    container_expiration_policy: {
                        cadence: {
                            value: {};
                        };
                        enabled: {
                            value: {};
                        };
                        keep_n: {
                            value: {};
                        };
                        older_than: {
                            value: {};
                        };
                        name_regex: {
                            value: {};
                        };
                        name_regex_keep: {
                            value: {};
                        };
                        next_run_at: {
                            value: {};
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
                            value: {};
                        };
                        description: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        name_with_namespace: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        path_with_namespace: {
                            value: {};
                        };
                        created_at: {
                            value: {};
                        };
                        default_branch: {
                            value: {};
                        };
                        tag_list: {
                            value: {};
                        };
                        topics: {
                            value: {};
                        };
                        ssh_url_to_repo: {
                            value: {};
                        };
                        http_url_to_repo: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                        readme_url: {
                            value: {};
                        };
                        forks_count: {
                            value: {};
                        };
                        license_url: {
                            value: {};
                        };
                        license: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        star_count: {
                            value: {};
                        };
                        last_activity_at: {
                            value: {};
                        };
                        namespace: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        repository_storage: {
                            value: {};
                        };
                    };
                    mr_default_target_self: boolean;
                    import_url: string;
                    import_type: string;
                    import_status: string;
                    import_error: string;
                    open_issues_count: number;
                    description_html: string;
                    upstringd_at: string;
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
                            value: {};
                        };
                        storage_size: {
                            value: {};
                        };
                        repository_size: {
                            value: {};
                        };
                        wiki_size: {
                            value: {};
                        };
                        lfs_objects_size: {
                            value: {};
                        };
                        job_artifacts_size: {
                            value: {};
                        };
                        pipeline_artifacts_size: {
                            value: {};
                        };
                        packages_size: {
                            value: {};
                        };
                        snippets_size: {
                            value: {};
                        };
                        uploads_size: {
                            value: {};
                        };
                        container_registry_size: {
                            value: {};
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
                    created_at: string;
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
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        nickname: {
                            value: {};
                        };
                        html_url: {
                            value: {};
                        };
                        source_url: {
                            value: {};
                        };
                    };
                    avatar_url: string;
                    star_count: number;
                    last_activity_at: string;
                    namespace: {
                        id: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        kind: {
                            value: {};
                        };
                        full_path: {
                            value: {};
                        };
                        parent_id: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    custom_attributes: {
                        key: {
                            value: {};
                        };
                        value: {
                            value: {};
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
                            value: {};
                        };
                        username: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        state: {
                            value: {};
                        };
                        locked: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        avatar_path: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    resolve_outstringd_diff_discussions: boolean;
                    container_expiration_policy: {
                        cadence: {
                            value: {};
                        };
                        enabled: {
                            value: {};
                        };
                        keep_n: {
                            value: {};
                        };
                        older_than: {
                            value: {};
                        };
                        name_regex: {
                            value: {};
                        };
                        name_regex_keep: {
                            value: {};
                        };
                        next_run_at: {
                            value: {};
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
                            value: {};
                        };
                        description: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        name_with_namespace: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        path_with_namespace: {
                            value: {};
                        };
                        created_at: {
                            value: {};
                        };
                        default_branch: {
                            value: {};
                        };
                        tag_list: {
                            value: {};
                        };
                        topics: {
                            value: {};
                        };
                        ssh_url_to_repo: {
                            value: {};
                        };
                        http_url_to_repo: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                        readme_url: {
                            value: {};
                        };
                        forks_count: {
                            value: {};
                        };
                        license_url: {
                            value: {};
                        };
                        license: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        star_count: {
                            value: {};
                        };
                        last_activity_at: {
                            value: {};
                        };
                        namespace: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        repository_storage: {
                            value: {};
                        };
                    };
                    mr_default_target_self: boolean;
                    import_url: string;
                    import_type: string;
                    import_status: string;
                    import_error: string;
                    open_issues_count: number;
                    description_html: string;
                    upstringd_at: string;
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
                            value: {};
                        };
                        storage_size: {
                            value: {};
                        };
                        repository_size: {
                            value: {};
                        };
                        wiki_size: {
                            value: {};
                        };
                        lfs_objects_size: {
                            value: {};
                        };
                        job_artifacts_size: {
                            value: {};
                        };
                        pipeline_artifacts_size: {
                            value: {};
                        };
                        packages_size: {
                            value: {};
                        };
                        snippets_size: {
                            value: {};
                        };
                        uploads_size: {
                            value: {};
                        };
                        container_registry_size: {
                            value: {};
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
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                group_id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        }>;
    };
    ldap_sync: {
        post: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 201;
        }>;
    };
    restore: {
        post: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 201;
        }>;
    };
    provisioned_users: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                username: string;
                search: string;
                active: string;
                blocked: string;
                created_after: string;
                created_before: string;
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
                last_sign_in_at: string;
                confirmed_at: string;
                last_activity_on: string;
                email: string;
                theme_id: number;
                color_scheme_id: number;
                projects_limit: number;
                current_sign_in_at: string;
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
        }>;
    };
    users: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                search: string;
                active: string;
                include_saml_users: string;
                include_service_accounts: string;
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
                last_sign_in_at: string;
                confirmed_at: string;
                last_activity_on: string;
                email: string;
                theme_id: number;
                color_scheme_id: number;
                projects_limit: number;
                current_sign_in_at: string;
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
        } | {
            code: 400;
        } | {
            code: 403;
        } | {
            code: 404;
        }>;
    };
    ssh_certificates: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: [{
                id: number;
                title: string;
                key: string;
                created_at: string;
            }, {
                id: number;
                title: string;
                key: string;
                created_at: string;
            }];
        } | {
            code: 401;
        } | {
            code: 403;
        } | {
            code: 404;
        }>;
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                title: string;
                key: string;
            };
        }, options?: {}) => Promise<{
            code: 201;
            data: {
                id: number;
                title: string;
                key: string;
                created_at: string;
            };
        } | {
            code: 400;
        } | {
            code: 401;
        } | {
            code: 403;
        } | {
            code: 404;
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                ssh_certificates_id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        } | {
            code: 400;
        } | {
            code: 401;
        } | {
            code: 403;
        } | {
            code: 422;
        }>;
    };
    runners: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                type: string;
                paused: string;
                status: string;
                tag_list: string;
                version_prefix: string;
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
        } | {
            code: 400;
        } | {
            code: 403;
        }>;
        reset_registration_token: {
            post: ({ params }: {
                params: {
                    id: string;
                };
            }, options?: {}) => Promise<{
                code: 201;
                data: {
                    token: string;
                    token_expires_at: string;
                };
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            }>;
        };
    };
    dependency_proxy: {
        cache: {
            delete: ({ params }: {
                params: {
                    id: string;
                };
            }, options?: {}) => Promise<{
                code: 202;
            } | {
                code: 401;
            }>;
        };
    };
    deploy_tokens: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
                active: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: [{
                id: number;
                name: string;
                username: string;
                expires_at: string;
                revoked: boolean;
                expired: boolean;
            }, {
                id: number;
                name: string;
                username: string;
                expires_at: string;
                revoked: boolean;
                expired: boolean;
            }];
        } | {
            code: 401;
        } | {
            code: 403;
        } | {
            code: 404;
        }>;
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                name: string;
                scopes: [string, string];
                expires_at: string;
                username: string;
            };
        }, options?: {}) => Promise<{
            code: 201;
            data: {
                id: number;
                name: string;
                username: string;
                expires_at: string;
                revoked: boolean;
                expired: boolean;
                token: string;
            };
        } | {
            code: 400;
        } | {
            code: 401;
        } | {
            code: 404;
        }>;
        getOne: ({ params }: {
            params: {
                id: string;
                token_id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                id: number;
                name: string;
                username: string;
                expires_at: string;
                revoked: boolean;
                expired: boolean;
            };
        } | {
            code: 401;
        } | {
            code: 404;
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                token_id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        } | {
            code: 401;
        } | {
            code: 404;
        }>;
    };
    avatar: {
        get: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
        }>;
    };
    clusters: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                platform_kubernetes: {
                    api_url: {
                        value: {};
                    };
                    namespace: {
                        value: {};
                    };
                    authorization_type: {
                        value: {};
                    };
                    ca_cert: {
                        value: {};
                    };
                };
                provider_gcp: {
                    cluster_id: {
                        value: {};
                    };
                    status_name: {
                        value: {};
                    };
                    gcp_project_id: {
                        value: {};
                    };
                    zone: {
                        value: {};
                    };
                    machine_type: {
                        value: {};
                    };
                    num_nodes: {
                        value: {};
                    };
                    endpoint: {
                        value: {};
                    };
                };
                management_project: {
                    id: {
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    name_with_namespace: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    path_with_namespace: {
                        value: {};
                    };
                    created_at: {
                        value: {};
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
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                platform_kubernetes: {
                    api_url: {
                        value: {};
                    };
                    namespace: {
                        value: {};
                    };
                    authorization_type: {
                        value: {};
                    };
                    ca_cert: {
                        value: {};
                    };
                };
                provider_gcp: {
                    cluster_id: {
                        value: {};
                    };
                    status_name: {
                        value: {};
                    };
                    gcp_project_id: {
                        value: {};
                    };
                    zone: {
                        value: {};
                    };
                    machine_type: {
                        value: {};
                    };
                    num_nodes: {
                        value: {};
                    };
                    endpoint: {
                        value: {};
                    };
                };
                management_project: {
                    id: {
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    name_with_namespace: {
                        value: {};
                    };
                    path: {
                        value: {};
                    };
                    path_with_namespace: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                };
            }];
        } | {
            code: 403;
        }>;
        getOne: ({ params }: {
            params: {
                id: string;
                cluster_id: string;
            };
        }, options?: {}) => Promise<{
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
                        value: {};
                    }, {
                        value: {};
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
                    created_at: string;
                };
                group: {
                    id: string;
                    web_url: string;
                    name: string;
                };
            };
        } | {
            code: 403;
        } | {
            code: 404;
        }>;
        put: ({ params, data }: {
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
        }, options?: {}) => Promise<{
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
                        value: {};
                    }, {
                        value: {};
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
                    created_at: string;
                };
                group: {
                    id: string;
                    web_url: string;
                    name: string;
                };
            };
        } | {
            code: 400;
        } | {
            code: 403;
        } | {
            code: 404;
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                cluster_id: string;
            };
        }, options?: {}) => Promise<{
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
                        value: {};
                    }, {
                        value: {};
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
                    created_at: string;
                };
                group: {
                    id: string;
                    web_url: string;
                    name: string;
                };
            };
        } | {
            code: 403;
        } | {
            code: 404;
        }>;
        user: {
            post: ({ params, data }: {
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
            }, options?: {}) => Promise<{
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
                            value: {};
                        }, {
                            value: {};
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
                        created_at: string;
                    };
                    group: {
                        id: string;
                        web_url: string;
                        name: string;
                    };
                };
            } | {
                code: 400;
            } | {
                code: 403;
            } | {
                code: 404;
            }>;
        };
    };
    registry: {
        repositories: {
            get: ({ params, query }: {
                params: {
                    id: string;
                };
                query?: {
                    page: string;
                    per_page: string;
                };
            }, options?: {}) => Promise<{
                code: 200;
                data: [{
                    id: number;
                    name: string;
                    path: string;
                    project_id: number;
                    location: string;
                    created_at: string;
                    cleanup_policy_started_at: string;
                    tags_count: number;
                    tags: {
                        name: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        location: {
                            value: {};
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
                    created_at: string;
                    cleanup_policy_started_at: string;
                    tags_count: number;
                    tags: {
                        name: {
                            value: {};
                        };
                        path: {
                            value: {};
                        };
                        location: {
                            value: {};
                        };
                    };
                    delete_api_path: string;
                    size: number;
                    status: string;
                }];
            } | {
                code: 401;
            } | {
                code: 404;
            }>;
        };
    };
    export: {
        post: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 202;
        } | {
            code: 401;
        } | {
            code: 403;
        } | {
            code: 404;
        } | {
            code: 429;
        } | {
            code: 503;
        }>;
        download: {
            get: ({ params }: {
                params: {
                    id: string;
                };
            }, options?: {}) => Promise<{
                code: 200;
            } | {
                code: 400;
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            } | {
                code: 503;
            }>;
        };
    };
    export_relations: {
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                batched: boolean;
            };
        }, options?: {}) => Promise<{
            code: 202;
        } | {
            code: 401;
        } | {
            code: 403;
        } | {
            code: 404;
        } | {
            code: 503;
        }>;
        download: {
            get: ({ params, query }: {
                params: {
                    id: string;
                };
                query?: {
                    relation: string;
                    batched: string;
                    batch_number: string;
                };
            }, options?: {}) => Promise<{
                code: 200;
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            } | {
                code: 503;
            }>;
        };
        status: {
            get: ({ params, query }: {
                params: {
                    id: string;
                };
                query?: {
                    relation: string;
                };
            }, options?: {}) => Promise<{
                code: 200;
                data: [{
                    relation: string;
                    status: string;
                    error: string;
                    upstringd_at: string;
                    batched: boolean;
                    batches_count: number;
                    total_objects_count: number;
                    batches: {
                        status: {
                            value: {};
                        };
                        batch_number: {
                            value: {};
                        };
                        objects_count: {
                            value: {};
                        };
                        error: {
                            value: {};
                        };
                        upstringd_at: {
                            value: {};
                        };
                    };
                }, {
                    relation: string;
                    status: string;
                    error: string;
                    upstringd_at: string;
                    batched: boolean;
                    batches_count: number;
                    total_objects_count: number;
                    batches: {
                        status: {
                            value: {};
                        };
                        batch_number: {
                            value: {};
                        };
                        objects_count: {
                            value: {};
                        };
                        error: {
                            value: {};
                        };
                        upstringd_at: {
                            value: {};
                        };
                    };
                }];
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            } | {
                code: 503;
            }>;
        };
    };
    packages: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
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
        }, options?: {}) => Promise<{
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
                created_at: string;
                last_downloaded_at: string;
                project_id: number;
                project_path: string;
                tags: string;
                pipeline: {
                    id: {
                        value: {};
                    };
                    iid: {
                        value: {};
                    };
                    project_id: {
                        value: {};
                    };
                    sha: {
                        value: {};
                    };
                    ref: {
                        value: {};
                    };
                    status: {
                        value: {};
                    };
                    source: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    upstringd_at: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    user: {
                        value: {};
                    };
                };
                pipelines: {
                    id: {
                        value: {};
                    };
                    iid: {
                        value: {};
                    };
                    project_id: {
                        value: {};
                    };
                    sha: {
                        value: {};
                    };
                    ref: {
                        value: {};
                    };
                    status: {
                        value: {};
                    };
                    source: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    upstringd_at: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    user: {
                        value: {};
                    };
                };
                versions: {
                    id: {
                        value: {};
                    };
                    version: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    tags: {
                        value: {};
                    };
                    pipeline: {
                        value: {};
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
                created_at: string;
                last_downloaded_at: string;
                project_id: number;
                project_path: string;
                tags: string;
                pipeline: {
                    id: {
                        value: {};
                    };
                    iid: {
                        value: {};
                    };
                    project_id: {
                        value: {};
                    };
                    sha: {
                        value: {};
                    };
                    ref: {
                        value: {};
                    };
                    status: {
                        value: {};
                    };
                    source: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    upstringd_at: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    user: {
                        value: {};
                    };
                };
                pipelines: {
                    id: {
                        value: {};
                    };
                    iid: {
                        value: {};
                    };
                    project_id: {
                        value: {};
                    };
                    sha: {
                        value: {};
                    };
                    ref: {
                        value: {};
                    };
                    status: {
                        value: {};
                    };
                    source: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    upstringd_at: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    user: {
                        value: {};
                    };
                };
                versions: {
                    id: {
                        value: {};
                    };
                    version: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    tags: {
                        value: {};
                    };
                    pipeline: {
                        value: {};
                    };
                };
            }];
        } | {
            code: 401;
        } | {
            code: 404;
        }>;
    };
    variables: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        post: ({ params, data }: {
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
        }, options?: {}) => Promise<{
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
        } | {
            code: 400;
        }>;
        getOne: ({ params }: {
            params: {
                id: string;
                key: string;
            };
        }, options?: {}) => Promise<{
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
        } | {
            code: 404;
        }>;
        put: ({ params, data }: {
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
        }, options?: {}) => Promise<{
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
        } | {
            code: 400;
        } | {
            code: 404;
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                key: string;
            };
        }, options?: {}) => Promise<{
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
        } | {
            code: 404;
        }>;
    };
    invitations: {
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                access_level: number;
                email: [string, string];
                user_id: [string, string];
                expires_at: string;
                invite_source: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
                query: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        put: ({ params, data }: {
            params: {
                id: string;
                email: string;
            };
            data: {
                access_level: number;
                expires_at: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                email: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        } | {
            code: 403;
        } | {
            code: 404;
        } | {
            code: 409;
        }>;
    };
    "-": {
        packages: {
            maven: {
                getOne: ({ params, query }: {
                    params: {
                        id: string;
                        file_name: string;
                    };
                    query?: {
                        path: string;
                    };
                }, options?: {}) => Promise<{
                    code: 200;
                } | {
                    code: 302;
                } | {
                    code: 401;
                } | {
                    code: 403;
                } | {
                    code: 404;
                }>;
            };
            debian: {
                dists: {
                    "Release.gpg": {
                        get: ({ params, query }: {
                            params: {
                                id: string;
                            };
                            query?: {
                                distribution: string;
                            };
                        }, options?: {}) => Promise<{
                            code: 200;
                        } | {
                            code: 400;
                        } | {
                            code: 401;
                        } | {
                            code: 403;
                        } | {
                            code: 404;
                        }>;
                    };
                    Release: {
                        get: ({ params, query }: {
                            params: {
                                id: string;
                            };
                            query?: {
                                distribution: string;
                            };
                        }, options?: {}) => Promise<{
                            code: 200;
                        } | {
                            code: 400;
                        } | {
                            code: 401;
                        } | {
                            code: 403;
                        } | {
                            code: 404;
                        }>;
                    };
                    InRelease: {
                        get: ({ params, query }: {
                            params: {
                                id: string;
                            };
                            query?: {
                                distribution: string;
                            };
                        }, options?: {}) => Promise<{
                            code: 200;
                        } | {
                            code: 400;
                        } | {
                            code: 401;
                        } | {
                            code: 403;
                        } | {
                            code: 404;
                        }>;
                    };
                    "debian-installer": {
                        Packages: {
                            get: ({ params, query }: {
                                params: {
                                    id: string;
                                    component: string;
                                };
                                query?: {
                                    distribution: string;
                                };
                            }, options?: {}) => Promise<{
                                code: 200;
                            } | {
                                code: 202;
                            } | {
                                code: 400;
                            } | {
                                code: 401;
                            } | {
                                code: 403;
                            } | {
                                code: 404;
                            }>;
                        };
                        "by-hash": {
                            SHA256: {
                                getOne: ({ params, query }: {
                                    params: {
                                        id: string;
                                        component: string;
                                        file_sha256: string;
                                    };
                                    query?: {
                                        distribution: string;
                                    };
                                }, options?: {}) => Promise<{
                                    code: 200;
                                } | {
                                    code: 202;
                                } | {
                                    code: 400;
                                } | {
                                    code: 401;
                                } | {
                                    code: 403;
                                } | {
                                    code: 404;
                                }>;
                            };
                        };
                    };
                    source: {
                        Sources: {
                            get: ({ params, query }: {
                                params: {
                                    id: string;
                                    component: string;
                                };
                                query?: {
                                    distribution: string;
                                };
                            }, options?: {}) => Promise<{
                                code: 200;
                            } | {
                                code: 202;
                            } | {
                                code: 400;
                            } | {
                                code: 401;
                            } | {
                                code: 403;
                            } | {
                                code: 404;
                            }>;
                        };
                        "by-hash": {
                            SHA256: {
                                getOne: ({ params, query }: {
                                    params: {
                                        id: string;
                                        component: string;
                                        file_sha256: string;
                                    };
                                    query?: {
                                        distribution: string;
                                    };
                                }, options?: {}) => Promise<{
                                    code: 200;
                                } | {
                                    code: 202;
                                } | {
                                    code: 400;
                                } | {
                                    code: 401;
                                } | {
                                    code: 403;
                                } | {
                                    code: 404;
                                }>;
                            };
                        };
                    };
                    Packages: {
                        get: ({ params, query }: {
                            params: {
                                id: string;
                                component: string;
                            };
                            query?: {
                                distribution: string;
                            };
                        }, options?: {}) => Promise<{
                            code: 200;
                        } | {
                            code: 202;
                        } | {
                            code: 400;
                        } | {
                            code: 401;
                        } | {
                            code: 403;
                        } | {
                            code: 404;
                        }>;
                    };
                    "by-hash": {
                        SHA256: {
                            getOne: ({ params, query }: {
                                params: {
                                    id: string;
                                    component: string;
                                    file_sha256: string;
                                };
                                query?: {
                                    distribution: string;
                                };
                            }, options?: {}) => Promise<{
                                code: 200;
                            } | {
                                code: 202;
                            } | {
                                code: 400;
                            } | {
                                code: 401;
                            } | {
                                code: 403;
                            } | {
                                code: 404;
                            }>;
                        };
                    };
                };
                pool: {
                    getOne: ({ params }: {
                        params: {
                            id: string;
                            project_id: string;
                            distribution: string;
                            letter: string;
                            package_name: string;
                            package_version: string;
                            file_name: string;
                        };
                    }, options?: {}) => Promise<{
                        code: 200;
                    } | {
                        code: 401;
                    } | {
                        code: 403;
                    } | {
                        code: 404;
                    }>;
                };
            };
            npm: {
                "-": {
                    package: {
                        "dist-tags": {
                            get: ({ params, query }: {
                                params: {
                                    id: string;
                                };
                                query?: {
                                    package_name: string;
                                };
                            }, options?: {}) => Promise<{
                                code: 200;
                                data: {
                                    dist_tags: object;
                                };
                            } | {
                                code: 400;
                            } | {
                                code: 401;
                            } | {
                                code: 403;
                            } | {
                                code: 404;
                            }>;
                            put: ({ params, data }: {
                                params: {
                                    id: string;
                                    tag: string;
                                };
                                data: {
                                    package_name: string;
                                };
                            }, options?: {}) => Promise<{
                                code: 204;
                            } | {
                                code: 400;
                            } | {
                                code: 401;
                            } | {
                                code: 403;
                            } | {
                                code: 404;
                            }>;
                            delete: ({ params, query }: {
                                params: {
                                    id: string;
                                    tag: string;
                                };
                                query?: {
                                    package_name: string;
                                };
                            }, options?: {}) => Promise<{
                                code: 204;
                            } | {
                                code: 400;
                            } | {
                                code: 401;
                            } | {
                                code: 403;
                            } | {
                                code: 404;
                            }>;
                        };
                    };
                    npm: {
                        v1: {
                            security: {
                                advisories: {
                                    bulk: {
                                        post: ({ params }: {
                                            params: {
                                                id: string;
                                            };
                                        }, options?: {}) => Promise<{
                                            code: 200;
                                        } | {
                                            code: 307;
                                        } | {
                                            code: 401;
                                        } | {
                                            code: 403;
                                        } | {
                                            code: 404;
                                        }>;
                                    };
                                };
                                audits: {
                                    quick: {
                                        post: ({ params }: {
                                            params: {
                                                id: string;
                                            };
                                        }, options?: {}) => Promise<{
                                            code: 200;
                                        } | {
                                            code: 307;
                                        } | {
                                            code: 401;
                                        } | {
                                            code: 403;
                                        } | {
                                            code: 404;
                                        }>;
                                    };
                                };
                            };
                        };
                    };
                };
                get: ({ params, query }: {
                    params: {
                        id: string;
                    };
                    query?: {
                        package_name: string;
                    };
                }, options?: {}) => Promise<{
                    code: 200;
                    data: {
                        name: string;
                        versions: object;
                        "dist-tags": object;
                    };
                } | {
                    code: 302;
                } | {
                    code: 400;
                } | {
                    code: 401;
                } | {
                    code: 403;
                } | {
                    code: 404;
                }>;
            };
            nuget: {
                index: {
                    get: ({ params }: {
                        params: {
                            id: string;
                        };
                    }, options?: {}) => Promise<{
                        code: 200;
                        data: {
                            version: string;
                            resources: [object, object];
                        };
                    } | {
                        code: 404;
                    }>;
                };
                symbolfiles: {
                    get: ({ params, query }: {
                        params: {
                            id: string;
                        };
                        query?: {
                            file_name: string;
                            signature: string;
                            same_file_name: string;
                        };
                    }, options?: {}) => Promise<{
                        code: 200;
                    } | {
                        code: 400;
                    } | {
                        code: 403;
                    } | {
                        code: 404;
                    }>;
                };
                v2: {
                    get: ({ params }: {
                        params: {
                            id: string;
                        };
                    }, options?: {}) => Promise<{
                        code: 200;
                    } | {
                        code: 404;
                    }>;
                    $metadata: {
                        get: ({ params }: {
                            params: {
                                id: string;
                            };
                        }, options?: {}) => Promise<{
                            code: 200;
                        }>;
                    };
                };
                metadata: {
                    index: {
                        get: ({ params, query }: {
                            params: {
                                id: string;
                            };
                            query?: {
                                package_name: string;
                            };
                        }, options?: {}) => Promise<{
                            code: 200;
                            data: {
                                count: number;
                                items: [{
                                    "@id": string;
                                    lower: string;
                                    upper: string;
                                    count: number;
                                    items: [{
                                        value: {};
                                    }, {
                                        value: {};
                                    }];
                                }, {
                                    "@id": string;
                                    lower: string;
                                    upper: string;
                                    count: number;
                                    items: [{
                                        value: {};
                                    }, {
                                        value: {};
                                    }];
                                }];
                            };
                        } | {
                            code: 401;
                        } | {
                            code: 403;
                        } | {
                            code: 404;
                        }>;
                    };
                    get: ({ params, query }: {
                        params: {
                            id: string;
                        };
                        query?: {
                            package_name: string;
                            package_version: string;
                        };
                    }, options?: {}) => Promise<{
                        code: 200;
                        data: {
                            "@id": string;
                            packageContent: string;
                            catalogEntry: {
                                "@id": string;
                                dependencyGroups: [{
                                    value: {};
                                }, {
                                    value: {};
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
                    } | {
                        code: 401;
                    } | {
                        code: 403;
                    } | {
                        code: 404;
                    }>;
                };
                query: {
                    get: ({ params, query }: {
                        params: {
                            id: string;
                        };
                        query?: {
                            q: string;
                            skip: string;
                            take: string;
                            prerelease: string;
                        };
                    }, options?: {}) => Promise<{
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
                                    value: {};
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
                                    value: {};
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
                    } | {
                        code: 401;
                    } | {
                        code: 403;
                    } | {
                        code: 404;
                    }>;
                };
            };
            pypi: {
                files: {
                    get: ({ params, query }: {
                        params: {
                            id: string;
                            sha256: string;
                        };
                        query?: {
                            file_identifier: string;
                        };
                    }, options?: {}) => Promise<{
                        code: 200;
                    } | {
                        code: 401;
                    } | {
                        code: 403;
                    } | {
                        code: 404;
                    }>;
                };
                simple: {
                    get: ({ params, query }: {
                        params: {
                            id: string;
                        };
                        query?: {
                            package_name: string;
                        };
                    }, options?: {}) => Promise<{
                        code: 200;
                    } | {
                        code: 401;
                    } | {
                        code: 403;
                    } | {
                        code: 404;
                    }>;
                };
            };
        };
        debian_distributions: {
            post: ({ params, data }: {
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
            }, options?: {}) => Promise<{
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
            } | {
                code: 400;
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            }>;
            get: ({ params, query }: {
                params: {
                    id: string;
                };
                query?: {
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
            }, options?: {}) => Promise<{
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
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            }>;
            getOne: ({ params }: {
                params: {
                    id: string;
                    codename: string;
                };
            }, options?: {}) => Promise<{
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
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            }>;
            put: ({ params, data }: {
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
            }, options?: {}) => Promise<{
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
            } | {
                code: 400;
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            }>;
            delete: ({ params, query }: {
                params: {
                    id: string;
                    codename: string;
                };
                query?: {
                    suite: string;
                    origin: string;
                    label: string;
                    version: string;
                    description: string;
                    valid_time_duration_seconds: string;
                    components: string;
                    architectures: string;
                };
            }, options?: {}) => Promise<{
                code: 202;
            } | {
                code: 400;
            } | {
                code: 401;
            } | {
                code: 403;
            } | {
                code: 404;
            }>;
            "key.asc": {
                get: ({ params }: {
                    params: {
                        id: string;
                        codename: string;
                    };
                }, options?: {}) => Promise<{
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
                } | {
                    code: 401;
                } | {
                    code: 403;
                } | {
                    code: 404;
                }>;
            };
        };
    };
    members: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                query: string;
                user_ids: string;
                skip_users: string;
                show_seat_info: string;
                with_saml_identity: string;
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
                    value: {};
                }, {
                    value: {};
                }];
                web_url: string;
                access_level: string;
                created_at: string;
                created_by: {
                    id: {
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                expires_at: string;
                group_saml_identity: {
                    provider: {
                        value: {};
                    };
                    extern_uid: {
                        value: {};
                    };
                    saml_provider_id: {
                        value: {};
                    };
                };
                email: string;
                is_using_seat: string;
                override: string;
                membership_state: string;
                member_role: {
                    id: {
                        value: {};
                    };
                    group_id: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    base_access_level: {
                        value: {};
                    };
                    admin_cicd_variables: {
                        value: {};
                    };
                    admin_compliance_framework: {
                        value: {};
                    };
                    admin_group_member: {
                        value: {};
                    };
                    admin_merge_request: {
                        value: {};
                    };
                    admin_push_rules: {
                        value: {};
                    };
                    admin_terraform_state: {
                        value: {};
                    };
                    admin_vulnerability: {
                        value: {};
                    };
                    admin_web_hook: {
                        value: {};
                    };
                    archive_project: {
                        value: {};
                    };
                    manage_deploy_tokens: {
                        value: {};
                    };
                    manage_group_access_tokens: {
                        value: {};
                    };
                    manage_merge_request_settings: {
                        value: {};
                    };
                    manage_project_access_tokens: {
                        value: {};
                    };
                    manage_security_policy_link: {
                        value: {};
                    };
                    read_code: {
                        value: {};
                    };
                    read_dependency: {
                        value: {};
                    };
                    read_vulnerability: {
                        value: {};
                    };
                    remove_group: {
                        value: {};
                    };
                    remove_project: {
                        value: {};
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
                    value: {};
                }, {
                    value: {};
                }];
                web_url: string;
                access_level: string;
                created_at: string;
                created_by: {
                    id: {
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                expires_at: string;
                group_saml_identity: {
                    provider: {
                        value: {};
                    };
                    extern_uid: {
                        value: {};
                    };
                    saml_provider_id: {
                        value: {};
                    };
                };
                email: string;
                is_using_seat: string;
                override: string;
                membership_state: string;
                member_role: {
                    id: {
                        value: {};
                    };
                    group_id: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    base_access_level: {
                        value: {};
                    };
                    admin_cicd_variables: {
                        value: {};
                    };
                    admin_compliance_framework: {
                        value: {};
                    };
                    admin_group_member: {
                        value: {};
                    };
                    admin_merge_request: {
                        value: {};
                    };
                    admin_push_rules: {
                        value: {};
                    };
                    admin_terraform_state: {
                        value: {};
                    };
                    admin_vulnerability: {
                        value: {};
                    };
                    admin_web_hook: {
                        value: {};
                    };
                    archive_project: {
                        value: {};
                    };
                    manage_deploy_tokens: {
                        value: {};
                    };
                    manage_group_access_tokens: {
                        value: {};
                    };
                    manage_merge_request_settings: {
                        value: {};
                    };
                    manage_project_access_tokens: {
                        value: {};
                    };
                    manage_security_policy_link: {
                        value: {};
                    };
                    read_code: {
                        value: {};
                    };
                    read_dependency: {
                        value: {};
                    };
                    read_vulnerability: {
                        value: {};
                    };
                    remove_group: {
                        value: {};
                    };
                    remove_project: {
                        value: {};
                    };
                };
            }];
        }>;
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                access_level: number;
                user_id: number;
                username: string;
                expires_at: string;
                invite_source: string;
            };
        }, options?: {}) => Promise<{
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
                        value: {};
                    }, {
                        value: {};
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
        }>;
        all: {
            get: ({ params, query }: {
                params: {
                    id: string;
                };
                query?: {
                    query: string;
                    user_ids: string;
                    show_seat_info: string;
                    state: string;
                    page: string;
                    per_page: string;
                };
            }, options?: {}) => Promise<{
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
                        value: {};
                    }, {
                        value: {};
                    }];
                    web_url: string;
                    access_level: string;
                    created_at: string;
                    created_by: {
                        id: {
                            value: {};
                        };
                        username: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        state: {
                            value: {};
                        };
                        locked: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        avatar_path: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    expires_at: string;
                    group_saml_identity: {
                        provider: {
                            value: {};
                        };
                        extern_uid: {
                            value: {};
                        };
                        saml_provider_id: {
                            value: {};
                        };
                    };
                    email: string;
                    is_using_seat: string;
                    override: string;
                    membership_state: string;
                    member_role: {
                        id: {
                            value: {};
                        };
                        group_id: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        description: {
                            value: {};
                        };
                        base_access_level: {
                            value: {};
                        };
                        admin_cicd_variables: {
                            value: {};
                        };
                        admin_compliance_framework: {
                            value: {};
                        };
                        admin_group_member: {
                            value: {};
                        };
                        admin_merge_request: {
                            value: {};
                        };
                        admin_push_rules: {
                            value: {};
                        };
                        admin_terraform_state: {
                            value: {};
                        };
                        admin_vulnerability: {
                            value: {};
                        };
                        admin_web_hook: {
                            value: {};
                        };
                        archive_project: {
                            value: {};
                        };
                        manage_deploy_tokens: {
                            value: {};
                        };
                        manage_group_access_tokens: {
                            value: {};
                        };
                        manage_merge_request_settings: {
                            value: {};
                        };
                        manage_project_access_tokens: {
                            value: {};
                        };
                        manage_security_policy_link: {
                            value: {};
                        };
                        read_code: {
                            value: {};
                        };
                        read_dependency: {
                            value: {};
                        };
                        read_vulnerability: {
                            value: {};
                        };
                        remove_group: {
                            value: {};
                        };
                        remove_project: {
                            value: {};
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
                        value: {};
                    }, {
                        value: {};
                    }];
                    web_url: string;
                    access_level: string;
                    created_at: string;
                    created_by: {
                        id: {
                            value: {};
                        };
                        username: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        state: {
                            value: {};
                        };
                        locked: {
                            value: {};
                        };
                        avatar_url: {
                            value: {};
                        };
                        avatar_path: {
                            value: {};
                        };
                        custom_attributes: {
                            value: {};
                        };
                        web_url: {
                            value: {};
                        };
                    };
                    expires_at: string;
                    group_saml_identity: {
                        provider: {
                            value: {};
                        };
                        extern_uid: {
                            value: {};
                        };
                        saml_provider_id: {
                            value: {};
                        };
                    };
                    email: string;
                    is_using_seat: string;
                    override: string;
                    membership_state: string;
                    member_role: {
                        id: {
                            value: {};
                        };
                        group_id: {
                            value: {};
                        };
                        name: {
                            value: {};
                        };
                        description: {
                            value: {};
                        };
                        base_access_level: {
                            value: {};
                        };
                        admin_cicd_variables: {
                            value: {};
                        };
                        admin_compliance_framework: {
                            value: {};
                        };
                        admin_group_member: {
                            value: {};
                        };
                        admin_merge_request: {
                            value: {};
                        };
                        admin_push_rules: {
                            value: {};
                        };
                        admin_terraform_state: {
                            value: {};
                        };
                        admin_vulnerability: {
                            value: {};
                        };
                        admin_web_hook: {
                            value: {};
                        };
                        archive_project: {
                            value: {};
                        };
                        manage_deploy_tokens: {
                            value: {};
                        };
                        manage_group_access_tokens: {
                            value: {};
                        };
                        manage_merge_request_settings: {
                            value: {};
                        };
                        manage_project_access_tokens: {
                            value: {};
                        };
                        manage_security_policy_link: {
                            value: {};
                        };
                        read_code: {
                            value: {};
                        };
                        read_dependency: {
                            value: {};
                        };
                        read_vulnerability: {
                            value: {};
                        };
                        remove_group: {
                            value: {};
                        };
                        remove_project: {
                            value: {};
                        };
                    };
                }];
            }>;
            getOne: ({ params }: {
                params: {
                    id: string;
                    user_id: string;
                };
            }, options?: {}) => Promise<{
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
                            value: {};
                        }, {
                            value: {};
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
            }>;
        };
        getOne: ({ params }: {
            params: {
                id: string;
                user_id: string;
            };
        }, options?: {}) => Promise<{
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
                        value: {};
                    }, {
                        value: {};
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
        }>;
        put: ({ params, data }: {
            params: {
                id: string;
                user_id: string;
            };
            data: {
                access_level: number;
                expires_at: string;
                member_role_id: number;
            };
        }, options?: {}) => Promise<{
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
                        value: {};
                    }, {
                        value: {};
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
        }>;
        delete: ({ params, query }: {
            params: {
                id: string;
                user_id: string;
            };
            query?: {
                skip_subresources: string;
                unassign_issuables: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        }>;
        override: {
            post: ({ params }: {
                params: {
                    id: string;
                    user_id: string;
                };
            }, options?: {}) => Promise<{
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
                            value: {};
                        }, {
                            value: {};
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
            }>;
            delete: ({ params }: {
                params: {
                    id: string;
                    user_id: string;
                };
            }, options?: {}) => Promise<{
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
                            value: {};
                        }, {
                            value: {};
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
            }>;
        };
        state: {
            put: ({ params, data }: {
                params: {
                    id: string;
                    user_id: string;
                };
                data: {
                    state: string;
                };
            }, options?: {}) => Promise<{
                code: 200;
            }>;
        };
        approve: {
            put: ({ params }: {
                params: {
                    id: string;
                    member_id: string;
                };
            }, options?: {}) => Promise<{
                code: 200;
            }>;
        };
        approve_all: {
            post: ({ params }: {
                params: {
                    id: string;
                };
            }, options?: {}) => Promise<{
                code: 201;
            }>;
        };
    };
    pending_members: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
        }>;
    };
    billable_members: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                page: string;
                per_page: string;
                search: string;
                sort: string;
            };
        }, options?: {}) => Promise<{
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
                        value: {};
                    }, {
                        value: {};
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
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                user_id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        }>;
        memberships: {
            get: ({ params, query }: {
                params: {
                    id: string;
                    user_id: string;
                };
                query?: {
                    page: string;
                    per_page: string;
                };
            }, options?: {}) => Promise<{
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
            }>;
        };
        indirect: {
            get: ({ params, query }: {
                params: {
                    id: string;
                    user_id: string;
                };
                query?: {
                    page: string;
                    per_page: string;
                };
            }, options?: {}) => Promise<{
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
            }>;
        };
    };
    merge_requests: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
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
                "not[author_id]": string;
                "not[author_username]": string;
                "not[assignee_id]": string;
                "not[assignee_username]": string;
                "not[reviewer_username]": string;
                "not[labels]": string;
                "not[milestone]": string;
                "not[my_reaction_emoji]": string;
                "not[reviewer_id]": string;
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
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                id: number;
                iid: number;
                project_id: number;
                title: string;
                description: string;
                state: string;
                created_at: string;
                upstringd_at: string;
                merged_by: {
                    id: number;
                    username: string;
                    name: string;
                    state: string;
                    locked: boolean;
                    avatar_url: string;
                    avatar_path: string;
                    custom_attributes: [{
                        value: {};
                    }, {
                        value: {};
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
                        value: {};
                    }, {
                        value: {};
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
                        value: {};
                    }, {
                        value: {};
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
                        value: {};
                    }, {
                        value: {};
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
                        value: {};
                    }, {
                        value: {};
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
                        value: {};
                    }, {
                        value: {};
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
                        value: {};
                    }, {
                        value: {};
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
                    upstringd_at: string;
                    due_string: string;
                    start_string: string;
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
        } | {
            code: 401;
        } | {
            code: 404;
        } | {
            code: 422;
        }>;
    };
    releases: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                sort: string;
                simple: string;
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: [{
                name: string;
                tag_name: string;
                description: string;
                created_at: string;
                released_at: string;
                upcoming_release: boolean;
                description_html: string;
                author: {
                    id: {
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                commit: {
                    id: {
                        value: {};
                    };
                    short_id: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    parent_ids: {
                        value: {};
                    };
                    title: {
                        value: {};
                    };
                    message: {
                        value: {};
                    };
                    author_name: {
                        value: {};
                    };
                    author_email: {
                        value: {};
                    };
                    authored_string: {
                        value: {};
                    };
                    committer_name: {
                        value: {};
                    };
                    committer_email: {
                        value: {};
                    };
                    committed_string: {
                        value: {};
                    };
                    trailers: {
                        value: {};
                    };
                    extended_trailers: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                milestones: {
                    id: {
                        value: {};
                    };
                    iid: {
                        value: {};
                    };
                    project_id: {
                        value: {};
                    };
                    group_id: {
                        value: {};
                    };
                    title: {
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    upstringd_at: {
                        value: {};
                    };
                    due_string: {
                        value: {};
                    };
                    start_string: {
                        value: {};
                    };
                    expired: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    issue_stats: {
                        value: {};
                    };
                };
                commit_path: string;
                tag_path: string;
                assets: {
                    count: number;
                    sources: {
                        value: {};
                    };
                    links: {
                        value: {};
                    };
                };
                evidences: {
                    sha: {
                        value: {};
                    };
                    filepath: {
                        value: {};
                    };
                    collected_at: {
                        value: {};
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
                created_at: string;
                released_at: string;
                upcoming_release: boolean;
                description_html: string;
                author: {
                    id: {
                        value: {};
                    };
                    username: {
                        value: {};
                    };
                    name: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    locked: {
                        value: {};
                    };
                    avatar_url: {
                        value: {};
                    };
                    avatar_path: {
                        value: {};
                    };
                    custom_attributes: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                commit: {
                    id: {
                        value: {};
                    };
                    short_id: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    parent_ids: {
                        value: {};
                    };
                    title: {
                        value: {};
                    };
                    message: {
                        value: {};
                    };
                    author_name: {
                        value: {};
                    };
                    author_email: {
                        value: {};
                    };
                    authored_string: {
                        value: {};
                    };
                    committer_name: {
                        value: {};
                    };
                    committer_email: {
                        value: {};
                    };
                    committed_string: {
                        value: {};
                    };
                    trailers: {
                        value: {};
                    };
                    extended_trailers: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                };
                milestones: {
                    id: {
                        value: {};
                    };
                    iid: {
                        value: {};
                    };
                    project_id: {
                        value: {};
                    };
                    group_id: {
                        value: {};
                    };
                    title: {
                        value: {};
                    };
                    description: {
                        value: {};
                    };
                    state: {
                        value: {};
                    };
                    created_at: {
                        value: {};
                    };
                    upstringd_at: {
                        value: {};
                    };
                    due_string: {
                        value: {};
                    };
                    start_string: {
                        value: {};
                    };
                    expired: {
                        value: {};
                    };
                    web_url: {
                        value: {};
                    };
                    issue_stats: {
                        value: {};
                    };
                };
                commit_path: string;
                tag_path: string;
                assets: {
                    count: number;
                    sources: {
                        value: {};
                    };
                    links: {
                        value: {};
                    };
                };
                evidences: {
                    sha: {
                        value: {};
                    };
                    filepath: {
                        value: {};
                    };
                    collected_at: {
                        value: {};
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
        } | {
            code: 400;
        } | {
            code: 403;
        } | {
            code: 404;
        }>;
    };
    access_tokens: {
        get: ({ params }: {
            params: {
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: [{
                id: number;
                name: string;
                revoked: boolean;
                created_at: string;
                user_id: number;
                last_used_at: string;
                active: boolean;
                expires_at: string;
                access_level: number;
            }, {
                id: number;
                name: string;
                revoked: boolean;
                created_at: string;
                user_id: number;
                last_used_at: string;
                active: boolean;
                expires_at: string;
                access_level: number;
            }];
        }>;
        post: ({ params, data }: {
            params: {
                id: string;
            };
            data: {
                name: string;
                scopes: [string, string];
                expires_at: string;
                access_level: 40;
            };
        }, options?: {}) => Promise<{
            code: 201;
            data: {
                id: number;
                name: string;
                revoked: boolean;
                created_at: string;
                user_id: number;
                last_used_at: string;
                active: boolean;
                expires_at: string;
                access_level: number;
                token: string;
            };
        }>;
        getOne: ({ params }: {
            params: {
                id: string;
                token_id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                id: number;
                name: string;
                revoked: boolean;
                created_at: string;
                user_id: number;
                last_used_at: string;
                active: boolean;
                expires_at: string;
                access_level: number;
            };
        }>;
        delete: ({ params }: {
            params: {
                id: string;
                token_id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        } | {
            code: 400;
        } | {
            code: 404;
        }>;
        rotate: {
            post: ({ params, data }: {
                params: {
                    id: string;
                    token_id: string;
                };
                data: {
                    expires_at: string;
                };
            }, options?: {}) => Promise<{
                code: 201;
                data: {
                    id: number;
                    name: string;
                    revoked: boolean;
                    created_at: string;
                    user_id: number;
                    last_used_at: string;
                    active: boolean;
                    expires_at: string;
                    access_level: number;
                    token: string;
                };
            }>;
        };
    };
    wikis: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                with_content: string;
            };
        }, options?: {}) => Promise<{
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
        } | {
            code: 404;
        }>;
        post: ({ params, data }: {
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
        }, options?: {}) => Promise<{
            code: 201;
            data: {
                format: string;
                slug: string;
                title: string;
                content: string;
                encoding: string;
                front_matter: object;
            };
        } | {
            code: 400;
        } | {
            code: 404;
        } | {
            code: 422;
        }>;
        getOne: ({ params, query }: {
            params: {
                slug: string;
                id: string;
            };
            query?: {
                version: string;
                render_html: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                format: string;
                slug: string;
                title: string;
                content: string;
                encoding: string;
                front_matter: object;
            };
        } | {
            code: 404;
        }>;
        put: ({ params, data }: {
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
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                format: string;
                slug: string;
                title: string;
                content: string;
                encoding: string;
                front_matter: object;
            };
        } | {
            code: 400;
        } | {
            code: 404;
        } | {
            code: 422;
        }>;
        delete: ({ params }: {
            params: {
                slug: string;
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 204;
        } | {
            code: 400;
        } | {
            code: 404;
        }>;
        attachments: {
            post: ({ params, data }: {
                params: {
                    id: string;
                };
                data: {
                    file: ArrayBuffer;
                    branch: string;
                };
            }, options?: {}) => Promise<{
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
            } | {
                code: 404;
            }>;
        };
    };
    audit_events: {
        get: ({ params, query }: {
            params: {
                id: string;
            };
            query?: {
                created_after: string;
                created_before: string;
                page: string;
                per_page: string;
            };
        }, options?: {}) => Promise<{
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
        }>;
        getOne: ({ params }: {
            params: {
                audit_event_id: string;
                id: string;
            };
        }, options?: {}) => Promise<{
            code: 200;
            data: {
                id: string;
                author_id: string;
                entity_id: string;
                entity_type: string;
                details: string;
                created_at: string;
            };
        }>;
    };
    import: {
        post: ({ data }: {
            data: {
                path: string;
                name: string;
                parent_id: number;
                organization_id: number;
            };
        }, options?: {}) => Promise<{
            code: 202;
        } | {
            code: 400;
        } | {
            code: 401;
        } | {
            code: 403;
        } | {
            code: 503;
        }>;
        authorize: {
            post: ({}: {}, options?: {}) => Promise<{
                code: 201;
            }>;
        };
    };
};

export default (client: Client, handler: Handler): Groups => ({
  get: ({query}: {query?:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string}}, options?: {}): Promise<{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:any,value:any},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:any,group_access:any,provider:any,filter:any},saml_group_links:{name:any,access_level:any,member_role_id:any},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:any,value:any},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:any,group_access:any,provider:any,filter:any},saml_group_links:{name:any,access_level:any,member_role_id:any},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}> => handler.apply({method:'get',url:'api/v4/groups',headers:{Accept:'application/json'},variable:[],query:[{name:'statistics',type:'string'},{name:'skip_groups',type:'string'},{name:'all_available',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'owned',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'min_access_level',type:'string'},{name:'top_level_only',type:'string'},{name:'repository_storage',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'}]}, [client, {query}, options]),
  post: ({data}: {data:{name:string,path:string,parent_id:number,organization_id:{},description:string,visibility:string,avatar:ArrayBuffer,share_with_group_lock:boolean,require_two_factor_authentication:boolean,two_factor_grace_period:number,project_creation_level:string,auto_devops_enabled:boolean,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,show_diff_preview_in_email:boolean,mentions_disabled:boolean,lfs_enabled:boolean,request_access_enabled:boolean,default_branch:string,default_branch_protection:number,default_branch_protection_defaults:{allowed_to_push:[{access_level:number},{access_level:number}],allow_force_push:boolean,allowed_to_merge:[{access_level:number},{access_level:number}],code_owner_approval_required:boolean,developer_can_initial_push:boolean},shared_runners_setting:string,enabled_git_access_protocol:string,membership_lock:boolean,ldap_cn:string,ldap_access:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,wiki_access_level:string}}, options?: {}): Promise<{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}}> => handler.apply({method:'post',url:'api/v4/groups',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{name:'string',path:'string',parent_id:'number',organization_id:{},description:'string',visibility:'string',avatar:'ArrayBuffer',share_with_group_lock:'boolean',require_two_factor_authentication:'boolean',two_factor_grace_period:'number',project_creation_level:'string',auto_devops_enabled:'boolean',subgroup_creation_level:'string',emails_disabled:'boolean',emails_enabled:'boolean',show_diff_preview_in_email:'boolean',mentions_disabled:'boolean',lfs_enabled:'boolean',request_access_enabled:'boolean',default_branch:'string',default_branch_protection:'number',default_branch_protection_defaults:{allowed_to_push:[{access_level:'number'},{access_level:'number'}],allow_force_push:'boolean',allowed_to_merge:[{access_level:'number'},{access_level:'number'}],code_owner_approval_required:'boolean',developer_can_initial_push:'boolean'},shared_runners_setting:'string',enabled_git_access_protocol:'string',membership_lock:'boolean',ldap_cn:'string',ldap_access:'number',shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',wiki_access_level:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  put: ({params,data}: {params:{id:string},data:{name:string,path:string,description:string,visibility:string,avatar:ArrayBuffer,share_with_group_lock:boolean,require_two_factor_authentication:boolean,two_factor_grace_period:number,project_creation_level:string,auto_devops_enabled:boolean,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,show_diff_preview_in_email:boolean,mentions_disabled:boolean,lfs_enabled:boolean,request_access_enabled:boolean,default_branch:string,default_branch_protection:number,default_branch_protection_defaults:{allowed_to_push:[{access_level:number},{access_level:number}],allow_force_push:boolean,allowed_to_merge:[{access_level:number},{access_level:number}],code_owner_approval_required:boolean,developer_can_initial_push:boolean},shared_runners_setting:string,enabled_git_access_protocol:string,membership_lock:boolean,ldap_cn:string,ldap_access:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,wiki_access_level:string,prevent_sharing_groups_outside_hierarchy:boolean,lock_math_rendering_limits_enabled:boolean,math_rendering_limits_enabled:boolean,file_template_project_id:number,prevent_forking_outside_group:boolean,unique_project_download_limit:number,unique_project_download_limit_interval_in_seconds:number,unique_project_download_limit_allowlist:[string,string],unique_project_download_limit_alertlist:[number,number],auto_ban_user_on_excessive_projects_download:boolean,ip_restriction_ranges:string,service_access_tokens_expiration_enforced:boolean,duo_features_enabled:boolean,lock_duo_features_enabled:boolean}}, options?: {}): Promise<{code:200,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}}> => handler.apply({method:'put',url:'api/v4/groups/:id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{name:'string',path:'string',description:'string',visibility:'string',avatar:'ArrayBuffer',share_with_group_lock:'boolean',require_two_factor_authentication:'boolean',two_factor_grace_period:'number',project_creation_level:'string',auto_devops_enabled:'boolean',subgroup_creation_level:'string',emails_disabled:'boolean',emails_enabled:'boolean',show_diff_preview_in_email:'boolean',mentions_disabled:'boolean',lfs_enabled:'boolean',request_access_enabled:'boolean',default_branch:'string',default_branch_protection:'number',default_branch_protection_defaults:{allowed_to_push:[{access_level:'number'},{access_level:'number'}],allow_force_push:'boolean',allowed_to_merge:[{access_level:'number'},{access_level:'number'}],code_owner_approval_required:'boolean',developer_can_initial_push:'boolean'},shared_runners_setting:'string',enabled_git_access_protocol:'string',membership_lock:'boolean',ldap_cn:'string',ldap_access:'number',shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',wiki_access_level:'string',prevent_sharing_groups_outside_hierarchy:'boolean',lock_math_rendering_limits_enabled:'boolean',math_rendering_limits_enabled:'boolean',file_template_project_id:'number',prevent_forking_outside_group:'boolean',unique_project_download_limit:'number',unique_project_download_limit_interval_in_seconds:'number',unique_project_download_limit_allowlist:['string','string'],unique_project_download_limit_alertlist:['number','number'],auto_ban_user_on_excessive_projects_download:'boolean',ip_restriction_ranges:'string',service_access_tokens_expiration_enforced:'boolean',duo_features_enabled:'boolean',lock_duo_features_enabled:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  getOne: ({params,query}: {params:{id:string},query?:{with_custom_attributes:string,with_projects:string}}, options?: {}): Promise<{code:200,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}> => handler.apply({method:'get',url:'api/v4/groups/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'with_custom_attributes',type:'string'},{name:'with_projects',type:'string'}]}, [client, { params, query}, options]),
  delete: ({params}: {params:{id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/groups/:id',variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
  "access_requests": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}> => handler.apply({method:'get',url:'api/v4/groups/:id/access_requests',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}> => handler.apply({method:'post',url:'api/v4/groups/:id/access_requests',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{id:string,user_id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/groups/:id/access_requests/:user_id',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}]}, [client, { params}, options]),
    "approve": {
      put: ({params,data}: {params:{id:string,user_id:string},data:{access_level:30}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,requested_at:string}}> => handler.apply({method:'put',url:'api/v4/groups/:id/access_requests/:user_id/approve',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],data:{mode:'raw',raw:{access_level:30},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    }
  },
  "badges": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string,name:string}}, options?: {}): Promise<{code:200,data:[{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string},{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/badges',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'name',type:'string'}]}, [client, { params, query}, options]),
    post: ({params,data}: {params:{id:string},data:{link_url:string,image_url:string,name:string}}, options?: {}): Promise<{code:201,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}> => handler.apply({method:'post',url:'api/v4/groups/:id/badges',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{link_url:'string',image_url:'string',name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    "render": {
      get: ({params,query}: {params:{id:string},query?:{link_url:string,image_url:string}}, options?: {}): Promise<{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string}}> => handler.apply({method:'get',url:'api/v4/groups/:id/badges/render',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'link_url',type:'string'},{name:'image_url',type:'string'}]}, [client, { params, query}, options])
    },
    getOne: ({params}: {params:{id:string,badge_id:string}}, options?: {}): Promise<{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}> => handler.apply({method:'get',url:'api/v4/groups/:id/badges/:badge_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'badge_id',type:'string'}]}, [client, { params}, options]),
    put: ({params,data}: {params:{id:string,badge_id:string},data:{link_url:string,image_url:string,name:string}}, options?: {}): Promise<{code:200,data:{name:string,link_url:string,image_url:string,rendered_link_url:string,rendered_image_url:string,id:string,kind:string}}> => handler.apply({method:'put',url:'api/v4/groups/:id/badges/:badge_id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'badge_id',type:'string'}],data:{mode:'raw',raw:{link_url:'string',image_url:'string',name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{id:string,badge_id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/groups/:id/badges/:badge_id',variable:[{name:'id',type:'string'},{name:'badge_id',type:'string'}]}, [client, { params}, options])
  },
  "custom_attributes": {
    get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{key:string,value:string}}> => handler.apply({method:'get',url:'api/v4/groups/:id/custom_attributes',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
    getOne: ({params}: {params:{key:string,id:string}}, options?: {}): Promise<{code:200,data:{key:string,value:string}}> => handler.apply({method:'get',url:'api/v4/groups/:id/custom_attributes/:key',headers:{Accept:'application/json'},variable:[{name:'key',type:'string'},{name:'id',type:'string'}]}, [client, { params}, options]),
    put: ({params,data}: {params:{key:string,id:string},data:{value:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'put',url:'api/v4/groups/:id/custom_attributes/:key',headers:{'Content-Type':'application/json'},variable:[{name:'key',type:'string'},{name:'id',type:'string'}],data:{mode:'raw',raw:{value:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{key:string,id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/groups/:id/custom_attributes/:key',variable:[{name:'key',type:'string'},{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "projects": {
    get: ({params,query}: {params:{id:string},query?:{archived:string,visibility:string,search:string,order_by:string,sort:string,simple:string,owned:string,starred:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_shared:string,include_subgroups:string,include_ancestor_groups:string,min_access_level:string,page:string,per_page:string,with_custom_attributes:string,with_security_reports:string}}, options?: {}): Promise<{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/projects',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'archived',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'simple',type:'string'},{name:'owned',type:'string'},{name:'starred',type:'string'},{name:'with_issues_enabled',type:'string'},{name:'with_merge_requests_enabled',type:'string'},{name:'with_shared',type:'string'},{name:'include_subgroups',type:'string'},{name:'include_ancestor_groups',type:'string'},{name:'min_access_level',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'},{name:'with_security_reports',type:'string'}]}, [client, { params, query}, options]),
    "shared": {
      get: ({params,query}: {params:{id:string},query?:{archived:string,visibility:string,search:string,order_by:string,sort:string,simple:string,starred:string,with_issues_enabled:string,with_merge_requests_enabled:string,min_access_level:string,page:string,per_page:string,with_custom_attributes:string}}, options?: {}): Promise<{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/projects/shared',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'archived',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'simple',type:'string'},{name:'starred',type:'string'},{name:'with_issues_enabled',type:'string'},{name:'with_merge_requests_enabled',type:'string'},{name:'min_access_level',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'}]}, [client, { params, query}, options])
    },
    post: ({params}: {params:{id:string,project_id:string}}, options?: {}): Promise<{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}> => handler.apply({method:'post',url:'api/v4/groups/:id/projects/:project_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'project_id',type:'string'}]}, [client, { params}, options])
  },
  "subgroups": {
    get: ({params,query}: {params:{id:string},query?:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string}}, options?: {}): Promise<{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:any,value:any},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:any,group_access:any,provider:any,filter:any},saml_group_links:{name:any,access_level:any,member_role_id:any},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:any,value:any},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:any,group_access:any,provider:any,filter:any},saml_group_links:{name:any,access_level:any,member_role_id:any},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/subgroups',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'statistics',type:'string'},{name:'skip_groups',type:'string'},{name:'all_available',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'owned',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'min_access_level',type:'string'},{name:'top_level_only',type:'string'},{name:'repository_storage',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'}]}, [client, { params, query}, options])
  },
  "descendant_groups": {
    get: ({params,query}: {params:{id:string},query?:{statistics:string,skip_groups:string,all_available:string,visibility:string,search:string,owned:string,order_by:string,sort:string,min_access_level:string,top_level_only:string,repository_storage:string,page:string,per_page:string,with_custom_attributes:string}}, options?: {}): Promise<{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:any,value:any},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:any,group_access:any,provider:any,filter:any},saml_group_links:{name:any,access_level:any,member_role_id:any},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:any,value:any},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:any,group_access:any,provider:any,filter:any},saml_group_links:{name:any,access_level:any,member_role_id:any},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/descendant_groups',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'statistics',type:'string'},{name:'skip_groups',type:'string'},{name:'all_available',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'owned',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'min_access_level',type:'string'},{name:'top_level_only',type:'string'},{name:'repository_storage',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'}]}, [client, { params, query}, options])
  },
  "transfer_locations": {
    get: ({params,query}: {params:{id:string},query?:{search:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:any,value:any},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:any,group_access:any,provider:any,filter:any},saml_group_links:{name:any,access_level:any,member_role_id:any},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string},{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:any,value:any},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:any,group_access:any,provider:any,filter:any},saml_group_links:{name:any,access_level:any,member_role_id:any},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/transfer_locations',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'search',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "transfer": {
    post: ({params,data}: {params:{id:string},data:{group_id:number}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/groups/:id/transfer',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{group_id:'number'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  },
  "share": {
    post: ({params,data}: {params:{id:string},data:{group_id:number,group_access:number,expires_at:string}}, options?: {}): Promise<{code:201,data:{id:string,web_url:string,name:string,path:string,description:string,visibility:string,share_with_group_lock:string,require_two_factor_authentication:string,two_factor_grace_period:string,project_creation_level:string,auto_devops_enabled:string,subgroup_creation_level:string,emails_disabled:boolean,emails_enabled:boolean,mentions_disabled:string,lfs_enabled:string,math_rendering_limits_enabled:boolean,lock_math_rendering_limits_enabled:boolean,default_branch:string,default_branch_protection:string,default_branch_protection_defaults:string,avatar_url:string,request_access_enabled:string,full_name:string,full_path:string,created_at:string,parent_id:string,organization_id:string,shared_runners_setting:string,custom_attributes:{key:string,value:string},statistics:{storage_size:string,repository_size:string,wiki_size:string,lfs_objects_size:string,job_artifacts_size:string,pipeline_artifacts_size:string,packages_size:string,snippets_size:string,uploads_size:string},ldap_cn:string,ldap_access:string,ldap_group_links:{cn:string,group_access:number,provider:string,filter:string},saml_group_links:{name:string,access_level:number,member_role_id:number},file_template_project_id:string,marked_for_deletion_on:string,wiki_access_level:string,repository_storage:string,duo_features_enabled:string,lock_duo_features_enabled:string,shared_with_groups:string,runners_token:string,enabled_git_access_protocol:string,prevent_sharing_groups_outside_hierarchy:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string,container_registry_image_prefix:string,_links:{self:string,issues:string,merge_requests:string,repo_branches:string,labels:string,events:string,members:string,cluster_agents:string},packages_enabled:boolean,empty_repo:boolean,archived:boolean,visibility:string,owner:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},resolve_outstringd_diff_discussions:boolean,container_expiration_policy:{cadence:any,enabled:any,keep_n:any,older_than:any,name_regex:any,name_regex_keep:any,next_run_at:any},repository_object_format:string,issues_enabled:boolean,merge_requests_enabled:boolean,wiki_enabled:boolean,jobs_enabled:boolean,snippets_enabled:boolean,container_registry_enabled:boolean,service_desk_enabled:boolean,service_desk_address:string,can_create_merge_request_in:boolean,issues_access_level:string,repository_access_level:string,merge_requests_access_level:string,forking_access_level:string,wiki_access_level:string,builds_access_level:string,snippets_access_level:string,pages_access_level:string,analytics_access_level:string,container_registry_access_level:string,security_and_compliance_access_level:string,releases_access_level:string,environments_access_level:string,feature_flags_access_level:string,infrastructure_access_level:string,monitor_access_level:string,model_experiments_access_level:string,model_registry_access_level:string,emails_disabled:boolean,emails_enabled:boolean,shared_runners_enabled:boolean,lfs_enabled:boolean,creator_id:number,forked_from_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any,default_branch:any,tag_list:any,topics:any,ssh_url_to_repo:any,http_url_to_repo:any,web_url:any,readme_url:any,forks_count:any,license_url:any,license:any,avatar_url:any,star_count:any,last_activity_at:any,namespace:any,custom_attributes:any,repository_storage:any},mr_default_target_self:boolean,import_url:string,import_type:string,import_status:string,import_error:string,open_issues_count:number,description_html:string,upstringd_at:string,ci_default_git_depth:number,ci_forward_deployment_enabled:boolean,ci_forward_deployment_rollback_allowed:boolean,ci_job_token_scope_enabled:boolean,ci_separated_caches:boolean,ci_allow_fork_pipelines_to_run_in_parent_project:boolean,build_git_strategy:string,keep_latest_artifact:boolean,restrict_user_defined_variables:boolean,ci_pipeline_variables_minimum_override_role:string,runners_token:string,runner_token_expiration_interval:number,group_runners_enabled:boolean,auto_cancel_pending_pipelines:string,build_timeout:number,auto_devops_enabled:boolean,auto_devops_deploy_strategy:string,ci_config_path:string,public_jobs:boolean,shared_with_groups:[string,string],only_allow_merge_if_pipeline_succeeds:boolean,allow_merge_on_skipped_pipeline:boolean,request_access_enabled:boolean,only_allow_merge_if_all_discussions_are_resolved:boolean,remove_source_branch_after_merge:boolean,printing_merge_request_link_enabled:boolean,merge_method:string,squash_option:string,enforce_auth_checks_on_uploads:boolean,suggestion_commit_message:string,merge_commit_template:string,squash_commit_template:string,issue_branch_template:string,statistics:{commit_count:any,storage_size:any,repository_size:any,wiki_size:any,lfs_objects_size:any,job_artifacts_size:any,pipeline_artifacts_size:any,packages_size:any,snippets_size:any,uploads_size:any,container_registry_size:any},warn_about_potentially_unwanted_characters:boolean,autoclose_referenced_issues:boolean,approvals_before_merge:string,mirror:string,mirror_user_id:string,mirror_trigger_builds:string,only_mirror_protected_branches:string,mirror_overwrites_diverged_branches:string,external_authorization_classification_label:string,marked_for_deletion_at:string,marked_for_deletion_on:string,requirements_enabled:string,requirements_access_level:string,security_and_compliance_enabled:string,compliance_frameworks:string,issues_template:string,merge_requests_template:string,ci_restrict_pipeline_cancellation_role:string,merge_pipelines_enabled:string,merge_trains_enabled:string,merge_trains_skip_train_allowed:string,only_allow_merge_if_all_status_checks_passed:string,allow_pipeline_trigger_approve_deployment:boolean,prevent_merge_without_jira_issue:string},shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,prevent_forking_outside_group:string,service_access_tokens_expiration_enforced:string,membership_lock:string,ip_restriction_ranges:string,unique_project_download_limit:string,unique_project_download_limit_interval_in_seconds:string,unique_project_download_limit_allowlist:string,unique_project_download_limit_alertlist:string,auto_ban_user_on_excessive_projects_download:string}}> => handler.apply({method:'post',url:'api/v4/groups/:id/share',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{group_id:'number',group_access:'number',expires_at:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{id:string,group_id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/groups/:id/share/:group_id',variable:[{name:'id',type:'string'},{name:'group_id',type:'string'}]}, [client, { params}, options])
  },
  "ldap_sync": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/groups/:id/ldap_sync',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "restore": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/groups/:id/restore',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "provisioned_users": {
    get: ({params,query}: {params:{id:string},query?:{username:string,search:string,active:string,blocked:string,created_after:string,created_before:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:string,confirmed_at:string,last_activity_on:string,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:string,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string}}}> => handler.apply({method:'get',url:'api/v4/groups/:id/provisioned_users',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'username',type:'string'},{name:'search',type:'string'},{name:'active',type:'string'},{name:'blocked',type:'string'},{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "users": {
    get: ({params,query}: {params:{id:string},query?:{search:string,active:string,include_saml_users:string,include_service_accounts:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:string,confirmed_at:string,last_activity_on:string,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:string,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string}}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/users',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'search',type:'string'},{name:'active',type:'string'},{name:'include_saml_users',type:'string'},{name:'include_service_accounts',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "ssh_certificates": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,title:string,key:string,created_at:string},{id:number,title:string,key:string,created_at:string}]}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/ssh_certificates',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    post: ({params,data}: {params:{id:string},data:{title:string,key:string}}, options?: {}): Promise<{code:201,data:{id:number,title:string,key:string,created_at:string}}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/groups/:id/ssh_certificates',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{title:'string',key:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{id:string,ssh_certificates_id:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:401}|{code:403}|{code:422}> => handler.apply({method:'delete',url:'api/v4/groups/:id/ssh_certificates/:ssh_certificates_id',variable:[{name:'id',type:'string'},{name:'ssh_certificates_id',type:'string'}]}, [client, { params}, options])
  },
  "runners": {
    get: ({params,query}: {params:{id:string},query?:{type:string,paused:string,status:string,tag_list:string,version_prefix:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}}|{code:400}|{code:403}> => handler.apply({method:'get',url:'api/v4/groups/:id/runners',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'type',type:'string'},{name:'paused',type:'string'},{name:'status',type:'string'},{name:'tag_list',type:'string'},{name:'version_prefix',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    "reset_registration_token": {
      post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201,data:{token:string,token_expires_at:string}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/groups/:id/runners/reset_registration_token',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
    }
  },
  "dependency_proxy": {
    "cache": {
      delete: ({params}: {params:{id:string}}, options?: {}): Promise<{code:202}|{code:401}> => handler.apply({method:'delete',url:'api/v4/groups/:id/dependency_proxy/cache',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
    }
  },
  "deploy_tokens": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string,active:string}}, options?: {}): Promise<{code:200,data:[{id:number,name:string,username:string,expires_at:string,revoked:boolean,expired:boolean},{id:number,name:string,username:string,expires_at:string,revoked:boolean,expired:boolean}]}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/deploy_tokens',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'active',type:'string'}]}, [client, { params, query}, options]),
    post: ({params,data}: {params:{id:string},data:{name:string,scopes:[string,string],expires_at:string,username:string}}, options?: {}): Promise<{code:201,data:{id:number,name:string,username:string,expires_at:string,revoked:boolean,expired:boolean,token:string}}|{code:400}|{code:401}|{code:404}> => handler.apply({method:'post',url:'api/v4/groups/:id/deploy_tokens',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{name:'string',scopes:['string','string'],expires_at:'string',username:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    getOne: ({params}: {params:{id:string,token_id:string}}, options?: {}): Promise<{code:200,data:{id:number,name:string,username:string,expires_at:string,revoked:boolean,expired:boolean}}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/deploy_tokens/:token_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{id:string,token_id:string}}, options?: {}): Promise<{code:204}|{code:401}|{code:404}> => handler.apply({method:'delete',url:'api/v4/groups/:id/deploy_tokens/:token_id',variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}]}, [client, { params}, options])
  },
  "avatar": {
    get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/groups/:id/avatar',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "clusters": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},platform_kubernetes:{api_url:any,namespace:any,authorization_type:any,ca_cert:any},provider_gcp:{cluster_id:any,status_name:any,gcp_project_id:any,zone:any,machine_type:any,num_nodes:any,endpoint:any},management_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any}},{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},platform_kubernetes:{api_url:any,namespace:any,authorization_type:any,ca_cert:any},provider_gcp:{cluster_id:any,status_name:any,gcp_project_id:any,zone:any,machine_type:any,num_nodes:any,endpoint:any},management_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any}}]}|{code:403}> => handler.apply({method:'get',url:'api/v4/groups/:id/clusters',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    getOne: ({params}: {params:{id:string,cluster_id:string}}, options?: {}): Promise<{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string},group:{id:string,web_url:string,name:string}}}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/clusters/:cluster_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'cluster_id',type:'string'}]}, [client, { params}, options]),
    put: ({params,data}: {params:{id:string,cluster_id:string},data:{name:string,enabled:boolean,domain:string,environment_scope:string,namespace_per_environment:true,management_project_id:number,managed:boolean,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string}}}, options?: {}): Promise<{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string},group:{id:string,web_url:string,name:string}}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/groups/:id/clusters/:cluster_id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'cluster_id',type:'string'}],data:{mode:'raw',raw:{name:'string',enabled:'boolean',domain:'string',environment_scope:'string',namespace_per_environment:true,management_project_id:'number',managed:'boolean',platform_kubernetes_attributes:{api_url:'string',token:'string',ca_cert:'string',namespace:'string'}},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{id:string,cluster_id:string}}, options?: {}): Promise<{code:204,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string},group:{id:string,web_url:string,name:string}}}|{code:403}|{code:404}> => handler.apply({method:'delete',url:'api/v4/groups/:id/clusters/:cluster_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'cluster_id',type:'string'}]}, [client, { params}, options]),
    "user": {
      post: ({params,data}: {params:{id:string},data:{name:string,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string,authorization_type:string},enabled:true,environment_scope:string,namespace_per_environment:true,domain:string,management_project_id:number,managed:true}}, options?: {}): Promise<{code:201,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string},group:{id:string,web_url:string,name:string}}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/groups/:id/clusters/user',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{name:'string',platform_kubernetes_attributes:{api_url:'string',token:'string',ca_cert:'string',namespace:'string',authorization_type:'rbac'},enabled:true,environment_scope:'*',namespace_per_environment:true,domain:'string',management_project_id:'number',managed:true},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    }
  },
  "registry": {
    "repositories": {
      get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,name:string,path:string,project_id:number,location:string,created_at:string,cleanup_policy_started_at:string,tags_count:number,tags:{name:any,path:any,location:any},delete_api_path:string,size:number,status:string},{id:number,name:string,path:string,project_id:number,location:string,created_at:string,cleanup_policy_started_at:string,tags_count:number,tags:{name:any,path:any,location:any},delete_api_path:string,size:number,status:string}]}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/registry/repositories',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
    }
  },
  "export": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:202}|{code:401}|{code:403}|{code:404}|{code:429}|{code:503}> => handler.apply({method:'post',url:'api/v4/groups/:id/export',variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
    "download": {
      get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/groups/:id/export/download',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
    }
  },
  "export_relations": {
    post: ({params,data}: {params:{id:string},data:{batched:boolean}}, options?: {}): Promise<{code:202}|{code:401}|{code:403}|{code:404}|{code:503}> => handler.apply({method:'post',url:'api/v4/groups/:id/export_relations',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{batched:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    "download": {
      get: ({params,query}: {params:{id:string},query?:{relation:string,batched:string,batch_number:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/groups/:id/export_relations/download',variable:[{name:'id',type:'string'}],query:[{name:'relation',type:'string'},{name:'batched',type:'string'},{name:'batch_number',type:'string'}]}, [client, { params, query}, options])
    },
    "status": {
      get: ({params,query}: {params:{id:string},query?:{relation:string}}, options?: {}): Promise<{code:200,data:[{relation:string,status:string,error:string,upstringd_at:string,batched:boolean,batches_count:number,total_objects_count:number,batches:{status:any,batch_number:any,objects_count:any,error:any,upstringd_at:any}},{relation:string,status:string,error:string,upstringd_at:string,batched:boolean,batches_count:number,total_objects_count:number,batches:{status:any,batch_number:any,objects_count:any,error:any,upstringd_at:any}}]}|{code:401}|{code:403}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/groups/:id/export_relations/status',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'relation',type:'string'}]}, [client, { params, query}, options])
    }
  },
  "packages": {
    get: ({params,query}: {params:{id:string},query?:{exclude_subgroups:string,page:string,per_page:string,order_by:string,sort:string,package_type:string,package_name:string,package_version:string,include_versionless:string,status:string}}, options?: {}): Promise<{code:200,data:[{id:number,name:string,conan_package_name:string,version:string,package_type:string,status:string,_links:{web_path:string,delete_api_path:string},created_at:string,last_downloaded_at:string,project_id:number,project_path:string,tags:string,pipeline:{id:any,iid:any,project_id:any,sha:any,ref:any,status:any,source:any,created_at:any,upstringd_at:any,web_url:any,user:any},pipelines:{id:any,iid:any,project_id:any,sha:any,ref:any,status:any,source:any,created_at:any,upstringd_at:any,web_url:any,user:any},versions:{id:any,version:any,created_at:any,tags:any,pipeline:any}},{id:number,name:string,conan_package_name:string,version:string,package_type:string,status:string,_links:{web_path:string,delete_api_path:string},created_at:string,last_downloaded_at:string,project_id:number,project_path:string,tags:string,pipeline:{id:any,iid:any,project_id:any,sha:any,ref:any,status:any,source:any,created_at:any,upstringd_at:any,web_url:any,user:any},pipelines:{id:any,iid:any,project_id:any,sha:any,ref:any,status:any,source:any,created_at:any,upstringd_at:any,web_url:any,user:any},versions:{id:any,version:any,created_at:any,tags:any,pipeline:any}}]}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/packages',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'exclude_subgroups',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'package_type',type:'string'},{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'include_versionless',type:'string'},{name:'status',type:'string'}]}, [client, { params, query}, options])
  },
  "variables": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}> => handler.apply({method:'get',url:'api/v4/groups/:id/variables',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    post: ({params,data}: {params:{id:string},data:{key:string,value:string,protected:string,masked_and_hidden:string,masked:string,raw:string,variable_type:string,environment_scope:string,description:string}}, options?: {}): Promise<{code:201,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}|{code:400}> => handler.apply({method:'post',url:'api/v4/groups/:id/variables',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{key:'string',value:'string',protected:'string',masked_and_hidden:'string',masked:'string',raw:'string',variable_type:'string',environment_scope:'string',description:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    getOne: ({params}: {params:{id:string,key:string}}, options?: {}): Promise<{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/variables/:key',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'key',type:'string'}]}, [client, { params}, options]),
    put: ({params,data}: {params:{id:string,key:string},data:{value:string,protected:string,masked:string,raw:string,variable_type:string,environment_scope:string,description:string}}, options?: {}): Promise<{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}|{code:400}|{code:404}> => handler.apply({method:'put',url:'api/v4/groups/:id/variables/:key',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'key',type:'string'}],data:{mode:'raw',raw:{value:'string',protected:'string',masked:'string',raw:'string',variable_type:'string',environment_scope:'string',description:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{id:string,key:string}}, options?: {}): Promise<{code:204,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}|{code:404}> => handler.apply({method:'delete',url:'api/v4/groups/:id/variables/:key',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'key',type:'string'}]}, [client, { params}, options])
  },
  "invitations": {
    post: ({params,data}: {params:{id:string},data:{access_level:number,email:[string,string],user_id:[string,string],expires_at:string,invite_source:string}}, options?: {}): Promise<{code:201,data:{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}}> => handler.apply({method:'post',url:'api/v4/groups/:id/invitations',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{access_level:'number',email:['string','string'],user_id:['string','string'],expires_at:'string',invite_source:'invitations-api'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string,query:string}}, options?: {}): Promise<{code:200,data:[{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string},{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/invitations',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'query',type:'string'}]}, [client, { params, query}, options]),
    put: ({params,data}: {params:{id:string,email:string},data:{access_level:number,expires_at:string}}, options?: {}): Promise<{code:200,data:{access_level:string,created_at:string,expires_at:string,invite_email:string,invite_token:string,user_name:string,created_by_name:string}}> => handler.apply({method:'put',url:'api/v4/groups/:id/invitations/:email',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'email',type:'string'}],data:{mode:'raw',raw:{access_level:'number',expires_at:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{id:string,email:string}}, options?: {}): Promise<{code:204}|{code:403}|{code:404}|{code:409}> => handler.apply({method:'delete',url:'api/v4/groups/:id/invitations/:email',variable:[{name:'id',type:'string'},{name:'email',type:'string'}]}, [client, { params}, options])
  },
  "-": {
    "packages": {
      "maven": {
        getOne: ({params,query}: {params:{id:string,file_name:string},query?:{path:string}}, options?: {}): Promise<{code:200}|{code:302}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/maven/*path/:file_name',variable:[{name:'id',type:'string'},{name:'file_name',type:'string'}],query:[{name:'path',type:'string'}]}, [client, { params, query}, options])
      },
      "debian": {
        "dists": {
          "Release.gpg": {
            get: ({params,query}: {params:{id:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/Release.gpg',variable:[{name:'id',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
          },
          "Release": {
            get: ({params,query}: {params:{id:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/Release',variable:[{name:'id',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
          },
          "InRelease": {
            get: ({params,query}: {params:{id:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/InRelease',variable:[{name:'id',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
          },
          "debian-installer": {
            "Packages": {
              get: ({params,query}: {params:{id:string,component:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:202}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/debian-installer/binary-{{architecture}}/Packages',variable:[{name:'id',type:'string'},{name:'component',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
            },
            "by-hash": {
              "SHA256": {
                getOne: ({params,query}: {params:{id:string,component:string,file_sha256:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:202}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/debian-installer/binary-{{architecture}}/by-hash/SHA256/:file_sha256',variable:[{name:'id',type:'string'},{name:'component',type:'string'},{name:'file_sha256',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
              }
            }
          },
          "source": {
            "Sources": {
              get: ({params,query}: {params:{id:string,component:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:202}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/source/Sources',variable:[{name:'id',type:'string'},{name:'component',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
            },
            "by-hash": {
              "SHA256": {
                getOne: ({params,query}: {params:{id:string,component:string,file_sha256:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:202}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/source/by-hash/SHA256/:file_sha256',variable:[{name:'id',type:'string'},{name:'component',type:'string'},{name:'file_sha256',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
              }
            }
          },
          "Packages": {
            get: ({params,query}: {params:{id:string,component:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:202}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/binary-{{architecture}}/Packages',variable:[{name:'id',type:'string'},{name:'component',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
          },
          "by-hash": {
            "SHA256": {
              getOne: ({params,query}: {params:{id:string,component:string,file_sha256:string},query?:{distribution:string}}, options?: {}): Promise<{code:200}|{code:202}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/dists/*distribution/:component/binary-{{architecture}}/by-hash/SHA256/:file_sha256',variable:[{name:'id',type:'string'},{name:'component',type:'string'},{name:'file_sha256',type:'string'}],query:[{name:'distribution',type:'string'}]}, [client, { params, query}, options])
            }
          }
        },
        "pool": {
          getOne: ({params}: {params:{id:string,project_id:string,distribution:string,letter:string,package_name:string,package_version:string,file_name:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/debian/pool/:distribution/:project_id/:letter/:package_name/:package_version/:file_name',variable:[{name:'id',type:'string'},{name:'project_id',type:'string'},{name:'distribution',type:'string'},{name:'letter',type:'string'},{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options])
        }
      },
      "npm": {
        "-": {
          "package": {
            "dist-tags": {
              get: ({params,query}: {params:{id:string},query?:{package_name:string}}, options?: {}): Promise<{code:200,data:{dist_tags:object}}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options]),
              put: ({params,data}: {params:{id:string,tag:string},data:{package_name:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags/:tag',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'},{name:'tag',type:'string'}],data:{mode:'raw',raw:{package_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
              delete: ({params,query}: {params:{id:string,tag:string},query?:{package_name:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'delete',url:'api/v4/groups/:id/-/packages/npm/-/package/*package_name/dist-tags/:tag',variable:[{name:'id',type:'string'},{name:'tag',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options])
            }
          },
          "npm": {
            "v1": {
              "security": {
                "advisories": {
                  "bulk": {
                    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}|{code:307}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/groups/:id/-/packages/npm/-/npm/v1/security/advisories/bulk',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
                  }
                },
                "audits": {
                  "quick": {
                    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}|{code:307}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/groups/:id/-/packages/npm/-/npm/v1/security/audits/quick',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
                  }
                }
              }
            }
          }
        },
        get: ({params,query}: {params:{id:string},query?:{package_name:string}}, options?: {}): Promise<{code:200,data:{name:string,versions:object,'dist-tags':object}}|{code:302}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/npm/*package_name',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options])
      },
      "nuget": {
        "index": {
          get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{version:string,resources:[object,object]}}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/index',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
        },
        "symbolfiles": {
          get: ({params,query}: {params:{id:string},query?:{file_name:string,signature:string,same_file_name:string}}, options?: {}): Promise<{code:200}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name',headers:{Symbolchecksum:'<string>'},variable:[{name:'id',type:'string'}],query:[{name:'file_name',type:'string'},{name:'signature',type:'string'},{name:'same_file_name',type:'string'}]}, [client, { params, query}, options])
        },
        "v2": {
          get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/v2',variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
          "$metadata": {
            get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/v2/$metadata',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
          }
        },
        "metadata": {
          "index": {
            get: ({params,query}: {params:{id:string},query?:{package_name:string}}, options?: {}): Promise<{code:200,data:{count:number,items:[{'@id':string,lower:string,upper:string,count:number,items:[any,any]},{'@id':string,lower:string,upper:string,count:number,items:[any,any]}]}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/metadata/*package_name/index',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options])
          },
          get: ({params,query}: {params:{id:string},query?:{package_name:string,package_version:string}}, options?: {}): Promise<{code:200,data:{'@id':string,packageContent:string,catalogEntry:{'@id':string,dependencyGroups:[any,any],id:string,version:string,tags:string,packageContent:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string,published:string}}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/metadata/*package_name/*package_version',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'},{name:'package_version',type:'string'}]}, [client, { params, query}, options])
        },
        "query": {
          get: ({params,query}: {params:{id:string},query?:{q:string,skip:string,take:string,prerelease:string}}, options?: {}): Promise<{code:200,data:{totalHits:number,data:[{'@type':string,id:string,title:string,totalDownloads:number,verified:boolean,version:string,versions:any,tags:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string},{'@type':string,id:string,title:string,totalDownloads:number,verified:boolean,version:string,versions:any,tags:string,authors:string,description:string,summary:string,projectUrl:string,licenseUrl:string,iconUrl:string}]}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/nuget/query',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'q',type:'string'},{name:'skip',type:'string'},{name:'take',type:'string'},{name:'prerelease',type:'string'}]}, [client, { params, query}, options])
        }
      },
      "pypi": {
        "files": {
          get: ({params,query}: {params:{id:string,sha256:string},query?:{file_identifier:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/pypi/files/:sha256/*file_identifier',variable:[{name:'id',type:'string'},{name:'sha256',type:'string'}],query:[{name:'file_identifier',type:'string'}]}, [client, { params, query}, options])
        },
        "simple": {
          get: ({params,query}: {params:{id:string},query?:{package_name:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/packages/pypi/simple/*package_name',variable:[{name:'id',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options])
        }
      }
    },
    "debian_distributions": {
      post: ({params,data}: {params:{id:string},data:{codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}}, options?: {}): Promise<{code:201,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/groups/:id/-/debian_distributions',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{codename:'string',suite:'string',origin:'string',label:'string',version:'string',description:'string',valid_time_duration_seconds:'number',components:['string','string'],architectures:['string','string']},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
      get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:string,components:string,architectures:string}}, options?: {}): Promise<{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/debian_distributions',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'codename',type:'string'},{name:'suite',type:'string'},{name:'origin',type:'string'},{name:'label',type:'string'},{name:'version',type:'string'},{name:'description',type:'string'},{name:'valid_time_duration_seconds',type:'string'},{name:'components',type:'string'},{name:'architectures',type:'string'}]}, [client, { params, query}, options]),
      getOne: ({params}: {params:{id:string,codename:string}}, options?: {}): Promise<{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/debian_distributions/:codename',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'codename',type:'string'}]}, [client, { params}, options]),
      put: ({params,data}: {params:{id:string,codename:string},data:{suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}}, options?: {}): Promise<{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/groups/:id/-/debian_distributions/:codename',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'codename',type:'string'}],data:{mode:'raw',raw:{suite:'string',origin:'string',label:'string',version:'string',description:'string',valid_time_duration_seconds:'number',components:['string','string'],architectures:['string','string']},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
      delete: ({params,query}: {params:{id:string,codename:string},query?:{suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:string,components:string,architectures:string}}, options?: {}): Promise<{code:202}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'delete',url:'api/v4/groups/:id/-/debian_distributions/:codename',variable:[{name:'id',type:'string'},{name:'codename',type:'string'}],query:[{name:'suite',type:'string'},{name:'origin',type:'string'},{name:'label',type:'string'},{name:'version',type:'string'},{name:'description',type:'string'},{name:'valid_time_duration_seconds',type:'string'},{name:'components',type:'string'},{name:'architectures',type:'string'}]}, [client, { params, query}, options]),
      "key.asc": {
        get: ({params}: {params:{id:string,codename:string}}, options?: {}): Promise<{code:200,data:{id:number,codename:string,suite:string,origin:string,label:string,version:string,description:string,valid_time_duration_seconds:number,components:[string,string],architectures:[string,string]}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/-/debian_distributions/:codename/key.asc',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'codename',type:'string'}]}, [client, { params}, options])
      }
    }
  },
  "members": {
    get: ({params,query}: {params:{id:string},query?:{query:string,user_ids:string,skip_users:string,show_seat_info:string,with_saml_identity:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string,access_level:string,created_at:string,created_by:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},expires_at:string,group_saml_identity:{provider:any,extern_uid:any,saml_provider_id:any},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:any,group_id:any,name:any,description:any,base_access_level:any,admin_cicd_variables:any,admin_compliance_framework:any,admin_group_member:any,admin_merge_request:any,admin_push_rules:any,admin_terraform_state:any,admin_vulnerability:any,admin_web_hook:any,archive_project:any,manage_deploy_tokens:any,manage_group_access_tokens:any,manage_merge_request_settings:any,manage_project_access_tokens:any,manage_security_policy_link:any,read_code:any,read_dependency:any,read_vulnerability:any,remove_group:any,remove_project:any}},{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string,access_level:string,created_at:string,created_by:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},expires_at:string,group_saml_identity:{provider:any,extern_uid:any,saml_provider_id:any},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:any,group_id:any,name:any,description:any,base_access_level:any,admin_cicd_variables:any,admin_compliance_framework:any,admin_group_member:any,admin_merge_request:any,admin_push_rules:any,admin_terraform_state:any,admin_vulnerability:any,admin_web_hook:any,archive_project:any,manage_deploy_tokens:any,manage_group_access_tokens:any,manage_merge_request_settings:any,manage_project_access_tokens:any,manage_security_policy_link:any,read_code:any,read_dependency:any,read_vulnerability:any,remove_group:any,remove_project:any}}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/members',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'query',type:'string'},{name:'user_ids',type:'string'},{name:'skip_users',type:'string'},{name:'show_seat_info',type:'string'},{name:'with_saml_identity',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    post: ({params,data}: {params:{id:string},data:{access_level:number,user_id:number,username:string,expires_at:string,invite_source:string}}, options?: {}): Promise<{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}> => handler.apply({method:'post',url:'api/v4/groups/:id/members',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{access_level:'number',user_id:'number',username:'string',expires_at:'string',invite_source:'members-api'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    "all": {
      get: ({params,query}: {params:{id:string},query?:{query:string,user_ids:string,show_seat_info:string,state:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string,access_level:string,created_at:string,created_by:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},expires_at:string,group_saml_identity:{provider:any,extern_uid:any,saml_provider_id:any},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:any,group_id:any,name:any,description:any,base_access_level:any,admin_cicd_variables:any,admin_compliance_framework:any,admin_group_member:any,admin_merge_request:any,admin_push_rules:any,admin_terraform_state:any,admin_vulnerability:any,admin_web_hook:any,archive_project:any,manage_deploy_tokens:any,manage_group_access_tokens:any,manage_merge_request_settings:any,manage_project_access_tokens:any,manage_security_policy_link:any,read_code:any,read_dependency:any,read_vulnerability:any,remove_group:any,remove_project:any}},{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string,access_level:string,created_at:string,created_by:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},expires_at:string,group_saml_identity:{provider:any,extern_uid:any,saml_provider_id:any},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:any,group_id:any,name:any,description:any,base_access_level:any,admin_cicd_variables:any,admin_compliance_framework:any,admin_group_member:any,admin_merge_request:any,admin_push_rules:any,admin_terraform_state:any,admin_vulnerability:any,admin_web_hook:any,archive_project:any,manage_deploy_tokens:any,manage_group_access_tokens:any,manage_merge_request_settings:any,manage_project_access_tokens:any,manage_security_policy_link:any,read_code:any,read_dependency:any,read_vulnerability:any,remove_group:any,remove_project:any}}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/members/all',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'query',type:'string'},{name:'user_ids',type:'string'},{name:'show_seat_info',type:'string'},{name:'state',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
      getOne: ({params}: {params:{id:string,user_id:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}> => handler.apply({method:'get',url:'api/v4/groups/:id/members/all/:user_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}]}, [client, { params}, options])
    },
    getOne: ({params}: {params:{id:string,user_id:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}> => handler.apply({method:'get',url:'api/v4/groups/:id/members/:user_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}]}, [client, { params}, options]),
    put: ({params,data}: {params:{id:string,user_id:string},data:{access_level:number,expires_at:string,member_role_id:number}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}> => handler.apply({method:'put',url:'api/v4/groups/:id/members/:user_id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],data:{mode:'raw',raw:{access_level:'number',expires_at:'string',member_role_id:'number'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params,query}: {params:{id:string,user_id:string},query?:{skip_subresources:string,unassign_issuables:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/groups/:id/members/:user_id',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],query:[{name:'skip_subresources',type:'string'},{name:'unassign_issuables',type:'string'}]}, [client, { params, query}, options]),
    "override": {
      post: ({params}: {params:{id:string,user_id:string}}, options?: {}): Promise<{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}> => handler.apply({method:'post',url:'api/v4/groups/:id/members/:user_id/override',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}]}, [client, { params}, options]),
      delete: ({params}: {params:{id:string,user_id:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}> => handler.apply({method:'delete',url:'api/v4/groups/:id/members/:user_id/override',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}]}, [client, { params}, options])
    },
    "state": {
      put: ({params,data}: {params:{id:string,user_id:string},data:{state:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'put',url:'api/v4/groups/:id/members/:user_id/state',headers:{'Content-Type':'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],data:{mode:'raw',raw:{state:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    },
    "approve": {
      put: ({params}: {params:{id:string,member_id:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'put',url:'api/v4/groups/:id/members/:member_id/approve',variable:[{name:'id',type:'string'},{name:'member_id',type:'string'}]}, [client, { params}, options])
    },
    "approve_all": {
      post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/groups/:id/members/approve_all',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
    }
  },
  "pending_members": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/groups/:id/pending_members',variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "billable_members": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string,search:string,sort:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,access_level:string,created_at:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},expires_at:string,group_saml_identity:{provider:string,extern_uid:string,saml_provider_id:string},email:string,is_using_seat:string,override:string,membership_state:string,member_role:{id:number,group_id:number,name:string,description:string,base_access_level:number,admin_cicd_variables:boolean,admin_compliance_framework:boolean,admin_group_member:boolean,admin_merge_request:boolean,admin_push_rules:boolean,admin_terraform_state:boolean,admin_vulnerability:boolean,admin_web_hook:boolean,archive_project:boolean,manage_deploy_tokens:boolean,manage_group_access_tokens:boolean,manage_merge_request_settings:boolean,manage_project_access_tokens:boolean,manage_security_policy_link:boolean,read_code:boolean,read_dependency:boolean,read_vulnerability:boolean,remove_group:boolean,remove_project:boolean}}}> => handler.apply({method:'get',url:'api/v4/groups/:id/billable_members',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'search',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options]),
    delete: ({params}: {params:{id:string,user_id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/groups/:id/billable_members/:user_id',variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}]}, [client, { params}, options]),
    "memberships": {
      get: ({params,query}: {params:{id:string,user_id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:string,source_id:string,source_full_name:string,source_members_url:string,created_at:string,expires_at:string,access_level:{string_value:string,number_value:string,custom_role:string}}}> => handler.apply({method:'get',url:'api/v4/groups/:id/billable_members/:user_id/memberships',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
    },
    "indirect": {
      get: ({params,query}: {params:{id:string,user_id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:string,source_id:string,source_full_name:string,source_members_url:string,created_at:string,expires_at:string,access_level:{string_value:string,number_value:string,custom_role:string}}}> => handler.apply({method:'get',url:'api/v4/groups/:id/billable_members/:user_id/indirect',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'user_id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
    }
  },
  "merge_requests": {
    get: ({params,query}: {params:{id:string},query?:{author_id:string,author_username:string,assignee_id:string,assignee_username:string,reviewer_username:string,labels:string,milestone:string,my_reaction_emoji:string,reviewer_id:string,state:string,order_by:string,sort:string,with_labels_details:string,with_merge_status_recheck:string,created_after:string,created_before:string,updated_after:string,updated_before:string,view:string,scope:string,source_branch:string,source_project_id:string,target_branch:string,search:string,in:string,wip:string,'not[author_id]':string,'not[author_username]':string,'not[assignee_id]':string,'not[assignee_username]':string,'not[reviewer_username]':string,'not[labels]':string,'not[milestone]':string,'not[my_reaction_emoji]':string,'not[reviewer_id]':string,deployed_before:string,deployed_after:string,environment:string,approved:string,merge_user_id:string,merge_user_username:string,approver_ids:string,approved_by_ids:string,approved_by_usernames:string,page:string,per_page:string,non_archived:string}}, options?: {}): Promise<{code:200,data:{id:number,iid:number,project_id:number,title:string,description:string,state:string,created_at:string,upstringd_at:string,merged_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},merge_user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},merged_at:string,closed_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},closed_at:string,title_html:string,description_html:string,target_branch:string,source_branch:string,user_notes_count:string,upvotes:string,downvotes:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},assignees:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},assignee:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},reviewers:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},source_project_id:string,target_project_id:string,labels:string,draft:string,imported:string,imported_from:string,work_in_progress:string,milestone:{id:string,iid:string,project_id:string,group_id:string,title:string,description:string,state:string,created_at:string,upstringd_at:string,due_string:string,start_string:string,expired:string,web_url:string},merge_when_pipeline_succeeds:string,merge_status:string,detailed_merge_status:string,sha:string,merge_commit_sha:string,squash_commit_sha:string,discussion_locked:string,should_remove_source_branch:string,force_remove_source_branch:string,prepared_at:string,allow_collaboration:string,allow_maintainer_to_push:string,reference:string,references:{short:string,relative:string,full:string},web_url:string,time_stats:{time_estimate:number,total_time_spent:number,human_time_estimate:string,human_total_time_spent:string},squash:string,squash_on_merge:string,task_completion_status:string,has_conflicts:string,blocking_discussions_resolved:string,approvals_before_merge:string}}|{code:401}|{code:404}|{code:422}> => handler.apply({method:'get',url:'api/v4/groups/:id/merge_requests',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'author_id',type:'string'},{name:'author_username',type:'string'},{name:'assignee_id',type:'string'},{name:'assignee_username',type:'string'},{name:'reviewer_username',type:'string'},{name:'labels',type:'string'},{name:'milestone',type:'string'},{name:'my_reaction_emoji',type:'string'},{name:'reviewer_id',type:'string'},{name:'state',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'with_labels_details',type:'string'},{name:'with_merge_status_recheck',type:'string'},{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'updated_after',type:'string'},{name:'updated_before',type:'string'},{name:'view',type:'string'},{name:'scope',type:'string'},{name:'source_branch',type:'string'},{name:'source_project_id',type:'string'},{name:'target_branch',type:'string'},{name:'search',type:'string'},{name:'in',type:'string'},{name:'wip',type:'string'},{name:'not[author_id]',type:'string'},{name:'not[author_username]',type:'string'},{name:'not[assignee_id]',type:'string'},{name:'not[assignee_username]',type:'string'},{name:'not[reviewer_username]',type:'string'},{name:'not[labels]',type:'string'},{name:'not[milestone]',type:'string'},{name:'not[my_reaction_emoji]',type:'string'},{name:'not[reviewer_id]',type:'string'},{name:'deployed_before',type:'string'},{name:'deployed_after',type:'string'},{name:'environment',type:'string'},{name:'approved',type:'string'},{name:'merge_user_id',type:'string'},{name:'merge_user_username',type:'string'},{name:'approver_ids',type:'string'},{name:'approved_by_ids',type:'string'},{name:'approved_by_usernames',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'non_archived',type:'string'}]}, [client, { params, query}, options])
  },
  "releases": {
    get: ({params,query}: {params:{id:string},query?:{sort:string,simple:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{name:string,tag_name:string,description:string,created_at:string,released_at:string,upcoming_release:boolean,description_html:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},commit:{id:any,short_id:any,created_at:any,parent_ids:any,title:any,message:any,author_name:any,author_email:any,authored_string:any,committer_name:any,committer_email:any,committed_string:any,trailers:any,extended_trailers:any,web_url:any},milestones:{id:any,iid:any,project_id:any,group_id:any,title:any,description:any,state:any,created_at:any,upstringd_at:any,due_string:any,start_string:any,expired:any,web_url:any,issue_stats:any},commit_path:string,tag_path:string,assets:{count:number,sources:any,links:any},evidences:{sha:any,filepath:any,collected_at:any},_links:{closed_issues_url:string,closed_merge_requests_url:string,edit_url:string,merged_merge_requests_url:string,opened_issues_url:string,opened_merge_requests_url:string,self:string}},{name:string,tag_name:string,description:string,created_at:string,released_at:string,upcoming_release:boolean,description_html:string,author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},commit:{id:any,short_id:any,created_at:any,parent_ids:any,title:any,message:any,author_name:any,author_email:any,authored_string:any,committer_name:any,committer_email:any,committed_string:any,trailers:any,extended_trailers:any,web_url:any},milestones:{id:any,iid:any,project_id:any,group_id:any,title:any,description:any,state:any,created_at:any,upstringd_at:any,due_string:any,start_string:any,expired:any,web_url:any,issue_stats:any},commit_path:string,tag_path:string,assets:{count:number,sources:any,links:any},evidences:{sha:any,filepath:any,collected_at:any},_links:{closed_issues_url:string,closed_merge_requests_url:string,edit_url:string,merged_merge_requests_url:string,opened_issues_url:string,opened_merge_requests_url:string,self:string}}]}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/releases',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'sort',type:'string'},{name:'simple',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "access_tokens": {
    get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:[{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,access_level:number},{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,access_level:number}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/access_tokens',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
    post: ({params,data}: {params:{id:string},data:{name:string,scopes:[string,string],expires_at:string,access_level:40}}, options?: {}): Promise<{code:201,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,access_level:number,token:string}}> => handler.apply({method:'post',url:'api/v4/groups/:id/access_tokens',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{name:'string',scopes:['string','string'],expires_at:'string',access_level:40},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    getOne: ({params}: {params:{id:string,token_id:string}}, options?: {}): Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,access_level:number}}> => handler.apply({method:'get',url:'api/v4/groups/:id/access_tokens/:token_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{id:string,token_id:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:404}> => handler.apply({method:'delete',url:'api/v4/groups/:id/access_tokens/:token_id',variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}]}, [client, { params}, options]),
    "rotate": {
      post: ({params,data}: {params:{id:string,token_id:string},data:{expires_at:string}}, options?: {}): Promise<{code:201,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,access_level:number,token:string}}> => handler.apply({method:'post',url:'api/v4/groups/:id/access_tokens/:token_id/rotate',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'token_id',type:'string'}],data:{mode:'raw',raw:{expires_at:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    }
  },
  "wikis": {
    get: ({params,query}: {params:{id:string},query?:{with_content:string}}, options?: {}): Promise<{code:200,data:[{format:string,slug:string,title:string},{format:string,slug:string,title:string}]}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/wikis',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'with_content',type:'string'}]}, [client, { params, query}, options]),
    post: ({params,data}: {params:{id:string},data:{title:string,content:string,front_matter:{title:string},format:string}}, options?: {}): Promise<{code:201,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:object}}|{code:400}|{code:404}|{code:422}> => handler.apply({method:'post',url:'api/v4/groups/:id/wikis',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{title:'string',content:'string',front_matter:{title:'string'},format:'markdown'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    getOne: ({params,query}: {params:{slug:string,id:string},query?:{version:string,render_html:string}}, options?: {}): Promise<{code:200,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:object}}|{code:404}> => handler.apply({method:'get',url:'api/v4/groups/:id/wikis/:slug',headers:{Accept:'application/json'},variable:[{name:'slug',type:'string'},{name:'id',type:'string'}],query:[{name:'version',type:'string'},{name:'render_html',type:'string'}]}, [client, { params, query}, options]),
    put: ({params,data}: {params:{id:string,slug:string},data:{title:string,front_matter:{title:string},content:string,format:string}}, options?: {}): Promise<{code:200,data:{format:string,slug:string,title:string,content:string,encoding:string,front_matter:object}}|{code:400}|{code:404}|{code:422}> => handler.apply({method:'put',url:'api/v4/groups/:id/wikis/:slug',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'slug',type:'string'}],data:{mode:'raw',raw:{title:'string',front_matter:{title:'string'},content:'string',format:'markdown'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{slug:string,id:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:404}> => handler.apply({method:'delete',url:'api/v4/groups/:id/wikis/:slug',variable:[{name:'slug',type:'string'},{name:'id',type:'string'}]}, [client, { params}, options]),
    "attachments": {
      post: ({params,data}: {params:{id:string},data:{file:ArrayBuffer,branch:string}}, options?: {}): Promise<{code:201,data:{file_name:string,file_path:string,branch:string,link:{url:string,markdown:string}}}|{code:404}> => handler.apply({method:'post',url:'api/v4/groups/:id/wikis/attachments',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{file:'ArrayBuffer',branch:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    }
  },
  "audit_events": {
    get: ({params,query}: {params:{id:string},query?:{created_after:string,created_before:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string},{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string}]}> => handler.apply({method:'get',url:'api/v4/groups/:id/audit_events',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    getOne: ({params}: {params:{audit_event_id:string,id:string}}, options?: {}): Promise<{code:200,data:{id:string,author_id:string,entity_id:string,entity_type:string,details:string,created_at:string}}> => handler.apply({method:'get',url:'api/v4/groups/:id/audit_events/:audit_event_id',headers:{Accept:'application/json'},variable:[{name:'audit_event_id',type:'string'},{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "import": {
    post: ({data}: {data:{path:string,name:string,parent_id:number,organization_id:number}}, options?: {}): Promise<{code:202}|{code:400}|{code:401}|{code:403}|{code:503}> => handler.apply({method:'post',url:'api/v4/groups/import',headers:{'Content-Type':'multipart/form-data'},variable:[],data:{mode:'formdata',formdata:{path:'string',name:'string',parent_id:'number',organization_id:'number'}}}, [client, {data}, options]),
    "authorize": {
      post: ({}: {}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/groups/import/authorize',variable:[]}, [client, {}, options])
    }
  }
})