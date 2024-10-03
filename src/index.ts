import * as v4 from './v4/index.js';

type Default = (client: any, handler: any) => any;

export default (client: any, handler: any) => {
  const final: { [key: string]: Default } = {};

  Object.entries(v4).forEach(([key, value]: [key: string, value: any]) => {
    final[key] = value(client, handler);
  });

  return final;
};