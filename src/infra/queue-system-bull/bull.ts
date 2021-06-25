/* eslint-disable @typescript-eslint/no-floating-promises */
import { IQueueSystem } from '@data/job-queues/protocols/queue-system'
import Bull from 'bull'
import { queueConfig } from '@/queue-config'

const queues = new Map()
queueConfig.queueKeys.forEach(key => {
  queues.set(key, new Bull(key, { redis: queueConfig.redis }))
})

class BullAdapter implements IQueueSystem {
  async process (jobs: Map<String, any>): Promise<void> {
    queues.forEach((queue, key) => {
      queue.process(job => {
        jobs.get(key).execute(job.data)
      })
    })
  }

  async add <T>(data: T, key: string): Promise<void> {
    queues.get(key).add(data)
  }
}

export const queueSystem = new BullAdapter()
