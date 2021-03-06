import { Request, Response, NextFunction } from 'express'
import { IHttpRequest, IHttpResponse, IMiddleware } from '@presentation/protocols'

export const adaptMiddleware = (middleware: IMiddleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const httpRequest: IHttpRequest = {
      headers: request.headers
    }

    const httpResponse: IHttpResponse = await middleware.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      const { userId } = httpResponse.body.tokenValue
      Object.assign(request.params, { userId })
      next()
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
