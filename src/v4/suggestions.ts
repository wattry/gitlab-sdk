export default (client: any, request: any) => ({
  apply: {
    put: {
      method: "put",
      url: "api/v4/suggestions/:id/apply",
      resource: "apply",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Apply suggestion patch in the Merge Request it was created",
      query: [],
      data: {
        mode: "raw",
        raw: {
          commit_message: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{id:string},data:{commit_message:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,from_line:string,to_line:string,appliable:string,applied:string,from_content:string,to_content:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    }
  },
  batch_apply: {
    put: {
      method: "put",
      url: "api/v4/suggestions/batch_apply",
      resource: "batch_apply",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Apply multiple suggestion patches in the Merge Request where they were created",
      query: [],
      data: {
        mode: "raw",
        raw: {
          ids: [
            "number",
            "number"
          ],
          commit_message: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },
      /** @param {{data:{ids:[number,number],commit_message:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,from_line:string,to_line:string,appliable:string,applied:string,from_content:string,to_content:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  }
});