import { IHttpResponse } from '../protocols'

export const ok = (data: any): IHttpResponse => ({ statusCode: 200, body: data })
export const forbidden = (error: Error): IHttpResponse => ({ statusCode: 403, body: error })
export const badRequest = (error: Error): IHttpResponse => ({ statusCode: 400, body: error })
