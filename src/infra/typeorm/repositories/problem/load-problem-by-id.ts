import { ILoadProblemByIdRepository } from '@data/repositories'
import { IProblemEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../base-problem-repository'
import { BaseSolutionRepository } from '../base-solution-repository'

export class LoadProblemByIdRepository implements ILoadProblemByIdRepository {
  async execute (id: string): Promise<IProblemEntity> {
    const baseProblemRepository = getCustomRepository(BaseProblemRepository)
    const baseSolutionRepository = getCustomRepository(BaseSolutionRepository)

    const problem = await baseProblemRepository.findOne({ where: { id }, relations: ['user'] })
    const solutions = await baseSolutionRepository.find({ where: { problem: id }, take: 15 })

    problem.solutions = solutions

    return problem
  }
}
