import { IController, IHttpRequest, IHttpResponse } from '../../protocols'
import { IMostPopularProblemsUseCase } from '@domain/usecases'
import { ok } from '../../helpers/http'

export class MostPopularProblemsController implements IController {
  constructor (
    private readonly mostPopularProblems: IMostPopularProblemsUseCase) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const problems = await this.mostPopularProblems.execute(1)

    return ok(problems)
  }
}
