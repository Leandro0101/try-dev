import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { badRequest, ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'
import { IValidation } from '../../protocols/validation'

export class LoadSolutionByIdController implements IController {
  constructor (private readonly loadSolutionByIdService: ILoadSolutionByIdUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.params)

    if (error) return badRequest(error)

    const solution = await this.loadSolutionByIdService.execute(httpRequest.params.id)

    return ok(solution)
  }
}
