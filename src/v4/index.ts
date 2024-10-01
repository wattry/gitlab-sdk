import admin from './admin.js';
import application from './application.js';
import applications from './applications.js';
import avatar from './avatar.js';
import broadcast_messages from './broadcast_messages.js';
import bulk_imports from './bulk_imports.js';
import container_registry_event from './container_registry_event.js';
import deploy_keys from './deploy_keys.js';
import deploy_tokens from './deploy_tokens.js';
import events from './events.js';
import feature_flags from './feature_flags.js';
import features from './features.js';
import geo from './geo.js';
import group from './group.js';
import groups from './groups.js';
import hooks from './hooks.js';
import gImport from './import.js';
import integrations from './integrations.js';
import job from './job.js';
import jobs from './jobs.js';
import keys from './keys.js';
import markdown from './markdown.js';
import merge_rs from './merge_requests.js';
import metadata from './metadata.js';
import namespaces from './namespaces.js';
import packages from './packages.js';
import pages from './pages.js';
import personal_access_tokens from './personal_access_tokens.js';
import project_repository_storage_moves from './project_repository_storage_moves.js';
import projects from './projects.js';
import registry from './registry.js';
import runners from './runners.js';
import slack from './slack.js';
import snippet_repository_storage_moves from './snippet_repository_storage_moves.js';
import snippets from './snippets.js';
import suggestions from './suggestions.js';
import topics from './topics.js';
import usage_data from './usage_data.js';
import user_counts from './user_counts.js';
import user from './user.js';
import users from './users.js';
import version from './version.js';
import web_commits from './web_commits.js';

export default (c: any, r: any) => ({
  admin: admin(c, r),
  application: application(c,r),
  applications: applications(c,r),
  avatar: avatar(c,r),
  broadcast_messages: broadcast_messages(c,r),
  bulk_imports: bulk_imports(c,r),
  container_registry_event: container_registry_event(c,r),
  deploy_keys: deploy_keys(c,r),
  deploy_tokens: deploy_tokens(c,r),
  events: events(c,r),
  feature_flags: feature_flags(c,r),
  features: features(c,r),
  geo: geo(c,r),
  group: group(c,r),
  groups: groups(c,r),
  hooks: hooks(c,r),
  import: gImport(c,r),
  integrations: integrations(c,r),
  job: job(c,r),
  jobs: jobs(c,r),
  keys: keys(c,r),
  markdown: markdown(c,r),
  merge_rs: merge_rs(c,r),
  metadata: metadata(c,r),
  namespaces: namespaces(c,r),
  packages: packages(c,r),
  pages: pages(c,r),
  personal_access_tokens: personal_access_tokens(c,r),
  project_repository_storage_moves: project_repository_storage_moves(c,r),
  projects: projects(c,r),
  registry: registry(c,r),
  runners: runners(c,r),
  slack: slack(c,r),
  snippet_repository_storage_moves: snippet_repository_storage_moves(c,r),
  snippets: snippets(c,r),
  suggestions: suggestions(c,r),
  topics: topics(c,r),
  usage_data: usage_data(c,r),
  user_counts: user_counts(c,r),
  user: user(c,r),
  users: users(c,r),
  version: version(c,r),
  web_commits: web_commits(c,r)
});
