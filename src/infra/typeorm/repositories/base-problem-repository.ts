import { EntityRepository, Repository } from 'typeorm'
import { ProblemModel } from '@infra/typeorm/models'

@EntityRepository(ProblemModel)
export class BaseProblemRepository extends Repository<ProblemModel> {}
