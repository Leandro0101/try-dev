import { ILoadProblemsByUserUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'
import { badRequest, notFound, ok, serverError } from '../../helpers/http'
import { IHttpRequest, IHttpResponse, IValidation, IController } from '../../protocols'

export class LoadProblemsByUserController implements IController {
  constructor (
    private readonly loadProblemsByUserService: ILoadProblemsByUserUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId } = httpRequest.params
      const { page } = httpRequest.query
      const error = this.validation.validate({ userId, page })
      if (error) return badRequest(error)

      const response = await this.loadProblemsByUserService
        .execute(userId, Number(page))

      const { content, failValidations: fail } = response
      if (fail) return notFound(new ResourceNotFoundError('user'))
      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
