import { IReturnProblemDTO } from '@data/dtos'
import { IAddProblemUseCase, ICreateProblemModel, ILoadUserByIdUseCase } from '@domain/usecases'
import { IAddProblemRepository } from '../../repositories'

export class AddProblemService implements IAddProblemUseCase {
  constructor (private readonly addProblemRepository: IAddProblemRepository, private readonly loadUserByIdService: ILoadUserByIdUseCase) {}

  async execute (problemData: ICreateProblemModel): Promise<IReturnProblemDTO> {
    const loadedUser = await this.loadUserByIdService.execute(problemData.userId)
    const { title, description } = problemData.fields

    if (!loadedUser) {
      return null
    }

    const { user, ...createdProblem } = await this.addProblemRepository.execute(
      { title, description, user: loadedUser }
    )
    const { password, ...userWithoutPassword } = user

    return { problem: createdProblem, user: userWithoutPassword }
  }
}
