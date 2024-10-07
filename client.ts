export class Client {

}

export type Handler = (
  this: any,
  client: Client,
  requestConfig: any
) => Promise<any>;