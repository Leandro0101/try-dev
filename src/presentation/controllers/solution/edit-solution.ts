import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, ok } from '../../helpers/http'
import { IEditSolutionUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'

export class EditSolutionController implements IController {
  constructor (
    private readonly editSolutionService: IEditSolutionUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { description, sourceCode } = httpRequest.body
    const { solutionId } = httpRequest.params
    const error = this.validation.validate({
      description, sourceCode, solutionId
    })
    if (error) return badRequest(error)

    const response = await this.editSolutionService.execute({
      solutionId, description, sourceCode
    })
    const { content, failValidations: fail } = response

    if (fail) return forbidden(new ResourceNotFoundError('solution'))

    return ok(content)
  }
}
