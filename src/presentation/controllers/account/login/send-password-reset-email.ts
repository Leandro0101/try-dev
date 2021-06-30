import { badRequest, forbidden, ok, serverError } from '../../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../../protocols'
import {
  ISendPasswordResetEmailUseCase
} from '@domain/usecases'
import { UnauthorizedError } from '../../../errors'

export class SendPasswordResetEmailController implements IController {
  constructor (
    private readonly sendPasswordResetEmail: ISendPasswordResetEmailUseCase,
    private readonly validation: IValidation,
    private readonly templatePath: string
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { email } = httpRequest.params
      const error = this.validation.validate({ email })
      if (error) return badRequest(error)

      const { failValidations: fail } = await this.sendPasswordResetEmail.execute(email)
      if (fail) return forbidden(new UnauthorizedError())
      return ok()
    } catch (error) {
      return serverError(error)
    }
  }
}
