import { EntityRepository, Repository } from 'typeorm'
import { LogModel } from '@data/models'

@EntityRepository(LogModel)
export class BaseLogRepository extends Repository<LogModel> {}
