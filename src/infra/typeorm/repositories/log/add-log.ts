import { IAddLogErrorRepository } from '@data/repositories'
import { LogModel } from '@infra/typeorm/models'
import { BaseLogRepository } from '../base-repositories/base-log-repository'
import { getCustomRepository } from 'typeorm'

export class AddLogErrorRepository implements IAddLogErrorRepository {
  async execute (stack: string): Promise<void> {
    const baseRepository = getCustomRepository(BaseLogRepository)
    const log = new LogModel({ stack })

    await baseRepository.save(log)
  }
}
