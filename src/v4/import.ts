export default (client: any, request: any) => ({
  import: {
    bitbucket: {
      post: {
        method: "post",
        url: "api/v4/import/bitbucket",
        resource: "bitbucket",
        variable: [],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 17.0.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            bitbucket_username: "string",
            bitbucket_app_password: "string",
            repo_path: "string",
            target_namespace: "string",
            new_name: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{data:{bitbucket_username:string,bitbucket_app_password:string,repo_path:string,target_namespace:string,new_name:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string,import_source:string,import_status:string,human_import_status_name:string,provider_link:string,import_error:string,import_warning:string,relation_type:string}},{code:400},{code:401},{code:403},{code:422},{code:503}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    },
    bitbucket_server: {
      post: {
        method: "post",
        url: "api/v4/import/bitbucket_server",
        resource: "bitbucket_server",
        variable: [],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 13.2.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            bitbucket_server_url: "string",
            bitbucket_server_username: "string",
            personal_access_token: "string",
            bitbucket_server_project: "string",
            bitbucket_server_repo: "string",
            new_name: "string",
            new_namespace: "string",
            timeout_strategy: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{data:{bitbucket_server_url:string,bitbucket_server_username:string,personal_access_token:string,bitbucket_server_project:string,bitbucket_server_repo:string,new_name:string,new_namespace:string,timeout_strategy:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string}},{code:400},{code:401},{code:403},{code:422},{code:503}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    },
    github: {
      post: {
        method: "post",
        url: "api/v4/import/github",
        resource: "github",
        variable: [],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 11.3.4.",
        query: [],
        data: {
          mode: "raw",
          raw: {
            personal_access_token: "string",
            repo_id: "number",
            target_namespace: "string",
            new_name: "string",
            github_hostname: "string",
            optional_stages: "object",
            timeout_strategy: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{data:{personal_access_token:string,repo_id:number,target_namespace:string,new_name:string,github_hostname:string,optional_stages:object,timeout_strategy:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string}},{code:400},{code:401},{code:403},{code:422},{code:503}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      },
      cancel: {
        post: {
          method: "post",
          url: "api/v4/import/github/cancel",
          resource: "cancel",
          variable: [],
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          description: "This feature was introduced in GitLab 15.5",
          query: [],
          data: {
            mode: "raw",
            raw: {
              project_id: "number"
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{data:{project_id:number},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string,import_source:string,import_status:string,human_import_status_name:string,provider_link:string,import_error:string,import_warning:string,relation_type:string}},{code:400},{code:401},{code:403},{code:404},{code:503}]} */
          send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
        }
      },
      gists: {
        post: {
          method: "post",
          url: "api/v4/import/github/gists",
          resource: "gists",
          variable: [],
          headers: {
            "Content-Type": "application/json"
          },
          description: "This feature was introduced in GitLab 15.8",
          query: [],
          data: {
            mode: "raw",
            raw: {
              personal_access_token: "string"
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },

          /** @param {{data:{personal_access_token:string},clientOptions:{}}} requestOptions * @return {[{code:202},{code:401},{code:422},{code:429}]} */
          send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
        }
      }
    }
  }
});