export interface BulkImports {
  post: ({ data, clientOptions }: {
    data: any;
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: number;
      status: string;
      source_type: string;
      created_at: Date;
      updated_at: Date;
      has_failures: boolean;
    };
  }, {
    code: 400;
  }, {
    code: 401;
  }, {
    code: 404;
  }, {
    code: 422;
  }, {
    code: 503;
  }]>;
  get: ({ query, clientOptions }: {
    query: {
      page: string;
      per_page: string;
      sort: string;
      status: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: number;
      status: string;
      source_type: string;
      created_at: Date;
      updated_at: Date;
      has_failures: boolean;
    }, {
      id: number;
      status: string;
      source_type: string;
      created_at: Date;
      updated_at: Date;
      has_failures: boolean;
    }];
  }, {
    code: 401;
  }, {
    code: 404;
  }, {
    code: 503;
  }]>;
  entities: {
    get: ({ params, query, clientOptions }: {
      params: {
        import_id: string;
      };
      query: {
        status: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        bulk_import_id: number;
        status: string;
        entity_type: string;
        source_full_path: string;
        destination_full_path: string;
        destination_name: string;
        destination_slug: string;
        destination_namespace: string;
        parent_id: number;
        namespace_id: number;
        project_id: number;
        created_at: Date;
        updated_at: Date;
        failures: [{
          value: any;
        }, {
          value: any;
        }];
        migrate_projects: boolean;
        has_failures: boolean;
        stats: any;
      }, {
        id: number;
        bulk_import_id: number;
        status: string;
        entity_type: string;
        source_full_path: string;
        destination_full_path: string;
        destination_name: string;
        destination_slug: string;
        destination_namespace: string;
        parent_id: number;
        namespace_id: number;
        project_id: number;
        created_at: Date;
        updated_at: Date;
        failures: [{
          value: any;
        }, {
          value: any;
        }];
        migrate_projects: boolean;
        has_failures: boolean;
        stats: any;
      }];
    }, {
      code: 401;
    }, {
      code: 404;
    }, {
      code: 503;
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        import_id: string;
        entity_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        bulk_import_id: number;
        status: string;
        entity_type: string;
        source_full_path: string;
        destination_full_path: string;
        destination_name: string;
        destination_slug: string;
        destination_namespace: string;
        parent_id: number;
        namespace_id: number;
        project_id: number;
        created_at: Date;
        updated_at: Date;
        failures: [{
          relation: string;
          exception_message: string;
          exception_class: string;
          correlation_id_value: string;
          source_url: string;
          source_title: string;
        }, {
          relation: string;
          exception_message: string;
          exception_class: string;
          correlation_id_value: string;
          source_url: string;
          source_title: string;
        }];
        migrate_projects: boolean;
        has_failures: boolean;
        stats: any;
      };
    }, {
      code: 401;
    }, {
      code: 404;
    }, {
      code: 503;
    }]>;
    failures: {
      get: ({ params, clientOptions }: {
        params: {
          import_id: string;
          entity_id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          relation: string;
          exception_message: string;
          exception_class: string;
          correlation_id_value: string;
          source_url: string;
          source_title: string;
        };
      }, {
        code: 401;
      }, {
        code: 404;
      }, {
        code: 503;
      }]>;
    };
  };
  getOne: ({ params, clientOptions }: {
    params: {
      import_id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: number;
      status: string;
      source_type: string;
      created_at: Date;
      updated_at: Date;
      has_failures: boolean;
    };
  }, {
    code: 401;
  }, {
    code: 404;
  }, {
    code: 503;
  }]>;
  cancel: {
    post: ({ params, clientOptions }: {
      params: {
        import_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        status: string;
        source_type: string;
        created_at: Date;
        updated_at: Date;
        has_failures: boolean;
      };
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 404;
    }, {
      code: 503;
    }]>;
  };
};

export default (client: any, handler: any): BulkImports => ({
  post: ({ data, clientOptions }: { data: any; clientOptions: any }): Promise<[{code:200,data:{id:number,status:string,source_type:string,created_at:Date,updated_at:Date,has_failures:boolean}},{code:400},{code:401},{code:404},{code:422},{code:503}]> => handler.apply({method:'post',url:'api/v4/bulk_imports',resource:'api',variable:[],headers:{'Content-Type':'application/x-www-form-urlencoded',Accept:'application/json'},query:[],data:{mode:'urlencoded',urlencoded:{'configuration[url]':'string','configuration[access_token]':'string','entities[source_type]':'string','entities[source_full_path]':'string','entities[destination_namespace]':'string','entities[destination_slug]':'string','entities[destination_name]':'string','entities[migrate_projects]':'true'}}}, [client, {data, clientOptions}]),
  get: ({query,clientOptions}: {query:{page:string,per_page:string,sort:string,status:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,status:string,source_type:string,created_at:Date,updated_at:Date,has_failures:boolean},{id:number,status:string,source_type:string,created_at:Date,updated_at:Date,has_failures:boolean}]},{code:401},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/bulk_imports',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'sort',type:'string'},{name:'status',type:'string'}],data:null}, [client, {query, clientOptions}]),
  "entities": {
    get: ({params,query,clientOptions}: {params:{import_id:string},query:{status:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:Date,updated_at:Date,failures:[{value:{}},{value:{}}],migrate_projects:boolean,has_failures:boolean,stats:any},{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:Date,updated_at:Date,failures:[{value:{}},{value:{}}],migrate_projects:boolean,has_failures:boolean,stats:any}]},{code:401},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/bulk_imports/:import_id/entities',resource:'v4',variable:[{name:'import_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'status',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{import_id:string,entity_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:Date,updated_at:Date,failures:[{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string},{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string}],migrate_projects:boolean,has_failures:boolean,stats:any}},{code:401},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/bulk_imports/:import_id/entities/:entity_id',resource:'v4',variable:[{name:'import_id',type:'string'},{name:'entity_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    "failures": {
      get: ({params,clientOptions}: {params:{import_id:string,entity_id:string},clientOptions:any}): Promise<[{code:200,data:{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string}},{code:401},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/bulk_imports/:import_id/entities/:entity_id/failures',resource:'bulk_imports',variable:[{name:'import_id',type:'string'},{name:'entity_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  getOne: ({params,clientOptions}: {params:{import_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,status:string,source_type:string,created_at:Date,updated_at:Date,has_failures:boolean}},{code:401},{code:404},{code:503}]> => handler.apply({method:'get',url:'api/v4/bulk_imports/:import_id',resource:'api',variable:[{name:'import_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  "cancel": {
    post: ({params,clientOptions}: {params:{import_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,status:string,source_type:string,created_at:Date,updated_at:Date,has_failures:boolean}},{code:401},{code:403},{code:404},{code:503}]> => handler.apply({method:'post',url:'api/v4/bulk_imports/:import_id/cancel',resource:'v4',variable:[{name:'import_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  }
})

