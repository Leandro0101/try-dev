import { IProblemEntity } from '@domain/entities'
import { IMostPopularProblemsUseCase, IParamsToLoading } from '@domain/usecases'
import { IMostPopularProblemsRepository } from '../../repositories'

export class MostPopularProblemsService implements IMostPopularProblemsUseCase {
  constructor (
    private readonly mostPopularProblems: IMostPopularProblemsRepository) {}

  async execute (paramsToLoading: IParamsToLoading): Promise<IProblemEntity[]> {
    const { intervalFinal, intervalInit, skip } = paramsToLoading

    if (!intervalInit && !intervalFinal) {
      const currentyYear = new Date().getFullYear()
      const problems = await this.mostPopularProblems.withYearLessOrEqualThan(
        currentyYear, skip)

      return problems
    }

    if (intervalInit && intervalFinal) {
      return await this.mostPopularProblems.withYearIntervalBetween(paramsToLoading)
    }

    if (!intervalFinal) {
      return await this.mostPopularProblems.withYearGreaterOrEqualThan(intervalInit, skip)
    }

    if (!intervalInit) {
      return await this.mostPopularProblems.withYearLessOrEqualThan(intervalFinal, skip)
    }
  }
}
