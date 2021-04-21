import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { badRequest, notFound, ok } from '../../helpers/http'
import { IEditProblemUseCase } from '@domain/usecases'
import { ResourceNotFoundError } from '../../errors'

export class EditProblemController implements IController {
  constructor (
    private readonly editProblem: IEditProblemUseCase,
    private readonly validation: IValidation
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { description, title } = httpRequest.body
    const { problemId } = httpRequest.params
    const error = this.validation.validate({
      description, title, problemId
    })
    if (error) return badRequest(error)

    const response = await this.editProblem.execute({
      problemId, description, title
    })
    const { content, failValidations: fail } = response

    if (fail) return notFound(new ResourceNotFoundError('Problem'))

    return ok(content)
  }
}
