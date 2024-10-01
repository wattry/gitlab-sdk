export default (client: any, request: any) => ({
  get: {
    method: "get",
    url: "api/v4/users",
    resource: "users",
    variable: [],
    headers: {
      Accept: "application/json"
    },
    description: "Get the list of users",
    query: [
      {
        name: "username",
        type: "string"
      },
      {
        name: "extern_uid",
        type: "string"
      },
      {
        name: "provider",
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
        name: "external",
        type: "string"
      },
      {
        name: "exclude_external",
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
        name: "without_projects",
        type: "string"
      },
      {
        name: "exclude_internal",
        type: "string"
      },
      {
        name: "without_project_bots",
        type: "string"
      },
      {
        name: "admins",
        type: "string"
      },
      {
        name: "two_factor",
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
        name: "skip_ldap",
        type: "string"
      },
      {
        name: "saml_provider_id",
        type: "string"
      },
      {
        name: "auditors",
        type: "string"
      }
    ],
    data: null,
    /** @param {{query:{username:string,extern_uid:string,provider:string,search:string,active:string,external:string,exclude_external:string,blocked:string,created_after:string,created_before:string,without_projects:string,exclude_internal:string,without_project_bots:string,admins:string,two_factor:string,order_by:string,sort:string,page:string,per_page:string,with_custom_attributes:string,skip_ldap:string,saml_provider_id:string,auditors:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}]} */
    send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
  },
  post: {
    method: "post",
    url: "api/v4/users",
    resource: "users",
    variable: [],
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    description: "Create a user. Available only for admins.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        email: "string",
        name: "string",
        username: "string",
        password: "string",
        reset_password: "boolean",
        skip_confirmation: "boolean",
        force_random_password: "boolean",
        skype: "string",
        linkedin: "string",
        twitter: "string",
        discord: "string",
        website_url: "string",
        organization: "string",
        projects_limit: "number",
        extern_uid: "string",
        provider: "string",
        bio: "string",
        location: "string",
        pronouns: "string",
        public_email: "string",
        commit_email: "string",
        admin: "boolean",
        can_create_group: "boolean",
        external: "boolean",
        avatar: "binary",
        theme_id: "number",
        color_scheme_id: "number",
        private_profile: "boolean",
        note: "string",
        view_diffs_file_by_file: "boolean",
        shared_runners_minutes_limit: "number",
        extra_shared_runners_minutes_limit: "number",
        group_id_for_saml: "number",
        auditor: "boolean"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{data:{email:string,name:string,username:string,password:string,reset_password:boolean,skip_confirmation:boolean,force_random_password:boolean,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,projects_limit:number,extern_uid:string,provider:string,bio:string,location:string,pronouns:string,public_email:string,commit_email:string,admin:boolean,can_create_group:boolean,external:boolean,avatar:binary,theme_id:number,color_scheme_id:number,private_profile:boolean,note:string,view_diffs_file_by_file:boolean,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,group_id_for_saml:number,auditor:boolean},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:dateTime,confirmed_at:dateTime,last_activity_on:dateTime,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:dateTime,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]} */
    send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
  },
  getOne: {
    method: "get",
    url: "api/v4/users/:id",
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
    description: "Get a single user",
    query: [
      {
        name: "with_custom_attributes",
        type: "string"
      }
    ],
    data: null,
    /** @param {{params:{id:string},query:{with_custom_attributes:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}]} */
    send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
  },
  put: {
    method: "put",
    url: "api/v4/users/:id",
    resource: "users",
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
    description: "Update a user. Available only for admins.",
    query: [],
    data: {
      mode: "raw",
      raw: {
        email: "string",
        password: "string",
        skip_reconfirmation: "boolean",
        name: "string",
        username: "string",
        skype: "string",
        linkedin: "string",
        twitter: "string",
        discord: "string",
        website_url: "string",
        organization: "string",
        projects_limit: "number",
        extern_uid: "string",
        provider: "string",
        bio: "string",
        location: "string",
        pronouns: "string",
        public_email: "string",
        commit_email: "string",
        admin: "boolean",
        can_create_group: "boolean",
        external: "boolean",
        avatar: "binary",
        theme_id: "number",
        color_scheme_id: "number",
        private_profile: "boolean",
        note: "string",
        view_diffs_file_by_file: "boolean",
        shared_runners_minutes_limit: "number",
        extra_shared_runners_minutes_limit: "number",
        group_id_for_saml: "number",
        auditor: "boolean"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{params:{id:string},data:{email:string,password:string,skip_reconfirmation:boolean,name:string,username:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,projects_limit:number,extern_uid:string,provider:string,bio:string,location:string,pronouns:string,public_email:string,commit_email:string,admin:boolean,can_create_group:boolean,external:boolean,avatar:binary,theme_id:number,color_scheme_id:number,private_profile:boolean,note:string,view_diffs_file_by_file:boolean,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,group_id_for_saml:number,auditor:boolean},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:dateTime,confirmed_at:dateTime,last_activity_on:dateTime,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:dateTime,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]} */
    send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
  },
  delete: {
    method: "delete",
    url: "api/v4/users/:id",
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
    description: "Delete a user. Available only for admins.",
    query: [
      {
        name: "hard_delete",
        type: "string"
      }
    ],
    data: null,
    /** @param {{params:{id:string},query:{hard_delete:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,email:string,confirmed_at:string}}]} */
    send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
  },
  events: {
    get: {
      method: "get",
      url: "api/v4/users/:id/events",
      resource: "events",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 8.13.",
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
      /** @param {{params:{id:string},query:{page:string,per_page:string,action:string,target_type:string,before:string,after:string,sort:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:{value:{}},type:{value:{}},body:{value:{}},attachment:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},system:{value:{}},noteable_id:{value:{}},noteable_type:{value:{}},project_id:{value:{}},commit_id:{value:{}},position:{value:{}},resolvable:{value:{}},resolved:{value:{}},resolved_by:{value:{}},resolved_at:{value:{}},confidential:{value:{}},internal:{value:{}},imported:{value:{}},imported_from:{value:{}},noteable_iid:{value:{}},commands_changes:{value:{}}},author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},wiki_page:{format:{value:{}},slug:{value:{}},title:{value:{}}},imported:boolean,imported_from:string,push_data:{commit_count:{value:{}},action:{value:{}},ref_type:{value:{}},commit_from:{value:{}},commit_to:{value:{}},ref:{value:{}},commit_title:{value:{}},ref_count:{value:{}}},author_username:string},{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:{value:{}},type:{value:{}},body:{value:{}},attachment:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},system:{value:{}},noteable_id:{value:{}},noteable_type:{value:{}},project_id:{value:{}},commit_id:{value:{}},position:{value:{}},resolvable:{value:{}},resolved:{value:{}},resolved_by:{value:{}},resolved_at:{value:{}},confidential:{value:{}},internal:{value:{}},imported:{value:{}},imported_from:{value:{}},noteable_iid:{value:{}},commands_changes:{value:{}}},author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},wiki_page:{format:{value:{}},slug:{value:{}},title:{value:{}}},imported:boolean,imported_from:string,push_data:{commit_count:{value:{}},action:{value:{}},ref_type:{value:{}},commit_from:{value:{}},commit_to:{value:{}},ref:{value:{}},commit_title:{value:{}},ref_count:{value:{}}},author_username:string}]},{code:404}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  custom_attributes: {
    get: {
      method: "get",
      url: "api/v4/users/:id/custom_attributes",
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
      description: "Get all custom attributes on a user",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{key:string,value:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/users/:id/custom_attributes/:key",
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
      description: "Get a custom attribute on a user",
      query: [],
      data: null,
      /** @param {{params:{key:string,id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{key:string,value:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/users/:id/custom_attributes/:key",
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
      description: "Set a custom attribute on a user",
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
      url: "api/v4/users/:id/custom_attributes/:key",
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
      description: "Delete a custom attribute on a user",
      query: [],
      data: null,
      /** @param {{params:{key:string,id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  follow: {
    post: {
      method: "post",
      url: "api/v4/users/:id/follow",
      resource: "follow",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Follow a user",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  unfollow: {
    post: {
      method: "post",
      url: "api/v4/users/:id/unfollow",
      resource: "unfollow",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Unfollow a user",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  following: {
    get: {
      method: "get",
      url: "api/v4/users/:id/following",
      resource: "following",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get the users who follow a user",
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
      /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  followers: {
    get: {
      method: "get",
      url: "api/v4/users/:id/followers",
      resource: "followers",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get the followers of a user",
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
      /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  disable_two_factor: {
    patch: {
      method: "patch",
      url: "api/v4/users/:id/disable_two_factor",
      resource: "disable_two_factor",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was added in GitLab 15.2",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:dateTime,confirmed_at:dateTime,last_activity_on:dateTime,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:dateTime,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  identities: {
    delete: {
      method: "delete",
      url: "api/v4/users/:id/identities/:provider",
      resource: "identities",
      variable: [
        {
          name: "id",
          type: "string"
        },
        {
          name: "provider",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Delete a user's identity. Available only for admins",
      query: [],
      data: null,
      /** @param {{params:{id:string,provider:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:dateTime,confirmed_at:dateTime,last_activity_on:dateTime,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:dateTime,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  keys: {
    get: {
      method: "get",
      url: "api/v4/users/:id/keys/:key_id",
      resource: "keys",
      variable: [
        {
          name: "id",
          type: "string"
        },
        {
          name: "key_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get a SSH key of a specified user.",
      query: [],
      data: null,
      /** @param {{params:{id:string,key_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/users/:id/keys/:key_id",
      resource: "keys",
      variable: [
        {
          name: "id",
          type: "string"
        },
        {
          name: "key_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Delete an existing SSH key from a specified user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string,key_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/users/:user_id/keys",
      resource: "keys",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Add an SSH key to a specified user. Available only for admins.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          key: "string",
          title: "string",
          expires_at: "dateTime",
          usage_type: "auth_and_signing"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{user_id:string},data:{key:string,title:string,expires_at:dateTime,usage_type:auth_and_signing},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/users/:user_id/keys",
      resource: "keys",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get the SSH keys of a specified user.",
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
      /** @param {{params:{user_id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  gpg_keys: {
    post: {
      method: "post",
      url: "api/v4/users/:id/gpg_keys",
      resource: "gpg_keys",
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
      description: "This feature was added in GitLab 10.0",
      query: [],
      data: {
        mode: "raw",
        raw: {
          key: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{key:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,key:string,created_at:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    get: {
      method: "get",
      url: "api/v4/users/:id/gpg_keys",
      resource: "gpg_keys",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was added in GitLab 10.0",
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
      /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,key:string,created_at:string}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/users/:id/gpg_keys/:key_id",
      resource: "gpg_keys",
      variable: [
        {
          name: "id",
          type: "string"
        },
        {
          name: "key_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was added in GitLab 13.5",
      query: [],
      data: null,
      /** @param {{params:{id:string,key_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,key:string,created_at:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/users/:id/gpg_keys/:key_id",
      resource: "gpg_keys",
      variable: [
        {
          name: "id",
          type: "string"
        },
        {
          name: "key_id",
          type: "string"
        }
      ],
      headers: {},
      description: "This feature was added in GitLab 10.0",
      query: [],
      data: null,
      /** @param {{params:{id:string,key_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    revoke: {
      post: {
        method: "post",
        url: "api/v4/users/:id/gpg_keys/:key_id/revoke",
        resource: "revoke",
        variable: [
          {
            name: "id",
            type: "string"
          },
          {
            name: "key_id",
            type: "string"
          }
        ],
        headers: {},
        description: "This feature was added in GitLab 10.0",
        query: [],
        data: null,
        /** @param {{params:{id:string,key_id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    }
  },
  emails: {
    post: {
      method: "post",
      url: "api/v4/users/:id/emails",
      resource: "emails",
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
      description: "Add an email address to a specified user. Available only for admins.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          email: "string",
          skip_confirmation: "boolean"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{email:string,skip_confirmation:boolean},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,email:string,confirmed_at:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    get: {
      method: "get",
      url: "api/v4/users/:id/emails",
      resource: "emails",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get the emails addresses of a specified user. Available only for admins.",
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
      /** @param {{params:{id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,email:string,confirmed_at:string}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/users/:id/emails/:email_id",
      resource: "emails",
      variable: [
        {
          name: "id",
          type: "string"
        },
        {
          name: "email_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Delete an email address of a specified user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string,email_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,email:string,confirmed_at:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  activate: {
    post: {
      method: "post",
      url: "api/v4/users/:id/activate",
      resource: "activate",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Activate a deactivated user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  approve: {
    post: {
      method: "post",
      url: "api/v4/users/:id/approve",
      resource: "approve",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Approve a pending user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  reject: {
    post: {
      method: "post",
      url: "api/v4/users/:id/reject",
      resource: "reject",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Reject a pending user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  deactivate: {
    post: {
      method: "post",
      url: "api/v4/users/:id/deactivate",
      resource: "deactivate",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Deactivate an active user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  block: {
    post: {
      method: "post",
      url: "api/v4/users/:id/block",
      resource: "block",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Block a user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  unblock: {
    post: {
      method: "post",
      url: "api/v4/users/:id/unblock",
      resource: "unblock",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Unblock a user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  ban: {
    post: {
      method: "post",
      url: "api/v4/users/:id/ban",
      resource: "ban",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Ban a user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  unban: {
    post: {
      method: "post",
      url: "api/v4/users/:id/unban",
      resource: "unban",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Unban a user. Available only for admins.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  associations_count: {
    get: {
      method: "get",
      url: "api/v4/users/:id/associations_count",
      resource: "associations_count",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Returns a list of a specified user's count of projects, groups, issues and merge requests.",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  projects: {
    get: {
      method: "get",
      url: "api/v4/users/:user_id/projects",
      resource: "projects",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get a user projects",
      query: [
        {
          name: "order_by",
          type: "string"
        },
        {
          name: "sort",
          type: "string"
        },
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
          name: "search_namespaces",
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
          name: "imported",
          type: "string"
        },
        {
          name: "membership",
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
          name: "with_programming_language",
          type: "string"
        },
        {
          name: "min_access_level",
          type: "string"
        },
        {
          name: "id_after",
          type: "string"
        },
        {
          name: "id_before",
          type: "string"
        },
        {
          name: "last_activity_after",
          type: "string"
        },
        {
          name: "last_activity_before",
          type: "string"
        },
        {
          name: "repository_storage",
          type: "string"
        },
        {
          name: "topic",
          type: "string"
        },
        {
          name: "topic_id",
          type: "string"
        },
        {
          name: "updated_before",
          type: "string"
        },
        {
          name: "updated_after",
          type: "string"
        },
        {
          name: "include_pending_delete",
          type: "string"
        },
        {
          name: "wiki_checksum_failed",
          type: "string"
        },
        {
          name: "repository_checksum_failed",
          type: "string"
        },
        {
          name: "include_hidden",
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
          name: "simple",
          type: "string"
        },
        {
          name: "statistics",
          type: "string"
        },
        {
          name: "with_custom_attributes",
          type: "string"
        }
      ],
      data: null,
      /** @param {{params:{user_id:string},query:{order_by:string,sort:string,archived:string,visibility:string,search:string,search_namespaces:string,owned:string,starred:string,imported:string,membership:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_programming_language:string,min_access_level:string,id_after:string,id_before:string,last_activity_after:string,last_activity_before:string,repository_storage:string,topic:string,topic_id:string,updated_before:string,updated_after:string,include_pending_delete:string,wiki_checksum_failed:string,repository_checksum_failed:string,include_hidden:string,page:string,per_page:string,simple:string,statistics:string,with_custom_attributes:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string}]},{code:404}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  contributed_projects: {
    get: {
      method: "get",
      url: "api/v4/users/:user_id/contributed_projects",
      resource: "contributed_projects",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get projects that a user has contributed to",
      query: [
        {
          name: "order_by",
          type: "string"
        },
        {
          name: "sort",
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
          name: "simple",
          type: "string"
        }
      ],
      data: null,
      /** @param {{params:{user_id:string},query:{order_by:string,sort:string,page:string,per_page:string,simple:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string}]},{code:404}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  starred_projects: {
    get: {
      method: "get",
      url: "api/v4/users/:user_id/starred_projects",
      resource: "starred_projects",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get projects starred by a user",
      query: [
        {
          name: "order_by",
          type: "string"
        },
        {
          name: "sort",
          type: "string"
        },
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
          name: "search_namespaces",
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
          name: "imported",
          type: "string"
        },
        {
          name: "membership",
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
          name: "with_programming_language",
          type: "string"
        },
        {
          name: "min_access_level",
          type: "string"
        },
        {
          name: "id_after",
          type: "string"
        },
        {
          name: "id_before",
          type: "string"
        },
        {
          name: "last_activity_after",
          type: "string"
        },
        {
          name: "last_activity_before",
          type: "string"
        },
        {
          name: "repository_storage",
          type: "string"
        },
        {
          name: "topic",
          type: "string"
        },
        {
          name: "topic_id",
          type: "string"
        },
        {
          name: "updated_before",
          type: "string"
        },
        {
          name: "updated_after",
          type: "string"
        },
        {
          name: "include_pending_delete",
          type: "string"
        },
        {
          name: "wiki_checksum_failed",
          type: "string"
        },
        {
          name: "repository_checksum_failed",
          type: "string"
        },
        {
          name: "include_hidden",
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
          name: "simple",
          type: "string"
        },
        {
          name: "statistics",
          type: "string"
        }
      ],
      data: null,
      /** @param {{params:{user_id:string},query:{order_by:string,sort:string,archived:string,visibility:string,search:string,search_namespaces:string,owned:string,starred:string,imported:string,membership:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_programming_language:string,min_access_level:string,id_after:string,id_before:string,last_activity_after:string,last_activity_before:string,repository_storage:string,topic:string,topic_id:string,updated_before:string,updated_after:string,include_pending_delete:string,wiki_checksum_failed:string,repository_checksum_failed:string,include_hidden:string,page:string,per_page:string,simple:string,statistics:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:dateTime,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string}]},{code:404}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  status: {
    get: {
      method: "get",
      url: "api/v4/users/:user_id/status",
      resource: "status",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {},
      description: "Get the status of a user",
      query: [],
      data: null,
      /** @param {{params:{user_id:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  project_deploy_keys: {
    get: {
      method: "get",
      url: "api/v4/users/:user_id/project_deploy_keys",
      resource: "project_deploy_keys",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get the project-level Deploy keys that a specified user can access to.",
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
      /** @param {{params:{user_id:string},query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime},projects_with_readonly_access:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  memberships: {
    get: {
      method: "get",
      url: "api/v4/users/:user_id/memberships",
      resource: "memberships",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get memberships",
      query: [
        {
          name: "type",
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
      /** @param {{params:{user_id:string},query:{type:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{source_id:string,source_name:string,source_type:string,access_level:string}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    }
  },
  impersonation_tokens: {
    get: {
      method: "get",
      url: "api/v4/users/:user_id/impersonation_tokens",
      resource: "impersonation_tokens",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 9.0",
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
          name: "state",
          type: "string"
        }
      ],
      data: null,
      /** @param {{params:{user_id:string},query:{page:string,per_page:string,state:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,impersonation:string}}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/users/:user_id/impersonation_tokens",
      resource: "impersonation_tokens",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 9.0",
      query: [],
      data: {
        mode: "raw",
        raw: {
          name: "string",
          expires_at: "date",
          scopes: [
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

      /** @param {{params:{user_id:string},data:{name:string,expires_at:date,scopes:[string,string]},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,token:string,impersonation:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/users/:user_id/impersonation_tokens/:impersonation_token_id",
      resource: "impersonation_tokens",
      variable: [
        {
          name: "user_id",
          type: "string"
        },
        {
          name: "impersonation_token_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 9.0",
      query: [],
      data: null,
      /** @param {{params:{user_id:string,impersonation_token_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,impersonation:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/users/:user_id/impersonation_tokens/:impersonation_token_id",
      resource: "impersonation_tokens",
      variable: [
        {
          name: "user_id",
          type: "string"
        },
        {
          name: "impersonation_token_id",
          type: "string"
        }
      ],
      headers: {},
      description: "This feature was introduced in GitLab 9.0",
      query: [],
      data: null,
      /** @param {{params:{user_id:string,impersonation_token_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  personal_access_tokens: {
    post: {
      method: "post",
      url: "api/v4/users/:user_id/personal_access_tokens",
      resource: "personal_access_tokens",
      variable: [
        {
          name: "user_id",
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
          name: "string",
          scopes: [
            "string",
            "string"
          ],
          expires_at: "date"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },
      /** @param {{params:{user_id:string},data:{name:string,scopes:[string,string],expires_at:date},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,token:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    }
  }
});