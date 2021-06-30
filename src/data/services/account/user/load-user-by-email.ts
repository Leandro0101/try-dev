import { IUserEntity } from '@domain/entities'
import { ILoadUserByEmailUseCase } from '@domain/usecases'
import { ILoadUserByEmailRepository } from '../../../repositories'

export class LoadUserByEmailService implements ILoadUserByEmailUseCase {
  constructor (private readonly loadUserByEmaildRepository: ILoadUserByEmailRepository) {}

  async execute (email: string): Promise<IUserEntity> {
    const foundUser = await this.loadUserByEmaildRepository.execute(email)

    return foundUser
  }
}
