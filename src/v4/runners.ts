export default (client: any, request: any) => ({
  runners: {
    post: {
      method: "post",
      url: "api/v4/runners",
      resource: "runners",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Register a new runner for the instance",
      query: [],
      data: {
        mode: "raw",
        raw: {
          token: "string",
          description: "string",
          maintainer_note: "string",
          maintenance_note: "string",
          info: {
            name: "string",
            version: "string",
            revision: "string",
            platform: "string",
            architecture: "string"
          },
          active: "boolean",
          paused: "boolean",
          locked: "boolean",
          access_level: "string",
          run_untagged: "boolean",
          tag_list: [
            "string",
            "string"
          ],
          maximum_timeout: "number"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },
      /** @param {{data:{token:string,description:string,maintainer_note:string,maintenance_note:string,info:{name:string,version:string,revision:string,platform:string,architecture:string},active:boolean,paused:boolean,locked:boolean,access_level:string,run_untagged:boolean,tag_list:[string,string],maximum_timeout:number},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,token:string,token_expires_at:string}},{code:400},{code:403},{code:410}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/runners/:id",
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
      description: "Remove a runner",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}},{code:401},{code:403},{code:404},{code:412}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    get: {
      method: "get",
      url: "api/v4/runners",
      resource: "runners",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get runners available for user",
      query: [
        {
          name: "scope",
          type: "string"
        },
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
      /** @param {{query:{scope:string,type:string,paused:string,status:string,tag_list:string,version_prefix:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}},{code:400},{code:401}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    managers: {
      delete: {
        method: "delete",
        url: "api/v4/runners/managers",
        resource: "managers",
        variable: [],
        headers: {},
        description: "Delete a registered runner manager",
        query: [
          {
            name: "token",
            type: "string"
          },
          {
            name: "system_id",
            type: "string"
          }
        ],
        data: null,
        /** @param {{query:{token:string,system_id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:403},{code:404}]} */
        send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
      }
    },
    verify: {
      post: {
        method: "post",
        url: "api/v4/runners/verify",
        resource: "verify",
        variable: [],
        headers: {
          "Content-Type": "application/json"
        },
        description: "Validate authentication credentials",
        query: [],
        data: {
          mode: "raw",
          raw: {
            token: "string",
            system_id: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{data:{token:string,system_id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    },
    reset_authentication_token: {
      post: {
        method: "post",
        url: "api/v4/runners/:id/reset_authentication_token",
        resource: "reset_authentication_token",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Reset runner authentication token",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{token:string,token_expires_at:string}},{code:403},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    },
    all: {
      get: {
        method: "get",
        url: "api/v4/runners/all",
        resource: "all",
        variable: [],
        headers: {
          Accept: "application/json"
        },
        description: "Get a list of all runners in the GitLab instance (shared and project). Access is restricted to users with administrator access.",
        query: [
          {
            name: "scope",
            type: "string"
          },
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
        /** @param {{query:{scope:string,type:string,paused:string,status:string,tag_list:string,version_prefix:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string}},{code:400},{code:401}]} */
        send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
      }
    },
    getOne: {
      method: "get",
      url: "api/v4/runners/:id",
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
      description: "At least the Maintainer role is required to get runner details at the project and group level. Instance-level runner details via this endpoint are available to all signed in users.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string,tag_list:string,run_untagged:string,locked:string,maximum_timeout:string,access_level:string,version:string,revision:string,platform:string,architecture:string,contacted_at:string,maintenance_note:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},groups:{id:string,web_url:string,name:string}}},{code:401},{code:403},{code:404}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/runners/:id",
      resource: "runners",
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
      description: "Update runner's details",
      query: [],
      data: {
        mode: "raw",
        raw: {
          description: "string",
          active: "boolean",
          paused: "boolean",
          tag_list: [
            "string",
            "string"
          ],
          run_untagged: "boolean",
          locked: "boolean",
          access_level: "string",
          maximum_timeout: "number",
          maintenance_note: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{description:string,active:boolean,paused:boolean,tag_list:[string,string],run_untagged:boolean,locked:boolean,access_level:string,maximum_timeout:number,maintenance_note:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string,tag_list:string,run_untagged:string,locked:string,maximum_timeout:string,access_level:string,version:string,revision:string,platform:string,architecture:string,contacted_at:string,maintenance_note:string,projects:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},groups:{id:string,web_url:string,name:string}}},{code:400},{code:401},{code:403},{code:404}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    jobs: {
      get: {
        method: "get",
        url: "api/v4/runners/:id/jobs",
        resource: "jobs",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "List jobs that are being processed or were processed by the specified runner. The list of jobs is limited to projects where the user has at least the Reporter role.",
        query: [
          {
            name: "system_id",
            type: "string"
          },
          {
            name: "status",
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
            name: "cursor",
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
        /** @param {{params:{id:string},query:{system_id:string,status:string,order_by:string,sort:string,cursor:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,status:string,stage:string,name:string,ref:string,tag:boolean,coverage:float,allow_failure:boolean,created_at:dateTime,started_at:dateTime,finished_at:dateTime,erased_at:dateTime,duration:float,queued_duration:float,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string},commit:{id:string,short_id:string,created_at:dateTime,parent_ids:[string,string],title:string,message:string,author_name:string,author_email:string,authored_date:dateTime,committer_name:string,committer_email:string,committed_date:dateTime,trailers:object,extended_trailers:object,web_url:string},pipeline:{id:number,iid:number,project_id:number,sha:string,ref:string,status:string,source:string,created_at:dateTime,updated_at:dateTime,web_url:string},failure_reason:string,web_url:string,project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}},{code:401},{code:403},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    },
    reset_registration_token: {
      post: {
        method: "post",
        url: "api/v4/runners/reset_registration_token",
        resource: "reset_registration_token",
        variable: [],
        headers: {
          Accept: "application/json"
        },
        description: "Reset runner registration token",
        query: [],
        data: null,
        /** @param {{clientOptions:{}}} requestOptions * @return {[{code:201,data:{token:string,token_expires_at:string}},{code:403}]} */
        send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
      }
    }
  }
});