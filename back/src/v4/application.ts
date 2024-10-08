/* eslint-disable max-len */
import { Client, Handler } from './client';
export interface Application {
  plan_limits: {
    get: ({ query }: {
      query?: {
        plan_name: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        ci_instance_level_variables: number;
        ci_pipeline_size: number;
        ci_active_jobs: number;
        ci_project_subscriptions: number;
        ci_pipeline_schedules: number;
        ci_needs_size_limit: number;
        ci_registered_group_runners: number;
        ci_registered_project_runners: number;
        conan_max_file_size: number;
        enforcement_limit: number;
        generic_packages_max_file_size: number;
        helm_max_file_size: number;
        limits_history: object;
        maven_max_file_size: number;
        notification_limit: number;
        npm_max_file_size: number;
        nuget_max_file_size: number;
        pipeline_hierarchy_size: number;
        pypi_max_file_size: number;
        terraform_module_max_file_size: number;
        storage_size_limit: number;
      };
    } | {
      code: 401;
    } | {
      code: 403;
    }>;
    put: ({ data }: {
      data: {
        plan_name: string;
        ci_instance_level_variables: number;
        ci_pipeline_size: number;
        ci_active_jobs: number;
        ci_project_subscriptions: number;
        ci_pipeline_schedules: number;
        ci_needs_size_limit: number;
        ci_registered_group_runners: number;
        ci_registered_project_runners: number;
        conan_max_file_size: number;
        enforcement_limit: number;
        generic_packages_max_file_size: number;
        helm_max_file_size: number;
        maven_max_file_size: number;
        notification_limit: number;
        npm_max_file_size: number;
        nuget_max_file_size: number;
        pypi_max_file_size: number;
        terraform_module_max_file_size: number;
        storage_size_limit: number;
        pipeline_hierarchy_size: number;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        ci_instance_level_variables: number;
        ci_pipeline_size: number;
        ci_active_jobs: number;
        ci_project_subscriptions: number;
        ci_pipeline_schedules: number;
        ci_needs_size_limit: number;
        ci_registered_group_runners: number;
        ci_registered_project_runners: number;
        conan_max_file_size: number;
        enforcement_limit: number;
        generic_packages_max_file_size: number;
        helm_max_file_size: number;
        limits_history: object;
        maven_max_file_size: number;
        notification_limit: number;
        npm_max_file_size: number;
        nuget_max_file_size: number;
        pipeline_hierarchy_size: number;
        pypi_max_file_size: number;
        terraform_module_max_file_size: number;
        storage_size_limit: number;
      };
    } | {
      code: 400;
    } | {
      code: 401;
    } | {
      code: 403;
    }>;
  };
  appearance: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
      data: {
        title: string;
        description: string;
        pwa_name: string;
        pwa_short_name: string;
        pwa_description: string;
        logo: string;
        pwa_icon: string;
        header_logo: string;
        favicon: string;
        string_project_guidelines: string;
        member_guidelines: string;
        profile_image_guidelines: string;
        header_message: string;
        footer_message: string;
        message_background_color: string;
        message_font_color: string;
        email_header_and_footer_enabled: string;
      };
    }>;
    put: ({ data }: {
      data: {
        title: string;
        description: string;
        pwa_name: string;
        pwa_short_name: string;
        pwa_description: string;
        member_guidelines: string;
        string_project_guidelines: string;
        profile_image_guidelines: string;
        header_message: string;
        footer_message: string;
        message_background_color: string;
        message_font_color: string;
        email_header_and_footer_enabled: boolean;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        title: string;
        description: string;
        pwa_name: string;
        pwa_short_name: string;
        pwa_description: string;
        logo: string;
        pwa_icon: string;
        header_logo: string;
        favicon: string;
        string_project_guidelines: string;
        member_guidelines: string;
        profile_image_guidelines: string;
        header_message: string;
        footer_message: string;
        message_background_color: string;
        message_font_color: string;
        email_header_and_footer_enabled: string;
      };
    }>;
  };
  statistics: {
    get: ({ }: {}, options?: {}) => Promise<{
      code: 200;
      data: {
        forks: number;
        issues: number;
        merge_requests: number;
        notes: number;
        snippets: number;
        ssh_keys: number;
        milestones: number;
        users: number;
        projects: number;
        groups: number;
        active_users: number;
      };
    }>;
  };
};

export default (client: Client, handler: Handler): Application => ({
  "plan_limits": {
    get: ({query}: {query?:{plan_name:string}}, options?: {}): Promise<{code:200,data:{ci_instance_level_variables:number,ci_pipeline_size:number,ci_active_jobs:number,ci_project_subscriptions:number,ci_pipeline_schedules:number,ci_needs_size_limit:number,ci_registered_group_runners:number,ci_registered_project_runners:number,conan_max_file_size:number,enforcement_limit:number,generic_packages_max_file_size:number,helm_max_file_size:number,limits_history:object,maven_max_file_size:number,notification_limit:number,npm_max_file_size:number,nuget_max_file_size:number,pipeline_hierarchy_size:number,pypi_max_file_size:number,terraform_module_max_file_size:number,storage_size_limit:number}}|{code:401}|{code:403}> => handler.apply({method:'get',url:'api/v4/application/plan_limits',headers:{Accept:'application/json'},variable:[],query:[{name:'plan_name',type:'string'}]}, [client, {query}, options]),
    put: ({data}: {data:{plan_name:string,ci_instance_level_variables:number,ci_pipeline_size:number,ci_active_jobs:number,ci_project_subscriptions:number,ci_pipeline_schedules:number,ci_needs_size_limit:number,ci_registered_group_runners:number,ci_registered_project_runners:number,conan_max_file_size:number,enforcement_limit:number,generic_packages_max_file_size:number,helm_max_file_size:number,maven_max_file_size:number,notification_limit:number,npm_max_file_size:number,nuget_max_file_size:number,pypi_max_file_size:number,terraform_module_max_file_size:number,storage_size_limit:number,pipeline_hierarchy_size:number}}, options?: {}): Promise<{code:200,data:{ci_instance_level_variables:number,ci_pipeline_size:number,ci_active_jobs:number,ci_project_subscriptions:number,ci_pipeline_schedules:number,ci_needs_size_limit:number,ci_registered_group_runners:number,ci_registered_project_runners:number,conan_max_file_size:number,enforcement_limit:number,generic_packages_max_file_size:number,helm_max_file_size:number,limits_history:object,maven_max_file_size:number,notification_limit:number,npm_max_file_size:number,nuget_max_file_size:number,pipeline_hierarchy_size:number,pypi_max_file_size:number,terraform_module_max_file_size:number,storage_size_limit:number}}|{code:400}|{code:401}|{code:403}> => handler.apply({method:'put',url:'api/v4/application/plan_limits',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{plan_name:'string',ci_instance_level_variables:'number',ci_pipeline_size:'number',ci_active_jobs:'number',ci_project_subscriptions:'number',ci_pipeline_schedules:'number',ci_needs_size_limit:'number',ci_registered_group_runners:'number',ci_registered_project_runners:'number',conan_max_file_size:'number',enforcement_limit:'number',generic_packages_max_file_size:'number',helm_max_file_size:'number',maven_max_file_size:'number',notification_limit:'number',npm_max_file_size:'number',nuget_max_file_size:'number',pypi_max_file_size:'number',terraform_module_max_file_size:'number',storage_size_limit:'number',pipeline_hierarchy_size:'number'},options:{raw:{language:'json'}}}}, [client, {data}, options])
  },
  "appearance": {
    get: ({}: {}, options?: {}): Promise<{code:200,data:{title:string,description:string,pwa_name:string,pwa_short_name:string,pwa_description:string,logo:string,pwa_icon:string,header_logo:string,favicon:string,string_project_guidelines:string,member_guidelines:string,profile_image_guidelines:string,header_message:string,footer_message:string,message_background_color:string,message_font_color:string,email_header_and_footer_enabled:string}}> => handler.apply({method:'get',url:'api/v4/application/appearance',headers:{Accept:'application/json'},variable:[]}, [client, {}, options]),
    put: ({data}: {data:{title:string,description:string,pwa_name:string,pwa_short_name:string,pwa_description:string,member_guidelines:string,string_project_guidelines:string,profile_image_guidelines:string,header_message:string,footer_message:string,message_background_color:string,message_font_color:string,email_header_and_footer_enabled:boolean}}, options?: {}): Promise<{code:200,data:{title:string,description:string,pwa_name:string,pwa_short_name:string,pwa_description:string,logo:string,pwa_icon:string,header_logo:string,favicon:string,string_project_guidelines:string,member_guidelines:string,profile_image_guidelines:string,header_message:string,footer_message:string,message_background_color:string,message_font_color:string,email_header_and_footer_enabled:string}}> => handler.apply({method:'put',url:'api/v4/application/appearance',headers:{'Content-Type':'multipart/form-data',Accept:'application/json'},variable:[],data:{mode:'formdata',formdata:{title:'string',description:'string',pwa_name:'string',pwa_short_name:'string',pwa_description:'string',member_guidelines:'string',string_project_guidelines:'string',profile_image_guidelines:'string',header_message:'string',footer_message:'string',message_background_color:'string',message_font_color:'string',email_header_and_footer_enabled:'boolean'}}}, [client, {data}, options])
  },
  "statistics": {
    get: ({}: {}, options?: {}): Promise<{code:200,data:{forks:number,issues:number,merge_requests:number,notes:number,snippets:number,ssh_keys:number,milestones:number,users:number,projects:number,groups:number,active_users:number}}> => handler.apply({method:'get',url:'api/v4/application/statistics',headers:{Accept:'application/json'},variable:[]}, [client, {}, options])
  }
})