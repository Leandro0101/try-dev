import { IHttpResponse } from '../protocols'
import { ServerError } from '../errors/server-error'

export const ok = (data?: any): IHttpResponse => ({ statusCode: 200, body: data })
export const forbidden = (error: Error): IHttpResponse => ({ statusCode: 403, body: error })
export const badRequest = (error: Error): IHttpResponse => ({ statusCode: 400, body: error })
export const serverError = (error: Error): IHttpResponse => ({ statusCode: 500, body: new ServerError(error.stack) })
export const notFound = (error: Error): IHttpResponse => ({ statusCode: 404, body: error })
