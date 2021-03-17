import { IHttpRequest, IHttpResponse } from '.'

export interface IController {
  handle: (httpRequest: IHttpRequest) => Promise<IHttpResponse>
}
