import { EntityRepository, Repository } from 'typeorm'
import { StarModel } from '@data/models'

@EntityRepository(StarModel)
export class BaseStarRepository extends Repository<StarModel> {}
