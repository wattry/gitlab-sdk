export interface Admin {
  batched_background_migrations: {
    get: ({ query, clientOptions }: {
      query: {
        database: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: string;
        job_class_name: string;
        table_name: string;
        column_name: string;
        status: string;
        progress: number;
        created_at: Date;
      }, {
        id: string;
        job_class_name: string;
        table_name: string;
        column_name: string;
        status: string;
        progress: number;
        created_at: Date;
      }];
    }, {
      code: 401;
    }, {
      code: 403;
    }]>;
    getOne: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        database: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        job_class_name: string;
        table_name: string;
        column_name: string;
        status: string;
        progress: number;
        created_at: Date;
      };
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    resume: {
      put: ({ params, data, clientOptions }: {
        params: {
          id: string;
        };
        data: {
          database: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: string;
          job_class_name: string;
          table_name: string;
          column_name: string;
          status: string;
          progress: number;
          created_at: Date;
        };
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }, {
        code: 422;
      }]>;
    };
    pause: {
      put: ({ params, data, clientOptions }: {
        params: {
          id: string;
        };
        data: {
          database: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: string;
          job_class_name: string;
          table_name: string;
          column_name: string;
          status: string;
          progress: number;
          created_at: Date;
        };
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }, {
        code: 422;
      }]>;
    };
  };
  ci: {
    variables: {
      get: ({ query, clientOptions }: {
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
      post: ({ data, clientOptions }: {
        data: {
          key: string;
          value: string;
          description: string;
          protected: boolean;
          masked: boolean;
          raw: boolean;
          variable_type: string;
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
          key: string;
        };
        data: {
          description: string;
          value: string;
          protected: boolean;
          masked: boolean;
          raw: boolean;
          variable_type: string;
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
      delete: ({ params, clientOptions }: {
        params: {
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
  };
  databases: {
    dictionary: {
      tables: {
        getOne: ({ params, clientOptions }: {
          params: {
            database_name: string;
            table_name: string;
          };
          clientOptions: any;
        }) => Promise<[{
          code: 200;
          data: {
            table_name: string;
            feature_categories: [string, string];
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
  clusters: {
    get: ({ clientOptions }: {
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
      };
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        cluster_id: string;
      };
      data: {
        name: string;
        enabled: boolean;
        environment_scope: string;
        namespace_per_environment: true;
        domain: string;
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
      };
    }, {
      code: 403;
    }, {
      code: 404;
    }]>;
    add: {
      post: ({ data, clientOptions }: {
        data: {
          name: string;
          platform_kubernetes_attributes: {
            api_url: string;
            token: string;
            ca_cert: string;
            namespace: string;
            authorization_type: any;
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
  migrations: {
    mark: {
      post: ({ params, data, clientOptions }: {
        params: {
          timestamp: string;
        };
        data: {
          database: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
      }, {
        code: 401;
      }, {
        code: 403;
      }, {
        code: 404;
      }, {
        code: 422;
      }]>;
    };
  };
};


export default (client: any, handler: any): Admin => ({
  "batched_background_migrations": {
    get: ({query,clientOptions}: {query:{database:string},clientOptions:any}): Promise<[{code:200,data:[{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:Date},{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:Date}]},{code:401},{code:403}]> => handler.apply({method:'get',url:'api/v4/admin/batched_background_migrations',resource:'v4',variable:[],headers:{Accept:'application/json'},query:[{name:'database',type:'string'}],data:null}, [client, {query, clientOptions}]),
    getOne: ({params,query,clientOptions}: {params:{id:string},query:{database:string},clientOptions:any}): Promise<[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:Date}},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/admin/batched_background_migrations/:id',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'database',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    "resume": {
      put: ({params,data,clientOptions}: {params:{id:string},data:{database:string},clientOptions:any}): Promise<[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:Date}},{code:401},{code:403},{code:404},{code:422}]> => handler.apply({method:'put',url:'api/v4/admin/batched_background_migrations/:id/resume',resource:'admin',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{database:'main'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    },
    "pause": {
      put: ({params,data,clientOptions}: {params:{id:string},data:{database:string},clientOptions:any}): Promise<[{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:Date}},{code:401},{code:403},{code:404},{code:422}]> => handler.apply({method:'put',url:'api/v4/admin/batched_background_migrations/:id/pause',resource:'admin',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{database:'main'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    }
  },
  "ci": {
    "variables": {
      get: ({query,clientOptions}: {query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}]> => handler.apply({method:'get',url:'api/v4/admin/ci/variables',resource:'admin',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}]),
      post: ({data,clientOptions}: {data:{key:string,value:string,description:string,protected:boolean,masked:boolean,raw:boolean,variable_type:string},clientOptions:any}): Promise<[{code:201,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:400}]> => handler.apply({method:'post',url:'api/v4/admin/ci/variables',resource:'admin',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{key:'string',value:'string',description:'string',protected:'boolean',masked:'boolean',raw:'boolean',variable_type:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
      getOne: ({params,clientOptions}: {params:{key:string},clientOptions:any}): Promise<[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]> => handler.apply({method:'get',url:'api/v4/admin/ci/variables/:key',resource:'admin',variable:[{name:'key',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
      put: ({params,data,clientOptions}: {params:{key:string},data:{description:string,value:string,protected:boolean,masked:boolean,raw:boolean,variable_type:string},clientOptions:any}): Promise<[{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]> => handler.apply({method:'put',url:'api/v4/admin/ci/variables/:key',resource:'admin',variable:[{name:'key',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{description:'string',value:'string',protected:'boolean',masked:'boolean',raw:'boolean',variable_type:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
      delete: ({params,clientOptions}: {params:{key:string},clientOptions:any}): Promise<[{code:204,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}},{code:404}]> => handler.apply({method:'delete',url:'api/v4/admin/ci/variables/:key',resource:'admin',variable:[{name:'key',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  "databases": {
    "dictionary": {
      "tables": {
        getOne: ({params,clientOptions}: {params:{database_name:string,table_name:string},clientOptions:any}): Promise<[{code:200,data:{table_name:string,feature_categories:[string,string]}},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/admin/databases/:database_name/dictionary/tables/:table_name',resource:'databases',variable:[{name:'database_name',type:'string'},{name:'table_name',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
      }
    }
  },
  "clusters": {
    get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200,data:[{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},platform_kubernetes:{api_url:{value:{}},namespace:{value:{}},authorization_type:{value:{}},ca_cert:{value:{}}},provider_gcp:{cluster_id:{value:{}},status_name:{value:{}},gcp_project_id:{value:{}},zone:{value:{}},machine_type:{value:{}},num_nodes:{value:{}},endpoint:{value:{}}},management_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}},{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},platform_kubernetes:{api_url:{value:{}},namespace:{value:{}},authorization_type:{value:{}},ca_cert:{value:{}}},provider_gcp:{cluster_id:{value:{}},status_name:{value:{}},gcp_project_id:{value:{}},zone:{value:{}},machine_type:{value:{}},num_nodes:{value:{}},endpoint:{value:{}}},management_project:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}}]},{code:403}]> => handler.apply({method:'get',url:'api/v4/admin/clusters',resource:'v4',variable:[],headers:{Accept:'application/json'},query:[],data:null}, [client, {clientOptions}]),
    getOne: ({params,clientOptions}: {params:{cluster_id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date}}},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/admin/clusters/:cluster_id',resource:'v4',variable:[{name:'cluster_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{cluster_id:string},data:{name:string,enabled:boolean,environment_scope:string,namespace_per_environment:true,domain:string,management_project_id:number,managed:boolean,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string}},clientOptions:any}): Promise<[{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date}}},{code:400},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/admin/clusters/:cluster_id',resource:'v4',variable:[{name:'cluster_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',enabled:'boolean',environment_scope:'string',namespace_per_environment:true,domain:'string',management_project_id:'number',managed:'boolean',platform_kubernetes_attributes:{api_url:'string',token:'string',ca_cert:'string',namespace:'string'}},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{cluster_id:string},clientOptions:any}): Promise<[{code:204,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date}}},{code:403},{code:404}]> => handler.apply({method:'delete',url:'api/v4/admin/clusters/:cluster_id',resource:'v4',variable:[{name:'cluster_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    "add": {
      post: ({data,clientOptions}: {data:{name:string,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string,authorization_type:any},enabled:true,environment_scope:string,namespace_per_environment:true,domain:string,management_project_id:number,managed:true},clientOptions:any}): Promise<[{code:201,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date}}},{code:400},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/admin/clusters/add',resource:'admin',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',platform_kubernetes_attributes:{api_url:'string',token:'string',ca_cert:'string',namespace:'string',authorization_type:'rbac'},enabled:true,environment_scope:'*',namespace_per_environment:true,domain:'string',management_project_id:'number',managed:true},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
    }
  },
  "migrations": {
    "mark": {
      post: ({params,data,clientOptions}: {params:{timestamp:string},data:{database:string},clientOptions:any}): Promise<[{code:201},{code:401},{code:403},{code:404},{code:422}]> => handler.apply({method:'post',url:'api/v4/admin/migrations/:timestamp/mark',resource:'admin',variable:[{name:'timestamp',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{database:'main'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
    }
  }
})