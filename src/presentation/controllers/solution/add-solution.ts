import { IAddSolutionUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'
import { badRequest, forbidden, ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'

export class AddSolutionController implements IController {
  constructor (private readonly addSolutionService: IAddSolutionUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { userId, problemId } = httpRequest.params
    const { sourceCode, description } = httpRequest.body
    const error = this.validation.validate({ userId, problemId, description, sourceCode })

    if (error) return badRequest(error)

    const solution = await this.addSolutionService.execute({ userId, problemId, description, sourceCode })

    if (!solution) return forbidden(new ResourceNotFoundError('problem'))

    return ok(solution)
  }
}
