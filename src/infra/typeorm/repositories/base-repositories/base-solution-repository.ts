import { EntityRepository, Repository } from 'typeorm'
import { SolutionModel } from '@infra/typeorm/models'

@EntityRepository(SolutionModel)
export class BaseSolutionRepository extends Repository<SolutionModel> {}
