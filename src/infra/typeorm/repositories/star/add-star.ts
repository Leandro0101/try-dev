import { ICreateStarDTO } from '@data/dtos'
import { IStarEntity } from '@domain/entities'
import { IAddStarRepository } from '@data/repositories'
import { getCustomRepository } from 'typeorm'
import { BaseStarRepository } from '../base-star-repository'

import { StarModel } from '@data/models'

export class AddStarRepository implements IAddStarRepository {
  async execute (createStarData: ICreateStarDTO): Promise<IStarEntity> {
    const { solution, value, user } = createStarData
    const baseRepository = getCustomRepository(BaseStarRepository)
    const star: IStarEntity = new StarModel({ value, solution, user })

    await baseRepository.save(star)

    return star
  }
}
