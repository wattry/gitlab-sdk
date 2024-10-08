/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Admin {
  batched_background_migrations: {
    get: ({ query }: {
      query?: {
        database: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: [{
        id: string;
        job_class_name: string;
        table_name: string;
        column_name: string;
        status: string;
        progress: number;
        created_at: string;
      }, {
        id: string;
        job_class_name: string;
        table_name: string;
        column_name: string;
        status: string;
        progress: number;
        created_at: string;
      }];
    } | {
      code: 401;
    } | {
      code: 403;
    }>;
    getOne: ({ params, query }: {
      params: {
        id: string;
      };
      query?: {
        database: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        job_class_name: string;
        table_name: string;
        column_name: string;
        status: string;
        progress: number;
        created_at: string;
      };
    } | {
      code: 401;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
    resume: {
      put: ({ params, data }: {
        params: {
          id: string;
        };
        data: {
          database: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
        data: {
          id: string;
          job_class_name: string;
          table_name: string;
          column_name: string;
          status: string;
          progress: number;
          created_at: string;
        };
      } | {
        code: 401;
      } | {
        code: 403;
      } | {
        code: 404;
      } | {
        code: 422;
      }>;
    };
    pause: {
      put: ({ params, data }: {
        params: {
          id: string;
        };
        data: {
          database: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
        data: {
          id: string;
          job_class_name: string;
          table_name: string;
          column_name: string;
          status: string;
          progress: number;
          created_at: string;
        };
      } | {
        code: 401;
      } | {
        code: 403;
      } | {
        code: 404;
      } | {
        code: 422;
      }>;
    };
  };
  ci: {
    variables: {
      get: ({ query }: {
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
      post: ({ data }: {
        data: {
          key: string;
          value: string;
          description: string;
          protected: boolean;
          masked: boolean;
          raw: boolean;
          variable_type: string;
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
      delete: ({ params }: {
        params: {
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
  };
  databases: {
    dictionary: {
      tables: {
        getOne: ({ params }: {
          params: {
            database_name: string;
            table_name: string;
          };
        }, options?: {}) => Promise<{
          code: 200;
          data: {
            table_name: string;
            feature_categories: [string, string];
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
  clusters: {
    get: ({ }: {}, options?: {}) => Promise<{
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
      };
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
    put: ({ params, data }: {
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
      };
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
    add: {
      post: ({ data }: {
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
  migrations: {
    mark: {
      post: ({ params, data }: {
        params: {
          timestamp: string;
        };
        data: {
          database: string;
        };
      }, options?: {}) => Promise<{
        code: 201;
      } | {
        code: 401;
      } | {
        code: 403;
      } | {
        code: 404;
      } | {
        code: 422;
      }>;
    };
  };
};

export default (client: Client, handler: Handler): Admin => ({
  "batched_background_migrations": {
    get: ({query}: {query?:{database:string}}, options?: {}): Promise<{code:200,data:[{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:string},{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:string}]}|{code:401}|{code:403}> => handler.apply({method:'get',url:'api/v4/admin/batched_background_migrations',headers:{Accept:'application/json'},variable:[],query:[{name:'database',type:'string'}]}, [client, {query}, options]),
    getOne: ({params,query}: {params:{id:string},query?:{database:string}}, options?: {}): Promise<{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:string}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/admin/batched_background_migrations/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'database',type:'string'}]}, [client, { params, query}, options]),
    "resume": {
      put: ({params,data}: {params:{id:string},data:{database:string}}, options?: {}): Promise<{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:string}}|{code:401}|{code:403}|{code:404}|{code:422}> => handler.apply({method:'put',url:'api/v4/admin/batched_background_migrations/:id/resume',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{database:'main'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    },
    "pause": {
      put: ({params,data}: {params:{id:string},data:{database:string}}, options?: {}): Promise<{code:200,data:{id:string,job_class_name:string,table_name:string,column_name:string,status:string,progress:number,created_at:string}}|{code:401}|{code:403}|{code:404}|{code:422}> => handler.apply({method:'put',url:'api/v4/admin/batched_background_migrations/:id/pause',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{database:'main'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    }
  },
  "ci": {
    "variables": {
      get: ({query}: {query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}> => handler.apply({method:'get',url:'api/v4/admin/ci/variables',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, {query}, options]),
      post: ({data}: {data:{key:string,value:string,description:string,protected:boolean,masked:boolean,raw:boolean,variable_type:string}}, options?: {}): Promise<{code:201,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}|{code:400}> => handler.apply({method:'post',url:'api/v4/admin/ci/variables',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{key:'string',value:'string',description:'string',protected:'boolean',masked:'boolean',raw:'boolean',variable_type:'string'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
      getOne: ({params}: {params:{key:string}}, options?: {}): Promise<{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}|{code:404}> => handler.apply({method:'get',url:'api/v4/admin/ci/variables/:key',headers:{Accept:'application/json'},variable:[{name:'key',type:'string'}]}, [client, { params}, options]),
      put: ({params,data}: {params:{key:string},data:{description:string,value:string,protected:boolean,masked:boolean,raw:boolean,variable_type:string}}, options?: {}): Promise<{code:200,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}|{code:404}> => handler.apply({method:'put',url:'api/v4/admin/ci/variables/:key',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'key',type:'string'}],data:{mode:'raw',raw:{description:'string',value:'string',protected:'boolean',masked:'boolean',raw:'boolean',variable_type:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
      delete: ({params}: {params:{key:string}}, options?: {}): Promise<{code:204,data:{variable_type:string,key:string,value:string,hidden:boolean,protected:boolean,masked:boolean,raw:boolean,environment_scope:string,description:string}}|{code:404}> => handler.apply({method:'delete',url:'api/v4/admin/ci/variables/:key',headers:{Accept:'application/json'},variable:[{name:'key',type:'string'}]}, [client, { params}, options])
    }
  },
  "databases": {
    "dictionary": {
      "tables": {
        getOne: ({params}: {params:{database_name:string,table_name:string}}, options?: {}): Promise<{code:200,data:{table_name:string,feature_categories:[string,string]}}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/admin/databases/:database_name/dictionary/tables/:table_name',headers:{Accept:'application/json'},variable:[{name:'database_name',type:'string'},{name:'table_name',type:'string'}]}, [client, { params}, options])
      }
    }
  },
  "clusters": {
    get: ({}: {}, options?: {}): Promise<{code:200,data:[{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},platform_kubernetes:{api_url:any,namespace:any,authorization_type:any,ca_cert:any},provider_gcp:{cluster_id:any,status_name:any,gcp_project_id:any,zone:any,machine_type:any,num_nodes:any,endpoint:any},management_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any}},{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},platform_kubernetes:{api_url:any,namespace:any,authorization_type:any,ca_cert:any},provider_gcp:{cluster_id:any,status_name:any,gcp_project_id:any,zone:any,machine_type:any,num_nodes:any,endpoint:any},management_project:{id:any,description:any,name:any,name_with_namespace:any,path:any,path_with_namespace:any,created_at:any}}]}|{code:403}> => handler.apply({method:'get',url:'api/v4/admin/clusters',headers:{Accept:'application/json'},variable:[]}, [client, {}, options]),
    getOne: ({params}: {params:{cluster_id:string}}, options?: {}): Promise<{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string}}}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/admin/clusters/:cluster_id',headers:{Accept:'application/json'},variable:[{name:'cluster_id',type:'string'}]}, [client, { params}, options]),
    put: ({params,data}: {params:{cluster_id:string},data:{name:string,enabled:boolean,environment_scope:string,namespace_per_environment:true,domain:string,management_project_id:number,managed:boolean,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string}}}, options?: {}): Promise<{code:200,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string}}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/admin/clusters/:cluster_id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'cluster_id',type:'string'}],data:{mode:'raw',raw:{name:'string',enabled:'boolean',environment_scope:'string',namespace_per_environment:true,domain:'string',management_project_id:'number',managed:'boolean',platform_kubernetes_attributes:{api_url:'string',token:'string',ca_cert:'string',namespace:'string'}},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{cluster_id:string}}, options?: {}): Promise<{code:204,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string}}}|{code:403}|{code:404}> => handler.apply({method:'delete',url:'api/v4/admin/clusters/:cluster_id',headers:{Accept:'application/json'},variable:[{name:'cluster_id',type:'string'}]}, [client, { params}, options]),
    "add": {
      post: ({data}: {data:{name:string,platform_kubernetes_attributes:{api_url:string,token:string,ca_cert:string,namespace:string,authorization_type:string},enabled:true,environment_scope:string,namespace_per_environment:true,domain:string,management_project_id:number,managed:true}}, options?: {}): Promise<{code:201,data:{id:string,name:string,created_at:string,domain:string,enabled:string,managed:string,provider_type:string,platform_type:string,environment_scope:string,cluster_type:string,namespace_per_environment:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},platform_kubernetes:{api_url:string,namespace:string,authorization_type:string,ca_cert:string},provider_gcp:{cluster_id:string,status_name:string,gcp_project_id:string,zone:string,machine_type:string,num_nodes:string,endpoint:string},management_project:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string}}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/admin/clusters/add',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{name:'string',platform_kubernetes_attributes:{api_url:'string',token:'string',ca_cert:'string',namespace:'string',authorization_type:'rbac'},enabled:true,environment_scope:'*',namespace_per_environment:true,domain:'string',management_project_id:'number',managed:true},options:{raw:{language:'json'}}}}, [client, {data}, options])
    }
  },
  "migrations": {
    "mark": {
      post: ({params,data}: {params:{timestamp:string},data:{database:string}}, options?: {}): Promise<{code:201}|{code:401}|{code:403}|{code:404}|{code:422}> => handler.apply({method:'post',url:'api/v4/admin/migrations/:timestamp/mark',headers:{'Content-Type':'application/json'},variable:[{name:'timestamp',type:'string'}],data:{mode:'raw',raw:{database:'main'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
    }
  }
})