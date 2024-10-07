/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface BulkImports {
  get: ({ query }: {
    query?: {
      page: string;
      per_page: string;
      sort: string;
      status: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: [{
      id: number;
      status: string;
      source_type: string;
      created_at: string;
      upstringd_at: string;
      has_failures: boolean;
    }, {
      id: number;
      status: string;
      source_type: string;
      created_at: string;
      upstringd_at: string;
      has_failures: boolean;
    }];
  } | {
    code: 401;
  } | {
    code: 404;
  } | {
    code: 503;
  }>;
  entities: {
    get: ({ params, query }: {
      params: {
        import_id: string;
      };
      query?: {
        status: string;
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
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
        created_at: string;
        upstringd_at: string;
        failures: [any, any];
        migrate_projects: boolean;
        has_failures: boolean;
        stats: object;
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
        created_at: string;
        upstringd_at: string;
        failures: [any, any];
        migrate_projects: boolean;
        has_failures: boolean;
        stats: object;
      }];
    } | {
      code: 401;
    } | {
      code: 404;
    } | {
      code: 503;
    }>;
    getOne: ({ params }: {
      params: {
        import_id: string;
        entity_id: string;
      };
    }, options?: {}) => Promise<{
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
        created_at: string;
        upstringd_at: string;
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
        stats: object;
      };
    } | {
      code: 401;
    } | {
      code: 404;
    } | {
      code: 503;
    }>;
    failures: {
      get: ({ params }: {
        params: {
          import_id: string;
          entity_id: string;
        };
      }, options?: {}) => Promise<{
        code: 200;
        data: {
          relation: string;
          exception_message: string;
          exception_class: string;
          correlation_id_value: string;
          source_url: string;
          source_title: string;
        };
      } | {
        code: 401;
      } | {
        code: 404;
      } | {
        code: 503;
      }>;
    };
  };
  getOne: ({ params }: {
    params: {
      import_id: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: number;
      status: string;
      source_type: string;
      created_at: string;
      upstringd_at: string;
      has_failures: boolean;
    };
  } | {
    code: 401;
  } | {
    code: 404;
  } | {
    code: 503;
  }>;
  cancel: {
    post: ({ params }: {
      params: {
        import_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: number;
        status: string;
        source_type: string;
        created_at: string;
        upstringd_at: string;
        has_failures: boolean;
      };
    } | {
      code: 401;
    } | {
      code: 403;
    } | {
      code: 404;
    } | {
      code: 503;
    }>;
  };
};

export default (client: Client, handler: Handler): BulkImports => ({
  get: ({query}: {query?:{page:string,per_page:string,sort:string,status:string}}, options?: {}): Promise<{code:200,data:[{id:number,status:string,source_type:string,created_at:string,upstringd_at:string,has_failures:boolean},{id:number,status:string,source_type:string,created_at:string,upstringd_at:string,has_failures:boolean}]}|{code:401}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/bulk_imports',headers:{Accept:'application/json'},variable:[],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'sort',type:'string'},{name:'status',type:'string'}]}, [client, {query}, options]),
  "entities": {
    get: ({params,query}: {params:{import_id:string},query?:{status:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:[{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:string,upstringd_at:string,failures:[any,any],migrate_projects:boolean,has_failures:boolean,stats:object},{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:string,upstringd_at:string,failures:[any,any],migrate_projects:boolean,has_failures:boolean,stats:object}]}|{code:401}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/bulk_imports/:import_id/entities',headers:{Accept:'application/json'},variable:[{name:'import_id',type:'string'}],query:[{name:'status',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    getOne: ({params}: {params:{import_id:string,entity_id:string}}, options?: {}): Promise<{code:200,data:{id:number,bulk_import_id:number,status:string,entity_type:string,source_full_path:string,destination_full_path:string,destination_name:string,destination_slug:string,destination_namespace:string,parent_id:number,namespace_id:number,project_id:number,created_at:string,upstringd_at:string,failures:[{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string},{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string}],migrate_projects:boolean,has_failures:boolean,stats:object}}|{code:401}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/bulk_imports/:import_id/entities/:entity_id',headers:{Accept:'application/json'},variable:[{name:'import_id',type:'string'},{name:'entity_id',type:'string'}]}, [client, { params}, options]),
    "failures": {
      get: ({params}: {params:{import_id:string,entity_id:string}}, options?: {}): Promise<{code:200,data:{relation:string,exception_message:string,exception_class:string,correlation_id_value:string,source_url:string,source_title:string}}|{code:401}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/bulk_imports/:import_id/entities/:entity_id/failures',headers:{Accept:'application/json'},variable:[{name:'import_id',type:'string'},{name:'entity_id',type:'string'}]}, [client, { params}, options])
    }
  },
  getOne: ({params}: {params:{import_id:string}}, options?: {}): Promise<{code:200,data:{id:number,status:string,source_type:string,created_at:string,upstringd_at:string,has_failures:boolean}}|{code:401}|{code:404}|{code:503}> => handler.apply({method:'get',url:'api/v4/bulk_imports/:import_id',headers:{Accept:'application/json'},variable:[{name:'import_id',type:'string'}]}, [client, { params}, options]),
  "cancel": {
    post: ({params}: {params:{import_id:string}}, options?: {}): Promise<{code:200,data:{id:number,status:string,source_type:string,created_at:string,upstringd_at:string,has_failures:boolean}}|{code:401}|{code:403}|{code:404}|{code:503}> => handler.apply({method:'post',url:'api/v4/bulk_imports/:import_id/cancel',headers:{Accept:'application/json'},variable:[{name:'import_id',type:'string'}]}, [client, { params}, options])
  }
})