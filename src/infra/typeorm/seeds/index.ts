import { getCustomRepository } from 'typeorm'
import { BaseUserRepository } from '../repositories/base-user-repository'
import { BaseProblemRepository } from '../repositories/base-problem-repository'
import { problemsFactory, solutionsFactory, usersFactory } from './factories'
import { BaseSolutionRepository } from '../repositories/base-solution-repository'
export const seeds = new Map()

seeds.set('users', async () => {
  const baseRepository = getCustomRepository(BaseUserRepository)
  await baseRepository.save(await usersFactory())
})

seeds.set('problems', async () => {
  const baseRepository = getCustomRepository(BaseProblemRepository)
  await baseRepository.save(await problemsFactory())
})

seeds.set('solutions', async () => {
  const baseRepository = getCustomRepository(BaseSolutionRepository)
  await baseRepository.save(await solutionsFactory())
})
