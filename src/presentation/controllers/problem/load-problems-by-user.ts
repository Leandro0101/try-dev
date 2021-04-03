import { ILoadProblemsByUserUseCase } from '@domain/usecases'
import { badRequest, ok, serverError } from '../../helpers/http'
import { IHttpRequest, IHttpResponse, IValidation, IController } from '../../protocols'

export class LoadProblemsByUserController implements IController {
  constructor (
    private readonly loadProblemsByUserService: ILoadProblemsByUserUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { userId, page } = httpRequest.params

      const error = this.validation.validate({ userId })

      if (error) return badRequest(error)

      const problems = await this.loadProblemsByUserService.execute(userId, Number(page))

      return ok(problems)
    } catch (error) {
      return serverError(error)
    }
  }
}
