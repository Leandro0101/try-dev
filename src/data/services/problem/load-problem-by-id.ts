import { ILoadProblemByIdUseCase } from '@domain/usecases'
import { TReturnProblemDTO } from '../../dtos'
import { ILoadProblemByIdRepository } from '../../repositories'
import { userWithoutPassword } from '../utils/user-without-password'

export class LoadProblemByIdService implements ILoadProblemByIdUseCase {
  constructor (private readonly loadProblemByIdRepository: ILoadProblemByIdRepository) {}
  async execute (problemId: string): Promise<TReturnProblemDTO> {
    const { user, ...problem } = await this.loadProblemByIdRepository.execute(problemId)

    if (!problem) return null

    const newProblem = Object.assign(problem, { user: userWithoutPassword(user) })

    return newProblem
  }
}
