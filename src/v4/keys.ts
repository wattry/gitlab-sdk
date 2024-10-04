export interface Keys {
  get: ({ query, clientOptions }: {
    query: {
      fingerprint: string;
    };
    clientOptions: any;
  }) => Promise<[{
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
      last_sign_in_at: Date;
      confirmed_at: Date;
      last_activity_on: Date;
      email: string;
      theme_id: number;
      color_scheme_id: number;
      projects_limit: number;
      current_sign_in_at: Date;
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
        custom_attributes: [{
          value: any;
        }, {
          value: any;
        }];
        web_url: string;
      };
      email_reset_offered_at: string;
      using_license_seat: string;
      is_auditor: string;
      provisioned_by_group_id: string;
      enterprise_group_id: string;
      enterprise_group_associated_at: string;
    };
  }]>;
  getOne: ({ params, clientOptions }: {
    params: {
      id: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: number;
      title: string;
      created_at: Date;
      expires_at: Date;
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
        custom_attributes: [{
          value: any;
        }, {
          value: any;
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
        last_sign_in_at: Date;
        confirmed_at: Date;
        last_activity_on: Date;
        email: string;
        theme_id: number;
        color_scheme_id: number;
        projects_limit: number;
        current_sign_in_at: Date;
        identities: {
          provider: {
            value: any;
          };
          extern_uid: {
            value: any;
          };
          saml_provider_id: {
            value: any;
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
            value: any;
          };
          group_id: {
            value: any;
          };
          active: {
            value: any;
          };
        };
      };
    };
  }]>;
};

export default (client: any, handler: any): Keys => ({
  get: ({query,clientOptions}: {query:{fingerprint:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:Date,confirmed_at:Date,last_activity_on:Date,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:Date,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]> => handler.apply({method:'get',url:'api/v4/keys',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'fingerprint',type:'string'}],data:null}, [client, {query, clientOptions}]),
  getOne: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,title:string,created_at:Date,expires_at:Date,key:string,usage_type:string,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:Date,confirmed_at:Date,last_activity_on:Date,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:Date,identities:{provider:{value:{}},extern_uid:{value:{}},saml_provider_id:{value:{}}},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:{value:{}},group_id:{value:{}},active:{value:{}}}}}}]> => handler.apply({method:'get',url:'api/v4/keys/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
})