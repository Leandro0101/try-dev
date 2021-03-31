import {
  ILoadUserByIdUseCase, IAddProblemUseCase,
  ICreateProblemModel
} from '@domain/usecases'

import { TReturnProblemDTO } from '@data/dtos'
import { IAddProblemRepository } from '../../repositories'

export class AddProblemService implements IAddProblemUseCase {
  constructor (
    private readonly addProblemRepository: IAddProblemRepository,
    private readonly loadUserByIdService: ILoadUserByIdUseCase) {}

  async execute (problemData: ICreateProblemModel): Promise<TReturnProblemDTO> {
    const loadedUser = await this.loadUserByIdService.execute(problemData.userId)
    const { title, description } = problemData.fields

    if (!loadedUser) return null

    const { solutions, user, ...problem } = await this.addProblemRepository.execute(
      { title, description, user: loadedUser }
    )

    return problem
  }
}
