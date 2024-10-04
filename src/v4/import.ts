export interface Import {
  bitbucket: {
    post: ({ data, clientOptions }: {
      data: {
        bitbucket_username: string;
        bitbucket_app_password: string;
        repo_path: string;
        target_namespace: string;
        new_name: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        name: string;
        full_path: string;
        full_name: string;
        refs_url: string;
        import_source: string;
        import_status: string;
        human_import_status_name: string;
        provider_link: string;
        import_error: string;
        import_warning: string;
        relation_type: string;
      };
    }, {
      code: 400;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 422;
    }, {
      code: 503;
    }]>;
  };
  bitbucket_server: {
    post: ({ data, clientOptions }: {
      data: {
        bitbucket_server_url: string;
        bitbucket_server_username: string;
        personal_access_token: string;
        bitbucket_server_project: string;
        bitbucket_server_repo: string;
        new_name: string;
        new_namespace: string;
        timeout_strategy: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        name: string;
        full_path: string;
        full_name: string;
        refs_url: string;
      };
    }, {
      code: 400;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 422;
    }, {
      code: 503;
    }]>;
  };
  github: {
    post: ({ data, clientOptions }: {
      data: {
        personal_access_token: string;
        repo_id: number;
        target_namespace: string;
        new_name: string;
        github_hostname: string;
        optional_stages: any;
        timeout_strategy: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        name: string;
        full_path: string;
        full_name: string;
        refs_url: string;
      };
    }, {
      code: 400;
    }, {
      code: 401;
    }, {
      code: 403;
    }, {
      code: 422;
    }, {
      code: 503;
    }]>;
    cancel: {
      post: ({ data, clientOptions }: {
        data: {
          project_id: number;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 200;
        data: {
          id: number;
          name: string;
          full_path: string;
          full_name: string;
          refs_url: string;
          import_source: string;
          import_status: string;
          human_import_status_name: string;
          provider_link: string;
          import_error: string;
          import_warning: string;
          relation_type: string;
        };
      }, {
        code: 400;
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
    gists: {
      post: ({ data, clientOptions }: {
        data: {
          personal_access_token: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 202;
      }, {
        code: 401;
      }, {
        code: 422;
      }, {
        code: 429;
      }]>;
    };
  };
};

export default (client: any, handler: any): Import => ({
  "bitbucket": {
    post: ({data,clientOptions}: {data:{bitbucket_username:string,bitbucket_app_password:string,repo_path:string,target_namespace:string,new_name:string},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string,import_source:string,import_status:string,human_import_status_name:string,provider_link:string,import_error:string,import_warning:string,relation_type:string}},{code:400},{code:401},{code:403},{code:422},{code:503}]> => handler.apply({method:'post',url:'api/v4/import/bitbucket',resource:'v4',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{bitbucket_username:'string',bitbucket_app_password:'string',repo_path:'string',target_namespace:'string',new_name:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  },
  "bitbucket_server": {
    post: ({data,clientOptions}: {data:{bitbucket_server_url:string,bitbucket_server_username:string,personal_access_token:string,bitbucket_server_project:string,bitbucket_server_repo:string,new_name:string,new_namespace:string,timeout_strategy:string},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string}},{code:400},{code:401},{code:403},{code:422},{code:503}]> => handler.apply({method:'post',url:'api/v4/import/bitbucket_server',resource:'v4',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{bitbucket_server_url:'string',bitbucket_server_username:'string',personal_access_token:'string',bitbucket_server_project:'string',bitbucket_server_repo:'string',new_name:'string',new_namespace:'string',timeout_strategy:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
  },
  "github": {
    post: ({data,clientOptions}: {data:{personal_access_token:string,repo_id:number,target_namespace:string,new_name:string,github_hostname:string,optional_stages:any,timeout_strategy:string},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string}},{code:400},{code:401},{code:403},{code:422},{code:503}]> => handler.apply({method:'post',url:'api/v4/import/github',resource:'v4',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{personal_access_token:'string',repo_id:'number',target_namespace:'string',new_name:'string',github_hostname:'string',optional_stages:'object',timeout_strategy:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
    "cancel": {
      post: ({data,clientOptions}: {data:{project_id:number},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,full_path:string,full_name:string,refs_url:string,import_source:string,import_status:string,human_import_status_name:string,provider_link:string,import_error:string,import_warning:string,relation_type:string}},{code:400},{code:401},{code:403},{code:404},{code:503}]> => handler.apply({method:'post',url:'api/v4/import/github/cancel',resource:'import',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{project_id:'number'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
    },
    "gists": {
      post: ({data,clientOptions}: {data:{personal_access_token:string},clientOptions:any}): Promise<[{code:202},{code:401},{code:422},{code:429}]> => handler.apply({method:'post',url:'api/v4/import/github/gists',resource:'import',variable:[],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{personal_access_token:'string'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}])
    }
  }
})