import { ILoadProblemByIdUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'

export class LoadProblemByIdController implements IController {
  constructor (
    private readonly loadProblemByIdService: ILoadProblemByIdUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)

      if (error) return badRequest(error)

      const { id } = httpRequest.params
      const response = await this.loadProblemByIdService.execute(id)
      const { content, failValidations: fail } = response

      if (fail) {
        if (fail.problemNotFound) return forbidden(new ResourceNotFoundError('problem'))
      }

      return ok(content)
    } catch (error) {
      serverError(error)
    }
  }
}
