import { IController, IHttpRequest, IHttpResponse } from '../../protocols'
import { IMostPopularProblemsUseCase } from '@domain/usecases'
import { ok } from '../../helpers/http'

export class MostPopularProblemsController implements IController {
  constructor (
    private readonly mostPopularProblems: IMostPopularProblemsUseCase) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { intervalInit, intervalFinal } = httpRequest.body
    const { page } = httpRequest.query
    const problems = await this.mostPopularProblems.execute({
      skip: page,
      intervalInit: Number(intervalInit),
      intervalFinal: Number(intervalFinal)
    })

    return ok(problems)
  }
}
