import { IProblemEntity } from '@domain/entities'
import { ILoadProblemsByUserUseCase } from '@domain/usecases'
import { ILoadProblemsByUserRepository } from '../../repositories'

export class LoadProblemsByUserService implements ILoadProblemsByUserUseCase {
  constructor (private readonly loadProblemsByUserRepository: ILoadProblemsByUserRepository) {}
  async execute (userId: string, skip: number): Promise<IProblemEntity[]> {
    const problems = await this.loadProblemsByUserRepository.execute(userId, skip)

    return problems
  }
}
