/* eslint-disable max-len */
export default (client, handler) => ({
  "conan": {
    "v1": {
      "ping": {
        /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:404}>} */
        get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/ping',variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
      },
      "conans": {
        "search": {
          /** @param {{query?:{q:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:404}>} */
          get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/search',variable:[],query:[{name:'q',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
        },
        /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{recipe_snapshot:object}}|{code:400}|{code:403}|{code:404}>} */
        getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}]}, [client, { params}, options]),
        /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string}}} request @param {any} [options={}] @return {Promise<{code:204}|{code:400}|{code:403}|{code:404}>} */
        delete: ({params} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}]}, [client, { params}, options]),
        "packages": {
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{package_snapshot:object}}|{code:400}|{code:403}|{code:404}>} */
          getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}]}, [client, { params}, options]),
          "digest": {
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{package_urls:object}}|{code:400}|{code:403}|{code:404}>} */
            get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/digest',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
          },
          "download_urls": {
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{package_urls:object}}|{code:400}|{code:403}|{code:404}>} */
            get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/download_urls',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
          },
          "upload_urls": {
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{upload_urls:object}}|{code:400}|{code:403}|{code:404}>} */
            post: ({params} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/upload_urls',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}]}, [client, { params}, options])
          }
        },
        "digest": {
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string},query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{recipe_urls:object}}|{code:400}|{code:403}|{code:404}>} */
          get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/digest',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
        },
        "download_urls": {
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string},query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{recipe_urls:object}}|{code:400}|{code:403}|{code:404}>} */
          get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/download_urls',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
        },
        "upload_urls": {
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{upload_urls:object}}|{code:400}|{code:403}|{code:404}>} */
          post: ({params} = {}, options = {}) => handler.apply({method:'post',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/upload_urls',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}]}, [client, { params}, options])
        }
      },
      "users": {
        "authenticate": {
          /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:404}>} */
          get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/users/authenticate',variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
        },
        "check_credentials": {
          /** @param {{query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:404}>} */
          get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/users/check_credentials',variable:[],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
        }
      },
      "files": {
        "export": {
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:400}|{code:403}|{code:404}>} */
          getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options]),
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string},data:{file:ArrayBuffer}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}>} */
          put: ({params,data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name',headers:{'Content-Type':'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}],data:{mode:'raw',raw:{file:'ArrayBuffer'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
          "authorize": {
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}>} */
            put: ({params} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name/authorize',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options])
          }
        },
        "package": {
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:403}|{code:404}>} */
          getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options]),
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string},data:{file:ArrayBuffer}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}>} */
          put: ({params,data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name',headers:{'Content-Type':'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}],data:{mode:'raw',raw:{file:'ArrayBuffer'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
          "authorize": {
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}>} */
            put: ({params} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name/authorize',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options])
          }
        }
      }
    }
  },
  "maven": {
    /** @param {{params:{file_name:string},query?:{path:string}}} request @param {any} [options={}] @return {Promise<{code:200}|{code:401}|{code:403}|{code:404}>} */
    getOne: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/maven/*path/:file_name',variable:[{name:'file_name',type:'string'}],query:[{name:'path',type:'string'}]}, [client, { params, query}, options])
  },
  "npm": {
    "-": {
      "package": {
        "dist-tags": {
          /** @param {{query?:{package_name:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{dist_tags:object}}|{code:400}|{code:401}|{code:403}|{code:404}>} */
          get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/npm/-/package/*package_name/dist-tags',headers:{Accept:'application/json'},variable:[],query:[{name:'package_name',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options]),
          /** @param {{params:{tag:string},data:{package_name:string}}} request @param {any} [options={}] @return {Promise<{code:204}|{code:400}|{code:401}|{code:403}|{code:404}>} */
          put: ({params,data} = {}, options = {}) => handler.apply({method:'put',url:'api/v4/packages/npm/-/package/*package_name/dist-tags/:tag',headers:{'Content-Type':'application/json'},variable:[{name:'tag',type:'string'}],data:{mode:'raw',raw:{package_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
          /** @param {{params:{tag:string},query?:{package_name:string}}} request @param {any} [options={}] @return {Promise<{code:204}|{code:400}|{code:401}|{code:403}|{code:404}>} */
          delete: ({params,query} = {}, options = {}) => handler.apply({method:'delete',url:'api/v4/packages/npm/-/package/*package_name/dist-tags/:tag',variable:[{name:'tag',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options])
        }
      },
      "npm": {
        "v1": {
          "security": {
            "advisories": {
              "bulk": {
                /** @param {{}} request @param {any} [options={}] @return {Promise<{code:200}|{code:307}|{code:401}|{code:403}|{code:404}>} */
                post: (request = {}, options = {}) => handler.apply({method:'post',url:'api/v4/packages/npm/-/npm/v1/security/advisories/bulk',variable:[]}, [client, request, options])
              }
            },
            "audits": {
              "quick": {
                /** @param {{}} request @param {any} [options={}] @return {Promise<{code:200}|{code:307}|{code:401}|{code:403}|{code:404}>} */
                post: (request = {}, options = {}) => handler.apply({method:'post',url:'api/v4/packages/npm/-/npm/v1/security/audits/quick',variable:[]}, [client, request, options])
              }
            }
          }
        }
      }
    },
    /** @param {{query?:{package_name:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{name:string,versions:object,dist-tags:object}}|{code:302}|{code:400}|{code:401}|{code:403}|{code:404}>} */
    get: ({query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/npm/*package_name',headers:{Accept:'application/json'},variable:[],query:[{name:'package_name',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, {query}, options])
  },
  "terraform": {
    "modules": {
      "v1": {
        /** @param {{params:{module_namespace:string,module_name:string,module_system:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{name:string,provider:string,providers:string,root:string,source:string,submodules:string,version:string,versions:string}}|{code:403}|{code:404}>} */
        getOne: ({params} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system',headers:{Accept:'application/json'},variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}]}, [client, { params}, options]),
        "versions": {
          /** @param {{params:{module_namespace:string,module_name:string,module_system:string},query?:{order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:[{modules:string},{modules:string}]}|{code:403}>} */
          get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/versions',headers:{Accept:'application/json'},variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
        },
        "download": {
          /** @param {{params:{module_namespace:string,module_name:string,module_system:string},query?:{module_version:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:204}|{code:403}|{code:404}>} */
          get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version/download',variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],query:[{name:'module_version',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
        },
        /** @param {{params:{module_namespace:string,module_name:string,module_system:string},query?:{module_version:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:{name:string,provider:string,providers:string,root:string,source:string,submodules:string,version:string,versions:string}}|{code:403}|{code:404}>} */
        get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version',headers:{Accept:'application/json'},variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],query:[{name:'module_version',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options]),
        "file": {
          /** @param {{params:{module_namespace:string,module_name:string,module_system:string},query?:{module_version:string,order_by:string,sort:string}}} request @param {any} [options={}] @return {Promise<{code:200,data:ArrayBuffer}|{code:403}|{code:404}>} */
          get: ({params,query} = {}, options = {}) => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version/file',headers:{Accept:'application/json'},variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],query:[{name:'module_version',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
        }
      }
    }
  }
});