import { IProblemEntity } from '@domain/entities'
import { IMostPopularProblemsUseCase, IParamsToLoading } from '@domain/usecases'
import { IMostPopularProblemsRepository } from '../../repositories'

export class MostPopularProblemsService implements IMostPopularProblemsUseCase {
  constructor (
    private readonly mostPopularProblems: IMostPopularProblemsRepository) {}

  async execute (paramsToLoading: IParamsToLoading): Promise<IProblemEntity[]> {
    const problems = await this.mostPopularProblems.execute(paramsToLoading)

    return problems
  }
}
