import { IController, IHttpRequest, IHttpResponse } from '@presentation/protocols'
import { Response, Request } from 'express'
export const adaptRoute = (controller: IController): any => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query
    }

    const httpResponse: IHttpResponse = await controller.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
