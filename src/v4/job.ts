/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Job {
  get: ({ }: {}, options?: {}) => Promise<{
    code: 200;
    data: {
      id: number;
      status: string;
      stage: string;
      name: string;
      ref: string;
      tag: boolean;
      coverage: number;
      allow_failure: boolean;
      created_at: string;
      started_at: string;
      finished_at: string;
      erased_at: string;
      duration: number;
      queued_duration: number;
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
      };
      commit: {
        id: string;
        short_id: string;
        created_at: string;
        parent_ids: [string, string];
        title: string;
        message: string;
        author_name: string;
        author_email: string;
        authored_string: string;
        committer_name: string;
        committer_email: string;
        committed_string: string;
        trailers: object;
        extended_trailers: object;
        web_url: string;
      };
      pipeline: {
        id: number;
        iid: number;
        project_id: number;
        sha: string;
        ref: string;
        status: string;
        source: string;
        created_at: string;
        upstringd_at: string;
        web_url: string;
      };
      failure_reason: string;
      web_url: string;
      project: {
        ci_job_token_scope_enabled: string;
      };
      artifacts_file: {
        filename: string;
        size: number;
      };
      artifacts: [{
        file_type: string;
        size: number;
        filename: string;
        file_format: string;
      }, {
        file_type: string;
        size: number;
        filename: string;
        file_format: string;
      }];
      runner: {
        id: number;
        description: string;
        ip_address: string;
        active: boolean;
        paused: boolean;
        is_shared: boolean;
        runner_type: string;
        name: string;
        online: boolean;
        status: string;
      };
      runner_manager: {
        id: number;
        system_id: string;
        version: string;
        revision: string;
        platform: string;
        architecture: string;
        created_at: string;
        contacted_at: string;
        ip_address: string;
        status: string;
      };
      artifacts_expire_at: string;
      archived: boolean;
      tag_list: [string, string];
    };
  } | {
    code: 400;
  } | {
    code: 401;
  } | {
    code: 404;
  }>;
  allowed_agents: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
      data: {
        id: number;
        status: string;
        stage: string;
        name: string;
        ref: string;
        tag: boolean;
        coverage: number;
        allow_failure: boolean;
        created_at: string;
        started_at: string;
        finished_at: string;
        erased_at: string;
        duration: number;
        queued_duration: number;
        user: {
          id: number;
          username: string;
          name: string;
          state: string;
          locked: boolean;
          avatar_url: string;
          avatar_path: string;
          custom_attributes: [{
            value: {};
          }, {
            value: {};
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
        };
        commit: {
          id: string;
          short_id: string;
          created_at: string;
          parent_ids: [string, string];
          title: string;
          message: string;
          author_name: string;
          author_email: string;
          authored_string: string;
          committer_name: string;
          committer_email: string;
          committed_string: string;
          trailers: object;
          extended_trailers: object;
          web_url: string;
        };
        pipeline: {
          id: number;
          iid: number;
          project_id: number;
          sha: string;
          ref: string;
          status: string;
          source: string;
          created_at: string;
          upstringd_at: string;
          web_url: string;
        };
        failure_reason: string;
        web_url: string;
        project: {
          ci_job_token_scope_enabled: string;
        };
        artifacts_file: {
          filename: string;
          size: number;
        };
        artifacts: [{
          file_type: string;
          size: number;
          filename: string;
          file_format: string;
        }, {
          file_type: string;
          size: number;
          filename: string;
          file_format: string;
        }];
        runner: {
          id: number;
          description: string;
          ip_address: string;
          active: boolean;
          paused: boolean;
          is_shared: boolean;
          runner_type: string;
          name: string;
          online: boolean;
          status: string;
        };
        runner_manager: {
          id: number;
          system_id: string;
          version: string;
          revision: string;
          platform: string;
          architecture: string;
          created_at: string;
          contacted_at: string;
          ip_address: string;
          status: string;
        };
        artifacts_expire_at: string;
        archived: boolean;
        tag_list: [string, string];
      };
    } | {
      code: 400;
    } | {
      code: 401;
    } | {
      code: 404;
    }>;
  };
};

export default (client: Client, handler: Handler): Job => ({
  get: ({}: {}, options?: {}): Promise<{code:200,data:{id:number,status:string,stage:string,name:string,ref:string,tag:boolean,coverage:number,allow_failure:boolean,created_at:string,started_at:string,finished_at:string,erased_at:string,duration:number,queued_duration:number,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string},commit:{id:string,short_id:string,created_at:string,parent_ids:[string,string],title:string,message:string,author_name:string,author_email:string,authored_string:string,committer_name:string,committer_email:string,committed_string:string,trailers:object,extended_trailers:object,web_url:string},pipeline:{id:number,iid:number,project_id:number,sha:string,ref:string,status:string,source:string,created_at:string,upstringd_at:string,web_url:string},failure_reason:string,web_url:string,project:{ci_job_token_scope_enabled:string},artifacts_file:{filename:string,size:number},artifacts:[{file_type:string,size:number,filename:string,file_format:string},{file_type:string,size:number,filename:string,file_format:string}],runner:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string},runner_manager:{id:number,system_id:string,version:string,revision:string,platform:string,architecture:string,created_at:string,contacted_at:string,ip_address:string,status:string},artifacts_expire_at:string,archived:boolean,tag_list:[string,string]}}|{code:400}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/job',headers:{Accept:'application/json'},variable:[]}, [client, {}, options]),
  "allowed_agents": {
    get: ({}: {}, options?: {}): Promise<{code:200,data:{id:number,status:string,stage:string,name:string,ref:string,tag:boolean,coverage:number,allow_failure:boolean,created_at:string,started_at:string,finished_at:string,erased_at:string,duration:number,queued_duration:number,user:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string},commit:{id:string,short_id:string,created_at:string,parent_ids:[string,string],title:string,message:string,author_name:string,author_email:string,authored_string:string,committer_name:string,committer_email:string,committed_string:string,trailers:object,extended_trailers:object,web_url:string},pipeline:{id:number,iid:number,project_id:number,sha:string,ref:string,status:string,source:string,created_at:string,upstringd_at:string,web_url:string},failure_reason:string,web_url:string,project:{ci_job_token_scope_enabled:string},artifacts_file:{filename:string,size:number},artifacts:[{file_type:string,size:number,filename:string,file_format:string},{file_type:string,size:number,filename:string,file_format:string}],runner:{id:number,description:string,ip_address:string,active:boolean,paused:boolean,is_shared:boolean,runner_type:string,name:string,online:boolean,status:string},runner_manager:{id:number,system_id:string,version:string,revision:string,platform:string,architecture:string,created_at:string,contacted_at:string,ip_address:string,status:string},artifacts_expire_at:string,archived:boolean,tag_list:[string,string]}}|{code:400}|{code:401}|{code:404}> => handler.apply({method:'get',url:'api/v4/job/allowed_agents',headers:{Accept:'application/json'},variable:[]}, [client, {}, options])
  }
})