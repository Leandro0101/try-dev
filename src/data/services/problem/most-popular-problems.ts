import { IProblemEntity } from '@domain/entities'
import { IMostPopularProblemsUseCase } from '@domain/usecases'
import { IMostPopularProblemsRepository } from '../../repositories'

export class MostPopularProblemsService implements IMostPopularProblemsUseCase {
  constructor (
    private readonly mostPopularProblems: IMostPopularProblemsRepository) {}

  async execute (skip: number, year: number): Promise<IProblemEntity[]> {
    if (!year) {
      year = new Date().getFullYear()
    }
    const problems = await this.mostPopularProblems.execute(skip, year)

    return problems
  }
}
