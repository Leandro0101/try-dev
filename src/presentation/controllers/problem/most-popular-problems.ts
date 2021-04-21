import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'
import { IMostPopularProblemsUseCase } from '@domain/usecases'
import { badRequest, ok } from '../../helpers/http'

export class MostPopularProblemsController implements IController {
  constructor (
    private readonly mostPopularProblems: IMostPopularProblemsUseCase,
    private readonly validations: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { intervalInit, intervalFinal } = httpRequest.body
    const { page } = httpRequest.query
    const error = this.validations.validate({ intervalInit, intervalFinal, page })

    if (error) return badRequest(error)

    const problems = await this.mostPopularProblems.execute({
      skip: Number(page),
      intervalInit: Number(intervalInit),
      intervalFinal: Number(intervalFinal)
    })

    return ok(problems)
  }
}
