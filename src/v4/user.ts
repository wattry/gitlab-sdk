export default (client: any, request: any) => ({
  keys: {
    get: {
      method: "get",
      url: "api/v4/user/keys",
      resource: "keys",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get the currently authenticated user's SSH keys",
      query: [
        {
          name: "page",
          type: "string"
        },
        {
          name: "per_page",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/user/keys",
      resource: "keys",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Add a new SSH key to the currently authenticated user",
      query: [],
      data: {
        mode: "raw",
        raw: {
          key: "string",
          title: "string",
          expires_at: "dateTime",
          usage_type: "auth_and_signing"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{key:string,title:string,expires_at:dateTime,usage_type:auth_and_signing},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/user/keys/:key_id",
      resource: "keys",
      variable: [
        {
          name: "key_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get a single key owned by currently authenticated user",
      query: [],
      data: null,
      /** @param {{params:{key_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/user/keys/:key_id",
      resource: "keys",
      variable: [
        {
          name: "key_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Delete an SSH key from the currently authenticated user",
      query: [],
      data: null,
      /** @param {{params:{key_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  gpg_keys: {
    get: {
      method: "get",
      url: "api/v4/user/gpg_keys",
      resource: "gpg_keys",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was added in GitLab 10.0",
      query: [
        {
          name: "page",
          type: "string"
        },
        {
          name: "per_page",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,key:string,created_at:string}}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/user/gpg_keys",
      resource: "gpg_keys",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "This feature was added in GitLab 10.0",
      query: [],
      data: {
        mode: "raw",
        raw: {
          key: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{key:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,key:string,created_at:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/user/gpg_keys/:key_id",
      resource: "gpg_keys",
      variable: [
        {
          name: "key_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was added in GitLab 10.0",
      query: [],
      data: null,
      /** @param {{params:{key_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,key:string,created_at:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/user/gpg_keys/:key_id",
      resource: "gpg_keys",
      variable: [
        {
          name: "key_id",
          type: "string"
        }
      ],
      headers: {},
      description: "This feature was added in GitLab 10.0",
      query: [],
      data: null,
      /** @param {{params:{key_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    revoke: {
      post: {
        method: "post",
        url: "api/v4/user/gpg_keys/:key_id/revoke",
        resource: "revoke",
        variable: [
          {
            name: "key_id",
            type: "string"
          }
        ],
        headers: {},
        description: "This feature was added in GitLab 10.0",
        query: [],
        data: null,
        /** @param {{params:{key_id:string},clientOptions:{}}} requestOptions * @return {[{code:201}]} */
        send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
      }
    }
  },
  emails: {
    get: {
      method: "get",
      url: "api/v4/user/emails",
      resource: "emails",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "Get the currently authenticated user's email addresses",
      query: [
        {
          name: "page",
          type: "string"
        },
        {
          name: "per_page",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,email:string,confirmed_at:string}}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    post: {
      method: "post",
      url: "api/v4/user/emails",
      resource: "emails",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Add new email address to the currently authenticated user",
      query: [],
      data: {
        mode: "raw",
        raw: {
          email: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{email:string},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,email:string,confirmed_at:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/user/emails/:email_id",
      resource: "emails",
      variable: [
        {
          name: "email_id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get a single email address owned by the currently authenticated user",
      query: [],
      data: null,
      /** @param {{params:{email_id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,email:string,confirmed_at:string}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    },
    delete: {
      method: "delete",
      url: "api/v4/user/emails/:email_id",
      resource: "emails",
      variable: [
        {
          name: "email_id",
          type: "string"
        }
      ],
      headers: {},
      description: "Delete an email address from the currently authenticated user",
      query: [],
      data: null,
      /** @param {{params:{email_id:string},clientOptions:{}}} requestOptions * @return {[{code:204}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  },
  credit_card_validation: {
    put: {
      method: "put",
      url: "api/v4/user/:user_id/credit_card_validation",
      resource: "credit_card_validation",
      variable: [
        {
          name: "user_id",
          type: "string"
        }
      ],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Update a user's credit_card_validation",
      query: [],
      data: {
        mode: "raw",
        raw: {
          credit_card_validated_at: "dateTime",
          credit_card_expiration_month: "number",
          credit_card_expiration_year: "number",
          credit_card_holder_name: "string",
          credit_card_mask_number: "string",
          credit_card_type: "string",
          zuora_payment_method_xid: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{params:{user_id:string},data:{credit_card_validated_at:dateTime,credit_card_expiration_month:number,credit_card_expiration_year:number,credit_card_holder_name:string,credit_card_mask_number:string,credit_card_type:string,zuora_payment_method_xid:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{user_id:string,credit_card_validated_at:string}}]} */
      send({ params = {}, data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, data, clientOptions }]) }
    }
  },
  preferences: {
    put: {
      method: "put",
      url: "api/v4/user/preferences",
      resource: "preferences",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 13.10.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          view_diffs_file_by_file: "boolean",
          show_whitespace_in_diffs: "boolean",
          pass_user_identities_to_ci_jwt: "boolean"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{view_diffs_file_by_file:boolean,show_whitespace_in_diffs:boolean,pass_user_identities_to_ci_jwt:boolean},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,user_id:string,view_diffs_file_by_file:string,show_whitespace_in_diffs:string,pass_user_identities_to_ci_jwt:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    get: {
      method: "get",
      url: "api/v4/user/preferences",
      resource: "preferences",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 14.0.",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:string,user_id:string,view_diffs_file_by_file:string,show_whitespace_in_diffs:string,pass_user_identities_to_ci_jwt:string}}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  },
  activities: {
    get: {
      method: "get",
      url: "api/v4/user/activities",
      resource: "activities",
      variable: [],
      headers: {},
      description: "Get a list of user activities",
      query: [
        {
          name: "from",
          type: "string"
        },
        {
          name: "page",
          type: "string"
        },
        {
          name: "per_page",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{from:string,page:string,per_page:string},clientOptions:{}}} requestOptions * @return {[{code:200}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    }
  },
  status: {
    put: {
      method: "put",
      url: "api/v4/user/status",
      resource: "status",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Any parameters that are not passed will be nullified.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          emoji: "string",
          message: "string",
          availability: "string",
          clear_status_after: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{emoji:string,message:string,availability:string,clear_status_after:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    patch: {
      method: "patch",
      url: "api/v4/user/status",
      resource: "status",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Any parameters that are not passed will be ignored.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          emoji: "string",
          message: "string",
          availability: "string",
          clear_status_after: "string"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{emoji:string,message:string,availability:string,clear_status_after:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    },
    get: {
      method: "get",
      url: "api/v4/user/status",
      resource: "status",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "get the status of the current user",
      query: [],
      data: null,
      /** @param {{clientOptions:{}}} requestOptions * @return {[{code:200,data:{emoji:string,message:string,availability:string,message_html:string,clear_status_at:string}}]} */
      send({ clientOptions = {} } = {}) { return request.apply(this, [client, { clientOptions }]) }
    }
  },
  avatar: {
    put: {
      method: "put",
      url: "api/v4/user/avatar",
      resource: "avatar",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 17.0.",
      query: [],
      data: {
        mode: "raw",
        raw: {
          avatar: "binary"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{avatar:binary},clientOptions:{}}} requestOptions * @return {[{code:200,data:{avatar_url:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  },
  runners: {
    post: {
      method: "post",
      url: "api/v4/user/runners",
      resource: "runners",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "Create a new runner",
      query: [],
      data: {
        mode: "raw",
        raw: {
          runner_type: "string",
          group_id: "number",
          project_id: "number",
          description: "string",
          maintenance_note: "string",
          paused: "boolean",
          locked: "boolean",
          access_level: "string",
          run_untagged: "boolean",
          tag_list: [
            "string",
            "string"
          ],
          maximum_timeout: "number"
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },

      /** @param {{data:{runner_type:string,group_id:number,project_id:number,description:string,maintenance_note:string,paused:boolean,locked:boolean,access_level:string,run_untagged:boolean,tag_list:[string,string],maximum_timeout:number},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:string,token:string,token_expires_at:string}},{code:400},{code:403}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  },
  personal_access_tokens: {
    post: {
      method: "post",
      url: "api/v4/user/personal_access_tokens",
      resource: "personal_access_tokens",
      variable: [],
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      description: "This feature was introduced in GitLab 16.5",
      query: [],
      data: {
        mode: "raw",
        raw: {
          name: "string",
          scopes: [
            "string",
            "string"
          ],
          expires_at: {}
        },
        options: {
          raw: {
            language: "json"
          }
        }
      },
      /** @param {{data:{name:string,scopes:[string,string],expires_at:{}},clientOptions:{}}} requestOptions * @return {[{code:201,data:{id:number,name:string,revoked:boolean,created_at:dateTime,user_id:number,last_used_at:dateTime,active:boolean,expires_at:dateTime,token:string}}]} */
      send({ data = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { data, clientOptions }]) }
    }
  }
});