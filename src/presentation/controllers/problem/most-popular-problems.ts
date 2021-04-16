import { IController, IHttpRequest, IHttpResponse } from '../../protocols'
import { IMostPopularProblemsUseCase } from '@domain/usecases'
import { ok } from '../../helpers/http'

export class MostPopularProblemsController implements IController {
  constructor (
    private readonly mostPopularProblems: IMostPopularProblemsUseCase) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { year } = httpRequest.body
    const { page } = httpRequest.query
    const problems = await this.mostPopularProblems.execute(page, Number(year))

    return ok(problems)
  }
}
