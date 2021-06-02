import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, forbidden, notFound, ok } from '../../helpers/http'
import { IEditProblemUseCase } from '@domain/usecases'
import { ResourceNotFoundError, UnauthorizedError } from '../../errors'

export class EditProblemController implements IController {
  constructor (
    private readonly editProblem: IEditProblemUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { description, title } = httpRequest.body
    const { problemId, userId } = httpRequest.params
    const error = this.validation.validate({
      description, title, problemId
    })
    if (error) return badRequest(error)

    const response = await this.editProblem.execute({
      problemId, description, title
    }, userId)
    const { content, failValidations: fail } = response

    if (fail) {
      if (fail.problemNotFound) return notFound(new ResourceNotFoundError('Problem'))
      if (fail.withoutPermission) return forbidden(new UnauthorizedError())
    }

    return ok(content)
  }
}
