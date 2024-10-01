export default (client: any, request: any) => ({
  slack: {
    events: {
      post: {
        method: "post",
        url: "api/v4/integrations/slack/events",
        resource: "events",
        variable: [],
        headers: {
          "Content-Type": "application/json"
        },
        description: "Receive Slack events",
        query: [],
        data: {
          mode: "raw",
          raw: {
            token: "string",
            team_id: "string",
            api_app_id: "string",
            event: "object",
            type: "string",
            event_id: "string",
            event_time: "number",
            authed_users: [
              "string",
              "string"
            ]
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{data:{token:string,team_id:string,api_app_id:string,event:object,type:string,event_id:string,event_time:number,authed_users:[string,string]},clientOptions:{}}} requestOptions * @return {[{code:200},{code:204},{code:401}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    },
    interactions: {
      post: {
        method: "post",
        url: "api/v4/integrations/slack/interactions",
        resource: "interactions",
        variable: [],
        headers: {},
        description: "",
        query: [],
        data: null,
        /** @param {{clientOptions:{}}} requestOptions * @return {[{code:201}]} */
        send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
      }
    },
    options: {
      post: {
        method: "post",
        url: "api/v4/integrations/slack/options",
        resource: "options",
        variable: [],
        headers: {},
        description: "",
        query: [],
        data: null,
        /** @param {{clientOptions:{}}} requestOptions * @return {[{code:201}]} */
        send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
      }
    }
  },
  jira_connect: {
    subscriptions: {
      post: {
        method: "post",
        url: "api/v4/integrations/jira_connect/subscriptions",
        resource: "subscriptions",
        variable: [],
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        description: "Subscribes the namespace to the JiraConnectInstallation",
        query: [],
        data: {
          mode: "raw",
          raw: {
            jwt: "string",
            namespace_path: "string"
          },
          options: {
            raw: {
              language: "json"
            }
          }
        },

        /** @param {{data:{jwt:string,namespace_path:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{success:{}}},{code:400},{code:401},{code:403},{code:404}]} */
        send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
      }
    }
  }
});