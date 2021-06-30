import { EntityRepository, Repository } from 'typeorm'
import { LogModel } from '@infra/typeorm/models'

@EntityRepository(LogModel)
export class BaseLogRepository extends Repository<LogModel> {}
