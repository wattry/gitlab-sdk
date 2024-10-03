export default (client: any, handler: any) => ({
  "conan": {
    "v1": {
      "ping": {
        get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/ping',resource:'conan',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
      },
      "conans": {
        "search": {
          get: ({query,clientOptions}: {query:{q:string},clientOptions:any}): Promise<[{code:200},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/search',resource:'v1',variable:[],headers:{},query:[{name:'q',type:'string'}],data:null}, [client, {query, clientOptions}])
        },
        getOne: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:any}): Promise<[{code:200,data:{recipe_snapshot:any}},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel',resource:'conan',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
        delete: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:403},{code:404}]> => handler.apply({method:'delete',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel',resource:'conan',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
        "packages": {
          getOne: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},clientOptions:any}): Promise<[{code:200,data:{package_snapshot:any}},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference',resource:'v1',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
          "digest": {
            get: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},clientOptions:any}): Promise<[{code:200,data:{package_urls:any}},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/digest',resource:'conans',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
          },
          "download_urls": {
            get: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},clientOptions:any}): Promise<[{code:200,data:{package_urls:any}},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/download_urls',resource:'conans',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
          },
          "upload_urls": {
            post: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},clientOptions:any}): Promise<[{code:200,data:{upload_urls:any}},{code:400},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/upload_urls',resource:'conans',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
          }
        },
        "digest": {
          get: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:any}): Promise<[{code:200,data:{recipe_urls:any}},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/digest',resource:'v1',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
        },
        "download_urls": {
          get: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:any}): Promise<[{code:200,data:{recipe_urls:any}},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/download_urls',resource:'v1',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
        },
        "upload_urls": {
          post: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:any}): Promise<[{code:200,data:{upload_urls:any}},{code:400},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/upload_urls',resource:'v1',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
        }
      },
      "users": {
        "authenticate": {
          get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/users/authenticate',resource:'v1',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
        },
        "check_credentials": {
          get: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:401},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/users/check_credentials',resource:'v1',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
        }
      },
      "files": {
        "export": {
          getOne: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name',resource:'v1',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
          put: ({params,data,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string},data:{file:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name',resource:'v1',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{file:'binary'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
          "authorize": {
            put: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name/authorize',resource:'files',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
          }
        },
        "package": {
          getOne: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string},clientOptions:any}): Promise<[{code:200},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name',resource:'v1',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
          put: ({params,data,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string},data:{file:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name',resource:'v1',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{file:'binary'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
          "authorize": {
            put: ({params,clientOptions}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string},clientOptions:any}): Promise<[{code:200},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name/authorize',resource:'files',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
          }
        }
      }
    }
  },
  "maven": {
    "*path": {
      getOne: ({params,query,clientOptions}: {params:{file_name:string},query:{path:string},clientOptions:any}): Promise<[{code:200},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/maven/*path/:file_name',resource:'packages',variable:[{name:'file_name',type:'string'}],headers:{},query:[{name:'path',type:'string'}],data:null}, [client, { params, query, clientOptions}])
    }
  },
  "npm": {
    "-": {
      "package": {
        "*package_name": {
          "dist-tags": {
            get: ({query,clientOptions}: {query:{package_name:string},clientOptions:any}): Promise<[{code:200,data:{dist_tags:any}},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/npm/-/package/*package_name/dist-tags',resource:'package',variable:[],headers:{Accept:'application/json'},query:[{name:'package_name',type:'string'}],data:null}, [client, {query, clientOptions}]),
            put: ({params,data,clientOptions}: {params:{tag:string},data:{package_name:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'put',url:'api/v4/packages/npm/-/package/*package_name/dist-tags/:tag',resource:'package',variable:[{name:'tag',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{package_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
            delete: ({params,query,clientOptions}: {params:{tag:string},query:{package_name:string},clientOptions:any}): Promise<[{code:204},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'delete',url:'api/v4/packages/npm/-/package/*package_name/dist-tags/:tag',resource:'package',variable:[{name:'tag',type:'string'}],headers:{},query:[{name:'package_name',type:'string'}],data:null}, [client, { params, query, clientOptions}])
          }
        }
      },
      "npm": {
        "v1": {
          "security": {
            "advisories": {
              "bulk": {
                post: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:307},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/packages/npm/-/npm/v1/security/advisories/bulk',resource:'security',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
              }
            },
            "audits": {
              "quick": {
                post: ({clientOptions}: {clientOptions:any}): Promise<[{code:200},{code:307},{code:401},{code:403},{code:404}]> => handler.apply({method:'post',url:'api/v4/packages/npm/-/npm/v1/security/audits/quick',resource:'security',variable:[],headers:{},query:[],data:null}, [client, {clientOptions}])
              }
            }
          }
        }
      }
    },
    "*package_name": {
      get: ({query,clientOptions}: {query:{package_name:string},clientOptions:any}): Promise<[{code:200,data:{name:string,versions:any,'dist-tags':any}},{code:302},{code:400},{code:401},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/npm/*package_name',resource:'packages',variable:[],headers:{Accept:'application/json'},query:[{name:'package_name',type:'string'}],data:null}, [client, {query, clientOptions}])
    }
  },
  "terraform": {
    "modules": {
      "v1": {
        getOne: ({params,clientOptions}: {params:{module_namespace:string,module_name:string,module_system:string},clientOptions:any}): Promise<[{code:200,data:{name:string,provider:string,providers:string,root:string,source:string,submodules:string,version:string,versions:string}},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system',resource:'terraform',variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
        "versions": {
          get: ({params,clientOptions}: {params:{module_namespace:string,module_name:string,module_system:string},clientOptions:any}): Promise<[{code:200,data:[{modules:string},{modules:string}]},{code:403}]> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/versions',resource:'modules',variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
        },
        "download": {
          get: ({params,clientOptions}: {params:{module_namespace:string,module_name:string,module_system:string},clientOptions:any}): Promise<[{code:302},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/download',resource:'modules',variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
        },
        "*module_version": {
          get: ({params,query,clientOptions}: {params:{module_namespace:string,module_name:string,module_system:string},query:{module_version:string},clientOptions:any}): Promise<[{code:200,data:{name:string,provider:string,providers:string,root:string,source:string,submodules:string,version:string,versions:string}},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version',resource:'modules',variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],headers:{Accept:'application/json'},query:[{name:'module_version',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
          "download": {
            get: ({params,query,clientOptions}: {params:{module_namespace:string,module_name:string,module_system:string},query:{module_version:string},clientOptions:any}): Promise<[{code:204},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version/download',resource:'v1',variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],headers:{},query:[{name:'module_version',type:'string'}],data:null}, [client, { params, query, clientOptions}])
          },
          "file": {
            get: ({params,query,clientOptions}: {params:{module_namespace:string,module_name:string,module_system:string},query:{module_version:string},clientOptions:any}): Promise<[{code:200,data:string},{code:403},{code:404}]> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version/file',resource:'v1',variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],headers:{Accept:'application/json'},query:[{name:'module_version',type:'string'}],data:null}, [client, { params, query, clientOptions}])
          }
        }
      }
    }
  }
})