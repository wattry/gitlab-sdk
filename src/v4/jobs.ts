export default (client: any, request: any) => ({
  request: {
    post: {
      method: "post",
      url: "api/v4/jobs/request",
      resource: "request",
      variable: [],
      headers: {
        "Content-Type": "application/json"
      },
      description: "Request a job",
      query: [],
      data: {
        mode: "raw",
        raw: {
          token: "string",
          system_id: "string",
          last_update: "string",
          info: {
            name: "string",
            version: "string",
            revision: "string",
            platform: "string",
            architecture: "string",
            executor: "string",
            features: "object",
            config: {
              gpus: "string"
            }
          },
          session: {
            url: "string",
            certificate: "string",
            authorization: "string"
          }
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{token:string,system_id:string,last_update:string,info:{name:string,version:string,revision:string,platform:string,architecture:string,executor:string,features:object,config:{gpus:string}},session:{url:string,certificate:string,authorization:string}},clientOptions:{}}} requestOptions * @return {[{code:201},{code:204},{code:403},{code:409}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  },
  put: {
    method: "put",
    url: "api/v4/jobs/:id",
    resource: "jobs",
    variable: [
      {
        name: "id",
        type: "string"
      }
    ],
    headers: {
      "Content-Type": "application/json"
    },
    description: "Update a job",
    query: [],
    data: {
      mode: "raw",
      raw: {
        token: "string",
        state: "string",
        checksum: "string",
        failure_reason: "string",
        output: {
          checksum: "string",
          bytesize: "number"
        },
        exit_code: "number"
      },
      options: {
        raw: {
          language: "json"
        }
      }
    },

    /** @param {{params:{id:string},data:{token:string,state:string,checksum:string,failure_reason:string,output:{checksum:string,bytesize:number},exit_code:number},clientOptions:{}}} requestOptions * @return {[{code:200},{code:202},{code:400},{code:403}]} */
    send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
  },
  trace: {
    patch: {
      method: "patch",
      url: "api/v4/jobs/:id/trace",
      resource: "trace",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json"
      },
      description: "Append a patch to the job trace",
      query: [],
      data: {
        mode: "raw",
        raw: {
          token: "string",
          debug_trace: "boolean"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{token:string,debug_trace:boolean},clientOptions:{}}} requestOptions * @return {[{code:202},{code:400},{code:403},{code:416}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    }
  },
  artifacts: {
    post: {
      method: "post",
      url: "api/v4/jobs/:id/artifacts",
      resource: "artifacts",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json"
      },
      description: "Upload a job artifact",
      query: [],
      data: {
        mode: "raw",
        raw: {
          file: "binary",
          token: "string",
          expire_in: "string",
          artifact_type: "archive",
          artifact_format: "zip",
          metadata: "binary",
          accessibility: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{file:binary,token:string,expire_in:string,artifact_type:archive,artifact_format:zip,metadata:binary,accessibility:string},clientOptions:{}}} requestOptions * @return {[{code:201},{code:400},{code:403},{code:405},{code:413}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    },
    get: {
      method: "get",
      url: "api/v4/jobs/:id/artifacts",
      resource: "artifacts",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {},
      description: "Download the artifacts file for job",
      query: [
        {
          name: "token",
          type: "string"
        },
        {
          name: "direct_download",
          type: "string"
        }
      ],
      data: null,
      /** @param {{params:{id:string},query:{token:string,direct_download:string},clientOptions:{}}} requestOptions * @return {[{code:200},{code:401},{code:403},{code:404}]} */
      send({ params = {}, query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, query, clientOptions }]) }
    },
    authorize: {
      post: {
        method: "post",
        url: "api/v4/jobs/:id/artifacts/authorize",
        resource: "authorize",
        variable: [
          {
            name: "id",
            type: "string"
          }
        ],
        headers: {
          "Content-Type": "application/json"
        },
        description: "Authorize uploading job artifact",
        query: [],
        data: {
          mode: "raw",
          raw: {
            token: "string",
            filesize: "number",
            artifact_type: "archive"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{params:{id:string},data:{token:string,filesize:number,artifact_type:archive},clientOptions:{}}} requestOptions * @return {[{code:200},{code:403},{code:405},{code:413}]} */
        send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
      }
    }
  }
});