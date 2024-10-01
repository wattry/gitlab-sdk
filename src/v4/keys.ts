export default (client: any, request: any) => ({
  keys: {
    get: {
      method: "get",
      url: "api/v4/keys",
      resource: "keys",
      variable: [],
      headers: {
        Accept: "application/json"
      },
      description: "You can search for a user that owns a specific SSH key. Note only administrators can lookup SSH key\\\n        with the fingerprint of an SSH key",
      query: [
        {
          name: "fingerprint",
          type: "string"
        }
      ],
      data: null,
      /** @param {{query:{fingerprint:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:dateTime,confirmed_at:dateTime,last_activity_on:dateTime,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:dateTime,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]} */
      send({ query = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { query, clientOptions }]) }
    },
    getOne: {
      method: "get",
      url: "api/v4/keys/:id",
      resource: "keys",
      variable: [
        {
          name: "id",
          type: "string"
        }
      ],
      headers: {
        Accept: "application/json"
      },
      description: "Get SSH key with user by ID of an SSH key. Note only administrators can lookup SSH key with user by ID\\\n        of an SSH key",
      query: [],
      data: null,
      /** @param {{params:{id:string},clientOptions:{}}} requestOptions * @return {[{code:200,data:{id:number,title:string,created_at:dateTime,expires_at:dateTime,key:string,usage_type:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:dateTime,confirmed_at:dateTime,last_activity_on:dateTime,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:dateTime,identities:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:{value:{}},group_id:{value:{}},active:{value:{}}}}}}]} */
      send({ params = {}, clientOptions = {} } = {}) { return request.apply(this, [client, { params, clientOptions }]) }
    }
  }
});