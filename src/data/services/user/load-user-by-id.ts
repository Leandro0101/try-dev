import { IUserEntity } from '@domain/entities'
import { ILoadUserByIdUseCase } from '@domain/usecases'
import { ILoadUserByIdRepository } from '../../repositories'

export class LoadUserByIdService implements ILoadUserByIdUseCase {
  constructor (private readonly loadUserByIdRepository: ILoadUserByIdRepository) {}

  async execute (userId: string): Promise<IUserEntity> {
    if (!userId) {
      throw new Error('Id must be provider')
    }

    const foundUser = await this.loadUserByIdRepository.execute(userId)

    return foundUser
  }
}
