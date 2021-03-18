import { IHttpResponse } from '../protocols'

export const ok = (data: any): IHttpResponse => ({ statusCode: 200, body: data })
