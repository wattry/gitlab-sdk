/* eslint-disable max-len */
import { Client, Handler } from './client';

export interface ContainerRegistryEvent {
  events: {
    post: ({ }: {}, options?: {}) => Promise<{
      code: 200;
    } | {
      code: 401;
    }>;
  };
};

export default (client: Client, handler: Handler): ContainerRegistryEvent => ({
  "events": {
    post: ({}: {}, options?: {}): Promise<{code:200}|{code:401}> => handler.apply({method:'post',url:'api/v4/container_registry_event/events',variable:[]}, [client, {}, options])
  }
})