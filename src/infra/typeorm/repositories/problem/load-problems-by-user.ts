import { IProblemEntity } from '@domain/entities'
import { ILoadProblemsByUserRepository } from '@data/repositories'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../base-problem-repository'

export class LoadProblemsByUserRepository implements ILoadProblemsByUserRepository {
  async execute (userId: string, skip: number): Promise<IProblemEntity[]> {
    const baseRepository = getCustomRepository(BaseProblemRepository)
    const take = 15
    const problems = await baseRepository.find({ where: { user: userId }, skip: (skip - 1) * take, take })

    return problems
  }
}
