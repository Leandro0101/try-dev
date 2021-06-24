import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { EmailAlreadyRegisterError } from '../../errors'
import { IAddUserUseCase, ISendAccountVerificationEmailUseCase } from '@domain/usecases'
import Queue from '../../../infra/redis/queue'
export class AddUserController implements IController {
  constructor (
    private readonly addUserService: IAddUserUseCase,
    private readonly validation: IValidation,
    private readonly sendAccountVerificationEmail: ISendAccountVerificationEmailUseCase,
    private readonly templatePath: string
  ) { }

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) return badRequest(error)
      const { name, email, password } = httpRequest.body

      const response = await this.addUserService.execute({ name, email, password })
      const { content, failValidations: fail } = response

      if (fail) return forbidden(new EmailAlreadyRegisterError(email))
      // await this.sendAccountVerificationEmail.execute({
      //   user: {
      //     id: content.id,
      //     email,
      //     name
      //   },
      //   templatePath: this.templatePath
      // })
      await Queue.add({
        data: {
          user: {
            id: content.id,
            email,
            name
          }
        },
        sendAccountVerificationEmail: this.sendAccountVerificationEmail
      })
      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
