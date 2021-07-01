import { ILoadStarsByUserUseCase } from '@domain/usecases'
import { UnauthorizedError } from '../../errors'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'

export class LoadStarsByUserController implements IController {
  constructor (
    private readonly loadStarsByUser: ILoadStarsByUserUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest.params
      const { page } = httpRequest.query
      const error = this.validation.validate({ userId, page })
      if (error) return badRequest(error)

      const response = await this.loadStarsByUser.execute(userId, page)
      const { content, failValidations: fail } = response
      if (fail) return forbidden(new UnauthorizedError())

      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
