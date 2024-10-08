export * as gitlab from './v4/index.mjs';

export default (client, handler) => {
  const modules = {};

  Object.entries(([key, module]) => {
    modules[key] = module.default(client, handler);
  });

  return modules;
};
