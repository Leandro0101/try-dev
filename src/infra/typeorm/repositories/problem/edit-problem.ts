import { IEditProblemRepository } from '@data/repositories'
import { IProblemEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../base-problem-repository'

export class EditProblemRepository implements IEditProblemRepository {
  async execute (problem: IProblemEntity): Promise<IProblemEntity> {
    const baseRepository = getCustomRepository(BaseProblemRepository)
    await baseRepository.save(problem)

    return problem
  }
}
