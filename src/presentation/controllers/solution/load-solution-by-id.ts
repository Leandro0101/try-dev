import { ILoadSolutionByIdUseCase } from '@domain/usecases'
import { ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'

export class LoadSolutionByIdController implements IController {
  constructor (private readonly loadSolutionByIdService: ILoadSolutionByIdUseCase) {}
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const solution = await this.loadSolutionByIdService.execute(httpRequest.params.id)

    return ok(solution)
  }
}
