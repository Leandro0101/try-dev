import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'
import { IValidation } from '../../protocols/validation'

export class LoadSolutionByIdController implements IController {
  constructor (private readonly loadSolutionByIdService: ILoadSolutionByIdUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)

      if (error) return badRequest(error)

      const solution = await this.loadSolutionByIdService.execute(httpRequest.params.id)

      if (!solution) return forbidden(new ResourceNotFoundError('solution'))

      return ok(solution)
    } catch (error) {
      return serverError(error)
    }
  }
}
