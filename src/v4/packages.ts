/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Packages {
  conan: {
    v1: {
      ping: {
        get: ({ }: {}, options?: {}) => Promise<{
          code: 200;
        } | {
          code: 404;
        }>;
      };
      conans: {
        search: {
          get: ({ query }: {
            query?: {
              q: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 404;
          }>;
        };
        getOne: ({ params }: {
          params: {
            package_name: string;
            package_version: string;
            package_username: string;
            package_channel: string;
          };
        }, options?: {}) => Promise<{
          code: 200;
          data: {
            recipe_snapshot: object;
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
            package_name: string;
            package_version: string;
            package_username: string;
            package_channel: string;
          };
        }, options?: {}) => Promise<{
          code: 204;
        } | {
          code: 400;
        } | {
          code: 403;
        } | {
          code: 404;
        }>;
        packages: {
          getOne: ({ params }: {
            params: {
              package_name: string;
              package_version: string;
              package_username: string;
              package_channel: string;
              conan_package_reference: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
            data: {
              package_snapshot: object;
            };
          } | {
            code: 400;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
          digest: {
            get: ({ params }: {
              params: {
                package_name: string;
                package_version: string;
                package_username: string;
                package_channel: string;
                conan_package_reference: string;
              };
            }, options?: {}) => Promise<{
              code: 200;
              data: {
                package_urls: object;
              };
            } | {
              code: 400;
            } | {
              code: 403;
            } | {
              code: 404;
            }>;
          };
          download_urls: {
            get: ({ params }: {
              params: {
                package_name: string;
                package_version: string;
                package_username: string;
                package_channel: string;
                conan_package_reference: string;
              };
            }, options?: {}) => Promise<{
              code: 200;
              data: {
                package_urls: object;
              };
            } | {
              code: 400;
            } | {
              code: 403;
            } | {
              code: 404;
            }>;
          };
          upload_urls: {
            post: ({ params }: {
              params: {
                package_name: string;
                package_version: string;
                package_username: string;
                package_channel: string;
                conan_package_reference: string;
              };
            }, options?: {}) => Promise<{
              code: 200;
              data: {
                upload_urls: object;
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
        digest: {
          get: ({ params }: {
            params: {
              package_name: string;
              package_version: string;
              package_username: string;
              package_channel: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
            data: {
              recipe_urls: object;
            };
          } | {
            code: 400;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
        };
        download_urls: {
          get: ({ params }: {
            params: {
              package_name: string;
              package_version: string;
              package_username: string;
              package_channel: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
            data: {
              recipe_urls: object;
            };
          } | {
            code: 400;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
        };
        upload_urls: {
          post: ({ params }: {
            params: {
              package_name: string;
              package_version: string;
              package_username: string;
              package_channel: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
            data: {
              upload_urls: object;
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
      users: {
        authenticate: {
          get: ({ }: {}, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 401;
          } | {
            code: 404;
          }>;
        };
        check_credentials: {
          get: ({ }: {}, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 401;
          } | {
            code: 404;
          }>;
        };
      };
      files: {
        export: {
          getOne: ({ params }: {
            params: {
              package_name: string;
              package_version: string;
              package_username: string;
              package_channel: string;
              recipe_revision: string;
              file_name: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 400;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
          put: ({ params, data }: {
            params: {
              package_name: string;
              package_version: string;
              package_username: string;
              package_channel: string;
              recipe_revision: string;
              file_name: string;
            };
            data: {
              file: ArrayBuffer;
            };
          }, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 400;
          } | {
            code: 401;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
          authorize: {
            put: ({ params }: {
              params: {
                package_name: string;
                package_version: string;
                package_username: string;
                package_channel: string;
                recipe_revision: string;
                file_name: string;
              };
            }, options?: {}) => Promise<{
              code: 200;
            } | {
              code: 400;
            } | {
              code: 401;
            } | {
              code: 403;
            } | {
              code: 404;
            }>;
          };
        };
        package: {
          getOne: ({ params }: {
            params: {
              package_name: string;
              package_version: string;
              package_username: string;
              package_channel: string;
              recipe_revision: string;
              conan_package_reference: string;
              package_revision: string;
              file_name: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
          put: ({ params, data }: {
            params: {
              package_name: string;
              package_version: string;
              package_username: string;
              package_channel: string;
              recipe_revision: string;
              conan_package_reference: string;
              package_revision: string;
              file_name: string;
            };
            data: {
              file: ArrayBuffer;
            };
          }, options?: {}) => Promise<{
            code: 200;
          } | {
            code: 400;
          } | {
            code: 401;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
          authorize: {
            put: ({ params }: {
              params: {
                package_name: string;
                package_version: string;
                package_username: string;
                package_channel: string;
                recipe_revision: string;
                conan_package_reference: string;
                package_revision: string;
                file_name: string;
              };
            }, options?: {}) => Promise<{
              code: 200;
            } | {
              code: 400;
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
    };
  };
  maven: {
    getOne: ({ params, query }: {
      params: {
        file_name: string;
      };
      query?: {
        path: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 401;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
  npm: {
    "-": {
      package: {
        "dist-tags": {
          get: ({ query }: {
            query?: {
              package_name: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
            data: {
              dist_tags: object;
            };
          } | {
            code: 400;
          } | {
            code: 401;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
          put: ({ params, data }: {
            params: {
              tag: string;
            };
            data: {
              package_name: string;
            };
          }, options?: {}) => Promise<{
            code: 204;
          } | {
            code: 400;
          } | {
            code: 401;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
          delete: ({ params, query }: {
            params: {
              tag: string;
            };
            query?: {
              package_name: string;
            };
          }, options?: {}) => Promise<{
            code: 204;
          } | {
            code: 400;
          } | {
            code: 401;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
        };
      };
      npm: {
        v1: {
          security: {
            advisories: {
              bulk: {
                post: ({ }: {}, options?: {}) => Promise<{
                  code: 200;
                } | {
                  code: 307;
                } | {
                  code: 401;
                } | {
                  code: 403;
                } | {
                  code: 404;
                }>;
              };
            };
            audits: {
              quick: {
                post: ({ }: {}, options?: {}) => Promise<{
                  code: 200;
                } | {
                  code: 307;
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
        };
      };
    };
    get: ({ query }: {
      query?: {
        package_name: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        name: string;
        versions: object;
        "dist-tags": object;
      };
    } | {
      code: 302;
    } | {
      code: 400;
    } | {
      code: 401;
    } | {
      code: 403;
    } | {
      code: 404;
    }>;
  };
  terraform: {
    modules: {
      v1: {
        getOne: ({ params }: {
          params: {
            module_namespace: string;
            module_name: string;
            module_system: string;
          };
        }, options?: {}) => Promise<{
          code: 200;
          data: {
            name: string;
            provider: string;
            providers: string;
            root: string;
            source: string;
            submodules: string;
            version: string;
            versions: string;
          };
        } | {
          code: 403;
        } | {
          code: 404;
        }>;
        versions: {
          get: ({ params }: {
            params: {
              module_namespace: string;
              module_name: string;
              module_system: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
            data: [{
              modules: string;
            }, {
              modules: string;
            }];
          } | {
            code: 403;
          }>;
        };
        download: {
          get: ({ params, query }: {
            params: {
              module_namespace: string;
              module_name: string;
              module_system: string;
            };
            query?: {
              module_version: string;
            };
          }, options?: {}) => Promise<{
            code: 204;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
        };
        get: ({ params, query }: {
          params: {
            module_namespace: string;
            module_name: string;
            module_system: string;
          };
          query?: {
            module_version: string;
          };
        }, options?: {}) => Promise<{
          code: 200;
          data: {
            name: string;
            provider: string;
            providers: string;
            root: string;
            source: string;
            submodules: string;
            version: string;
            versions: string;
          };
        } | {
          code: 403;
        } | {
          code: 404;
        }>;
        file: {
          get: ({ params, query }: {
            params: {
              module_namespace: string;
              module_name: string;
              module_system: string;
            };
            query?: {
              module_version: string;
            };
          }, options?: {}) => Promise<{
            code: 200;
            data: ArrayBuffer;
          } | {
            code: 403;
          } | {
            code: 404;
          }>;
        };
      };
    };
  };
};

export default (client: Client, handler: Handler): Packages => ({
  "conan": {
    "v1": {
      "ping": {
        get: ({}: {}, options?: {}): Promise<{code:200}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/ping',variable:[]}, [client, {}, options])
      },
      "conans": {
        "search": {
          get: ({query}: {query?:{q:string}}, options?: {}): Promise<{code:200}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/search',variable:[],query:[{name:'q',type:'string'}]}, [client, {query}, options])
        },
        getOne: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string}}, options?: {}): Promise<{code:200,data:{recipe_snapshot:object}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}]}, [client, { params}, options]),
        delete: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'delete',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}]}, [client, { params}, options]),
        "packages": {
          getOne: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string}}, options?: {}): Promise<{code:200,data:{package_snapshot:object}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}]}, [client, { params}, options]),
          "digest": {
            get: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string}}, options?: {}): Promise<{code:200,data:{package_urls:object}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/digest',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}]}, [client, { params}, options])
          },
          "download_urls": {
            get: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string}}, options?: {}): Promise<{code:200,data:{package_urls:object}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/download_urls',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}]}, [client, { params}, options])
          },
          "upload_urls": {
            post: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string}}, options?: {}): Promise<{code:200,data:{upload_urls:object}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/upload_urls',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'conan_package_reference',type:'string'}]}, [client, { params}, options])
          }
        },
        "digest": {
          get: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string}}, options?: {}): Promise<{code:200,data:{recipe_urls:object}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/digest',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}]}, [client, { params}, options])
        },
        "download_urls": {
          get: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string}}, options?: {}): Promise<{code:200,data:{recipe_urls:object}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/download_urls',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}]}, [client, { params}, options])
        },
        "upload_urls": {
          post: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string}}, options?: {}): Promise<{code:200,data:{upload_urls:object}}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/upload_urls',headers:{Accept:'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'}]}, [client, { params}, options])
        }
      },
      "users": {
        "authenticate": {
          get: ({}: {}, options?: {}): Promise<{code:200}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/users/authenticate',variable:[]}, [client, {}, options])
        },
        "check_credentials": {
          get: ({}: {}, options?: {}): Promise<{code:200}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/users/check_credentials',variable:[]}, [client, {}, options])
        }
      },
      "files": {
        "export": {
          getOne: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string}}, options?: {}): Promise<{code:200}|{code:400}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options]),
          put: ({params,data}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string},data:{file:ArrayBuffer}}, options?: {}): Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name',headers:{'Content-Type':'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}],data:{mode:'raw',raw:{file:'ArrayBuffer'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
          "authorize": {
            put: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string}}, options?: {}): Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name/authorize',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options])
          }
        },
        "package": {
          getOne: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string}}, options?: {}): Promise<{code:200}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options]),
          put: ({params,data}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string},data:{file:ArrayBuffer}}, options?: {}): Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name',headers:{'Content-Type':'application/json'},variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}],data:{mode:'raw',raw:{file:'ArrayBuffer'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
          "authorize": {
            put: ({params}: {params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string}}, options?: {}): Promise<{code:200}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name/authorize',variable:[{name:'package_name',type:'string'},{name:'package_version',type:'string'},{name:'package_username',type:'string'},{name:'package_channel',type:'string'},{name:'recipe_revision',type:'string'},{name:'conan_package_reference',type:'string'},{name:'package_revision',type:'string'},{name:'file_name',type:'string'}]}, [client, { params}, options])
          }
        }
      }
    }
  },
  "maven": {
    getOne: ({params,query}: {params:{file_name:string},query?:{path:string}}, options?: {}): Promise<{code:200}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/maven/*path/:file_name',variable:[{name:'file_name',type:'string'}],query:[{name:'path',type:'string'}]}, [client, { params, query}, options])
  },
  "npm": {
    "-": {
      "package": {
        "dist-tags": {
          get: ({query}: {query?:{package_name:string}}, options?: {}): Promise<{code:200,data:{dist_tags:object}}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/npm/-/package/*package_name/dist-tags',headers:{Accept:'application/json'},variable:[],query:[{name:'package_name',type:'string'}]}, [client, {query}, options]),
          put: ({params,data}: {params:{tag:string},data:{package_name:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'put',url:'api/v4/packages/npm/-/package/*package_name/dist-tags/:tag',headers:{'Content-Type':'application/json'},variable:[{name:'tag',type:'string'}],data:{mode:'raw',raw:{package_name:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
          delete: ({params,query}: {params:{tag:string},query?:{package_name:string}}, options?: {}): Promise<{code:204}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'delete',url:'api/v4/packages/npm/-/package/*package_name/dist-tags/:tag',variable:[{name:'tag',type:'string'}],query:[{name:'package_name',type:'string'}]}, [client, { params, query}, options])
        }
      },
      "npm": {
        "v1": {
          "security": {
            "advisories": {
              "bulk": {
                post: ({}: {}, options?: {}): Promise<{code:200}|{code:307}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/packages/npm/-/npm/v1/security/advisories/bulk',variable:[]}, [client, {}, options])
              }
            },
            "audits": {
              "quick": {
                post: ({}: {}, options?: {}): Promise<{code:200}|{code:307}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'post',url:'api/v4/packages/npm/-/npm/v1/security/audits/quick',variable:[]}, [client, {}, options])
              }
            }
          }
        }
      }
    },
    get: ({query}: {query?:{package_name:string}}, options?: {}): Promise<{code:200,data:{name:string,versions:object,'dist-tags':object}}|{code:302}|{code:400}|{code:401}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/npm/*package_name',headers:{Accept:'application/json'},variable:[],query:[{name:'package_name',type:'string'}]}, [client, {query}, options])
  },
  "terraform": {
    "modules": {
      "v1": {
        getOne: ({params}: {params:{module_namespace:string,module_name:string,module_system:string}}, options?: {}): Promise<{code:200,data:{name:string,provider:string,providers:string,root:string,source:string,submodules:string,version:string,versions:string}}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system',headers:{Accept:'application/json'},variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}]}, [client, { params}, options]),
        "versions": {
          get: ({params}: {params:{module_namespace:string,module_name:string,module_system:string}}, options?: {}): Promise<{code:200,data:[{modules:string},{modules:string}]}|{code:403}> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/versions',headers:{Accept:'application/json'},variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}]}, [client, { params}, options])
        },
        "download": {
          get: ({params,query}: {params:{module_namespace:string,module_name:string,module_system:string},query?:{module_version:string}}, options?: {}): Promise<{code:204}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version/download',variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],query:[{name:'module_version',type:'string'}]}, [client, { params, query}, options])
        },
        get: ({params,query}: {params:{module_namespace:string,module_name:string,module_system:string},query?:{module_version:string}}, options?: {}): Promise<{code:200,data:{name:string,provider:string,providers:string,root:string,source:string,submodules:string,version:string,versions:string}}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version',headers:{Accept:'application/json'},variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],query:[{name:'module_version',type:'string'}]}, [client, { params, query}, options]),
        "file": {
          get: ({params,query}: {params:{module_namespace:string,module_name:string,module_system:string},query?:{module_version:string}}, options?: {}): Promise<{code:200,data:ArrayBuffer}|{code:403}|{code:404}> => handler.apply({method:'get',url:'api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version/file',headers:{Accept:'application/json'},variable:[{name:'module_namespace',type:'string'},{name:'module_name',type:'string'},{name:'module_system',type:'string'}],query:[{name:'module_version',type:'string'}]}, [client, { params, query}, options])
        }
      }
    }
  }
})