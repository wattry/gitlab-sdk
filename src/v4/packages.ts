export default (client: any, request: any) => ({
  conan: {
    v1: {
      ping: {
        get: {
          method: "get",
          url: "api/v4/packages/conan/v1/ping",
          resource: "ping",
          variable: [],
          headers: {},
          description: "This feature was introduced in GitLab 12.2",
          query: [],
          data: null,
          /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:404}]} */
          send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
        }
      },
      conans: {
        search: {
          get: {
            method: "get",
            url: "api/v4/packages/conan/v1/conans/search",
            resource: "search",
            variable: [],
            headers: {},
            description: "This feature was introduced in GitLab 12.4",
            query: [
              {
                name: "q",
                type: "string"
              }
            ],
            data: null,
            /** @param {{query:{q:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:404}]} */
            send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
          }
        },
        get: {
          method: "get",
          url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel",
          resource: "conans",
          variable: [
            {
              name: "package_name",
              type: "string"
            },
            {
              name: "package_version",
              type: "string"
            },
            {
              name: "package_username",
              type: "string"
            },
            {
              name: "package_channel",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "This feature was introduced in GitLab 12.5",
          query: [],
          data: null,
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{recipe_snapshot:object}},{code:400},{code:403},{code:404}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        },
        delete: {
          method: "delete",
          url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel",
          resource: "conans",
          variable: [
            {
              name: "package_name",
              type: "string"
            },
            {
              name: "package_version",
              type: "string"
            },
            {
              name: "package_username",
              type: "string"
            },
            {
              name: "package_channel",
              type: "string"
            }
          ],
          headers: {},
          description: "This feature was introduced in GitLab 12.5",
          query: [],
          data: null,
          /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:403},{code:404}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        },
        packages: {
          get: {
            method: "get",
            url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference",
            resource: "packages",
            variable: [
              {
                name: "package_name",
                type: "string"
              },
              {
                name: "package_version",
                type: "string"
              },
              {
                name: "package_username",
                type: "string"
              },
              {
                name: "package_channel",
                type: "string"
              },
              {
                name: "conan_package_reference",
                type: "string"
              }
            ],
            headers: {
              Accept: "application/json"
            },
            description: "This feature was introduced in GitLab 12.5",
            query: [],
            data: null,
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{package_snapshot:object}},{code:400},{code:403},{code:404}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          },
          digest: {
            get: {
              method: "get",
              url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/digest",
              resource: "digest",
              variable: [
                {
                  name: "package_name",
                  type: "string"
                },
                {
                  name: "package_version",
                  type: "string"
                },
                {
                  name: "package_username",
                  type: "string"
                },
                {
                  name: "package_channel",
                  type: "string"
                },
                {
                  name: "conan_package_reference",
                  type: "string"
                }
              ],
              headers: {
                Accept: "application/json"
              },
              description: "This feature was introduced in GitLab 12.5",
              query: [],
              data: null,
              /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{package_urls:object}},{code:400},{code:403},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          },
          download_urls: {
            get: {
              method: "get",
              url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/download_urls",
              resource: "download_urls",
              variable: [
                {
                  name: "package_name",
                  type: "string"
                },
                {
                  name: "package_version",
                  type: "string"
                },
                {
                  name: "package_username",
                  type: "string"
                },
                {
                  name: "package_channel",
                  type: "string"
                },
                {
                  name: "conan_package_reference",
                  type: "string"
                }
              ],
              headers: {
                Accept: "application/json"
              },
              description: "This feature was introduced in GitLab 12.5",
              query: [],
              data: null,
              /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{package_urls:object}},{code:400},{code:403},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          },
          upload_urls: {
            post: {
              method: "post",
              url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/packages/:conan_package_reference/upload_urls",
              resource: "upload_urls",
              variable: [
                {
                  name: "package_name",
                  type: "string"
                },
                {
                  name: "package_version",
                  type: "string"
                },
                {
                  name: "package_username",
                  type: "string"
                },
                {
                  name: "package_channel",
                  type: "string"
                },
                {
                  name: "conan_package_reference",
                  type: "string"
                }
              ],
              headers: {
                Accept: "application/json"
              },
              description: "This feature was introduced in GitLab 12.4",
              query: [],
              data: null,
              /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,conan_package_reference:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{upload_urls:object}},{code:400},{code:403},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          }
        },
        digest: {
          get: {
            method: "get",
            url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/digest",
            resource: "digest",
            variable: [
              {
                name: "package_name",
                type: "string"
              },
              {
                name: "package_version",
                type: "string"
              },
              {
                name: "package_username",
                type: "string"
              },
              {
                name: "package_channel",
                type: "string"
              }
            ],
            headers: {
              Accept: "application/json"
            },
            description: "This feature was introduced in GitLab 12.5",
            query: [],
            data: null,
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{recipe_urls:object}},{code:400},{code:403},{code:404}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          }
        },
        download_urls: {
          get: {
            method: "get",
            url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/download_urls",
            resource: "download_urls",
            variable: [
              {
                name: "package_name",
                type: "string"
              },
              {
                name: "package_version",
                type: "string"
              },
              {
                name: "package_username",
                type: "string"
              },
              {
                name: "package_channel",
                type: "string"
              }
            ],
            headers: {
              Accept: "application/json"
            },
            description: "This feature was introduced in GitLab 12.5",
            query: [],
            data: null,
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{recipe_urls:object}},{code:400},{code:403},{code:404}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          }
        },
        upload_urls: {
          post: {
            method: "post",
            url: "api/v4/packages/conan/v1/conans/:package_name/:package_version/:package_username/:package_channel/upload_urls",
            resource: "upload_urls",
            variable: [
              {
                name: "package_name",
                type: "string"
              },
              {
                name: "package_version",
                type: "string"
              },
              {
                name: "package_username",
                type: "string"
              },
              {
                name: "package_channel",
                type: "string"
              }
            ],
            headers: {
              Accept: "application/json"
            },
            description: "This feature was introduced in GitLab 12.4",
            query: [],
            data: null,
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{upload_urls:object}},{code:400},{code:403},{code:404}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          }
        }
      },
      users: {
        authenticate: {
          get: {
            method: "get",
            url: "api/v4/packages/conan/v1/users/authenticate",
            resource: "authenticate",
            variable: [],
            headers: {},
            description: "This feature was introduced in GitLab 12.2",
            query: [],
            data: null,
            /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
            send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
          }
        },
        check_credentials: {
          get: {
            method: "get",
            url: "api/v4/packages/conan/v1/users/check_credentials",
            resource: "check_credentials",
            variable: [],
            headers: {},
            description: "This feature was introduced in GitLab 12.4",
            query: [],
            data: null,
            /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
            send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
          }
        }
      },
      files: {
        export: {
          get: {
            method: "get",
            url: "api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name",
            resource: "export",
            variable: [
              {
                name: "package_name",
                type: "string"
              },
              {
                name: "package_version",
                type: "string"
              },
              {
                name: "package_username",
                type: "string"
              },
              {
                name: "package_channel",
                type: "string"
              },
              {
                name: "recipe_revision",
                type: "string"
              },
              {
                name: "file_name",
                type: "string"
              }
            ],
            headers: {},
            description: "This feature was introduced in GitLab 12.6",
            query: [],
            data: null,
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:403},{code:404}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          },
          put: {
            method: "put",
            url: "api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name",
            resource: "export",
            variable: [
              {
                name: "package_name",
                type: "string"
              },
              {
                name: "package_version",
                type: "string"
              },
              {
                name: "package_username",
                type: "string"
              },
              {
                name: "package_channel",
                type: "string"
              },
              {
                name: "recipe_revision",
                type: "string"
              },
              {
                name: "file_name",
                type: "string"
              }
            ],
            headers: {
              "Content-Type": "application/json"
            },
            description: "This feature was introduced in GitLab 12.6",
            query: [],
            data: {
              mode: "raw",
              raw: {
                file: "binary"
              },
              options: {
                raw: {
                  language: "json"
                }
              }
            },

            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string},data:{file:binary},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:401},{code:403},{code:404}]} */
            send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
          },
          authorize: {
            put: {
              method: "put",
              url: "api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/export/:file_name/authorize",
              resource: "authorize",
              variable: [
                {
                  name: "package_name",
                  type: "string"
                },
                {
                  name: "package_version",
                  type: "string"
                },
                {
                  name: "package_username",
                  type: "string"
                },
                {
                  name: "package_channel",
                  type: "string"
                },
                {
                  name: "recipe_revision",
                  type: "string"
                },
                {
                  name: "file_name",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 12.6",
              query: [],
              data: null,
              /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,file_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:401},{code:403},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          }
        },
        package: {
          get: {
            method: "get",
            url: "api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name",
            resource: "package",
            variable: [
              {
                name: "package_name",
                type: "string"
              },
              {
                name: "package_version",
                type: "string"
              },
              {
                name: "package_username",
                type: "string"
              },
              {
                name: "package_channel",
                type: "string"
              },
              {
                name: "recipe_revision",
                type: "string"
              },
              {
                name: "conan_package_reference",
                type: "string"
              },
              {
                name: "package_revision",
                type: "string"
              },
              {
                name: "file_name",
                type: "string"
              }
            ],
            headers: {},
            description: "This feature was introduced in GitLab 12.5",
            query: [],
            data: null,
            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:404}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          },
          put: {
            method: "put",
            url: "api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name",
            resource: "package",
            variable: [
              {
                name: "package_name",
                type: "string"
              },
              {
                name: "package_version",
                type: "string"
              },
              {
                name: "package_username",
                type: "string"
              },
              {
                name: "package_channel",
                type: "string"
              },
              {
                name: "recipe_revision",
                type: "string"
              },
              {
                name: "conan_package_reference",
                type: "string"
              },
              {
                name: "package_revision",
                type: "string"
              },
              {
                name: "file_name",
                type: "string"
              }
            ],
            headers: {
              "Content-Type": "application/json"
            },
            description: "This feature was introduced in GitLab 12.6",
            query: [],
            data: {
              mode: "raw",
              raw: {
                file: "binary"
              },
              options: {
                raw: {
                  language: "json"
                }
              }
            },

            /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string},data:{file:binary},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:401},{code:403},{code:404}]} */
            send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
          },
          authorize: {
            put: {
              method: "put",
              url: "api/v4/packages/conan/v1/files/:package_name/:package_version/:package_username/:package_channel/:recipe_revision/package/:conan_package_reference/:package_revision/:file_name/authorize",
              resource: "authorize",
              variable: [
                {
                  name: "package_name",
                  type: "string"
                },
                {
                  name: "package_version",
                  type: "string"
                },
                {
                  name: "package_username",
                  type: "string"
                },
                {
                  name: "package_channel",
                  type: "string"
                },
                {
                  name: "recipe_revision",
                  type: "string"
                },
                {
                  name: "conan_package_reference",
                  type: "string"
                },
                {
                  name: "package_revision",
                  type: "string"
                },
                {
                  name: "file_name",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 12.6",
              query: [],
              data: null,
              /** @param {{params:{package_name:string,package_version:string,package_username:string,package_channel:string,recipe_revision:string,conan_package_reference:string,package_revision:string,file_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:400},{code:401},{code:403},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          }
        }
      }
    }
  },
  maven: {
    "*path": {
      get: {
        method: "get",
        url: "api/v4/packages/maven/*path/:file_name",
        resource: "*path",
        variable: [
          {
            name: "file_name",
            type: "string"
          }
        ],
        headers: {},
        description: "This feature was introduced in GitLab 11.6",
        query: [
          {
            name: "path",
            type: "string"
          }
        ],
        data: null,
        /** @param {{params:{file_name:string},query:{path:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
        send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
      }
    }
  },
  npm: {
    "-": {
      package: {
        "*package_name": {
          "dist-tags": {
            get: {
              method: "get",
              url: "api/v4/packages/npm/-/package/*package_name/dist-tags",
              resource: "dist-tags",
              variable: [],
              headers: {
                Accept: "application/json"
              },
              description: "This feature was introduced in GitLab 12.7",
              query: [
                {
                  name: "package_name",
                  type: "string"
                }
              ],
              data: null,
              /** @param {{query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{dist_tags:object}},{code:400},{code:401},{code:403},{code:404}]} */
              send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
            },
            put: {
              method: "put",
              url: "api/v4/packages/npm/-/package/*package_name/dist-tags/:tag",
              resource: "dist-tags",
              variable: [
                {
                  name: "tag",
                  type: "string"
                }
              ],
              headers: {
                "Content-Type": "application/json"
              },
              description: "This feature was introduced in GitLab 12.7",
              query: [],
              data: {
                mode: "raw",
                raw: {
                  package_name: "string"
                },
                options: {
                  raw: {
                    language: "json"
                  }
                }
              },

              /** @param {{params:{tag:string},data:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:401},{code:403},{code:404}]} */
              send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
            },
            delete: {
              method: "delete",
              url: "api/v4/packages/npm/-/package/*package_name/dist-tags/:tag",
              resource: "dist-tags",
              variable: [
                {
                  name: "tag",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 12.7",
              query: [
                {
                  name: "package_name",
                  type: "string"
                }
              ],
              data: null,
              /** @param {{params:{tag:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:400},{code:401},{code:403},{code:404}]} */
              send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
            }
          }
        }
      },
      npm: {
        v1: {
          security: {
            advisories: {
              bulk: {
                post: {
                  method: "post",
                  url: "api/v4/packages/npm/-/npm/v1/security/advisories/bulk",
                  resource: "bulk",
                  variable: [],
                  headers: {},
                  description: "This feature was introduced in GitLab 15.6",
                  query: [],
                  data: null,
                  /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:307},{code:401},{code:403},{code:404}]} */
                  send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
                }
              }
            },
            audits: {
              quick: {
                post: {
                  method: "post",
                  url: "api/v4/packages/npm/-/npm/v1/security/audits/quick",
                  resource: "quick",
                  variable: [],
                  headers: {},
                  description: "This feature was introduced in GitLab 15.6",
                  query: [],
                  data: null,
                  /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200},{code:307},{code:401},{code:403},{code:404}]} */
                  send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
                }
              }
            }
          }
        }
      }
    },
    "*package_name": {
      get: {
        method: "get",
        url: "api/v4/packages/npm/*package_name",
        resource: "*package_name",
        variable: [],
        headers: {
          Accept: "application/json"
        },
        description: "This feature was introduced in GitLab 11.8",
        query: [
          {
            name: "package_name",
            type: "string"
          }
        ],
        data: null,
        /** @param {{query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{name:string,versions:object,dist-tags:object}},{code:302},{code:400},{code:401},{code:403},{code:404}]} */
        send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
      }
    }
  },
  terraform: {
    modules: {
      v1: {
        get: {
          method: "get",
          url: "api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system",
          resource: "v1",
          variable: [
            {
              name: "module_namespace",
              type: "string"
            },
            {
              name: "module_name",
              type: "string"
            },
            {
              name: "module_system",
              type: "string"
            }
          ],
          headers: {
            Accept: "application/json"
          },
          description: "Get details about the latest version of a module",
          query: [],
          data: null,
          /** @param {{params:{module_namespace:string,module_name:string,module_system:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{name:string,provider:string,providers:string,root:string,source:string,submodules:string,version:string,versions:string}},{code:403},{code:404}]} */
          send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
        },
        versions: {
          get: {
            method: "get",
            url: "api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/versions",
            resource: "versions",
            variable: [
              {
                name: "module_namespace",
                type: "string"
              },
              {
                name: "module_name",
                type: "string"
              },
              {
                name: "module_system",
                type: "string"
              }
            ],
            headers: {
              Accept: "application/json"
            },
            description: "List versions for a module",
            query: [],
            data: null,
            /** @param {{params:{module_namespace:string,module_name:string,module_system:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:[{modules:string},{modules:string}]},{code:403}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          }
        },
        download: {
          get: {
            method: "get",
            url: "api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/download",
            resource: "download",
            variable: [
              {
                name: "module_namespace",
                type: "string"
              },
              {
                name: "module_name",
                type: "string"
              },
              {
                name: "module_system",
                type: "string"
              }
            ],
            headers: {},
            description: "Download the latest version of a module",
            query: [],
            data: null,
            /** @param {{params:{module_namespace:string,module_name:string,module_system:string},clientOptions:{}}} requestOptions * @return {[{code:302},{code:403},{code:404}]} */
            send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
          }
        },
        "*module_version": {
          get: {
            method: "get",
            url: "api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version",
            resource: "*module_version",
            variable: [
              {
                name: "module_namespace",
                type: "string"
              },
              {
                name: "module_name",
                type: "string"
              },
              {
                name: "module_system",
                type: "string"
              }
            ],
            headers: {
              Accept: "application/json"
            },
            description: "Get details about specific version of a module",
            query: [
              {
                name: "module_version",
                type: "string"
              }
            ],
            data: null,
            /** @param {{params:{module_namespace:string,module_name:string,module_system:string},query:{module_version:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{name:string,provider:string,providers:string,root:string,source:string,submodules:string,version:string,versions:string}},{code:403},{code:404}]} */
            send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
          },
          download: {
            get: {
              method: "get",
              url: "api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version/download",
              resource: "download",
              variable: [
                {
                  name: "module_namespace",
                  type: "string"
                },
                {
                  name: "module_name",
                  type: "string"
                },
                {
                  name: "module_system",
                  type: "string"
                }
              ],
              headers: {},
              description: "Download specific version of a module",
              query: [
                {
                  name: "module_version",
                  type: "string"
                }
              ],
              data: null,
              /** @param {{params:{module_namespace:string,module_name:string,module_system:string},query:{module_version:string},clientOptions:{}}} requestOptions * @return {[{code:204},{code:403},{code:404}]} */
              send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
            }
          },
          file: {
            get: {
              method: "get",
              url: "api/v4/packages/terraform/modules/v1/:module_namespace/:module_name/:module_system/*module_version/file",
              resource: "file",
              variable: [
                {
                  name: "module_namespace",
                  type: "string"
                },
                {
                  name: "module_name",
                  type: "string"
                },
                {
                  name: "module_system",
                  type: "string"
                }
              ],
              headers: {
                Accept: "application/json"
              },
              description: "Download specific version of a module",
              query: [
                {
                  name: "module_version",
                  type: "string"
                }
              ],
              data: null,
              /** @param {{params:{module_namespace:string,module_name:string,module_system:string},query:{module_version:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:binary},{code:403},{code:404}]} */
              send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
            }
          }
        }
      }
    }
  }
});