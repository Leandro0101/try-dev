import { IUserEntity } from '@domain/entities'
import { ILoadUserByIdUseCase } from '@domain/usecases'
import { ILoadUserByIdRepository } from '../../repositories'

export class LoadUserByIdService implements ILoadUserByIdUseCase {
  constructor (private readonly loadUserByIdRepository: ILoadUserByIdRepository) {}

  async execute (userId: string): Promise<Omit<IUserEntity, 'password'>> {
    const { password, ...foundUser } = await this.loadUserByIdRepository.execute(userId)

    if (!foundUser) return null

    return foundUser
  }
}
