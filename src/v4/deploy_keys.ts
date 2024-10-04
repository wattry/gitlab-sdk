export interface DeployKeys {
  get: ({ query, clientOptions }: {
    query: {
      page: string;
      per_page: string;
      public: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: number;
      title: string;
      created_at: Date;
      expires_at: Date;
      key: string;
      usage_type: string;
      fingerprint: string;
      fingerprint_sha256: string;
      projects_with_write_access: {
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
      projects_with_readonly_access: {
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
      id: number;
      title: string;
      created_at: Date;
      expires_at: Date;
      key: string;
      usage_type: string;
      fingerprint: string;
      fingerprint_sha256: string;
      projects_with_write_access: {
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
      projects_with_readonly_access: {
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
    code: 401;
  }, {
    code: 403;
  }]>;
};

export default (client: any, handler: any): DeployKeys => ({
  get: ({query,clientOptions}: {query:{page:string,per_page:string,public:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,title:string,created_at:Date,expires_at:Date,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}},projects_with_readonly_access:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}},{id:number,title:string,created_at:Date,expires_at:Date,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}},projects_with_readonly_access:{id:{value:{}},description:{value:{}},name:{value:{}},name_with_namespace:{value:{}},path:{value:{}},path_with_namespace:{value:{}},created_at:{value:{}}}}]},{code:401},{code:403}]> => handler.apply({method:'get',url:'api/v4/deploy_keys',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'public',type:'string'}],data:null}, [client, {query, clientOptions}])
})