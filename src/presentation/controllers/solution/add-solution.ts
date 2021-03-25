import { IAddSolutionUseCase } from '@domain/usecases'
import { ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'

export class AddSolutionController implements IController {
  constructor (private readonly addSolutionService: IAddSolutionUseCase) {}
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { userId, problemId } = httpRequest.params
    const { sourceCode, description } = httpRequest.body
    const solution = await this.addSolutionService.execute({ userId, problemId, description, sourceCode })

    return ok(solution)
  }
}
