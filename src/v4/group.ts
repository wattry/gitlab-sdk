export default (client: any, request: any) => ({
  group: {
    "-": {
      packages: {
        composer: {
          packages: {
            get: {
              method: "get",
              url: "api/v4/group/:id/-/packages/composer/packages",
              resource: "packages",
              variable: [
                {
                  name: "id",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 13.1",
              query: [],
              data: null,
              /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          },
          p: {
            get: {
              method: "get",
              url: "api/v4/group/:id/-/packages/composer/p/:sha",
              resource: "p",
              variable: [
                {
                  name: "id",
                  type: "string"
                },
                {
                  name: "sha",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 13.1",
              query: [],
              data: null,
              /** @param {{params:{id:string,sha:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
              send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
            }
          },
          p2: {
            "*package_name": {
              get: {
                method: "get",
                url: "api/v4/group/:id/-/packages/composer/p2/*package_name",
                resource: "*package_name",
                variable: [
                  {
                    name: "id",
                    type: "string"
                  }
                ],
                headers: {},
                description: "This feature was introduced in GitLab 13.1",
                query: [
                  {
                    name: "package_name",
                    type: "string"
                  }
                ],
                data: null,
                /** @param {{params:{id:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
                send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
              }
            }
          },
          "*package_name": {
            get: {
              method: "get",
              url: "api/v4/group/:id/-/packages/composer/*package_name",
              resource: "*package_name",
              variable: [
                {
                  name: "id",
                  type: "string"
                }
              ],
              headers: {},
              description: "This feature was introduced in GitLab 12.1",
              query: [
                {
                  name: "package_name",
                  type: "string"
                }
              ],
              data: null,
              /** @param {{params:{id:string},query:{package_name:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:404}]} */
              send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
            }
          }
        }
      }
    }
  }
});