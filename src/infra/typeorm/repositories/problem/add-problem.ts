import { ProblemModel } from '@data/models'
import { IAddProblemRepository } from '@data/repositories'
import { ICreateProblemDTO } from '@data/dtos'
import { IProblemEntity } from '@domain/entities'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../base-problem-repository'

export class AddProblemRepository implements IAddProblemRepository {
  async execute (problemData: ICreateProblemDTO): Promise<IProblemEntity> {
    const { description, title, user } = problemData
    const problem = new ProblemModel({ description, title })

    problem.user = user

    const baseRepository = getCustomRepository(BaseProblemRepository)
    const createdProblem = await baseRepository.save(problem)

    return createdProblem
  }
}
