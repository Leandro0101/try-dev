import { IReturnProblemDTO } from '@data/dtos'
import { ILoadOneProblemByUserRepository } from '@data/repositories'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../base-problem-repository'

export class LoadOneProblemByUserRepository implements ILoadOneProblemByUserRepository {
  async execute (userId: string, problemId: string): Promise<IReturnProblemDTO> {
    const baseRepository = getCustomRepository(BaseProblemRepository)
    const problem = await baseRepository.find({ where: { id: problemId, user_id: userId } })

    return { problem: problem[0] }
  }
}
