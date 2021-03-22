import { EntityRepository, Repository } from 'typeorm'
import { SolutionModel } from '@data/models'

@EntityRepository(SolutionModel)
export class BaseSolutionRepository extends Repository<SolutionModel> {}
