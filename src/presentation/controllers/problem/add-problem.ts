import { IAddProblemUseCase } from '@domain/usecases'
import { badRequest, ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'

export class AddProblemController implements IController {
  constructor (private readonly addProblemService: IAddProblemUseCase, private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { userId } = httpRequest.params
    const { title, description } = httpRequest.body
    const error = this.validation.validate({ title, description, userId })

    if (error) {
      return badRequest(error)
    }

    const problem = await this.addProblemService.execute({ fields: httpRequest.body, userId })

    return ok(problem)
  }
}
