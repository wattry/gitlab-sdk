export interface Users {
  get: ({ query, clientOptions }: {
    query: {
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
    };
  }]>;
  post: ({ data, clientOptions }: {
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
      avatar: string;
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
    clientOptions: any;
  }) => Promise<[{
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
  getOne: ({ params, query, clientOptions }: {
    params: {
      id: string;
    };
    query: {
      with_custom_attributes: string;
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
    };
  }]>;
  put: ({ params, data, clientOptions }: {
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
      avatar: string;
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
  delete: ({ params, query, clientOptions }: {
    params: {
      id: string;
    };
    query: {
      hard_delete: string;
    };
    clientOptions: any;
  }) => Promise<[{
    code: 200;
    data: {
      id: string;
      email: string;
      confirmed_at: string;
    };
  }]>;
  events: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
        action: string;
        target_type: string;
        before: string;
        after: string;
        sort: string;
      };
      clientOptions: any;
    }) => Promise<[{
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
            value: any;
          };
          type: {
            value: any;
          };
          body: {
            value: any;
          };
          attachment: {
            value: any;
          };
          author: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          system: {
            value: any;
          };
          noteable_id: {
            value: any;
          };
          noteable_type: {
            value: any;
          };
          project_id: {
            value: any;
          };
          commit_id: {
            value: any;
          };
          position: {
            value: any;
          };
          resolvable: {
            value: any;
          };
          resolved: {
            value: any;
          };
          resolved_by: {
            value: any;
          };
          resolved_at: {
            value: any;
          };
          confidential: {
            value: any;
          };
          internal: {
            value: any;
          };
          imported: {
            value: any;
          };
          imported_from: {
            value: any;
          };
          noteable_iid: {
            value: any;
          };
          commands_changes: {
            value: any;
          };
        };
        author: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        wiki_page: {
          format: {
            value: any;
          };
          slug: {
            value: any;
          };
          title: {
            value: any;
          };
        };
        imported: boolean;
        imported_from: string;
        push_data: {
          commit_count: {
            value: any;
          };
          action: {
            value: any;
          };
          ref_type: {
            value: any;
          };
          commit_from: {
            value: any;
          };
          commit_to: {
            value: any;
          };
          ref: {
            value: any;
          };
          commit_title: {
            value: any;
          };
          ref_count: {
            value: any;
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
            value: any;
          };
          type: {
            value: any;
          };
          body: {
            value: any;
          };
          attachment: {
            value: any;
          };
          author: {
            value: any;
          };
          created_at: {
            value: any;
          };
          updated_at: {
            value: any;
          };
          system: {
            value: any;
          };
          noteable_id: {
            value: any;
          };
          noteable_type: {
            value: any;
          };
          project_id: {
            value: any;
          };
          commit_id: {
            value: any;
          };
          position: {
            value: any;
          };
          resolvable: {
            value: any;
          };
          resolved: {
            value: any;
          };
          resolved_by: {
            value: any;
          };
          resolved_at: {
            value: any;
          };
          confidential: {
            value: any;
          };
          internal: {
            value: any;
          };
          imported: {
            value: any;
          };
          imported_from: {
            value: any;
          };
          noteable_iid: {
            value: any;
          };
          commands_changes: {
            value: any;
          };
        };
        author: {
          id: {
            value: any;
          };
          username: {
            value: any;
          };
          name: {
            value: any;
          };
          state: {
            value: any;
          };
          locked: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          avatar_path: {
            value: any;
          };
          custom_attributes: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        wiki_page: {
          format: {
            value: any;
          };
          slug: {
            value: any;
          };
          title: {
            value: any;
          };
        };
        imported: boolean;
        imported_from: string;
        push_data: {
          commit_count: {
            value: any;
          };
          action: {
            value: any;
          };
          ref_type: {
            value: any;
          };
          commit_from: {
            value: any;
          };
          commit_to: {
            value: any;
          };
          ref: {
            value: any;
          };
          commit_title: {
            value: any;
          };
          ref_count: {
            value: any;
          };
        };
        author_username: string;
      }];
    }, {
      code: 404;
    }]>;
  };
  custom_attributes: {
    get: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        key: string;
        value: string;
      };
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        key: string;
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        key: string;
        value: string;
      };
    }]>;
    put: ({ params, data, clientOptions }: {
      params: {
        key: string;
        id: string;
      };
      data: {
        value: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        key: string;
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
  };
  follow: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
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
    }]>;
  };
  unfollow: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
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
    }]>;
  };
  following: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
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
      };
    }]>;
  };
  followers: {
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
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
      };
    }]>;
  };
  disable_two_factor: {
    patch: ({ params, clientOptions }: {
      params: {
        id: string;
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
  };
  identities: {
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        provider: string;
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
  };
  keys: {
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        key_id: string;
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
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        key_id: string;
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
      };
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        user_id: string;
      };
      data: {
        key: string;
        title: string;
        expires_at: Date;
        usage_type: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        title: string;
        created_at: Date;
        expires_at: Date;
        key: string;
        usage_type: string;
      };
    }]>;
    get: ({ params, query, clientOptions }: {
      params: {
        user_id: string;
      };
      query: {
        page: string;
        per_page: string;
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
      };
    }]>;
  };
  gpg_keys: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        key: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }]>;
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        id: string;
        key_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        key: string;
        created_at: string;
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        key_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
    revoke: {
      post: ({ params, clientOptions }: {
        params: {
          id: string;
          key_id: string;
        };
        clientOptions: any;
      }) => Promise<[{
        code: 201;
      }]>;
    };
  };
  emails: {
    post: ({ params, data, clientOptions }: {
      params: {
        id: string;
      };
      data: {
        email: string;
        skip_confirmation: boolean;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }]>;
    get: ({ params, query, clientOptions }: {
      params: {
        id: string;
      };
      query: {
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        id: string;
        email_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: string;
        email: string;
        confirmed_at: string;
      };
    }]>;
  };
  activate: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  approve: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  reject: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  deactivate: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  block: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  unblock: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  ban: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  unban: {
    post: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
    }]>;
  };
  associations_count: {
    get: ({ params, clientOptions }: {
      params: {
        id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }]>;
  };
  projects: {
    get: ({ params, query, clientOptions }: {
      params: {
        user_id: string;
      };
      query: {
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
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: Date;
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
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
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
        created_at: Date;
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
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        repository_storage: string;
      }];
    }, {
      code: 404;
    }]>;
  };
  contributed_projects: {
    get: ({ params, query, clientOptions }: {
      params: {
        user_id: string;
      };
      query: {
        order_by: string;
        sort: string;
        page: string;
        per_page: string;
        simple: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: Date;
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
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
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
        created_at: Date;
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
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        repository_storage: string;
      }];
    }, {
      code: 404;
    }]>;
  };
  starred_projects: {
    get: ({ params, query, clientOptions }: {
      params: {
        user_id: string;
      };
      query: {
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
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: [{
        id: number;
        description: string;
        name: string;
        name_with_namespace: string;
        path: string;
        path_with_namespace: string;
        created_at: Date;
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
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
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
        created_at: Date;
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
            value: any;
          };
          name: {
            value: any;
          };
          nickname: {
            value: any;
          };
          html_url: {
            value: any;
          };
          source_url: {
            value: any;
          };
        };
        avatar_url: string;
        star_count: number;
        last_activity_at: Date;
        namespace: {
          id: {
            value: any;
          };
          name: {
            value: any;
          };
          path: {
            value: any;
          };
          kind: {
            value: any;
          };
          full_path: {
            value: any;
          };
          parent_id: {
            value: any;
          };
          avatar_url: {
            value: any;
          };
          web_url: {
            value: any;
          };
        };
        custom_attributes: {
          key: {
            value: any;
          };
          value: {
            value: any;
          };
        };
        repository_storage: string;
      }];
    }, {
      code: 404;
    }]>;
  };
  status: {
    get: ({ params, clientOptions }: {
      params: {
        user_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
    }]>;
  };
  project_deploy_keys: {
    get: ({ params, query, clientOptions }: {
      params: {
        user_id: string;
      };
      query: {
        page: string;
        per_page: string;
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
        fingerprint: string;
        fingerprint_sha256: string;
        projects_with_write_access: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
        };
        projects_with_readonly_access: {
          id: number;
          description: string;
          name: string;
          name_with_namespace: string;
          path: string;
          path_with_namespace: string;
          created_at: Date;
        };
      };
    }]>;
  };
  memberships: {
    get: ({ params, query, clientOptions }: {
      params: {
        user_id: string;
      };
      query: {
        type: string;
        page: string;
        per_page: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        source_id: string;
        source_name: string;
        source_type: string;
        access_level: string;
      };
    }]>;
  };
  impersonation_tokens: {
    get: ({ params, query, clientOptions }: {
      params: {
        user_id: string;
      };
      query: {
        page: string;
        per_page: string;
        state: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        impersonation: string;
      };
    }]>;
    post: ({ params, data, clientOptions }: {
      params: {
        user_id: string;
      };
      data: {
        name: string;
        expires_at: Date;
        scopes: [string, string];
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        token: string;
        impersonation: string;
      };
    }]>;
    getOne: ({ params, clientOptions }: {
      params: {
        user_id: string;
        impersonation_token_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 200;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        impersonation: string;
      };
    }]>;
    delete: ({ params, clientOptions }: {
      params: {
        user_id: string;
        impersonation_token_id: string;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 204;
    }]>;
  };
  personal_access_tokens: {
    post: ({ params, data, clientOptions }: {
      params: {
        user_id: string;
      };
      data: {
        name: string;
        scopes: [string, string];
        expires_at: Date;
      };
      clientOptions: any;
    }) => Promise<[{
      code: 201;
      data: {
        id: number;
        name: string;
        revoked: boolean;
        created_at: Date;
        user_id: number;
        last_used_at: Date;
        active: boolean;
        expires_at: Date;
        token: string;
      };
    }]>;
  };
};

