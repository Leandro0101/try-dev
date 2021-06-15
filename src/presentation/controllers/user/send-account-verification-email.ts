import { IUserStatus } from '@/src/domain/entities'
import { UnauthorizedError } from '../../errors'
import { badRequest, forbidden, ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import {
  ILoadUserByIdUseCase,
  ISendAccountVerificationEmailUseCase,
  IVerifyUserStatusUseCase
} from '@domain/usecases'

export class SendAccountVerificationEmailController implements IController {
  constructor (
    private readonly sendAccountVerificationEmail: ISendAccountVerificationEmailUseCase,
    private readonly loadUserById: ILoadUserByIdUseCase,
    private readonly verifyUserStatus: IVerifyUserStatusUseCase,
    private readonly validation: IValidation,
    private readonly templatePath: string
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { userId } = httpRequest.params
    const error = this.validation.validate({ userId })
    if (error) return badRequest(error)

    const loadUserResponse = await this.loadUserById.execute(userId)
    const { content: user, failValidations: failLoadUser } = loadUserResponse
    if (failLoadUser) return forbidden(new UnauthorizedError())

    const verifyResponse = await this.verifyUserStatus.execute(
      userId, IUserStatus.PENDING
    )

    const { failValidations: failVerify } = verifyResponse
    if (failVerify) return forbidden(new UnauthorizedError())

    const { id, email, name } = user
    await this.sendAccountVerificationEmail.execute({
      user: { id, email, name },
      templatePath: this.templatePath
    })
    return ok()
  }
}
