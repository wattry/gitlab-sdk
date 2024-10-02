import { default as groups } from './groups';
import { default as projects } from './projects';
import { default as admin } from './admin';
import { default as broadcast_messages } from './broadcast_messages';
import { default as applications } from './applications';
import { default as avatar } from './avatar';
import { default as bulk_imports } from './bulk_imports';
import { default as job } from './job';
import { default as runners } from './runners';
import { default as jobs } from './jobs';
import { default as group } from './group';
import { default as packages } from './packages';
import { default as container_registry_event } from './container_registry_event';
import { default as registry } from './registry';
import { default as events } from './events';
import { default as users } from './users';
import { default as features } from './features';
import { default as geo } from './geo';
import { default as integrations } from './integrations';
import { default as keys } from './keys';
import { default as markdown } from './markdown';
import { default as merge_requests } from './merge_requests';
import { default as namespaces } from './namespaces';
import { default as pages } from './pages';
import { default as personal_access_tokens } from './personal_access_tokens';
import { default as project_repository_storage_moves } from './project_repository_storage_moves';
import { default as snippets } from './snippets';
import { default as snippet_repository_storage_moves } from './snippet_repository_storage_moves';
import { default as suggestions } from './suggestions';
import { default as hooks } from './hooks';
import { default as feature_flags } from './feature_flags';
import { default as usage_data } from './usage_data';
import { default as user } from './user';
import { default as user_counts } from './user_counts';
import { default as application } from './application';
import { default as deploy_keys } from './deploy_keys';
import { default as deploy_tokens } from './deploy_tokens';
import { default as gImport } from './import';
import { default as slack } from './slack';
import { default as metadata } from './metadata';
import { default as version } from './version';
import { default as web_commits } from './web_commits';
import { default as topics } from './topics';

export default (c: any, h: any) => ({
  groups: groups(c, h),
  projects: projects(c, h),
  admin: admin(c, h),
  broadcast_messages: broadcast_messages(c, h),
  applications: applications(c, h),
  avatar: avatar(c, h),
  bulk_imports: bulk_imports(c, h),
  job: job(c, h),
  runners: runners(c, h),
  jobs: jobs(c, h),
  group: group(c, h),
  packages: packages(c, h),
  container_registry_event: container_registry_event(c, h),
  registry: registry(c, h),
  events: events(c, h),
  users: users(c, h),
  features: features(c, h),
  geo: geo(c, h),
  integrations: integrations(c, h),
  keys: keys(c, h),
  markdown: markdown(c, h),
  merge_requests: merge_requests(c, h),
  namespaces: namespaces(c, h),
  pages: pages(c, h),
  personal_access_tokens: personal_access_tokens(c, h),
  project_repository_storage_moves: project_repository_storage_moves(c, h),
  snippets: snippets(c, h),
  snippet_repository_storage_moves: snippet_repository_storage_moves(c, h),
  suggestions: suggestions(c, h),
  hooks: hooks(c, h),
  feature_flags: feature_flags(c, h),
  usage_data: usage_data(c, h),
  user: user(c, h),
  user_counts: user_counts(c, h),
  application: application(c, h),
  deploy_keys: deploy_keys(c, h),
  deploy_tokens: deploy_tokens(c, h),
  import: gImport(c, h),
  slack: slack(c, h),
  metadata: metadata(c, h),
  version: version(c, h),
  web_commits: web_commits(c, h),
  topics: topics(c, h)
});
