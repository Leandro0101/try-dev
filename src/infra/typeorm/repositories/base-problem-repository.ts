import { EntityRepository, Repository } from 'typeorm'
import { ProblemModel } from '@data/models'

@EntityRepository(ProblemModel)
export class BaseProblemRepository extends Repository<ProblemModel> {}
