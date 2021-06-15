/* eslint-disable @typescript-eslint/dot-notation */
import { IVerifyUserStatusUseCase } from '@domain/usecases'
import { IDecrypter } from '@data/protocols/criptograpy/decrypter'
import { AccessDeniedError } from '../errors'
import { forbidden, ok } from '../helpers/http'
import { IHttpRequest, IHttpResponse, IMiddleware } from '../protocols'
import { IUserStatus } from '@domain/entities'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly decrypter: IDecrypter,
    private readonly criptograpyKey: string,
    private readonly verifyUserStatus: IVerifyUserStatusUseCase,
    private readonly status: string
  ) { }

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const authHeader = httpRequest.headers.authorization
    if (!authHeader) return forbidden(new AccessDeniedError())
    const [, token] = authHeader.split(' ')
    if (!token) return forbidden(new AccessDeniedError())
    const tokenValue = await this.decrypter.decrypt(
      token, this.criptograpyKey
    )
    if (!tokenValue) return forbidden(new AccessDeniedError())
    const userId = Object(tokenValue).userId
    const status = IUserStatus[this.status.toUpperCase()]
    const response = await this.verifyUserStatus.execute(
      userId, status
    )
    if (response.failValidations) {
      return forbidden(new AccessDeniedError())
    }
    return ok({ tokenValue })
  }
}
