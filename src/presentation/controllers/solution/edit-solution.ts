import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, notFound, ok } from '../../helpers/http'
import { IEditSolutionUseCase } from '@domain/usecases'
import { ResourceNotFoundError, UnauthorizedError } from '../../errors'

export class EditSolutionController implements IController {
  constructor (
    private readonly editSolutionService: IEditSolutionUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { description, sourceCode } = httpRequest.body
    const { solutionId, userId } = httpRequest.params
    const error = this.validation.validate({
      description, sourceCode, solutionId
    })
    if (error) return badRequest(error)

    const response = await this.editSolutionService.execute({
      solutionId, description, sourceCode
    }, userId)
    const { content, failValidations: fail } = response

    if (fail) {
      if (fail.solutionNotFound) return notFound(new ResourceNotFoundError('solution'))
      if (fail.withoutPermission) return forbidden(new UnauthorizedError())
    }

    return ok(content)
  }
}
