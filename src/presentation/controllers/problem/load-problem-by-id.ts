import { ILoadProblemByIdUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'
import { badRequest, forbidden, ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'

export class LoadProblemByIdController implements IController {
  constructor (private readonly loadProblemByIdService: ILoadProblemByIdUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.params)

    if (error) return badRequest(error)
    const { id } = httpRequest.params
    const problem = await this.loadProblemByIdService.execute(id)

    if (!problem) return forbidden(new ResourceNotFoundError('problem'))

    return ok(problem)
  }
}