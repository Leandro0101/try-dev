import { ResourceNotFoundError } from '../errors'
import { notFound } from '../helpers/http'
import { IHttpRequest, IHttpResponse, IMiddleware } from '../protocols'

export class EndPointNotFoundMiddleware implements IMiddleware {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return notFound(new ResourceNotFoundError('endpoint'))
  }
}
