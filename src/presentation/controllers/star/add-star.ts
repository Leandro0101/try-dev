import { IAddStarUseCase } from '@domain/usecases'
import { badRequest, ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'
import { IValidation } from '../../protocols/validation'

export class AddStarController implements IController {
  constructor (private readonly addStarService: IAddStarUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { value } = httpRequest.query
    const { solutionId } = httpRequest.params

    const error = this.validation.validate({ value, solutionId })

    if (error) return badRequest(error)

    const star = await this.addStarService.execute({ solutionId, value })

    return ok(star)
  }
}