export default (client: any, handler: any): Users => ({
  get: ({query,clientOptions}: {query:{username:string,extern_uid:string,provider:string,search:string,active:string,external:string,exclude_external:string,blocked:string,created_after:string,created_before:string,without_projects:string,exclude_internal:string,without_project_bots:string,admins:string,two_factor:string,order_by:string,sort:string,page:string,per_page:string,with_custom_attributes:string,skip_ldap:string,saml_provider_id:string,auditors:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}]> => handler.apply({method:'get',url:'api/v4/users',resource:'api',variable:[],headers:{Accept:'application/json'},query:[{name:'username',type:'string'},{name:'extern_uid',type:'string'},{name:'provider',type:'string'},{name:'search',type:'string'},{name:'active',type:'string'},{name:'external',type:'string'},{name:'exclude_external',type:'string'},{name:'blocked',type:'string'},{name:'created_after',type:'string'},{name:'created_before',type:'string'},{name:'without_projects',type:'string'},{name:'exclude_internal',type:'string'},{name:'without_project_bots',type:'string'},{name:'admins',type:'string'},{name:'two_factor',type:'string'},{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'with_custom_attributes',type:'string'},{name:'skip_ldap',type:'string'},{name:'saml_provider_id',type:'string'},{name:'auditors',type:'string'}],data:null}, [client, {query, clientOptions}]),
  post: ({data,clientOptions}: {data:{email:string,name:string,username:string,password:string,reset_password:boolean,skip_confirmation:boolean,force_random_password:boolean,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,projects_limit:number,extern_uid:string,provider:string,bio:string,location:string,pronouns:string,public_email:string,commit_email:string,admin:boolean,can_create_group:boolean,external:boolean,avatar:string,theme_id:number,color_scheme_id:number,private_profile:boolean,note:string,view_diffs_file_by_file:boolean,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,group_id_for_saml:number,auditor:boolean},clientOptions:any}): Promise<[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:Date,confirmed_at:Date,last_activity_on:Date,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:Date,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]> => handler.apply({method:'post',url:'api/v4/users',resource:'api',variable:[],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{email:'string',name:'string',username:'string',password:'string',reset_password:'boolean',skip_confirmation:'boolean',force_random_password:'boolean',skype:'string',linkedin:'string',twitter:'string',discord:'string',website_url:'string',organization:'string',projects_limit:'number',extern_uid:'string',provider:'string',bio:'string',location:'string',pronouns:'string',public_email:'string',commit_email:'string',admin:'boolean',can_create_group:'boolean',external:'boolean',avatar:'binary',theme_id:'number',color_scheme_id:'number',private_profile:'boolean',note:'string',view_diffs_file_by_file:'boolean',shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',group_id_for_saml:'number',auditor:'boolean'},options:{raw:{language:'json'}}}}, [client, {data, clientOptions}]),
  getOne: ({params,query,clientOptions}: {params:{id:string},query:{with_custom_attributes:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'with_custom_attributes',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
  put: ({params,data,clientOptions}: {params:{id:string},data:{email:string,password:string,skip_reconfirmation:boolean,name:string,username:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,projects_limit:number,extern_uid:string,provider:string,bio:string,location:string,pronouns:string,public_email:string,commit_email:string,admin:boolean,can_create_group:boolean,external:boolean,avatar:string,theme_id:number,color_scheme_id:number,private_profile:boolean,note:string,view_diffs_file_by_file:boolean,shared_runners_minutes_limit:number,extra_shared_runners_minutes_limit:number,group_id_for_saml:number,auditor:boolean},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:Date,confirmed_at:Date,last_activity_on:Date,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:Date,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]> => handler.apply({method:'put',url:'api/v4/users/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{email:'string',password:'string',skip_reconfirmation:'boolean',name:'string',username:'string',skype:'string',linkedin:'string',twitter:'string',discord:'string',website_url:'string',organization:'string',projects_limit:'number',extern_uid:'string',provider:'string',bio:'string',location:'string',pronouns:'string',public_email:'string',commit_email:'string',admin:'boolean',can_create_group:'boolean',external:'boolean',avatar:'binary',theme_id:'number',color_scheme_id:'number',private_profile:'boolean',note:'string',view_diffs_file_by_file:'boolean',shared_runners_minutes_limit:'number',extra_shared_runners_minutes_limit:'number',group_id_for_saml:'number',auditor:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
  delete: ({params,query,clientOptions}: {params:{id:string},query:{hard_delete:string},clientOptions:any}): Promise<[{code:200,data:{id:string,email:string,confirmed_at:string}}]> => handler.apply({method:'delete',url:'api/v4/users/:id',resource:'api',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'hard_delete',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
  "events": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string,action:string,target_type:string,before:string,after:string,sort:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:{value:{}},type:{value:{}},body:{value:{}},attachment:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},system:{value:{}},noteable_id:{value:{}},noteable_type:{value:{}},project_id:{value:{}},commit_id:{value:{}},position:{value:{}},resolvable:{value:{}},resolved:{value:{}},resolved_by:{value:{}},resolved_at:{value:{}},confidential:{value:{}},internal:{value:{}},imported:{value:{}},imported_from:{value:{}},noteable_iid:{value:{}},commands_changes:{value:{}}},author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},wiki_page:{format:{value:{}},slug:{value:{}},title:{value:{}}},imported:boolean,imported_from:string,push_data:{commit_count:{value:{}},action:{value:{}},ref_type:{value:{}},commit_from:{value:{}},commit_to:{value:{}},ref:{value:{}},commit_title:{value:{}},ref_count:{value:{}}},author_username:string},{id:number,project_id:number,action_name:string,target_id:number,target_iid:number,target_type:string,author_id:number,target_title:string,created_at:string,note:{id:{value:{}},type:{value:{}},body:{value:{}},attachment:{value:{}},author:{value:{}},created_at:{value:{}},updated_at:{value:{}},system:{value:{}},noteable_id:{value:{}},noteable_type:{value:{}},project_id:{value:{}},commit_id:{value:{}},position:{value:{}},resolvable:{value:{}},resolved:{value:{}},resolved_by:{value:{}},resolved_at:{value:{}},confidential:{value:{}},internal:{value:{}},imported:{value:{}},imported_from:{value:{}},noteable_iid:{value:{}},commands_changes:{value:{}}},author:{id:{value:{}},username:{value:{}},name:{value:{}},state:{value:{}},locked:{value:{}},avatar_url:{value:{}},avatar_path:{value:{}},custom_attributes:{value:{}},web_url:{value:{}}},wiki_page:{format:{value:{}},slug:{value:{}},title:{value:{}}},imported:boolean,imported_from:string,push_data:{commit_count:{value:{}},action:{value:{}},ref_type:{value:{}},commit_from:{value:{}},commit_to:{value:{}},ref:{value:{}},commit_title:{value:{}},ref_count:{value:{}}},author_username:string}]},{code:404}]> => handler.apply({method:'get',url:'api/v4/users/:id/events',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'action',type:'string'},{name:'target_type',type:'string'},{name:'before',type:'string'},{name:'after',type:'string'},{name:'sort',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "custom_attributes": {
    get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{key:string,value:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id/custom_attributes',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{key:string,id:string},clientOptions:any}): Promise<[{code:200,data:{key:string,value:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id/custom_attributes/:key',resource:'v4',variable:[{name:'key',type:'string'},{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    put: ({params,data,clientOptions}: {params:{key:string,id:string},data:{value:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'put',url:'api/v4/users/:id/custom_attributes/:key',resource:'v4',variable:[{name:'key',type:'string'},{name:'id',type:'string'}],headers:{'Content-Type':'application/json'},query:[],data:{mode:'raw',raw:{value:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    delete: ({params,clientOptions}: {params:{key:string,id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/users/:id/custom_attributes/:key',resource:'v4',variable:[{name:'key',type:'string'},{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "follow": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}]> => handler.apply({method:'post',url:'api/v4/users/:id/follow',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "unfollow": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string}}]> => handler.apply({method:'post',url:'api/v4/users/:id/unfollow',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "following": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id/following',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "followers": {
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id/followers',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "disable_two_factor": {
    patch: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:Date,confirmed_at:Date,last_activity_on:Date,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:Date,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]> => handler.apply({method:'patch',url:'api/v4/users/:id/disable_two_factor',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "identities": {
    delete: ({params,clientOptions}: {params:{id:string,provider:string},clientOptions:any}): Promise<[{code:200,data:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{key:string,value:string},{key:string,value:string}],web_url:string,created_at:string,bio:string,location:string,public_email:string,skype:string,linkedin:string,twitter:string,discord:string,website_url:string,organization:string,job_title:string,pronouns:string,bot:string,work_information:string,followers:string,following:string,is_followed:string,local_time:string,last_sign_in_at:Date,confirmed_at:Date,last_activity_on:Date,email:string,theme_id:number,color_scheme_id:number,projects_limit:number,current_sign_in_at:Date,identities:{provider:string,extern_uid:string,saml_provider_id:string},can_create_group:boolean,can_create_project:boolean,two_factor_enabled:boolean,external:string,private_profile:boolean,commit_email:string,shared_runners_minutes_limit:string,extra_shared_runners_minutes_limit:string,scim_identities:{extern_uid:string,group_id:string,active:string},is_admin:string,note:string,namespace_id:string,created_by:{id:number,username:string,name:string,state:string,locked:boolean,avatar_url:string,avatar_path:string,custom_attributes:[{value:{}},{value:{}}],web_url:string},email_reset_offered_at:string,using_license_seat:string,is_auditor:string,provisioned_by_group_id:string,enterprise_group_id:string,enterprise_group_associated_at:string}}]> => handler.apply({method:'delete',url:'api/v4/users/:id/identities/:provider',resource:'v4',variable:[{name:'id',type:'string'},{name:'provider',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "keys": {
    getOne: ({params,clientOptions}: {params:{id:string,key_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,title:string,created_at:Date,expires_at:Date,key:string,usage_type:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id/keys/:key_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,key_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,title:string,created_at:Date,expires_at:Date,key:string,usage_type:string}}]> => handler.apply({method:'delete',url:'api/v4/users/:id/keys/:key_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{user_id:string},data:{key:string,title:string,expires_at:Date,usage_type:string},clientOptions:any}): Promise<[{code:201,data:{id:number,title:string,created_at:Date,expires_at:Date,key:string,usage_type:string}}]> => handler.apply({method:'post',url:'api/v4/users/:user_id/keys',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{key:'string',title:'string',expires_at:'dateTime',usage_type:'auth_and_signing'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    get: ({params,query,clientOptions}: {params:{user_id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,title:string,created_at:Date,expires_at:Date,key:string,usage_type:string}}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/keys',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "gpg_keys": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{key:string},clientOptions:any}): Promise<[{code:201,data:{id:string,key:string,created_at:string}}]> => handler.apply({method:'post',url:'api/v4/users/:id/gpg_keys',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{key:'string'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:string,key:string,created_at:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id/gpg_keys',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{id:string,key_id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,key:string,created_at:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id/gpg_keys/:key_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,key_id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/users/:id/gpg_keys/:key_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}]),
    "revoke": {
      post: ({params,clientOptions}: {params:{id:string,key_id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/gpg_keys/:key_id/revoke',resource:'users',variable:[{name:'id',type:'string'},{name:'key_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
    }
  },
  "emails": {
    post: ({params,data,clientOptions}: {params:{id:string},data:{email:string,skip_confirmation:boolean},clientOptions:any}): Promise<[{code:201,data:{id:string,email:string,confirmed_at:string}}]> => handler.apply({method:'post',url:'api/v4/users/:id/emails',resource:'v4',variable:[{name:'id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{email:'string',skip_confirmation:'boolean'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    get: ({params,query,clientOptions}: {params:{id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:string,email:string,confirmed_at:string}}]> => handler.apply({method:'get',url:'api/v4/users/:id/emails',resource:'v4',variable:[{name:'id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    delete: ({params,clientOptions}: {params:{id:string,email_id:string},clientOptions:any}): Promise<[{code:200,data:{id:string,email:string,confirmed_at:string}}]> => handler.apply({method:'delete',url:'api/v4/users/:id/emails/:email_id',resource:'v4',variable:[{name:'id',type:'string'},{name:'email_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}])
  },
  "activate": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/activate',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "approve": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/approve',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "reject": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/reject',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "deactivate": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/deactivate',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "block": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/block',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "unblock": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/unblock',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "ban": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/ban',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "unban": {
    post: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:201}]> => handler.apply({method:'post',url:'api/v4/users/:id/unban',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "associations_count": {
    get: ({params,clientOptions}: {params:{id:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'get',url:'api/v4/users/:id/associations_count',resource:'v4',variable:[{name:'id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "projects": {
    get: ({params,query,clientOptions}: {params:{user_id:string},query:{order_by:string,sort:string,archived:string,visibility:string,search:string,search_namespaces:string,owned:string,starred:string,imported:string,membership:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_programming_language:string,min_access_level:string,id_after:string,id_before:string,last_activity_after:string,last_activity_before:string,repository_storage:string,topic:string,topic_id:string,updated_before:string,updated_after:string,include_pending_delete:string,wiki_checksum_failed:string,repository_checksum_failed:string,include_hidden:string,page:string,per_page:string,simple:string,statistics:string,with_custom_attributes:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string}]},{code:404}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/projects',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'archived',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'search_namespaces',type:'string'},{name:'owned',type:'string'},{name:'starred',type:'string'},{name:'imported',type:'string'},{name:'membership',type:'string'},{name:'with_issues_enabled',type:'string'},{name:'with_merge_requests_enabled',type:'string'},{name:'with_programming_language',type:'string'},{name:'min_access_level',type:'string'},{name:'id_after',type:'string'},{name:'id_before',type:'string'},{name:'last_activity_after',type:'string'},{name:'last_activity_before',type:'string'},{name:'repository_storage',type:'string'},{name:'topic',type:'string'},{name:'topic_id',type:'string'},{name:'updated_before',type:'string'},{name:'updated_after',type:'string'},{name:'include_pending_delete',type:'string'},{name:'wiki_checksum_failed',type:'string'},{name:'repository_checksum_failed',type:'string'},{name:'include_hidden',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'simple',type:'string'},{name:'statistics',type:'string'},{name:'with_custom_attributes',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "contributed_projects": {
    get: ({params,query,clientOptions}: {params:{user_id:string},query:{order_by:string,sort:string,page:string,per_page:string,simple:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string}]},{code:404}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/contributed_projects',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'simple',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "starred_projects": {
    get: ({params,query,clientOptions}: {params:{user_id:string},query:{order_by:string,sort:string,archived:string,visibility:string,search:string,search_namespaces:string,owned:string,starred:string,imported:string,membership:string,with_issues_enabled:string,with_merge_requests_enabled:string,with_programming_language:string,min_access_level:string,id_after:string,id_before:string,last_activity_after:string,last_activity_before:string,repository_storage:string,topic:string,topic_id:string,updated_before:string,updated_after:string,include_pending_delete:string,wiki_checksum_failed:string,repository_checksum_failed:string,include_hidden:string,page:string,per_page:string,simple:string,statistics:string},clientOptions:any}): Promise<[{code:200,data:[{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string},{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date,default_branch:string,tag_list:[string,string],topics:[string,string],ssh_url_to_repo:string,http_url_to_repo:string,web_url:string,readme_url:string,forks_count:number,license_url:string,license:{key:{value:{}},name:{value:{}},nickname:{value:{}},html_url:{value:{}},source_url:{value:{}}},avatar_url:string,star_count:number,last_activity_at:Date,namespace:{id:{value:{}},name:{value:{}},path:{value:{}},kind:{value:{}},full_path:{value:{}},parent_id:{value:{}},avatar_url:{value:{}},web_url:{value:{}}},custom_attributes:{key:{value:{}},value:{value:{}}},repository_storage:string}]},{code:404}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/starred_projects',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'order_by',type:'string'},{name:'sort',type:'string'},{name:'archived',type:'string'},{name:'visibility',type:'string'},{name:'search',type:'string'},{name:'search_namespaces',type:'string'},{name:'owned',type:'string'},{name:'starred',type:'string'},{name:'imported',type:'string'},{name:'membership',type:'string'},{name:'with_issues_enabled',type:'string'},{name:'with_merge_requests_enabled',type:'string'},{name:'with_programming_language',type:'string'},{name:'min_access_level',type:'string'},{name:'id_after',type:'string'},{name:'id_before',type:'string'},{name:'last_activity_after',type:'string'},{name:'last_activity_before',type:'string'},{name:'repository_storage',type:'string'},{name:'topic',type:'string'},{name:'topic_id',type:'string'},{name:'updated_before',type:'string'},{name:'updated_after',type:'string'},{name:'include_pending_delete',type:'string'},{name:'wiki_checksum_failed',type:'string'},{name:'repository_checksum_failed',type:'string'},{name:'include_hidden',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'simple',type:'string'},{name:'statistics',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "status": {
    get: ({params,clientOptions}: {params:{user_id:string},clientOptions:any}): Promise<[{code:200}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/status',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "project_deploy_keys": {
    get: ({params,query,clientOptions}: {params:{user_id:string},query:{page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{id:number,title:string,created_at:Date,expires_at:Date,key:string,usage_type:string,fingerprint:string,fingerprint_sha256:string,projects_with_write_access:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date},projects_with_readonly_access:{id:number,description:string,name:string,name_with_namespace:string,path:string,path_with_namespace:string,created_at:Date}}}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/project_deploy_keys',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "memberships": {
    get: ({params,query,clientOptions}: {params:{user_id:string},query:{type:string,page:string,per_page:string},clientOptions:any}): Promise<[{code:200,data:{source_id:string,source_name:string,source_type:string,access_level:string}}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/memberships',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'type',type:'string'},{name:'page',type:'string'},{name:'per_page',type:'string'}],data:null}, [client, { params, query, clientOptions}])
  },
  "impersonation_tokens": {
    get: ({params,query,clientOptions}: {params:{user_id:string},query:{page:string,per_page:string,state:string},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,impersonation:string}}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/impersonation_tokens',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{Accept:'application/json'},query:[{name:'page',type:'string'},{name:'per_page',type:'string'},{name:'state',type:'string'}],data:null}, [client, { params, query, clientOptions}]),
    post: ({params,data,clientOptions}: {params:{user_id:string},data:{name:string,expires_at:Date,scopes:[string,string]},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,token:string,impersonation:string}}]> => handler.apply({method:'post',url:'api/v4/users/:user_id/impersonation_tokens',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',expires_at:'date',scopes:['string','string']},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}]),
    getOne: ({params,clientOptions}: {params:{user_id:string,impersonation_token_id:string},clientOptions:any}): Promise<[{code:200,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,impersonation:string}}]> => handler.apply({method:'get',url:'api/v4/users/:user_id/impersonation_tokens/:impersonation_token_id',resource:'v4',variable:[{name:'user_id',type:'string'},{name:'impersonation_token_id',type:'string'}],headers:{Accept:'application/json'},query:[],data:null}, [client, { params, clientOptions}]),
    delete: ({params,clientOptions}: {params:{user_id:string,impersonation_token_id:string},clientOptions:any}): Promise<[{code:204}]> => handler.apply({method:'delete',url:'api/v4/users/:user_id/impersonation_tokens/:impersonation_token_id',resource:'v4',variable:[{name:'user_id',type:'string'},{name:'impersonation_token_id',type:'string'}],headers:{},query:[],data:null}, [client, { params, clientOptions}])
  },
  "personal_access_tokens": {
    post: ({params,data,clientOptions}: {params:{user_id:string},data:{name:string,scopes:[string,string],expires_at:Date},clientOptions:any}): Promise<[{code:201,data:{id:number,name:string,revoked:boolean,created_at:Date,user_id:number,last_used_at:Date,active:boolean,expires_at:Date,token:string}}]> => handler.apply({method:'post',url:'api/v4/users/:user_id/personal_access_tokens',resource:'v4',variable:[{name:'user_id',type:'string'}],headers:{'Content-Type':'application/json',Accept:'application/json'},query:[],data:{mode:'raw',raw:{name:'string',scopes:['string','string'],expires_at:'date'},options:{raw:{language:'json'}}}}, [client, { params, data, clientOptions}])
  }
})