import { IAddProblemUseCase } from '@domain/usecases/problem/add-problem'
import { ResourceNotFoundError } from '../../errors/resource-not-found'
import { badRequest, forbidden, ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'

export class AddProblemController implements IController {
  constructor (private readonly addProblemService: IAddProblemUseCase, private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { userId } = httpRequest.params
    const { title, description } = httpRequest.body
    const error = this.validation.validate({ title, description, userId })

    if (error) return badRequest(error)

    const problem = await this.addProblemService.execute({ fields: httpRequest.body, userId })

    if (!problem) return forbidden(new ResourceNotFoundError('user'))

    return ok(problem)
  }
}
