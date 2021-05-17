import { IHttpRequest, IHttpResponse } from '.'

export interface IMiddleware {
  handle: (httpRequest: IHttpRequest) => Promise<IHttpResponse>
}
