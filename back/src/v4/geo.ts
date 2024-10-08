/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Geo {
  proxy: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 403;
    }>;
  };
  retrieve: {
    getOne: ({ params }: {
      params: {
        replicable_name: string;
        replicable_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 401;
    } | {
      code: 404;
    }>;
  };
  repositories: {
    pipeline_refs: {
      get: ({ params }: {
        params: {
          gl_repository: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
        data: [{
          pipeline_refs: [string, string];
        }, {
          pipeline_refs: [string, string];
        }];
      } | {
        code: 401;
      } | {
        code: 404;
      }>;
    };
  };
  status: {
    post: ({ data }: {
      data: {
        data: {
          geo_node_id: number;
          db_replication_lag_seconds: number;
          last_event_id: number;
          last_event_string: string;
          cursor_last_event_id: number;
          cursor_last_event_string: string;
          last_successful_status_check_at: string;
          status_message: string;
          replication_slots_count: number;
          replication_slots_used_count: number;
          replication_slots_max_retained_wal_bytes: number;
          version: string;
          revision: string;
          status: {
            projects_count: number;
            container_repositories_replication_enabled: boolean;
            lfs_objects_count: number;
            lfs_objects_checksum_total_count: number;
            lfs_objects_checksummed_count: number;
            lfs_objects_checksum_failed_count: number;
            lfs_objects_synced_count: number;
            lfs_objects_failed_count: number;
            lfs_objects_registry_count: number;
            lfs_objects_verification_total_count: number;
            lfs_objects_verified_count: number;
            lfs_objects_verification_failed_count: number;
            merge_request_diffs_count: number;
            merge_request_diffs_checksum_total_count: number;
            merge_request_diffs_checksummed_count: number;
            merge_request_diffs_checksum_failed_count: number;
            merge_request_diffs_synced_count: number;
            merge_request_diffs_failed_count: number;
            merge_request_diffs_registry_count: number;
            merge_request_diffs_verification_total_count: number;
            merge_request_diffs_verified_count: number;
            merge_request_diffs_verification_failed_count: number;
            package_files_count: number;
            package_files_checksum_total_count: number;
            package_files_checksummed_count: number;
            package_files_checksum_failed_count: number;
            package_files_synced_count: number;
            package_files_failed_count: number;
            package_files_registry_count: number;
            package_files_verification_total_count: number;
            package_files_verified_count: number;
            package_files_verification_failed_count: number;
            terraform_state_versions_count: number;
            terraform_state_versions_checksum_total_count: number;
            terraform_state_versions_checksummed_count: number;
            terraform_state_versions_checksum_failed_count: number;
            terraform_state_versions_synced_count: number;
            terraform_state_versions_failed_count: number;
            terraform_state_versions_registry_count: number;
            terraform_state_versions_verification_total_count: number;
            terraform_state_versions_verified_count: number;
            terraform_state_versions_verification_failed_count: number;
            snippet_repositories_count: number;
            snippet_repositories_checksum_total_count: number;
            snippet_repositories_checksummed_count: number;
            snippet_repositories_checksum_failed_count: number;
            snippet_repositories_synced_count: number;
            snippet_repositories_failed_count: number;
            snippet_repositories_registry_count: number;
            snippet_repositories_verification_total_count: number;
            snippet_repositories_verified_count: number;
            snippet_repositories_verification_failed_count: number;
            group_wiki_repositories_count: number;
            group_wiki_repositories_checksum_total_count: number;
            group_wiki_repositories_checksummed_count: number;
            group_wiki_repositories_checksum_failed_count: number;
            group_wiki_repositories_synced_count: number;
            group_wiki_repositories_failed_count: number;
            group_wiki_repositories_registry_count: number;
            group_wiki_repositories_verification_total_count: number;
            group_wiki_repositories_verified_count: number;
            group_wiki_repositories_verification_failed_count: number;
            pipeline_artifacts_count: number;
            pipeline_artifacts_checksum_total_count: number;
            pipeline_artifacts_checksummed_count: number;
            pipeline_artifacts_checksum_failed_count: number;
            pipeline_artifacts_synced_count: number;
            pipeline_artifacts_failed_count: number;
            pipeline_artifacts_registry_count: number;
            pipeline_artifacts_verification_total_count: number;
            pipeline_artifacts_verified_count: number;
            pipeline_artifacts_verification_failed_count: number;
            pages_deployments_count: number;
            pages_deployments_checksum_total_count: number;
            pages_deployments_checksummed_count: number;
            pages_deployments_checksum_failed_count: number;
            pages_deployments_synced_count: number;
            pages_deployments_failed_count: number;
            pages_deployments_registry_count: number;
            pages_deployments_verification_total_count: number;
            pages_deployments_verified_count: number;
            pages_deployments_verification_failed_count: number;
            uploads_count: number;
            uploads_checksum_total_count: number;
            uploads_checksummed_count: number;
            uploads_checksum_failed_count: number;
            uploads_synced_count: number;
            uploads_failed_count: number;
            uploads_registry_count: number;
            uploads_verification_total_count: number;
            uploads_verified_count: number;
            uploads_verification_failed_count: number;
            job_artifacts_count: number;
            job_artifacts_checksum_total_count: number;
            job_artifacts_checksummed_count: number;
            job_artifacts_checksum_failed_count: number;
            job_artifacts_synced_count: number;
            job_artifacts_failed_count: number;
            job_artifacts_registry_count: number;
            job_artifacts_verification_total_count: number;
            job_artifacts_verified_count: number;
            job_artifacts_verification_failed_count: number;
            ci_secure_files_count: number;
            ci_secure_files_checksum_total_count: number;
            ci_secure_files_checksummed_count: number;
            ci_secure_files_checksum_failed_count: number;
            ci_secure_files_synced_count: number;
            ci_secure_files_failed_count: number;
            ci_secure_files_registry_count: number;
            ci_secure_files_verification_total_count: number;
            ci_secure_files_verified_count: number;
            ci_secure_files_verification_failed_count: number;
            container_repositories_count: number;
            container_repositories_checksum_total_count: number;
            container_repositories_checksummed_count: number;
            container_repositories_checksum_failed_count: number;
            container_repositories_synced_count: number;
            container_repositories_failed_count: number;
            container_repositories_registry_count: number;
            container_repositories_verification_total_count: number;
            container_repositories_verified_count: number;
            container_repositories_verification_failed_count: number;
            git_fetch_event_count_weekly: number;
            git_push_event_count_weekly: number;
            proxy_remote_requests_event_count_weekly: number;
            proxy_local_requests_event_count_weekly: number;
          };
        };
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        geo_node_id: string;
        projects_count: string;
        container_repositories_replication_enabled: string;
        lfs_objects_count: string;
        lfs_objects_checksum_total_count: string;
        lfs_objects_checksummed_count: string;
        lfs_objects_checksum_failed_count: string;
        lfs_objects_synced_count: string;
        lfs_objects_failed_count: string;
        lfs_objects_registry_count: string;
        lfs_objects_verification_total_count: string;
        lfs_objects_verified_count: string;
        lfs_objects_verification_failed_count: string;
        merge_request_diffs_count: string;
        merge_request_diffs_checksum_total_count: string;
        merge_request_diffs_checksummed_count: string;
        merge_request_diffs_checksum_failed_count: string;
        merge_request_diffs_synced_count: string;
        merge_request_diffs_failed_count: string;
        merge_request_diffs_registry_count: string;
        merge_request_diffs_verification_total_count: string;
        merge_request_diffs_verified_count: string;
        merge_request_diffs_verification_failed_count: string;
        package_files_count: string;
        package_files_checksum_total_count: string;
        package_files_checksummed_count: string;
        package_files_checksum_failed_count: string;
        package_files_synced_count: string;
        package_files_failed_count: string;
        package_files_registry_count: string;
        package_files_verification_total_count: string;
        package_files_verified_count: string;
        package_files_verification_failed_count: string;
        terraform_state_versions_count: string;
        terraform_state_versions_checksum_total_count: string;
        terraform_state_versions_checksummed_count: string;
        terraform_state_versions_checksum_failed_count: string;
        terraform_state_versions_synced_count: string;
        terraform_state_versions_failed_count: string;
        terraform_state_versions_registry_count: string;
        terraform_state_versions_verification_total_count: string;
        terraform_state_versions_verified_count: string;
        terraform_state_versions_verification_failed_count: string;
        snippet_repositories_count: string;
        snippet_repositories_checksum_total_count: string;
        snippet_repositories_checksummed_count: string;
        snippet_repositories_checksum_failed_count: string;
        snippet_repositories_synced_count: string;
        snippet_repositories_failed_count: string;
        snippet_repositories_registry_count: string;
        snippet_repositories_verification_total_count: string;
        snippet_repositories_verified_count: string;
        snippet_repositories_verification_failed_count: string;
        group_wiki_repositories_count: string;
        group_wiki_repositories_checksum_total_count: string;
        group_wiki_repositories_checksummed_count: string;
        group_wiki_repositories_checksum_failed_count: string;
        group_wiki_repositories_synced_count: string;
        group_wiki_repositories_failed_count: string;
        group_wiki_repositories_registry_count: string;
        group_wiki_repositories_verification_total_count: string;
        group_wiki_repositories_verified_count: string;
        group_wiki_repositories_verification_failed_count: string;
        pipeline_artifacts_count: string;
        pipeline_artifacts_checksum_total_count: string;
        pipeline_artifacts_checksummed_count: string;
        pipeline_artifacts_checksum_failed_count: string;
        pipeline_artifacts_synced_count: string;
        pipeline_artifacts_failed_count: string;
        pipeline_artifacts_registry_count: string;
        pipeline_artifacts_verification_total_count: string;
        pipeline_artifacts_verified_count: string;
        pipeline_artifacts_verification_failed_count: string;
        pages_deployments_count: string;
        pages_deployments_checksum_total_count: string;
        pages_deployments_checksummed_count: string;
        pages_deployments_checksum_failed_count: string;
        pages_deployments_synced_count: string;
        pages_deployments_failed_count: string;
        pages_deployments_registry_count: string;
        pages_deployments_verification_total_count: string;
        pages_deployments_verified_count: string;
        pages_deployments_verification_failed_count: string;
        uploads_count: string;
        uploads_checksum_total_count: string;
        uploads_checksummed_count: string;
        uploads_checksum_failed_count: string;
        uploads_synced_count: string;
        uploads_failed_count: string;
        uploads_registry_count: string;
        uploads_verification_total_count: string;
        uploads_verified_count: string;
        uploads_verification_failed_count: string;
        job_artifacts_count: string;
        job_artifacts_checksum_total_count: string;
        job_artifacts_checksummed_count: string;
        job_artifacts_checksum_failed_count: string;
        job_artifacts_synced_count: string;
        job_artifacts_failed_count: string;
        job_artifacts_registry_count: string;
        job_artifacts_verification_total_count: string;
        job_artifacts_verified_count: string;
        job_artifacts_verification_failed_count: string;
        ci_secure_files_count: string;
        ci_secure_files_checksum_total_count: string;
        ci_secure_files_checksummed_count: string;
        ci_secure_files_checksum_failed_count: string;
        ci_secure_files_synced_count: string;
        ci_secure_files_failed_count: string;
        ci_secure_files_registry_count: string;
        ci_secure_files_verification_total_count: string;
        ci_secure_files_verified_count: string;
        ci_secure_files_verification_failed_count: string;
        container_repositories_count: string;
        container_repositories_checksum_total_count: string;
        container_repositories_checksummed_count: string;
        container_repositories_checksum_failed_count: string;
        container_repositories_synced_count: string;
        container_repositories_failed_count: string;
        container_repositories_registry_count: string;
        container_repositories_verification_total_count: string;
        container_repositories_verified_count: string;
        container_repositories_verification_failed_count: string;
        dependency_proxy_blobs_count: string;
        dependency_proxy_blobs_checksum_total_count: string;
        dependency_proxy_blobs_checksummed_count: string;
        dependency_proxy_blobs_checksum_failed_count: string;
        dependency_proxy_blobs_synced_count: string;
        dependency_proxy_blobs_failed_count: string;
        dependency_proxy_blobs_registry_count: string;
        dependency_proxy_blobs_verification_total_count: string;
        dependency_proxy_blobs_verified_count: string;
        dependency_proxy_blobs_verification_failed_count: string;
        dependency_proxy_manifests_count: string;
        dependency_proxy_manifests_checksum_total_count: string;
        dependency_proxy_manifests_checksummed_count: string;
        dependency_proxy_manifests_checksum_failed_count: string;
        dependency_proxy_manifests_synced_count: string;
        dependency_proxy_manifests_failed_count: string;
        dependency_proxy_manifests_registry_count: string;
        dependency_proxy_manifests_verification_total_count: string;
        dependency_proxy_manifests_verified_count: string;
        dependency_proxy_manifests_verification_failed_count: string;
        project_wiki_repositories_count: string;
        project_wiki_repositories_checksum_total_count: string;
        project_wiki_repositories_checksummed_count: string;
        project_wiki_repositories_checksum_failed_count: string;
        project_wiki_repositories_synced_count: string;
        project_wiki_repositories_failed_count: string;
        project_wiki_repositories_registry_count: string;
        project_wiki_repositories_verification_total_count: string;
        project_wiki_repositories_verified_count: string;
        project_wiki_repositories_verification_failed_count: string;
        design_management_repositories_count: string;
        design_management_repositories_checksum_total_count: string;
        design_management_repositories_checksummed_count: string;
        design_management_repositories_checksum_failed_count: string;
        design_management_repositories_synced_count: string;
        design_management_repositories_failed_count: string;
        design_management_repositories_registry_count: string;
        design_management_repositories_verification_total_count: string;
        design_management_repositories_verified_count: string;
        design_management_repositories_verification_failed_count: string;
        project_repositories_count: string;
        project_repositories_checksum_total_count: string;
        project_repositories_checksummed_count: string;
        project_repositories_checksum_failed_count: string;
        project_repositories_synced_count: string;
        project_repositories_failed_count: string;
        project_repositories_registry_count: string;
        project_repositories_verification_total_count: string;
        project_repositories_verified_count: string;
        project_repositories_verification_failed_count: string;
        git_fetch_event_count_weekly: string;
        git_push_event_count_weekly: string;
        proxy_remote_requests_event_count_weekly: string;
        proxy_local_requests_event_count_weekly: string;
        repositories_checked_in_percentage: string;
        replication_slots_used_in_percentage: string;
        lfs_objects_synced_in_percentage: string;
        lfs_objects_verified_in_percentage: string;
        merge_request_diffs_synced_in_percentage: string;
        merge_request_diffs_verified_in_percentage: string;
        package_files_synced_in_percentage: string;
        package_files_verified_in_percentage: string;
        terraform_state_versions_synced_in_percentage: string;
        terraform_state_versions_verified_in_percentage: string;
        snippet_repositories_synced_in_percentage: string;
        snippet_repositories_verified_in_percentage: string;
        group_wiki_repositories_synced_in_percentage: string;
        group_wiki_repositories_verified_in_percentage: string;
        pipeline_artifacts_synced_in_percentage: string;
        pipeline_artifacts_verified_in_percentage: string;
        pages_deployments_synced_in_percentage: string;
        pages_deployments_verified_in_percentage: string;
        uploads_synced_in_percentage: string;
        uploads_verified_in_percentage: string;
        job_artifacts_synced_in_percentage: string;
        job_artifacts_verified_in_percentage: string;
        ci_secure_files_synced_in_percentage: string;
        ci_secure_files_verified_in_percentage: string;
        container_repositories_synced_in_percentage: string;
        container_repositories_verified_in_percentage: string;
        dependency_proxy_blobs_synced_in_percentage: string;
        dependency_proxy_blobs_verified_in_percentage: string;
        dependency_proxy_manifests_synced_in_percentage: string;
        dependency_proxy_manifests_verified_in_percentage: string;
        project_wiki_repositories_synced_in_percentage: string;
        project_wiki_repositories_verified_in_percentage: string;
        design_management_repositories_synced_in_percentage: string;
        design_management_repositories_verified_in_percentage: string;
        project_repositories_synced_in_percentage: string;
        project_repositories_verified_in_percentage: string;
        repositories_count: string;
        replication_slots_count: string;
        replication_slots_used_count: string;
        healthy: string;
        health: string;
        health_status: string;
        missing_oauth_application: string;
        db_replication_lag_seconds: string;
        replication_slots_max_retained_wal_bytes: string;
        repositories_checked_count: string;
        repositories_checked_failed_count: string;
        last_event_id: string;
        last_event_timestamp: string;
        cursor_last_event_id: string;
        cursor_last_event_timestamp: string;
        last_successful_status_check_timestamp: string;
        version: string;
        revision: string;
        selective_sync_type: string;
        namespaces: {
          id: number;
          name: string;
          path: string;
          kind: string;
          full_path: string;
          parent_id: number;
          avatar_url: string;
          web_url: string;
        };
        upstringd_at: string;
        storage_shards: {
          name: string;
        };
        storage_shards_match: string;
        _links: {
          self: string;
          node: string;
        };
      };
    } | {
      code: 400;
    } | {
      code: 401;
    }>;
  };
  proxy_git_ssh: {
    info_refs_upload_pack: {
      post: ({ data }: {
        data: {
          secret_token: string;
          data: {
            gl_id: string;
            primary_repo: string;
          };
        };
      }, options?: {}) => Promise<{
        code: 200;
      } | {
        code: 401;
      }>;
    };
    upload_pack: {
      post: ({ data }: {
        data: {
          secret_token: string;
          data: {
            gl_id: string;
            primary_repo: string;
          };
          output: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
      } | {
        code: 401;
      }>;
    };
    info_refs_receive_pack: {
      post: ({ data }: {
        data: {
          secret_token: string;
          data: {
            gl_id: string;
            primary_repo: string;
          };
        };
      }, options?: {}) => Promise<{
        code: 200;
      } | {
        code: 401;
      }>;
    };
    receive_pack: {
      post: ({ data }: {
        data: {
          secret_token: string;
          data: {
            gl_id: string;
            primary_repo: string;
          };
          output: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
      } | {
        code: 401;
      }>;
    };
  };
  node_proxy: {
    graphql: {
      post: ({ params }: {
        params: {
          id: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
      } | {
        code: 404;
      }>;
    };
  };
};

export default (client: Client, handler: Handler): Geo => ({
  "proxy": {
    get: ({}: {}, options?: {}): Promise<{code:200}|{code:403}> => handler.apply({method:'get',url:'api/v4/geo/proxy',variable:[]}, [client, {}, options])
  },
  "retrieve": {
    getOne: ({params}: {params:{replicable_name:string,replicable_id:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/geo/retrieve/:replicable_name/:replicable_id',variable:[{name:'replicable_name',type:'string'},{name:'replicable_id',type:'string'}]}, [client, { params}, options])
  },
  "repositories": {
    "pipeline_refs": {
      get: ({params}: {params:{gl_repository:string}}, options?: {}): Promise<{code:200,data:[{pipeline_refs:[string,string]},{pipeline_refs:[string,string]}]}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/geo/repositories/:gl_repository/pipeline_refs',headers:{Accept:'application/json'},variable:[{name:'gl_repository',type:'string'}]}, [client, { params}, options])
    }
  },
  "status": {
    post: ({data}: {data:{data:{geo_node_id:number,db_replication_lag_seconds:number,last_event_id:number,last_event_string:string,cursor_last_event_id:number,cursor_last_event_string:string,last_successful_status_check_at:string,status_message:string,replication_slots_count:number,replication_slots_used_count:number,replication_slots_max_retained_wal_bytes:number,version:string,revision:string,status:{projects_count:number,container_repositories_replication_enabled:boolean,lfs_objects_count:number,lfs_objects_checksum_total_count:number,lfs_objects_checksummed_count:number,lfs_objects_checksum_failed_count:number,lfs_objects_synced_count:number,lfs_objects_failed_count:number,lfs_objects_registry_count:number,lfs_objects_verification_total_count:number,lfs_objects_verified_count:number,lfs_objects_verification_failed_count:number,merge_request_diffs_count:number,merge_request_diffs_checksum_total_count:number,merge_request_diffs_checksummed_count:number,merge_request_diffs_checksum_failed_count:number,merge_request_diffs_synced_count:number,merge_request_diffs_failed_count:number,merge_request_diffs_registry_count:number,merge_request_diffs_verification_total_count:number,merge_request_diffs_verified_count:number,merge_request_diffs_verification_failed_count:number,package_files_count:number,package_files_checksum_total_count:number,package_files_checksummed_count:number,package_files_checksum_failed_count:number,package_files_synced_count:number,package_files_failed_count:number,package_files_registry_count:number,package_files_verification_total_count:number,package_files_verified_count:number,package_files_verification_failed_count:number,terraform_state_versions_count:number,terraform_state_versions_checksum_total_count:number,terraform_state_versions_checksummed_count:number,terraform_state_versions_checksum_failed_count:number,terraform_state_versions_synced_count:number,terraform_state_versions_failed_count:number,terraform_state_versions_registry_count:number,terraform_state_versions_verification_total_count:number,terraform_state_versions_verified_count:number,terraform_state_versions_verification_failed_count:number,snippet_repositories_count:number,snippet_repositories_checksum_total_count:number,snippet_repositories_checksummed_count:number,snippet_repositories_checksum_failed_count:number,snippet_repositories_synced_count:number,snippet_repositories_failed_count:number,snippet_repositories_registry_count:number,snippet_repositories_verification_total_count:number,snippet_repositories_verified_count:number,snippet_repositories_verification_failed_count:number,group_wiki_repositories_count:number,group_wiki_repositories_checksum_total_count:number,group_wiki_repositories_checksummed_count:number,group_wiki_repositories_checksum_failed_count:number,group_wiki_repositories_synced_count:number,group_wiki_repositories_failed_count:number,group_wiki_repositories_registry_count:number,group_wiki_repositories_verification_total_count:number,group_wiki_repositories_verified_count:number,group_wiki_repositories_verification_failed_count:number,pipeline_artifacts_count:number,pipeline_artifacts_checksum_total_count:number,pipeline_artifacts_checksummed_count:number,pipeline_artifacts_checksum_failed_count:number,pipeline_artifacts_synced_count:number,pipeline_artifacts_failed_count:number,pipeline_artifacts_registry_count:number,pipeline_artifacts_verification_total_count:number,pipeline_artifacts_verified_count:number,pipeline_artifacts_verification_failed_count:number,pages_deployments_count:number,pages_deployments_checksum_total_count:number,pages_deployments_checksummed_count:number,pages_deployments_checksum_failed_count:number,pages_deployments_synced_count:number,pages_deployments_failed_count:number,pages_deployments_registry_count:number,pages_deployments_verification_total_count:number,pages_deployments_verified_count:number,pages_deployments_verification_failed_count:number,uploads_count:number,uploads_checksum_total_count:number,uploads_checksummed_count:number,uploads_checksum_failed_count:number,uploads_synced_count:number,uploads_failed_count:number,uploads_registry_count:number,uploads_verification_total_count:number,uploads_verified_count:number,uploads_verification_failed_count:number,job_artifacts_count:number,job_artifacts_checksum_total_count:number,job_artifacts_checksummed_count:number,job_artifacts_checksum_failed_count:number,job_artifacts_synced_count:number,job_artifacts_failed_count:number,job_artifacts_registry_count:number,job_artifacts_verification_total_count:number,job_artifacts_verified_count:number,job_artifacts_verification_failed_count:number,ci_secure_files_count:number,ci_secure_files_checksum_total_count:number,ci_secure_files_checksummed_count:number,ci_secure_files_checksum_failed_count:number,ci_secure_files_synced_count:number,ci_secure_files_failed_count:number,ci_secure_files_registry_count:number,ci_secure_files_verification_total_count:number,ci_secure_files_verified_count:number,ci_secure_files_verification_failed_count:number,container_repositories_count:number,container_repositories_checksum_total_count:number,container_repositories_checksummed_count:number,container_repositories_checksum_failed_count:number,container_repositories_synced_count:number,container_repositories_failed_count:number,container_repositories_registry_count:number,container_repositories_verification_total_count:number,container_repositories_verified_count:number,container_repositories_verification_failed_count:number,git_fetch_event_count_weekly:number,git_push_event_count_weekly:number,proxy_remote_requests_event_count_weekly:number,proxy_local_requests_event_count_weekly:number}}}}, options?: {}): Promise<{code:200,data:{geo_node_id:string,projects_count:string,container_repositories_replication_enabled:string,lfs_objects_count:string,lfs_objects_checksum_total_count:string,lfs_objects_checksummed_count:string,lfs_objects_checksum_failed_count:string,lfs_objects_synced_count:string,lfs_objects_failed_count:string,lfs_objects_registry_count:string,lfs_objects_verification_total_count:string,lfs_objects_verified_count:string,lfs_objects_verification_failed_count:string,merge_request_diffs_count:string,merge_request_diffs_checksum_total_count:string,merge_request_diffs_checksummed_count:string,merge_request_diffs_checksum_failed_count:string,merge_request_diffs_synced_count:string,merge_request_diffs_failed_count:string,merge_request_diffs_registry_count:string,merge_request_diffs_verification_total_count:string,merge_request_diffs_verified_count:string,merge_request_diffs_verification_failed_count:string,package_files_count:string,package_files_checksum_total_count:string,package_files_checksummed_count:string,package_files_checksum_failed_count:string,package_files_synced_count:string,package_files_failed_count:string,package_files_registry_count:string,package_files_verification_total_count:string,package_files_verified_count:string,package_files_verification_failed_count:string,terraform_state_versions_count:string,terraform_state_versions_checksum_total_count:string,terraform_state_versions_checksummed_count:string,terraform_state_versions_checksum_failed_count:string,terraform_state_versions_synced_count:string,terraform_state_versions_failed_count:string,terraform_state_versions_registry_count:string,terraform_state_versions_verification_total_count:string,terraform_state_versions_verified_count:string,terraform_state_versions_verification_failed_count:string,snippet_repositories_count:string,snippet_repositories_checksum_total_count:string,snippet_repositories_checksummed_count:string,snippet_repositories_checksum_failed_count:string,snippet_repositories_synced_count:string,snippet_repositories_failed_count:string,snippet_repositories_registry_count:string,snippet_repositories_verification_total_count:string,snippet_repositories_verified_count:string,snippet_repositories_verification_failed_count:string,group_wiki_repositories_count:string,group_wiki_repositories_checksum_total_count:string,group_wiki_repositories_checksummed_count:string,group_wiki_repositories_checksum_failed_count:string,group_wiki_repositories_synced_count:string,group_wiki_repositories_failed_count:string,group_wiki_repositories_registry_count:string,group_wiki_repositories_verification_total_count:string,group_wiki_repositories_verified_count:string,group_wiki_repositories_verification_failed_count:string,pipeline_artifacts_count:string,pipeline_artifacts_checksum_total_count:string,pipeline_artifacts_checksummed_count:string,pipeline_artifacts_checksum_failed_count:string,pipeline_artifacts_synced_count:string,pipeline_artifacts_failed_count:string,pipeline_artifacts_registry_count:string,pipeline_artifacts_verification_total_count:string,pipeline_artifacts_verified_count:string,pipeline_artifacts_verification_failed_count:string,pages_deployments_count:string,pages_deployments_checksum_total_count:string,pages_deployments_checksummed_count:string,pages_deployments_checksum_failed_count:string,pages_deployments_synced_count:string,pages_deployments_failed_count:string,pages_deployments_registry_count:string,pages_deployments_verification_total_count:string,pages_deployments_verified_count:string,pages_deployments_verification_failed_count:string,uploads_count:string,uploads_checksum_total_count:string,uploads_checksummed_count:string,uploads_checksum_failed_count:string,uploads_synced_count:string,uploads_failed_count:string,uploads_registry_count:string,uploads_verification_total_count:string,uploads_verified_count:string,uploads_verification_failed_count:string,job_artifacts_count:string,job_artifacts_checksum_total_count:string,job_artifacts_checksummed_count:string,job_artifacts_checksum_failed_count:string,job_artifacts_synced_count:string,job_artifacts_failed_count:string,job_artifacts_registry_count:string,job_artifacts_verification_total_count:string,job_artifacts_verified_count:string,job_artifacts_verification_failed_count:string,ci_secure_files_count:string,ci_secure_files_checksum_total_count:string,ci_secure_files_checksummed_count:string,ci_secure_files_checksum_failed_count:string,ci_secure_files_synced_count:string,ci_secure_files_failed_count:string,ci_secure_files_registry_count:string,ci_secure_files_verification_total_count:string,ci_secure_files_verified_count:string,ci_secure_files_verification_failed_count:string,container_repositories_count:string,container_repositories_checksum_total_count:string,container_repositories_checksummed_count:string,container_repositories_checksum_failed_count:string,container_repositories_synced_count:string,container_repositories_failed_count:string,container_repositories_registry_count:string,container_repositories_verification_total_count:string,container_repositories_verified_count:string,container_repositories_verification_failed_count:string,dependency_proxy_blobs_count:string,dependency_proxy_blobs_checksum_total_count:string,dependency_proxy_blobs_checksummed_count:string,dependency_proxy_blobs_checksum_failed_count:string,dependency_proxy_blobs_synced_count:string,dependency_proxy_blobs_failed_count:string,dependency_proxy_blobs_registry_count:string,dependency_proxy_blobs_verification_total_count:string,dependency_proxy_blobs_verified_count:string,dependency_proxy_blobs_verification_failed_count:string,dependency_proxy_manifests_count:string,dependency_proxy_manifests_checksum_total_count:string,dependency_proxy_manifests_checksummed_count:string,dependency_proxy_manifests_checksum_failed_count:string,dependency_proxy_manifests_synced_count:string,dependency_proxy_manifests_failed_count:string,dependency_proxy_manifests_registry_count:string,dependency_proxy_manifests_verification_total_count:string,dependency_proxy_manifests_verified_count:string,dependency_proxy_manifests_verification_failed_count:string,project_wiki_repositories_count:string,project_wiki_repositories_checksum_total_count:string,project_wiki_repositories_checksummed_count:string,project_wiki_repositories_checksum_failed_count:string,project_wiki_repositories_synced_count:string,project_wiki_repositories_failed_count:string,project_wiki_repositories_registry_count:string,project_wiki_repositories_verification_total_count:string,project_wiki_repositories_verified_count:string,project_wiki_repositories_verification_failed_count:string,design_management_repositories_count:string,design_management_repositories_checksum_total_count:string,design_management_repositories_checksummed_count:string,design_management_repositories_checksum_failed_count:string,design_management_repositories_synced_count:string,design_management_repositories_failed_count:string,design_management_repositories_registry_count:string,design_management_repositories_verification_total_count:string,design_management_repositories_verified_count:string,design_management_repositories_verification_failed_count:string,project_repositories_count:string,project_repositories_checksum_total_count:string,project_repositories_checksummed_count:string,project_repositories_checksum_failed_count:string,project_repositories_synced_count:string,project_repositories_failed_count:string,project_repositories_registry_count:string,project_repositories_verification_total_count:string,project_repositories_verified_count:string,project_repositories_verification_failed_count:string,git_fetch_event_count_weekly:string,git_push_event_count_weekly:string,proxy_remote_requests_event_count_weekly:string,proxy_local_requests_event_count_weekly:string,repositories_checked_in_percentage:string,replication_slots_used_in_percentage:string,lfs_objects_synced_in_percentage:string,lfs_objects_verified_in_percentage:string,merge_request_diffs_synced_in_percentage:string,merge_request_diffs_verified_in_percentage:string,package_files_synced_in_percentage:string,package_files_verified_in_percentage:string,terraform_state_versions_synced_in_percentage:string,terraform_state_versions_verified_in_percentage:string,snippet_repositories_synced_in_percentage:string,snippet_repositories_verified_in_percentage:string,group_wiki_repositories_synced_in_percentage:string,group_wiki_repositories_verified_in_percentage:string,pipeline_artifacts_synced_in_percentage:string,pipeline_artifacts_verified_in_percentage:string,pages_deployments_synced_in_percentage:string,pages_deployments_verified_in_percentage:string,uploads_synced_in_percentage:string,uploads_verified_in_percentage:string,job_artifacts_synced_in_percentage:string,job_artifacts_verified_in_percentage:string,ci_secure_files_synced_in_percentage:string,ci_secure_files_verified_in_percentage:string,container_repositories_synced_in_percentage:string,container_repositories_verified_in_percentage:string,dependency_proxy_blobs_synced_in_percentage:string,dependency_proxy_blobs_verified_in_percentage:string,dependency_proxy_manifests_synced_in_percentage:string,dependency_proxy_manifests_verified_in_percentage:string,project_wiki_repositories_synced_in_percentage:string,project_wiki_repositories_verified_in_percentage:string,design_management_repositories_synced_in_percentage:string,design_management_repositories_verified_in_percentage:string,project_repositories_synced_in_percentage:string,project_repositories_verified_in_percentage:string,repositories_count:string,replication_slots_count:string,replication_slots_used_count:string,healthy:string,health:string,health_status:string,missing_oauth_application:string,db_replication_lag_seconds:string,replication_slots_max_retained_wal_bytes:string,repositories_checked_count:string,repositories_checked_failed_count:string,last_event_id:string,last_event_timestamp:string,cursor_last_event_id:string,cursor_last_event_timestamp:string,last_successful_status_check_timestamp:string,version:string,revision:string,selective_sync_type:string,namespaces:{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string},upstringd_at:string,storage_shards:{name:string},storage_shards_match:string,_links:{self:string,node:string}}}|{code:400}|{code:401}> => handler.apply({method:'post',url:'api/v4/geo/status',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{data:{geo_node_id:'number',db_replication_lag_seconds:'number',last_event_id:'number',last_event_string:'string',cursor_last_event_id:'number',cursor_last_event_string:'string',last_successful_status_check_at:'string',status_message:'string',replication_slots_count:'number',replication_slots_used_count:'number',replication_slots_max_retained_wal_bytes:'number',version:'string',revision:'string',status:{projects_count:'number',container_repositories_replication_enabled:'boolean',lfs_objects_count:'number',lfs_objects_checksum_total_count:'number',lfs_objects_checksummed_count:'number',lfs_objects_checksum_failed_count:'number',lfs_objects_synced_count:'number',lfs_objects_failed_count:'number',lfs_objects_registry_count:'number',lfs_objects_verification_total_count:'number',lfs_objects_verified_count:'number',lfs_objects_verification_failed_count:'number',merge_request_diffs_count:'number',merge_request_diffs_checksum_total_count:'number',merge_request_diffs_checksummed_count:'number',merge_request_diffs_checksum_failed_count:'number',merge_request_diffs_synced_count:'number',merge_request_diffs_failed_count:'number',merge_request_diffs_registry_count:'number',merge_request_diffs_verification_total_count:'number',merge_request_diffs_verified_count:'number',merge_request_diffs_verification_failed_count:'number',package_files_count:'number',package_files_checksum_total_count:'number',package_files_checksummed_count:'number',package_files_checksum_failed_count:'number',package_files_synced_count:'number',package_files_failed_count:'number',package_files_registry_count:'number',package_files_verification_total_count:'number',package_files_verified_count:'number',package_files_verification_failed_count:'number',terraform_state_versions_count:'number',terraform_state_versions_checksum_total_count:'number',terraform_state_versions_checksummed_count:'number',terraform_state_versions_checksum_failed_count:'number',terraform_state_versions_synced_count:'number',terraform_state_versions_failed_count:'number',terraform_state_versions_registry_count:'number',terraform_state_versions_verification_total_count:'number',terraform_state_versions_verified_count:'number',terraform_state_versions_verification_failed_count:'number',snippet_repositories_count:'number',snippet_repositories_checksum_total_count:'number',snippet_repositories_checksummed_count:'number',snippet_repositories_checksum_failed_count:'number',snippet_repositories_synced_count:'number',snippet_repositories_failed_count:'number',snippet_repositories_registry_count:'number',snippet_repositories_verification_total_count:'number',snippet_repositories_verified_count:'number',snippet_repositories_verification_failed_count:'number',group_wiki_repositories_count:'number',group_wiki_repositories_checksum_total_count:'number',group_wiki_repositories_checksummed_count:'number',group_wiki_repositories_checksum_failed_count:'number',group_wiki_repositories_synced_count:'number',group_wiki_repositories_failed_count:'number',group_wiki_repositories_registry_count:'number',group_wiki_repositories_verification_total_count:'number',group_wiki_repositories_verified_count:'number',group_wiki_repositories_verification_failed_count:'number',pipeline_artifacts_count:'number',pipeline_artifacts_checksum_total_count:'number',pipeline_artifacts_checksummed_count:'number',pipeline_artifacts_checksum_failed_count:'number',pipeline_artifacts_synced_count:'number',pipeline_artifacts_failed_count:'number',pipeline_artifacts_registry_count:'number',pipeline_artifacts_verification_total_count:'number',pipeline_artifacts_verified_count:'number',pipeline_artifacts_verification_failed_count:'number',pages_deployments_count:'number',pages_deployments_checksum_total_count:'number',pages_deployments_checksummed_count:'number',pages_deployments_checksum_failed_count:'number',pages_deployments_synced_count:'number',pages_deployments_failed_count:'number',pages_deployments_registry_count:'number',pages_deployments_verification_total_count:'number',pages_deployments_verified_count:'number',pages_deployments_verification_failed_count:'number',uploads_count:'number',uploads_checksum_total_count:'number',uploads_checksummed_count:'number',uploads_checksum_failed_count:'number',uploads_synced_count:'number',uploads_failed_count:'number',uploads_registry_count:'number',uploads_verification_total_count:'number',uploads_verified_count:'number',uploads_verification_failed_count:'number',job_artifacts_count:'number',job_artifacts_checksum_total_count:'number',job_artifacts_checksummed_count:'number',job_artifacts_checksum_failed_count:'number',job_artifacts_synced_count:'number',job_artifacts_failed_count:'number',job_artifacts_registry_count:'number',job_artifacts_verification_total_count:'number',job_artifacts_verified_count:'number',job_artifacts_verification_failed_count:'number',ci_secure_files_count:'number',ci_secure_files_checksum_total_count:'number',ci_secure_files_checksummed_count:'number',ci_secure_files_checksum_failed_count:'number',ci_secure_files_synced_count:'number',ci_secure_files_failed_count:'number',ci_secure_files_registry_count:'number',ci_secure_files_verification_total_count:'number',ci_secure_files_verified_count:'number',ci_secure_files_verification_failed_count:'number',container_repositories_count:'number',container_repositories_checksum_total_count:'number',container_repositories_checksummed_count:'number',container_repositories_checksum_failed_count:'number',container_repositories_synced_count:'number',container_repositories_failed_count:'number',container_repositories_registry_count:'number',container_repositories_verification_total_count:'number',container_repositories_verified_count:'number',container_repositories_verification_failed_count:'number',git_fetch_event_count_weekly:'number',git_push_event_count_weekly:'number',proxy_remote_requests_event_count_weekly:'number',proxy_local_requests_event_count_weekly:'number'}}},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "proxy_git_ssh": {
    "info_refs_upload_pack": {
      post: ({data}: {data:{secret_token:string,data:{gl_id:string,primary_repo:string}}}, options?: {}): Promise<{code:200}|{code:401}> => handler.apply({method:'post',url:'api/v4/geo/proxy_git_ssh/info_refs_upload_pack',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{secret_token:'string',data:{gl_id:'string',primary_repo:'string'}},options:{raw:{language:'json'}}}}, [client, {data}, options])
    },
    "upload_pack": {
      post: ({data}: {data:{secret_token:string,data:{gl_id:string,primary_repo:string},output:string}}, options?: {}): Promise<{code:200}|{code:401}> => handler.apply({method:'post',url:'api/v4/geo/proxy_git_ssh/upload_pack',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{secret_token:'string',data:{gl_id:'string',primary_repo:'string'},output:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
    },
    "info_refs_receive_pack": {
      post: ({data}: {data:{secret_token:string,data:{gl_id:string,primary_repo:string}}}, options?: {}): Promise<{code:200}|{code:401}> => handler.apply({method:'post',url:'api/v4/geo/proxy_git_ssh/info_refs_receive_pack',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{secret_token:'string',data:{gl_id:'string',primary_repo:'string'}},options:{raw:{language:'json'}}}}, [client, {data}, options])
    },
    "receive_pack": {
      post: ({data}: {data:{secret_token:string,data:{gl_id:string,primary_repo:string},output:string}}, options?: {}): Promise<{code:200}|{code:401}> => handler.apply({method:'post',url:'api/v4/geo/proxy_git_ssh/receive_pack',headers:{'Content-Type':'application/json'},variable:[],data:{mode:'raw',raw:{secret_token:'string',data:{gl_id:'string',primary_repo:'string'},output:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options])
    }
  },
  "node_proxy": {
    "graphql": {
      post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}|{code:404}> => handler.apply({method:'post',url:'api/v4/geo/node_proxy/:id/graphql',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
    }
  }
})