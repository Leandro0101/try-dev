import { IAddStarUseCase } from '@domain/usecases'
import { ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'

export class AddStarController implements IController {
  constructor (private readonly addStarService: IAddStarUseCase) {}
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { value } = httpRequest.query
    const { solutionId } = httpRequest.params

    const star = await this.addStarService.execute({ solutionId, value })

    return ok(star)
  }
}
