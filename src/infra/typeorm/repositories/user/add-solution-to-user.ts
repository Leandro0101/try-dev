import { ISolutionEntity, IUserEntity } from '@domain/entities'
import { IAddSolutionToUserRepository } from '@data/repositories'
import { BaseUserRepository } from '../base-user-repository'
import { getCustomRepository } from 'typeorm'

export class AddSolutionToUserRepository implements IAddSolutionToUserRepository {
  async execute (solution: ISolutionEntity, user: IUserEntity): Promise<void> {
    const baseRepository = getCustomRepository(BaseUserRepository)
    user.solutions = [solution]
    await baseRepository.save(user)
  }
}
