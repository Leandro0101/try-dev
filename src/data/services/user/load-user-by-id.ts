import { IUserEntity } from '@domain/entities'
import { ILoadUserByIdUseCase } from '@domain/usecases'
import { ILoadUserByIdRepository } from '../../repositories'

export class LoadUserByIdService implements ILoadUserByIdUseCase {
  constructor (private readonly loadUserByIdRepository: ILoadUserByIdRepository) {}

  async execute (userId: string): Promise<IUserEntity> {
    const foundUser = await this.loadUserByIdRepository.execute(userId)

    return foundUser
  }
}
