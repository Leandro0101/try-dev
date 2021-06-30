import { ICreateProblemDTO, ICreateSolutionDTO, ICreateStarDTO, ICreateUserDTO } from '@data/dtos'
import { LoadUserByEmailRepository } from '../repositories'
import bcrypt from 'bcrypt'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../repositories/base-repositories/base-problem-repository'
import { BaseUserRepository } from '../repositories/base-repositories/base-user-repository'
import { BaseSolutionRepository } from '../repositories/base-repositories/base-solution-repository'

const randomNumber = (limit: number): number => {
  return Math.floor(Math.random() * limit)
}

export const usersFactory = async (): Promise<ICreateUserDTO[]> => [
  {
    email: 'leandrolima@gmail.com',
    name: 'Leandro Lima',
    password: await bcrypt.hash('lean21@20', 10)
  },
  {
    email: 'vitorlucas@gmail.com',
    name: 'Vitor Lucas',
    password: await bcrypt.hash('vit21@20', 10)
  },
  {
    email: 'josewilker@gmail.com',
    name: 'Jose Wilker',
    password: await bcrypt.hash('jose21@20', 10)
  },
  {
    email: 'andrewmonteiro@gmail.com',
    name: 'Andrew Monteiro',
    password: await bcrypt.hash('and21@20', 10)
  },
  {
    email: 'jaovitu@gmail.com',
    name: 'João Victor',
    password: await bcrypt.hash('jao21@20', 10)
  }
]

export const problemsFactory = async (): Promise<ICreateProblemDTO[]> => {
  const users = await usersFactory()
  const problems = []
  let i = 0
  while (i < 20) {
    problems.push({
      user: await new LoadUserByEmailRepository().execute(users[randomNumber(5)].email),
      title: `Problema: lógica de programação ${i + 1}`,
      description: 'Essa é a descrição do problema de lógica de programação'
    })
    i++
  }
  return problems
}

export const solutionsFactory = async (): Promise<ICreateSolutionDTO[]> => {
  const users = await usersFactory()
  const baseRepository = getCustomRepository(BaseProblemRepository)
  const problems = await baseRepository.find()
  const solutions = []
  let i = 0
  while (i < 190) {
    solutions.push({
      user: await new LoadUserByEmailRepository().execute(users[randomNumber(5)].email),
      problem: problems[randomNumber(20)],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    })
    i++
  }
  return solutions
}

export const starsFactory = async (): Promise<ICreateStarDTO[]> => {
  const baseSolutionRepository = getCustomRepository(BaseSolutionRepository)
  const baseUserRepository = getCustomRepository(BaseUserRepository)
  const solutions = await baseSolutionRepository.find()
  const users = await baseUserRepository.find()
  const stars = []
  let i = 0
  while (i < 17000) {
    stars.push({
      solution: solutions[randomNumber(190)],
      user: users[randomNumber(5)],
      value: randomNumber(5)
    })
    i++
  }
  return stars
}
