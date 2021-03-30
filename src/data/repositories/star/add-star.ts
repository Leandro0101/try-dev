import { IStarEntity } from '@domain/entities/star'
import { ICreateStarDTO } from '@data/dtos'
export interface IAddStarRepository {
  execute: (createStarData: ICreateStarDTO) => Promise<IStarEntity>
}
