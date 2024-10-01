export default (client: any, request: any) => ({
  namespaces: {
    get: {
      method: "get",
      url: "api/v4/namespaces",
      resource: "namespaces",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get a list of the namespaces of the authenticated user. If the user is an administrator, a list of all namespaces in the GitLab instance is shown.",
      query: [
        {
          name: "search",
          type: "string"
        },
        {
          name: "owned_only",
          type: "string"
        },
        {
          name: "top_level_only",
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
          name: "requested_hosted_plan",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{search:string,owned_only:string,top_level_only:string,page:string,per_page:string,requested_hosted_plan:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:date,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:date,end_date:date,plan:string,trial_ends_on:date,trial:boolean},{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:date,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:date,end_date:date,plan:string,trial_ends_on:date,trial:boolean}]},{code:401}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/namespaces/:id",
      resource: "namespaces",
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
      description: "Update a namespace",
      query: [],
      data: {
        mode: "raw",
        raw: {
          shared_runners_minutes_limit: "number",
          extra_shared_runners_minutes_limit: "number",
          additional_purchased_storage_size: "number",
          additional_purchased_storage_ends_on: "date",
          gitlab_subscription_attributes: {
            start_date: "date",
            seats: "number",
            max_seats_used: "number",
            plan_code: "string",
            end_date: "date",
            auto_renew: "boolean",
            trial: "boolean",
            trial_ends_on: "date",
            trial_starts_on: "date",
            trial_extension_type: "number"
          }
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },
      /** @param {{params:{id:string},data:{shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:date,gitlab_subscription_attributes:{start_date:date,seats:number,max_seats_used:number,plan_code:string,end_date:date,auto_renew:boolean,trial:boolean,trial_ends_on:date,trial_starts_on:date,trial_extension_type:number}},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:date,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:date,end_date:date,plan:string,trial_ends_on:date,trial:boolean}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/namespaces/:id",
      resource: "namespaces",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get a namespace by ID",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,path:string,kind:string,full_path:string,parent_id:number,avatar_url:string,web_url:string,members_count_with_descendants:number,root_repository_size:number,projects_count:number,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,additional_purchased_storage_size:number,additional_purchased_storage_ends_on:date,billable_members_count:number,seats_in_use:number,max_seats_used:number,max_seats_used_changed_at:date,end_date:date,plan:string,trial_ends_on:date,trial:boolean}},{code:401},{code:404}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    gitlab_subscription: {
      post: {
        method: "post",
        url: "api/v4/namespaces/:id/gitlab_subscription",
        resource: "gitlab_subscription",
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
        description: "Create a subscription for the namespace",
        query: [],
        data: {
          mode: "raw",
          raw: {
            start_date: "date",
            seats: "number",
            max_seats_used: "number",
            plan_code: "string",
            end_date: "date",
            auto_renew: "boolean",
            trial: "boolean",
            trial_ends_on: "date",
            trial_starts_on: "date",
            trial_extension_type: "number"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },
        /** @param {{params:{id:string},data:{start_date:date,seats:number,max_seats_used:number,plan_code:string,end_date:date,auto_renew:boolean,trial:boolean,trial_ends_on:date,trial_starts_on:date,trial_extension_type:number},clientOptions:{}}} requestOptions * @return {[{code:201,data:{plan:{code:string,name:string,trial:string,auto_renew:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_date:string,subscription_end_date:string,trial_ends_on:string}}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      get: {
        method: "get",
        url: "api/v4/namespaces/:id/gitlab_subscription",
        resource: "gitlab_subscription",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Returns the subscription for the namespace",
        query: [],
        data: null,
        /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{plan:{code:string,name:string,trial:string,auto_renew:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_date:string,subscription_end_date:string,trial_ends_on:string}}}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/namespaces/:id/gitlab_subscription",
        resource: "gitlab_subscription",
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
        description: "Update the subscription for the namespace",
        query: [],
        data: {
          mode: "raw",
          raw: {
            start_date: "date",
            seats: "number",
            max_seats_used: "number",
            plan_code: "string",
            end_date: "date",
            auto_renew: "boolean",
            trial: "boolean",
            trial_ends_on: "date",
            trial_starts_on: "date",
            trial_extension_type: "number"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },
        /** @param {{params:{id:string},data:{start_date:date,seats:number,max_seats_used:number,plan_code:string,end_date:date,auto_renew:boolean,trial:boolean,trial_ends_on:date,trial_starts_on:date,trial_extension_type:number},clientOptions:{}}} requestOptions * @return {[{code:200,data:{plan:{code:string,name:string,trial:string,auto_renew:string,upgradable:string,exclude_guests:string},usage:{seats_in_subscription:string,seats_in_use:string,max_seats_used:string,seats_owed:string},billing:{subscription_start_date:string,subscription_end_date:string,trial_ends_on:string}}}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      }
    },
    storage: {
      limit_exclusion: {
        post: {
          method: "post",
          url: "api/v4/namespaces/:id/storage/limit_exclusion",
          resource: "limit_exclusion",
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
          description: "Creates a Namespaces::Storage::LimitExclusion",
          query: [],
          data: {
            mode: "raw",
            raw: {
              reason: "string"
            },
            options: {
              raw: {
                language: "json"
              }
            }
          },
          /** @param {{params:{id:string},data:{reason:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,namespace_id:number,namespace_name:string,reason:string}},{code:400},{code:401},{code:403},{code:404}]} */
          send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
        },
        delete: {
          method: "delete",
          url: "api/v4/namespaces/:id/storage/limit_exclusion",
          resource: "limit_exclusion",
          variable: [
            {
              name: "id",
              type: "string"
            }
          ],
          headers: {},
          description: "Removes a Namespaces::Storage::LimitExclusion",
          query: [],
          data: null,
          /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:401},{code:403},{code:422}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      },
      limit_exclusions: {
        get: {
          method: "get",
          url: "api/v4/namespaces/storage/limit_exclusions",
          resource: "limit_exclusions",
          variable: [],
          headers: {
            Accept: "application/json"
          },
          description: "Gets all records for namespaces that have been excluded",
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
          /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,namespace_id:number,namespace_name:string,reason:string}},{code:401},{code:403}]} */
          send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
        }
      }
    },
    exists: {
      get: {
        method: "get",
        url: "api/v4/namespaces/:id/exists",
        resource: "exists",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get existence of a namespace by path. Suggests a new namespace path that does not already exist.",
        query: [
          {
            name: "parent_id",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{id:string},query:{parent_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{exists:boolean,suggests:[string,string]}},{code:401}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    }
  }
});