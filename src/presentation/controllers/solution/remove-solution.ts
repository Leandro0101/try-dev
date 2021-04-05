import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, ok } from '../../helpers/http'
import { IRemoveSolutionUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'

export class RemoveSolutionController implements IController {
  constructor (
    private readonly removeSolutionService: IRemoveSolutionUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { solutionId } = httpRequest.params
    const error = this.validation.validate({ solutionId })

    if (error) return badRequest(error)

    const response = await this.removeSolutionService.execute(solutionId)

    if (response === null) return forbidden(new ResourceNotFoundError('solution'))

    return ok()
  }
}
