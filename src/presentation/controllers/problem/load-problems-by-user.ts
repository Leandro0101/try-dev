import { ILoadProblemsByUserUseCase } from '@domain/usecases'
import { badRequest, ok } from '../../helpers/http'
import { IHttpRequest, IHttpResponse } from '../../protocols'
import { IController } from '../../protocols/controller'
import { IValidation } from '../../protocols/validation'

export class LoadProblemsByUserController implements IController {
  constructor (
    private readonly loadProblemsByUserService: ILoadProblemsByUserUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { userId, page } = httpRequest.params

    const error = this.validation.validate({ userId })

    if (error) return badRequest(error)

    const problems = await this.loadProblemsByUserService.execute(userId, Number(page))

    return ok(problems)
  }
}
