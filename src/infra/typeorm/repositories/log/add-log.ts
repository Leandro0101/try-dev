import { IAddLogErrorRepository } from '@data/repositories'
import { LogModel } from '@data/models'
import { BaseLogRepository } from '../base-log-repository'
import { getCustomRepository } from 'typeorm'

export class AddLogRepository implements IAddLogErrorRepository {
  async execute (stack: string): Promise<void> {
    const baseRepository = getCustomRepository(BaseLogRepository)
    const log = new LogModel({ stack })

    await baseRepository.save(log)
  }
}
