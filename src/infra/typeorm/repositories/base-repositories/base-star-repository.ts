import { EntityRepository, Repository } from 'typeorm'
import { StarModel } from '@infra/typeorm/models'

@EntityRepository(StarModel)
export class BaseStarRepository extends Repository<StarModel> {}
