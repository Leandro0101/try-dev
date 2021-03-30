import { ILoadUserByIdUseCase, IAddProblemUseCase, ICreateProblemModel } from '@domain/usecases'

import { TReturnProblemDTO } from '@data/dtos'
import { IAddProblemRepository } from '../../repositories'
import { userWithoutPassword } from '../utils/user-without-password'

export class AddProblemService implements IAddProblemUseCase {
  constructor (private readonly addProblemRepository: IAddProblemRepository, private readonly loadUserByIdService: ILoadUserByIdUseCase) {}

  async execute (problemData: ICreateProblemModel): Promise<TReturnProblemDTO> {
    const loadedUser = await this.loadUserByIdService.execute(problemData.userId)
    const { title, description } = problemData.fields

    if (!loadedUser) return null

    const { user, ...createdProblem } = await this.addProblemRepository.execute(
      { title, description, user: loadedUser }
    )

    const newProblem = Object.assign(createdProblem, {
      user: userWithoutPassword(user)
    })

    return newProblem
  }
}
