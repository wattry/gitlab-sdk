/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Keys {
  get: ({ query }: {
    query?: {
      fingerprint: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: number;
      username: string;
      name: string;
      state: string;
      locked: boolean;
      avatar_url: string;
      avatar_path: string;
      custom_attributes: [{
        key: string;
        value: string;
      }, {
        key: string;
        value: string;
      }];
      web_url: string;
      created_at: string;
      bio: string;
      location: string;
      public_email: string;
      skype: string;
      linkedin: string;
      twitter: string;
      discord: string;
      website_url: string;
      organization: string;
      job_title: string;
      pronouns: string;
      bot: string;
      work_information: string;
      followers: string;
      following: string;
      is_followed: string;
      local_time: string;
      last_sign_in_at: string;
      confirmed_at: string;
      last_activity_on: string;
      email: string;
      theme_id: number;
      color_scheme_id: number;
      projects_limit: number;
      current_sign_in_at: string;
      identities: {
        provider: string;
        extern_uid: string;
        saml_provider_id: string;
      };
      can_create_group: boolean;
      can_create_project: boolean;
      two_factor_enabled: boolean;
      external: string;
      private_profile: boolean;
      commit_email: string;
      shared_runners_minutes_limit: string;
      extra_shared_runners_minutes_limit: string;
      scim_identities: {
        extern_uid: string;
        group_id: string;
        active: string;
      };
      is_admin: string;
      note: string;
      namespace_id: string;
      created_by: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [any, any];
        web_url: string;
      };
      email_reset_offered_at: string;
      using_license_seat: string;
      is_auditor: string;
      provisioned_by_group_id: string;
      enterprise_group_id: string;
      enterprise_group_associated_at: string;
    };
  }>;
  getOne: ({ params }: {
    params: {
      id: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: number;
      title: string;
      created_at: string;
      expires_at: string;
      key: string;
      usage_type: string;
      user: {
        id: number;
        username: string;
        name: string;
        state: string;
        locked: boolean;
        avatar_url: string;
        avatar_path: string;
        custom_attributes: [any, any];
        web_url: string;
        created_at: string;
        bio: string;
        location: string;
        public_email: string;
        skype: string;
        linkedin: string;
        twitter: string;
        discord: string;
        website_url: string;
        organization: string;
        job_title: string;
        pronouns: string;
        bot: string;
        work_information: string;
        followers: string;
        following: string;
        is_followed: string;
        local_time: string;
        last_sign_in_at: string;
        confirmed_at: string;
        last_activity_on: string;
        email: string;
        theme_id: number;
        color_scheme_id: number;
        projects_limit: number;
        current_sign_in_at: string;
        identities: {
          provider: {
            value: {};
          };
          extern_uid: {
            value: {};
          };
          saml_provider_id: {
            value: {};
          };
        };
        can_create_group: boolean;
        can_create_project: boolean;
        two_factor_enabled: boolean;
        external: string;
        private_profile: boolean;
        commit_email: string;
        shared_runners_minutes_limit: string;
        extra_shared_runners_minutes_limit: string;
        scim_identities: {
          extern_uid: {
            value: {};
          };
          group_id: {
            value: {};
          };
          active: {
            value: {};
          };
        };
      };
    };
  }>;
};

export default (client: Client, handler: Handler): Keys => ({
  get: ({query}: {query?:{fingerprint:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:string,confirmed_at:string,last_activity_on:string,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:string,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}> => handler.apply({method:'get',url:'api/v4/keys',headers:{Accept:'application/json'},variable:[],query:[{name:'fingerprint',type:'string'}]}, [client, {query}, options]),
  getOne: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:string,confirmed_at:string,last_activity_on:string,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:string,identities:{provider:any,extern_uid:any,saml_provider_id:any},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:any,group_id:any,active:any}}}}> => handler.apply({method:'get',url:'api/v4/keys/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
})