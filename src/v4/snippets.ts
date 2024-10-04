export interface Snippets {
  get: ({ query, clientOptions }: {
    query: {
      created_after: string;
      created_before: string;
      page: string;
      per_page: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: [{
      id: number;
      title: string;
      description: string;
      visibility: string;
      author: {
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
      created_at: Date;
      updated_at: Date;
      project_id: number;
      web_url: string;
      raw_url: string;
      ssh_url_to_repo: string;
      http_url_to_repo: string;
      file_name: string;
      files: [string, string];
      imported: boolean;
      imported_from: string;
      repository_storage: string;
    }, {
      id: number;
      title: string;
      description: string;
      visibility: string;
      author: {
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
      created_at: Date;
      updated_at: Date;
      project_id: number;
      web_url: string;
      raw_url: string;
      ssh_url_to_repo: string;
      http_url_to_repo: string;
      file_name: string;
      files: [string, string];
      imported: boolean;
      imported_from: string;
      repository_storage: string;
    }];
  }, {
    code: 404;
  }]>;
  post: ({ data, clientOptions }: {
    data: {
      title: string;
      file_name: string;
      description: string;
      visibility: string;
      files: [{
        file_path: string;
        content: string;
      }, {
        file_path: string;
        content: string;
      }];
      content: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 201;
    data: {
      id: number;
      title: string;
      description: string;
      visibility: string;
      author: {
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
      created_at: Date;
      updated_at: Date;
      project_id: number;
      web_url: string;
      raw_url: string;
      ssh_url_to_repo: string;
      http_url_to_repo: string;
      file_name: string;
      files: [string, string];
      imported: boolean;
      imported_from: string;
      repository_storage: string;
    };
  }, {
    code: 400;
  }, {
    code: 404;
  }, {
    code: 422;
  }]>;
  public: {
    get: ({ query, clientOptions }: {
      query: {
        created_after: string;
        created_before: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        title: string;
        description: string;
        visibility: string;
        author: {
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
        created_at: Date;
        updated_at: Date;
        project_id: number;
        web_url: string;
        raw_url: string;
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        file_name: string;
        files: [string, string];
        imported: boolean;
        imported_from: string;
        repository_storage: string;
      }, {
        id: number;
        title: string;
        description: string;
        visibility: string;
        author: {
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
        created_at: Date;
        updated_at: Date;
        project_id: number;
        web_url: string;
        raw_url: string;
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        file_name: string;
        files: [string, string];
        imported: boolean;
        imported_from: string;
        repository_storage: string;
      }];
    }, {
      code: 404;
    }]>;
  };
  all: {
    get: ({ query, clientOptions }: {
      query: {
        created_after: string;
        created_before: string;
        page: string;
        per_page: string;
        repository_storage: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        title: string;
        description: string;
        visibility: string;
        author: {
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
        created_at: Date;
        updated_at: Date;
        project_id: number;
        web_url: string;
        raw_url: string;
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        file_name: string;
        files: [string, string];
        imported: boolean;
        imported_from: string;
        repository_storage: string;
      }, {
        id: number;
        title: string;
        description: string;
        visibility: string;
        author: {
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
        created_at: Date;
        updated_at: Date;
        project_id: number;
        web_url: string;
        raw_url: string;
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        file_name: string;
        files: [string, string];
        imported: boolean;
        imported_from: string;
        repository_storage: string;
      }];
    }, {
      code: 404;
    }]>;
  };
  getOne: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: number;
      title: string;
      description: string;
      visibility: string;
      author: {
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
      created_at: Date;
      updated_at: Date;
      project_id: number;
      web_url: string;
      raw_url: string;
      ssh_url_to_repo: string;
      http_url_to_repo: string;
      file_name: string;
      files: [string, string];
      imported: boolean;
      imported_from: string;
      repository_storage: string;
    };
  }, {
    code: 404;
  }]>;
  put: ({ params, data, clientOptions }: {
    params: {
      id: string;
    };
    data: {
      content: string;
      description: string;
      file_name: string;
      title: string;
      visibility: string;
      files: [{
        action: string;
        content: string;
        file_path: string;
        previous_path: string;
      }, {
        action: string;
        content: string;
        file_path: string;
        previous_path: string;
      }];
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: number;
      title: string;
      description: string;
      visibility: string;
      author: {
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
      created_at: Date;
      updated_at: Date;
      project_id: number;
      web_url: string;
      raw_url: string;
      ssh_url_to_repo: string;
      http_url_to_repo: string;
      file_name: string;
      files: [string, string];
      imported: boolean;
      imported_from: string;
      repository_storage: string;
    };
  }, {
    code: 400;
  }, {
    code: 404;
  }, {
    code: 422;
  }]>;
  delete: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 204;
    data: {
      id: number;
      title: string;
      description: string;
      visibility: string;
      author: {
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
      created_at: Date;
      updated_at: Date;
      project_id: number;
      web_url: string;
      raw_url: string;
      ssh_url_to_repo: string;
      http_url_to_repo: string;
      file_name: string;
      files: [string, string];
      imported: boolean;
      imported_from: string;
      repository_storage: string;
    };
  }, {
    code: 400;
  }, {
    code: 404;
  }]>;
  raw: {
    get: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }, {
      code: 404;
    }]>;
  };
  files: {
    raw: {
      get: ({ params, clientOptions }: {
        params: {
          file_path: string;
          ref: string;
          id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
      }, {
        code: 404;
      }]>;
    };
  };
  user_agent_detail: {
    get: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        user_agent: string;
        ip_address: string;
        akismet_submitted: boolean;
      };
    }, {
      code: 404;
    }]>;
  };
  repository_storage_moves: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        created_at: Date;
        state: string;
        source_storage_name: string;
        destination_storage_name: string;
        error_message: string;
        snippet: {
          id: {
            value: any;
          };
          title: {
            value: any;
          };
          description: {
            value: any;
          };
          visibility: {
            value: any;
          };
          author: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          project_id: {
            value: any;
          };
          web_url: {
            value: any;
          };
          raw_url: {
            value: any;
          };
          ssh_url_to_repo: {
            value: any;
          };
          http_url_to_repo: {
            value: any;
          };
        };
      }, {
        id: number;
        created_at: Date;
        state: string;
        source_storage_name: string;
        destination_storage_name: string;
        error_message: string;
        snippet: {
          id: {
            value: any;
          };
          title: {
            value: any;
          };
          description: {
            value: any;
          };
          visibility: {
            value: any;
          };
          author: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          project_id: {
            value: any;
          };
          web_url: {
            value: any;
          };
          raw_url: {
            value: any;
          };
          ssh_url_to_repo: {
            value: any;
          };
          http_url_to_repo: {
            value: any;
          };
        };
      }];
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        destination_storage_name: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        created_at: Date;
        state: string;
        source_storage_name: string;
        destination_storage_name: string;
        error_message: string;
        snippet: {
          id: number;
          title: string;
          description: string;
          visibility: string;
          author: {
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
          created_at: Date;
          updated_at: Date;
          project_id: number;
          web_url: string;
          raw_url: string;
          ssh_url_to_repo: string;
          http_url_to_repo: string;
        };
      };
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        repository_storage_move_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        created_at: Date;
        state: string;
        source_storage_name: string;
        destination_storage_name: string;
        error_message: string;
        snippet: {
          id: number;
          title: string;
          description: string;
          visibility: string;
          author: {
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
          created_at: Date;
          updated_at: Date;
          project_id: number;
          web_url: string;
          raw_url: string;
          ssh_url_to_repo: string;
          http_url_to_repo: string;
        };
      };
    }]>;
  };
};

