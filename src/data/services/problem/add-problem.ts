import {
  IAddProblemUseCase,
  ICreateProblemModel
} from '@domain/usecases'

import { TReturnProblemDTO } from '@data/dtos'
import { IAddProblemRepository, ILoadUserByIdRepository } from '../../repositories'

export class AddProblemService implements IAddProblemUseCase {
  constructor (
    private readonly addProblemRepository: IAddProblemRepository,
    private readonly loadUserByIdRepository: ILoadUserByIdRepository) {}

  async execute (problemData: ICreateProblemModel): Promise<TReturnProblemDTO> {
    const loadedUser = await this.loadUserByIdRepository.execute(problemData.userId)
    const { title, description } = problemData.fields

    if (!loadedUser) return null

    const { solutions, user, ...problem } = await this.addProblemRepository.execute(
      { title, description, user: loadedUser }
    )

    return problem
  }
}
