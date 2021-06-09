import { EntityRepository, Repository } from 'typeorm'
import { ProblemModel } from '@/src/infra/typeorm/models'

@EntityRepository(ProblemModel)
export class BaseProblemRepository extends Repository<ProblemModel> {}