export default (client: any, handler: any): Snippets => ({
  get: ({query,clientOptions}: {query:{created_after:string,created_before:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]},{code:404}]> => handler.apply({method:'get',url:'api/v4/snippets',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}]),
  post: ({data,clientOptions}: {data:{title:string,file_name:string,description:string,visibility:string,files:[{file_path:string,content:string},{file_path:string,content:string}],content:string},clientOptions:any}): Promise<[{code:201,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}},{code:400},{code:404},{code:422}]> => handler.apply({method:'post',url:'api/v4/snippets',resource:'api',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{title:'string',file_name:'string',description:'string',visibility:'internal',files:[{file_path:'string',content:'string'},{file_path:'string',content:'string'}],content:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
  "public": {
    get: ({query,clientOptions}: {query:{created_after:string,created_before:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]},{code:404}]> => handler.apply({method:'get',url:'api/v4/snippets/public',resource:'v4',variable:[],headers:{Accept:'application/json'},query:[{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, {query, clientOptions}])
  },
  "all": {
    get: ({query,clientOptions}: {query:{created_after:string,created_before:string,page:string,per_page:string,repository_storage:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string},{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}]},{code:404}]> => handler.apply({method:'get',url:'api/v4/snippets/all',resource:'v4',variable:[],headers:{Accept:'application/json'},query:[{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'repository_storage',type:'string'}],data:null}, [client, {query, clientOptions}])
  },
  getOne: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}},{code:404}]> => handler.apply({method:'get',url:'api/v4/snippets/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  put: ({params,data,clientOptions}: {params:{id:string},data:{content:string,description:string,file_name:string,title:string,visibility:string,files:[{action:string,content:string,file_path:string,previous_path:string},{action:string,content:string,file_path:string,previous_path:string}]},clientOptions:any}): Promise<[{code:200,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}},{code:400},{code:404},{code:422}]> => handler.apply({method:'put',url:'api/v4/snippets/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{content:'string',description:'string',file_name:'string',title:'string',visibility:'string',files:[{action:'string',content:'string',file_path:'string',previous_path:'string'},{action:'string',content:'string',file_path:'string',previous_path:'string'}]},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  delete: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:204,data:{id:number,title:string,description:string,visibility:string,author:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string,file_name:string,files:[string,string],imported:boolean,imported_from:string,repository_storage:string}},{code:400},{code:404}]> => handler.apply({method:'delete',url:'api/v4/snippets/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
  "raw": {
    get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200},{code:404}]> => handler.apply({method:'get',url:'api/v4/snippets/:id/raw',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "files": {
    "raw": {
      get: ({params,clientOptions}: {params:{file_path:string,ref:string,id:string},clientOptions:any}): Promise<[{code:200},{code:404}]> => handler.apply({method:'get',url:'api/v4/snippets/:id/files/:ref/:file_path/raw',resource:'snippets',variable:[{name:'file_path',type:'string'},{name:'ref',type:'string'},{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  "user_agent_detail": {
    get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{user_agent:string,ip_address:string,akismet_submitted:boolean}},{code:404}]> => handler.apply({method:'get',url:'api/v4/snippets/:id/user_agent_detail',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "repository_storage_moves": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:{value:{}},title:{value:{}},description:{value:{}},visibility:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},project_id:{value:{}},web_url:{value:{}},raw_url:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}}}},{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:{value:{}},title:{value:{}},description:{value:{}},visibility:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},project_id:{value:{}},web_url:{value:{}},raw_url:{value:{}},ssh_url_to_repo:{value:{}},http_url_to_repo:{value:{}}}}]}]> => handler.apply({method:'get',url:'api/v4/snippets/:id/repository_storage_moves',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{id:string},data:{destination_storage_name:string},clientOptions:any}): Promise<[{code:201,data:{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}]> => handler.apply({method:'post',url:'api/v4/snippets/:id/repository_storage_moves',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{destination_storage_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{id:string,repository_storage_move_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,created_at:Date,state:string,source_storage_name:string,destination_storage_name:string,error_message:string,snippet:{id:number,title:string,description:string,visibility:string,author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},created_at:Date,updated_at:Date,project_id:number,web_url:string,raw_url:string,ssh_url_to_repo:string,http_url_to_repo:string}}}]> => handler.apply({method:'get',url:'api/v4/snippets/:id/repository_storage_moves/:repository_storage_move_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'repository_storage_move_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  }
})