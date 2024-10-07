/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface Users {
  get: ({ query }: {
    query?: {
      username: string;
      extern_uid: string;
      provider: string;
      search: string;
      active: string;
      external: string;
      exclude_external: string;
      blocked: string;
      created_after: string;
      created_before: string;
      without_projects: string;
      exclude_internal: string;
      without_project_bots: string;
      admins: string;
      two_factor: string;
      order_by: string;
      sort: string;
      page: string;
      per_page: string;
      with_custom_attributes: string;
      skip_ldap: string;
      saml_provider_id: string;
      auditors: string;
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
    };
  }>;
  post: ({ data }: {
    data: {
      email: string;
      name: string;
      username: string;
      password: string;
      reset_password: boolean;
      skip_confirmation: boolean;
      force_random_password: boolean;
      skype: string;
      linkedin: string;
      twitter: string;
      discord: string;
      website_url: string;
      organization: string;
      projects_limit: number;
      extern_uid: string;
      provider: string;
      bio: string;
      location: string;
      pronouns: string;
      public_email: string;
      commit_email: string;
      admin: boolean;
      can_create_group: boolean;
      external: boolean;
      avatar: ArrayBuffer;
      theme_id: number;
      color_scheme_id: number;
      private_profile: boolean;
      note: string;
      view_diffs_file_by_file: boolean;
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      group_id_for_saml: number;
      auditor: boolean;
    };
  }, options?: {}) => Promise<{
    code: 201;
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
  getOne: ({ params, query }: {
    params: {
      id: string;
    };
    query?: {
      with_custom_attributes: string;
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
    };
  }>;
  put: ({ params, data }: {
    params: {
      id: string;
    };
    data: {
      email: string;
      password: string;
      skip_reconfirmation: boolean;
      name: string;
      username: string;
      skype: string;
      linkedin: string;
      twitter: string;
      discord: string;
      website_url: string;
      organization: string;
      projects_limit: number;
      extern_uid: string;
      provider: string;
      bio: string;
      location: string;
      pronouns: string;
      public_email: string;
      commit_email: string;
      admin: boolean;
      can_create_group: boolean;
      external: boolean;
      avatar: ArrayBuffer;
      theme_id: number;
      color_scheme_id: number;
      private_profile: boolean;
      note: string;
      view_diffs_file_by_file: boolean;
      shared_runners_minutes_limit: number;
      extra_shared_runners_minutes_limit: number;
      group_id_for_saml: number;
      auditor: boolean;
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
  delete: ({ params, query }: {
    params: {
      id: string;
    };
    query?: {
      hard_delete: string;
    };
  }, options?: {}) => Promise<{
    code: 200;
    data: {
      id: string;
      email: string;
      confirmed_at: string;
    };
  }>;
  events: {
    get: ({ params, query }: {
      params: {
        id: string;
      };
      query?: {
        page: string;
        per_page: string;
        action: string;
        target_type: string;
        before: string;
        after: string;
        sort: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: [{
        id: number;
        project_id: number;
        action_name: string;
        target_id: number;
        target_iid: number;
        target_type: string;
        author_id: number;
        target_title: string;
        created_at: string;
        note: {
          id: {
            value: {};
          };
          type: {
            value: {};
          };
          body: {
            value: {};
          };
          attachment: {
            value: {};
          };
          author: {
            value: {};
          };
          created_at: {
            value: {};
          };
          upstringd_at: {
            value: {};
          };
          system: {
            value: {};
          };
          noteable_id: {
            value: {};
          };
          noteable_type: {
            value: {};
          };
          project_id: {
            value: {};
          };
          commit_id: {
            value: {};
          };
          position: {
            value: {};
          };
          resolvable: {
            value: {};
          };
          resolved: {
            value: {};
          };
          resolved_by: {
            value: {};
          };
          resolved_at: {
            value: {};
          };
          confidential: {
            value: {};
          };
          internal: {
            value: {};
          };
          imported: {
            value: {};
          };
          imported_from: {
            value: {};
          };
          noteable_iid: {
            value: {};
          };
          commands_changes: {
            value: {};
          };
        };
        author: {
          id: {
            value: {};
          };
          username: {
            value: {};
          };
          name: {
            value: {};
          };
          state: {
            value: {};
          };
          locked: {
            value: {};
          };
          avatar_url: {
            value: {};
          };
          avatar_path: {
            value: {};
          };
          custom_attributes: {
            value: {};
          };
          web_url: {
            value: {};
          };
        };
        wiki_page: {
          format: {
            value: {};
          };
          slug: {
            value: {};
          };
          title: {
            value: {};
          };
        };
        imported: boolean;
        imported_from: string;
        push_data: {
          commit_count: {
            value: {};
          };
          action: {
            value: {};
          };
          ref_type: {
            value: {};
          };
          commit_from: {
            value: {};
          };
          commit_to: {
            value: {};
          };
          ref: {
            value: {};
          };
          commit_title: {
            value: {};
          };
          ref_count: {
            value: {};
          };
        };
        author_username: string;
      }, {
        id: number;
        project_id: number;
        action_name: string;
        target_id: number;
        target_iid: number;
        target_type: string;
        author_id: number;
        target_title: string;
        created_at: string;
        note: {
          id: {
            value: {};
          };
          type: {
            value: {};
          };
          body: {
            value: {};
          };
          attachment: {
            value: {};
          };
          author: {
            value: {};
          };
          created_at: {
            value: {};
          };
          upstringd_at: {
            value: {};
          };
          system: {
            value: {};
          };
          noteable_id: {
            value: {};
          };
          noteable_type: {
            value: {};
          };
          project_id: {
            value: {};
          };
          commit_id: {
            value: {};
          };
          position: {
            value: {};
          };
          resolvable: {
            value: {};
          };
          resolved: {
            value: {};
          };
          resolved_by: {
            value: {};
          };
          resolved_at: {
            value: {};
          };
          confidential: {
            value: {};
          };
          internal: {
            value: {};
          };
          imported: {
            value: {};
          };
          imported_from: {
            value: {};
          };
          noteable_iid: {
            value: {};
          };
          commands_changes: {
            value: {};
          };
        };
        author: {
          id: {
            value: {};
          };
          username: {
            value: {};
          };
          name: {
            value: {};
          };
          state: {
            value: {};
          };
          locked: {
            value: {};
          };
          avatar_url: {
            value: {};
          };
          avatar_path: {
            value: {};
          };
          custom_attributes: {
            value: {};
          };
          web_url: {
            value: {};
          };
        };
        wiki_page: {
          format: {
            value: {};
          };
          slug: {
            value: {};
          };
          title: {
            value: {};
          };
        };
        imported: boolean;
        imported_from: string;
        push_data: {
          commit_count: {
            value: {};
          };
          action: {
            value: {};
          };
          ref_type: {
            value: {};
          };
          commit_from: {
            value: {};
          };
          commit_to: {
            value: {};
          };
          ref: {
            value: {};
          };
          commit_title: {
            value: {};
          };
          ref_count: {
            value: {};
          };
        };
        author_username: string;
      }];
    } | {
      code: 404;
    }>;
  };
  custom_attributes: {
    get: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        key: string;
        value: string;
      };
    }>;
    getOne: ({ params }: {
      params: {
        key: string;
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        key: string;
        value: string;
      };
    }>;
    put: ({ params, data }: {
      params: {
        key: string;
        id: string;
      };
      data: {
        value: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    }>;
    delete: ({ params }: {
      params: {
        key: string;
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 204;
    }>;
  };
  follow: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
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
      };
    }>;
  };
  unfollow: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
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
      };
    }>;
  };
  following: {
    get: ({ params, query }: {
      params: {
        id: string;
      };
      query?: {
        page: string;
        per_page: string;
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
      };
    }>;
  };
  followers: {
    get: ({ params, query }: {
      params: {
        id: string;
      };
      query?: {
        page: string;
        per_page: string;
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
      };
    }>;
  };
  disable_two_factor: {
    patch: ({ params }: {
      params: {
        id: string;
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
          custom_attributes: [{
            value: {};
          }, {
            value: {};
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
    }>;
  };
  identities: {
    delete: ({ params }: {
      params: {
        id: string;
        provider: string;
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
          custom_attributes: [{
            value: {};
          }, {
            value: {};
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
    }>;
  };
  keys: {
    getOne: ({ params }: {
      params: {
        id: string;
        key_id: string;
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
      };
    }>;
    delete: ({ params }: {
      params: {
        id: string;
        key_id: string;
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
      };
    }>;
    post: ({ params, data }: {
      params: {
        user_id: string;
      };
      data: {
        key: string;
        title: string;
        expires_at: string;
        usage_type: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: number;
        title: string;
        created_at: string;
        expires_at: string;
        key: string;
        usage_type: string;
      };
    }>;
    get: ({ params, query }: {
      params: {
        user_id: string;
      };
      query?: {
        page: string;
        per_page: string;
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
      };
    }>;
  };
  gpg_keys: {
    post: ({ params, data }: {
      params: {
        id: string;
      };
      data: {
        key: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }>;
    get: ({ params, query }: {
      params: {
        id: string;
      };
      query?: {
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }>;
    getOne: ({ params }: {
      params: {
        id: string;
        key_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }>;
    delete: ({ params }: {
      params: {
        id: string;
        key_id: string;
      };
    }, options?: {}) => Promise<{
      code: 204;
    }>;
    revoke: {
      post: ({ params }: {
        params: {
          id: string;
          key_id: string;
        };
      }, options?: {}) => Promise<{
        code: 201;
      }>;
    };
  };
  emails: {
    post: ({ params, data }: {
      params: {
        id: string;
      };
      data: {
        email: string;
        skip_confirmation: boolean;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }>;
    get: ({ params, query }: {
      params: {
        id: string;
      };
      query?: {
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }>;
    delete: ({ params }: {
      params: {
        id: string;
        email_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }>;
  };
  activate: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    }>;
  };
  approve: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    }>;
  };
  reject: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    }>;
  };
  deactivate: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    }>;
  };
  block: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    }>;
  };
  unblock: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    }>;
  };
  ban: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    }>;
  };
  unban: {
    post: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
    }>;
  };
  associations_count: {
    get: ({ params }: {
      params: {
        id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    }>;
  };
  projects: {
    get: ({ params, query }: {
      params: {
        user_id: string;
      };
      query?: {
        order_by: string;
        sort: string;
        archived: string;
        visibility: string;
        search: string;
        search_namespaces: string;
        owned: string;
        starred: string;
        imported: string;
        membership: string;
        with_issues_enabled: string;
        with_merge_requests_enabled: string;
        with_programming_language: string;
        min_access_level: string;
        id_after: string;
        id_before: string;
        last_activity_after: string;
        last_activity_before: string;
        repository_storage: string;
        topic: string;
        topic_id: string;
        updated_before: string;
        updated_after: string;
        include_pending_delete: string;
        wiki_checksum_failed: string;
        repository_checksum_failed: string;
        include_hidden: string;
        page: string;
        per_page: string;
        simple: string;
        statistics: string;
        with_custom_attributes: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: [{
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: string;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: {};
          };
          name: {
            value: {};
          };
          nickname: {
            value: {};
          };
          html_url: {
            value: {};
          };
          source_url: {
            value: {};
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: string;
        namespace: {
          id: {
            value: {};
          };
          name: {
            value: {};
          };
          path: {
            value: {};
          };
          kind: {
            value: {};
          };
          full_path: {
            value: {};
          };
          parent_id: {
            value: {};
          };
          avatar_url: {
            value: {};
          };
          web_url: {
            value: {};
          };
        };
        custom_attributes: {
          key: {
            value: {};
          };
          value: {
            value: {};
          };
        };
        repository_storage: string;
      }, {
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: string;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: {};
          };
          name: {
            value: {};
          };
          nickname: {
            value: {};
          };
          html_url: {
            value: {};
          };
          source_url: {
            value: {};
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: string;
        namespace: {
          id: {
            value: {};
          };
          name: {
            value: {};
          };
          path: {
            value: {};
          };
          kind: {
            value: {};
          };
          full_path: {
            value: {};
          };
          parent_id: {
            value: {};
          };
          avatar_url: {
            value: {};
          };
          web_url: {
            value: {};
          };
        };
        custom_attributes: {
          key: {
            value: {};
          };
          value: {
            value: {};
          };
        };
        repository_storage: string;
      }];
    } | {
      code: 404;
    }>;
  };
  contributed_projects: {
    get: ({ params, query }: {
      params: {
        user_id: string;
      };
      query?: {
        order_by: string;
        sort: string;
        page: string;
        per_page: string;
        simple: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: [{
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: string;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: {};
          };
          name: {
            value: {};
          };
          nickname: {
            value: {};
          };
          html_url: {
            value: {};
          };
          source_url: {
            value: {};
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: string;
        namespace: {
          id: {
            value: {};
          };
          name: {
            value: {};
          };
          path: {
            value: {};
          };
          kind: {
            value: {};
          };
          full_path: {
            value: {};
          };
          parent_id: {
            value: {};
          };
          avatar_url: {
            value: {};
          };
          web_url: {
            value: {};
          };
        };
        custom_attributes: {
          key: {
            value: {};
          };
          value: {
            value: {};
          };
        };
        repository_storage: string;
      }, {
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: string;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: {};
          };
          name: {
            value: {};
          };
          nickname: {
            value: {};
          };
          html_url: {
            value: {};
          };
          source_url: {
            value: {};
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: string;
        namespace: {
          id: {
            value: {};
          };
          name: {
            value: {};
          };
          path: {
            value: {};
          };
          kind: {
            value: {};
          };
          full_path: {
            value: {};
          };
          parent_id: {
            value: {};
          };
          avatar_url: {
            value: {};
          };
          web_url: {
            value: {};
          };
        };
        custom_attributes: {
          key: {
            value: {};
          };
          value: {
            value: {};
          };
        };
        repository_storage: string;
      }];
    } | {
      code: 404;
    }>;
  };
  starred_projects: {
    get: ({ params, query }: {
      params: {
        user_id: string;
      };
      query?: {
        order_by: string;
        sort: string;
        archived: string;
        visibility: string;
        search: string;
        search_namespaces: string;
        owned: string;
        starred: string;
        imported: string;
        membership: string;
        with_issues_enabled: string;
        with_merge_requests_enabled: string;
        with_programming_language: string;
        min_access_level: string;
        id_after: string;
        id_before: string;
        last_activity_after: string;
        last_activity_before: string;
        repository_storage: string;
        topic: string;
        topic_id: string;
        updated_before: string;
        updated_after: string;
        include_pending_delete: string;
        wiki_checksum_failed: string;
        repository_checksum_failed: string;
        include_hidden: string;
        page: string;
        per_page: string;
        simple: string;
        statistics: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: [{
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: string;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: {};
          };
          name: {
            value: {};
          };
          nickname: {
            value: {};
          };
          html_url: {
            value: {};
          };
          source_url: {
            value: {};
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: string;
        namespace: {
          id: {
            value: {};
          };
          name: {
            value: {};
          };
          path: {
            value: {};
          };
          kind: {
            value: {};
          };
          full_path: {
            value: {};
          };
          parent_id: {
            value: {};
          };
          avatar_url: {
            value: {};
          };
          web_url: {
            value: {};
          };
        };
        custom_attributes: {
          key: {
            value: {};
          };
          value: {
            value: {};
          };
        };
        repository_storage: string;
      }, {
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: string;
        default_branch: string;
        tag_list: [string, string];
        topics: [string, string];
        ssh_url_to_repo: string;
        http_url_to_repo: string;
        web_url: string;
        readme_url: string;
        forks_count: number;
        license_url: string;
        license: {
          key: {
            value: {};
          };
          name: {
            value: {};
          };
          nickname: {
            value: {};
          };
          html_url: {
            value: {};
          };
          source_url: {
            value: {};
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: string;
        namespace: {
          id: {
            value: {};
          };
          name: {
            value: {};
          };
          path: {
            value: {};
          };
          kind: {
            value: {};
          };
          full_path: {
            value: {};
          };
          parent_id: {
            value: {};
          };
          avatar_url: {
            value: {};
          };
          web_url: {
            value: {};
          };
        };
        custom_attributes: {
          key: {
            value: {};
          };
          value: {
            value: {};
          };
        };
        repository_storage: string;
      }];
    } | {
      code: 404;
    }>;
  };
  status: {
    get: ({ params }: {
      params: {
        user_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
    }>;
  };
  project_deploy_keys: {
    get: ({ params, query }: {
      params: {
        user_id: string;
      };
      query?: {
        page: string;
        per_page: string;
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
        fingerprint: string;
        fingerprint_sha256: string;
        projects_with_write_access: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: string;
        };
        projects_with_readonly_access: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: string;
        };
      };
    }>;
  };
  memberships: {
    get: ({ params, query }: {
      params: {
        user_id: string;
      };
      query?: {
        type: string;
        page: string;
        per_page: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        source_id: string;
        source_name: string;
        source_type: string;
        access_level: string;
      };
    }>;
  };
  impersonation_tokens: {
    get: ({ params, query }: {
      params: {
        user_id: string;
      };
      query?: {
        page: string;
        per_page: string;
        state: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: string;
        user_id: number;
        last_used_at: string;
        active: boolean;
        expires_at: string;
        impersonation: string;
      };
    }>;
    post: ({ params, data }: {
      params: {
        user_id: string;
      };
      data: {
        name: string;
        expires_at: string;
        scopes: [string, string];
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: string;
        user_id: number;
        last_used_at: string;
        active: boolean;
        expires_at: string;
        token: string;
        impersonation: string;
      };
    }>;
    getOne: ({ params }: {
      params: {
        user_id: string;
        impersonation_token_id: string;
      };
    }, options?: {}) => Promise<{
      code: 200;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: string;
        user_id: number;
        last_used_at: string;
        active: boolean;
        expires_at: string;
        impersonation: string;
      };
    }>;
    delete: ({ params }: {
      params: {
        user_id: string;
        impersonation_token_id: string;
      };
    }, options?: {}) => Promise<{
      code: 204;
    }>;
  };
  personal_access_tokens: {
    post: ({ params, data }: {
      params: {
        user_id: string;
      };
      data: {
        name: string;
        scopes: [string, string];
        expires_at: string;
      };
    }, options?: {}) => Promise<{
      code: 201;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: string;
        user_id: number;
        last_used_at: string;
        active: boolean;
        expires_at: string;
        token: string;
      };
    }>;
  };
};

export default (client: Client, handler: Handler): Users => ({
  get: ({query}: {query?:{username:string,extern_uid:string,provider:string,search:string,active:string,external:string,exclude_external:string,blocked:string,created_after:string,created_before:string,without_projects:string,exclude_internal:string,without_project_bots:string,admins:string,two_factor:string,order_by:string,sort:string,page:string,per_page:string,with_custom_attributes:string,skip_ldap:string,saml_provider_id:string,auditors:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}> => handler.apply({method:'get',url:'api/v4/users',headers:{Accept:'application/json'},variable:[],query:[{name:'username',type:'string'},{name:'extern_uid',type:'string'},{name:'provider',type:'string'},{name:'search',type:'string'},{name:'active',type:'string'},{name:'external',type:'string'},{name:'exclude_external',type:'string'},{name:'blocked',type:'string'},{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'without_projects',type:'string'},{name:'exclude_internal',type:'string'},{name:'without_project_bots',type:'string'},{name:'admins',type:'string'},{name:'two_factor',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'},{name:'skip_ldap',type:'string'},{name:'saml_provider_id',type:'string'},{name:'auditors',type:'string'}]}, [client, {query}, options]),
  post: ({data}: {data:{email:string,name:string,username:string,password:string,reset_password:boolean,skip_confirmation:boolean,force_random_password:boolean,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,projects_limit:number,extern_uid:string,provider:string,bio:string,location:string,pronouns:string,public_email:string,commit_email:string,admin:boolean,can_create_group:boolean,external:boolean,avatar:ArrayBuffer,theme_id:number,color_scheme_id:number,private_profile:boolean,note:string,view_diffs_file_by_file:boolean,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,group_id_for_saml:number,auditor:boolean}}, options?: {}): Promise<{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:string,confirmed_at:string,last_activity_on:string,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:string,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}> => handler.apply({method:'post',url:'api/v4/users',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[],data:{mode:'raw',raw:{email:'string',name:'string',username:'string',password:'string',reset_password:'boolean',skip_confirmation:'boolean',force_random_password:'boolean',skype:'string',linkedin:'string',twitter:'string',discord:'string',website_url:'string',organization:'string',projects_limit:'number',extern_uid:'string',provider:'string',bio:'string',location:'string',pronouns:'string',public_email:'string',commit_email:'string',admin:'boolean',can_create_group:'boolean',external:'boolean',avatar:'ArrayBuffer',theme_id:'number',color_scheme_id:'number',private_profile:'boolean',note:'string',view_diffs_file_by_file:'boolean',shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',group_id_for_saml:'number',auditor:'boolean'},options:{raw:{language:'json'}}}}, [client, {data}, options]),
  getOne: ({params,query}: {params:{id:string},query?:{with_custom_attributes:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}> => handler.apply({method:'get',url:'api/v4/users/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'with_custom_attributes',type:'string'}]}, [client, { params, query}, options]),
  put: ({params,data}: {params:{id:string},data:{email:string,password:string,skip_reconfirmation:boolean,name:string,username:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,projects_limit:number,extern_uid:string,provider:string,bio:string,location:string,pronouns:string,public_email:string,commit_email:string,admin:boolean,can_create_group:boolean,external:boolean,avatar:ArrayBuffer,theme_id:number,color_scheme_id:number,private_profile:boolean,note:string,view_diffs_file_by_file:boolean,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,group_id_for_saml:number,auditor:boolean}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:string,confirmed_at:string,last_activity_on:string,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:string,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}> => handler.apply({method:'put',url:'api/v4/users/:id',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{email:'string',password:'string',skip_reconfirmation:'boolean',name:'string',username:'string',skype:'string',linkedin:'string',twitter:'string',discord:'string',website_url:'string',organization:'string',projects_limit:'number',extern_uid:'string',provider:'string',bio:'string',location:'string',pronouns:'string',public_email:'string',commit_email:'string',admin:'boolean',can_create_group:'boolean',external:'boolean',avatar:'ArrayBuffer',theme_id:'number',color_scheme_id:'number',private_profile:'boolean',note:'string',view_diffs_file_by_file:'boolean',shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',group_id_for_saml:'number',auditor:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
  delete: ({params,query}: {params:{id:string},query?:{hard_delete:string}}, options?: {}): Promise<{code:200,data:{id:string,email:string,confirmed_at:string}}> => handler.apply({method:'delete',url:'api/v4/users/:id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'hard_delete',type:'string'}]}, [client, { params, query}, options]),
  "events": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string,action:string,target_type:string,before:string,after:string,sort:string}}, options?: {}): Promise<{code:200,data:[{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:any,type:any,body:any,attachment:any,author:any,created_at:any,upstringd_at:any,system:any,noteable_id:any,noteable_type:any,project_id:any,commit_id:any,position:any,resolvable:any,resolved:any,resolved_by:any,resolved_at:any,confidential:any,internal:any,imported:any,imported_from:any,noteable_iid:any,commands_changes:any},author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},wiki_page:{format:any,slug:any,title:any},imported:boolean,imported_from:string,push_data:{commit_count:any,action:any,ref_type:any,commit_from:any,commit_to:any,ref:any,commit_title:any,ref_count:any},author_username:string},{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:any,type:any,body:any,attachment:any,author:any,created_at:any,upstringd_at:any,system:any,noteable_id:any,noteable_type:any,project_id:any,commit_id:any,position:any,resolvable:any,resolved:any,resolved_by:any,resolved_at:any,confidential:any,internal:any,imported:any,imported_from:any,noteable_iid:any,commands_changes:any},author:{id:any,username:any,name:any,state:any,locked:any,avatar_url:any,avatar_path:any,custom_attributes:any,web_url:any},wiki_page:{format:any,slug:any,title:any},imported:boolean,imported_from:string,push_data:{commit_count:any,action:any,ref_type:any,commit_from:any,commit_to:any,ref:any,commit_title:any,ref_count:any},author_username:string}]}|{code:404}> => handler.apply({method:'get',url:'api/v4/users/:id/events',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'action',type:'string'},{name:'target_type',type:'string'},{name:'before',type:'string'},{name:'after',type:'string'},{name:'sort',type:'string'}]}, [client, { params, query}, options])
  },
  "custom_attributes": {
    get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{key:string,value:string}}> => handler.apply({method:'get',url:'api/v4/users/:id/custom_attributes',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options]),
    getOne: ({params}: {params:{key:string,id:string}}, options?: {}): Promise<{code:200,data:{key:string,value:string}}> => handler.apply({method:'get',url:'api/v4/users/:id/custom_attributes/:key',headers:{Accept:'application/json'},variable:[{name:'key',type:'string'},{name:'id',type:'string'}]}, [client, { params}, options]),
    put: ({params,data}: {params:{key:string,id:string},data:{value:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'put',url:'api/v4/users/:id/custom_attributes/:key',headers:{'Content-Type':'application/json'},variable:[{name:'key',type:'string'},{name:'id',type:'string'}],data:{mode:'raw',raw:{value:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    delete: ({params}: {params:{key:string,id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/users/:id/custom_attributes/:key',variable:[{name:'key',type:'string'},{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "follow": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}> => handler.apply({method:'post',url:'api/v4/users/:id/follow',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "unfollow": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}> => handler.apply({method:'post',url:'api/v4/users/:id/unfollow',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "following": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}> => handler.apply({method:'get',url:'api/v4/users/:id/following',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "followers": {
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}> => handler.apply({method:'get',url:'api/v4/users/:id/followers',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "disable_two_factor": {
    patch: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:string,confirmed_at:string,last_activity_on:string,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:string,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}> => handler.apply({method:'patch',url:'api/v4/users/:id/disable_two_factor',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "identities": {
    delete: ({params}: {params:{id:string,provider:string}}, options?: {}): Promise<{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:string,confirmed_at:string,last_activity_on:string,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:string,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[any,any],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}> => handler.apply({method:'delete',url:'api/v4/users/:id/identities/:provider',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'provider',type:'string'}]}, [client, { params}, options])
  },
  "keys": {
    getOne: ({params}: {params:{id:string,key_id:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}> => handler.apply({method:'get',url:'api/v4/users/:id/keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{id:string,key_id:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}> => handler.apply({method:'delete',url:'api/v4/users/:id/keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}]}, [client, { params}, options]),
    post: ({params,data}: {params:{user_id:string},data:{key:string,title:string,expires_at:string,usage_type:string}}, options?: {}): Promise<{code:201,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}> => handler.apply({method:'post',url:'api/v4/users/:user_id/keys',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'user_id',type:'string'}],data:{mode:'raw',raw:{key:'string',title:'string',expires_at:'string',usage_type:'auth_and_signing'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    get: ({params,query}: {params:{user_id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string}}> => handler.apply({method:'get',url:'api/v4/users/:user_id/keys',headers:{Accept:'application/json'},variable:[{name:'user_id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "gpg_keys": {
    post: ({params,data}: {params:{id:string},data:{key:string}}, options?: {}): Promise<{code:201,data:{id:string,key:string,created_at:string}}> => handler.apply({method:'post',url:'api/v4/users/:id/gpg_keys',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{key:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:string,key:string,created_at:string}}> => handler.apply({method:'get',url:'api/v4/users/:id/gpg_keys',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    getOne: ({params}: {params:{id:string,key_id:string}}, options?: {}): Promise<{code:200,data:{id:string,key:string,created_at:string}}> => handler.apply({method:'get',url:'api/v4/users/:id/gpg_keys/:key_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{id:string,key_id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/users/:id/gpg_keys/:key_id',variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}]}, [client, { params}, options]),
    "revoke": {
      post: ({params}: {params:{id:string,key_id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/gpg_keys/:key_id/revoke',variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}]}, [client, { params}, options])
    }
  },
  "emails": {
    post: ({params,data}: {params:{id:string},data:{email:string,skip_confirmation:boolean}}, options?: {}): Promise<{code:201,data:{id:string,email:string,confirmed_at:string}}> => handler.apply({method:'post',url:'api/v4/users/:id/emails',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'id',type:'string'}],data:{mode:'raw',raw:{email:'string',skip_confirmation:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    get: ({params,query}: {params:{id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:string,email:string,confirmed_at:string}}> => handler.apply({method:'get',url:'api/v4/users/:id/emails',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options]),
    delete: ({params}: {params:{id:string,email_id:string}}, options?: {}): Promise<{code:200,data:{id:string,email:string,confirmed_at:string}}> => handler.apply({method:'delete',url:'api/v4/users/:id/emails/:email_id',headers:{Accept:'application/json'},variable:[{name:'id',type:'string'},{name:'email_id',type:'string'}]}, [client, { params}, options])
  },
  "activate": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/activate',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "approve": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/approve',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "reject": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/reject',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "deactivate": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/deactivate',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "block": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/block',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "unblock": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/unblock',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "ban": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/ban',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "unban": {
    post: ({params}: {params:{id:string}}, options?: {}): Promise<{code:201}> => handler.apply({method:'post',url:'api/v4/users/:id/unban',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "associations_count": {
    get: ({params}: {params:{id:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/users/:id/associations_count',variable:[{name:'id',type:'string'}]}, [client, { params}, options])
  },
  "projects": {
    get: ({params,query}: {params:{user_id:string},query?:{order_by:string,sort:string,archived:string,visibility:string,search:string,search_namespaces:string,owned:string,starred:string,imported:string,membership:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_programming_language:string,min_access_level:string,id_after:string,id_before:string,last_activity_after:string,last_activity_before:string,repository_storage:string,topic:string,topic_id:string,updated_before:string,updated_after:string,include_pending_delete:string,wiki_checksum_failed:string,repository_checksum_failed:string,include_hidden:string,page:string,per_page:string,simple:string,statistics:string,with_custom_attributes:string}}, options?: {}): Promise<{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string}]}|{code:404}> => handler.apply({method:'get',url:'api/v4/users/:user_id/projects',headers:{Accept:'application/json'},variable:[{name:'user_id',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'archived',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'search_namespaces',type:'string'},{name:'owned',type:'string'},{name:'starred',type:'string'},{name:'imported',type:'string'},{name:'membership',type:'string'},{name:'with_issues_enabled',type:'string'},{name:'with_merge_requests_enabled',type:'string'},{name:'with_programming_language',type:'string'},{name:'min_access_level',type:'string'},{name:'id_after',type:'string'},{name:'id_before',type:'string'},{name:'last_activity_after',type:'string'},{name:'last_activity_before',type:'string'},{name:'repository_storage',type:'string'},{name:'topic',type:'string'},{name:'topic_id',type:'string'},{name:'updated_before',type:'string'},{name:'updated_after',type:'string'},{name:'include_pending_delete',type:'string'},{name:'wiki_checksum_failed',type:'string'},{name:'repository_checksum_failed',type:'string'},{name:'include_hidden',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'simple',type:'string'},{name:'statistics',type:'string'},{name:'with_custom_attributes',type:'string'}]}, [client, { params, query}, options])
  },
  "contributed_projects": {
    get: ({params,query}: {params:{user_id:string},query?:{order_by:string,sort:string,page:string,per_page:string,simple:string}}, options?: {}): Promise<{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string}]}|{code:404}> => handler.apply({method:'get',url:'api/v4/users/:user_id/contributed_projects',headers:{Accept:'application/json'},variable:[{name:'user_id',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'simple',type:'string'}]}, [client, { params, query}, options])
  },
  "starred_projects": {
    get: ({params,query}: {params:{user_id:string},query?:{order_by:string,sort:string,archived:string,visibility:string,search:string,search_namespaces:string,owned:string,starred:string,imported:string,membership:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_programming_language:string,min_access_level:string,id_after:string,id_before:string,last_activity_after:string,last_activity_before:string,repository_storage:string,topic:string,topic_id:string,updated_before:string,updated_after:string,include_pending_delete:string,wiki_checksum_failed:string,repository_checksum_failed:string,include_hidden:string,page:string,per_page:string,simple:string,statistics:string}}, options?: {}): Promise<{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:any,name:any,nickname:any,html_url:any,source_url:any},avatar_url:string,star_count:number,last_activity_at:string,namespace:{id:any,name:any,path:any,kind:any,full_path:any,parent_id:any,avatar_url:any,web_url:any},custom_attributes:{key:any,value:any},repository_storage:string}]}|{code:404}> => handler.apply({method:'get',url:'api/v4/users/:user_id/starred_projects',headers:{Accept:'application/json'},variable:[{name:'user_id',type:'string'}],query:[{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'archived',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'search_namespaces',type:'string'},{name:'owned',type:'string'},{name:'starred',type:'string'},{name:'imported',type:'string'},{name:'membership',type:'string'},{name:'with_issues_enabled',type:'string'},{name:'with_merge_requests_enabled',type:'string'},{name:'with_programming_language',type:'string'},{name:'min_access_level',type:'string'},{name:'id_after',type:'string'},{name:'id_before',type:'string'},{name:'last_activity_after',type:'string'},{name:'last_activity_before',type:'string'},{name:'repository_storage',type:'string'},{name:'topic',type:'string'},{name:'topic_id',type:'string'},{name:'updated_before',type:'string'},{name:'updated_after',type:'string'},{name:'include_pending_delete',type:'string'},{name:'wiki_checksum_failed',type:'string'},{name:'repository_checksum_failed',type:'string'},{name:'include_hidden',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'simple',type:'string'},{name:'statistics',type:'string'}]}, [client, { params, query}, options])
  },
  "status": {
    get: ({params}: {params:{user_id:string}}, options?: {}): Promise<{code:200}> => handler.apply({method:'get',url:'api/v4/users/:user_id/status',variable:[{name:'user_id',type:'string'}]}, [client, { params}, options])
  },
  "project_deploy_keys": {
    get: ({params,query}: {params:{user_id:string},query?:{page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{id:number,title:string,created_at:string,expires_at:string,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string},projects_with_readonly_access:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:string}}}> => handler.apply({method:'get',url:'api/v4/users/:user_id/project_deploy_keys',headers:{Accept:'application/json'},variable:[{name:'user_id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "memberships": {
    get: ({params,query}: {params:{user_id:string},query?:{type:string,page:string,per_page:string}}, options?: {}): Promise<{code:200,data:{source_id:string,source_name:string,source_type:string,access_level:string}}> => handler.apply({method:'get',url:'api/v4/users/:user_id/memberships',headers:{Accept:'application/json'},variable:[{name:'user_id',type:'string'}],query:[{name:'type',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}]}, [client, { params, query}, options])
  },
  "impersonation_tokens": {
    get: ({params,query}: {params:{user_id:string},query?:{page:string,per_page:string,state:string}}, options?: {}): Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,impersonation:string}}> => handler.apply({method:'get',url:'api/v4/users/:user_id/impersonation_tokens',headers:{Accept:'application/json'},variable:[{name:'user_id',type:'string'}],query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'state',type:'string'}]}, [client, { params, query}, options]),
    post: ({params,data}: {params:{user_id:string},data:{name:string,expires_at:string,scopes:[string,string]}}, options?: {}): Promise<{code:201,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,token:string,impersonation:string}}> => handler.apply({method:'post',url:'api/v4/users/:user_id/impersonation_tokens',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'user_id',type:'string'}],data:{mode:'raw',raw:{name:'string',expires_at:'string',scopes:['string','string']},options:{raw:{language:'json'}}}}, [client, { params, data}, options]),
    getOne: ({params}: {params:{user_id:string,impersonation_token_id:string}}, options?: {}): Promise<{code:200,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,impersonation:string}}> => handler.apply({method:'get',url:'api/v4/users/:user_id/impersonation_tokens/:impersonation_token_id',headers:{Accept:'application/json'},variable:[{name:'user_id',type:'string'},{name:'impersonation_token_id',type:'string'}]}, [client, { params}, options]),
    delete: ({params}: {params:{user_id:string,impersonation_token_id:string}}, options?: {}): Promise<{code:204}> => handler.apply({method:'delete',url:'api/v4/users/:user_id/impersonation_tokens/:impersonation_token_id',variable:[{name:'user_id',type:'string'},{name:'impersonation_token_id',type:'string'}]}, [client, { params}, options])
  },
  "personal_access_tokens": {
    post: ({params,data}: {params:{user_id:string},data:{name:string,scopes:[string,string],expires_at:string}}, options?: {}): Promise<{code:201,data:{id:number,name:string,revoked:boolean,created_at:string,user_id:number,last_used_at:string,active:boolean,expires_at:string,token:string}}> => handler.apply({method:'post',url:'api/v4/users/:user_id/personal_access_tokens',headers:{'Content-Type':'application/json',Accept:'application/json'},variable:[{name:'user_id',type:'string'}],data:{mode:'raw',raw:{name:'string',scopes:['string','string'],expires_at:'string'},options:{raw:{language:'json'}}}}, [client, { params, data}, options])
  }
})