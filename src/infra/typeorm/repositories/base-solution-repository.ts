import { EntityRepository, Repository } from 'typeorm'
import { SolutionModel } from '@/src/infra/typeorm/models'

@EntityRepository(SolutionModel)
export class BaseSolutionRepository extends Repository<SolutionModel> {}
