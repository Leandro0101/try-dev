import { IProblemEntity, ISolutionEntity } from '@domain/entities'
import { IAddSolutionToProblemRepository } from '@data/repositories'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../base-problem-repository'

export class AddSolutionToProblemRepository implements IAddSolutionToProblemRepository {
  async execute (solution: ISolutionEntity, problem: IProblemEntity): Promise<void> {
    const baseRepository = getCustomRepository(BaseProblemRepository)
    problem.solutions = [solution]
    await baseRepository.save(problem)
  }
}
