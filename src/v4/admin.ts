export default (client: any, request: any) => ({
  batched_background_migrations: {
    get: {
      method: "get",
      url: "api/v4/admin/batched_background_migrations",
      resource: "batched_background_migrations",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get the list of batched background migrations",
      query: [
        {
          name: "database",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{database:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:float,created_at:dateTime},{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:float,created_at:dateTime}]},{code:401},{code:403}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/admin/batched_background_migrations/:id",
      resource: "batched_background_migrations",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Retrieve a batched background migration",
      query: [
        {
          name: "database",
          type: "string"
        }
      ],
      data: null,
      /** @param {{params:{id:string},query:{database:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:float,created_at:dateTime}},{code:401},{code:403},{code:404}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    },
    resume: {
      put: {
        method: "put",
        url: "api/v4/admin/batched_background_migrations/:id/resume",
        resource: "resume",
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
        description: "Resume a batched background migration",
        query: [],
        data: {
          mode: "raw",
          raw: {
            database: "main"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },
        /** @param {{params:{id:string},data:{database:main},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:float,created_at:dateTime}},{code:401},{code:403},{code:404},{code:422}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      }
    },
    pause: {
      put: {
        method: "put",
        url: "api/v4/admin/batched_background_migrations/:id/pause",
        resource: "pause",
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
        description: "Pause a batched background migration",
        query: [],
        data: {
          mode: "raw",
          raw: {
            database: "main"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },
        /** @param {{params:{id:string},data:{database:main},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:float,created_at:dateTime}},{code:401},{code:403},{code:404},{code:422}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      }
    }
  },
  ci: {
    variables: {
      get: {
        method: "get",
        url: "api/v4/admin/ci/variables",
        resource: "variables",
        variable: [],
        headers: {
          Accept: "application/json"
        },
        description: "List all instance-level variables",
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
        /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}]} */
        send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
      },
      post: {
        method: "post",
        url: "api/v4/admin/ci/variables",
        resource: "variables",
        variable: [],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Create a new instance-level variable",
        query: [],
        data: {
          mode: "raw",
          raw: {
            key: "string",
            value: "string",
            description: "string",
            protected: "boolean",
            masked: "boolean",
            raw: "boolean",
            variable_type: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },
        /** @param {{data:{key:string,value:string,description:string,protected:boolean,masked:boolean,raw:boolean,variable_type:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:400}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      },
      getOne: {
        method: "get",
        url: "api/v4/admin/ci/variables/:key",
        resource: "variables",
        variable: [
          {
            name: "key",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Get the details of a specific instance-level variable",
        query: [],
        data: null,
        /** @param {{params:{key:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      },
      put: {
        method: "put",
        url: "api/v4/admin/ci/variables/:key",
        resource: "variables",
        variable: [
          {
            name: "key",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Update an instance-level variable",
        query: [],
        data: {
          mode: "raw",
          raw: {
            description: "string",
            value: "string",
            protected: "boolean",
            masked: "boolean",
            raw: "boolean",
            variable_type: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },
        /** @param {{params:{key:string},data:{description:string,value:string,protected:boolean,masked:boolean,raw:boolean,variable_type:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      },
      delete: {
        method: "delete",
        url: "api/v4/admin/ci/variables/:key",
        resource: "variables",
        variable: [
          {
            name: "key",
            type: "string"
          }
        ],
        headers: {
          Accept: "application/json"
        },
        description: "Delete an existing instance-level variable",
        query: [],
        data: null,
        /** @param {{params:{key:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    }
  },
  databases: {
    dictionary: {
      tables: {
        get: {
          method: "get",
          url: "api/v4/admin/databases/:database_name/dictionary/tables/:table_name",
          resource: "tables",
          variable: [
            {
              name: "database_name",
              type: "string"
            },
            {
              name: "table_name",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Retrieve dictionary details",
          query: [],
          data: null,
          /** @param {{params:{database_name:string,table_name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{table_name:string,feature_categories:[string,string]}},{code:401},{code:403},{code:404}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        }
      }
    }
  },
  clusters: {
    get: {
      method: "get",
      url: "api/v4/admin/clusters",
      resource: "clusters",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 13.2. Returns a list of instance clusters.",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:[{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},platform_kubernetes:{api_url:{value:{}},namespace:{value:{}},authorization_type:{value:{}},ca_cert:{value:{}}},provider_gcp:{cluster_id:{value:{}},status_name:{value:{}},gcp_project_id:{value:{}},zone:{value:{}},machine_type:{value:{}},num_nodes:{value:{}},endpoint:{value:{}}},management_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}},{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},platform_kubernetes:{api_url:{value:{}},namespace:{value:{}},authorization_type:{value:{}},ca_cert:{value:{}}},provider_gcp:{cluster_id:{value:{}},status_name:{value:{}},gcp_project_id:{value:{}},zone:{value:{}},machine_type:{value:{}},num_nodes:{value:{}},endpoint:{value:{}}},management_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}}]},{code:403}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/admin/clusters/:cluster_id",
      resource: "clusters",
      variable: [
        {
          name: "cluster_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 13.2. Returns a single instance cluster.",
      query: [],
      data: null,
      /** @param {{params:{cluster_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}},{code:403},{code:404}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    put: {
      method: "put",
      url: "api/v4/admin/clusters/:cluster_id",
      resource: "clusters",
      variable: [
        {
          name: "cluster_id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 13.2. Updates an existing instance cluster.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          name: "string",
          enabled: "boolean",
          environment_scope: "string",
          namespace_per_environment: true,
          domain: "string",
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
      /** @param {{params:{cluster_id:string},data:{name:string,enabled:boolean,environment_scope:string,namespace_per_environment:true,domain:string,management_project_id:number,managed:boolean,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string}},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}},{code:400},{code:403},{code:404}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/admin/clusters/:cluster_id",
      resource: "clusters",
      variable: [
        {
          name: "cluster_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 13.2. Deletes an existing instance cluster. Does not remove existing resources within the connected Kubernetes cluster.",
      query: [],
      data: null,
      /** @param {{params:{cluster_id:string},clientOptions:{}}} requestOptions * @return {[{code:204,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}},{code:403},{code:404}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    add: {
      post: {
        method: "post",
        url: "api/v4/admin/clusters/add",
        resource: "add",
        variable: [],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 13.2. Adds an existing Kubernetes instance cluster.",
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
        },            /** @param {{data:{name:string,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string,authorization_type:rbac},enabled:true,environment_scope:*,namespace_per_environment:true,domain:string,management_project_id:number,managed:true},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:dateTime}}},{code:400},{code:403},{code:404}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    }
  },
  migrations: {
    mark: {
      post: {
        method: "post",
        url: "api/v4/admin/migrations/:timestamp/mark",
        resource: "mark",
        variable: [
          {
            name: "timestamp",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json"
        },
        description: "Mark the migration as successfully executed",
        query: [],
        data: {
          mode: "raw",
          raw: {
            database: "main"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },            /** @param {{params:{timestamp:string},data:{database:main},clientOptions:{}}} requestOptions * @return {[{code:201},{code:401},{code:403},{code:404},{code:422}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      }
    }
  }
});