import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'

export class LoadSolutionByIdController implements IController {
  constructor (private readonly loadSolutionByIdService: ILoadSolutionByIdUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error) return badRequest(error)

      const response = await this.loadSolutionByIdService.execute(
        httpRequest.params.id)
      const { content, failValidations: fail } = response

      if (fail) return forbidden(new ResourceNotFoundError('solution'))

      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
