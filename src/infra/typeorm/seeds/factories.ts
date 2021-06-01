import { ICreateProblemDTO, ICreateSolutionDTO, ICreateUserDTO } from '@data/dtos'
import { LoadUserByEmailRepository } from '../repositories'
import bcrypt from 'bcrypt'
import { getCustomRepository } from 'typeorm'
import { BaseProblemRepository } from '../repositories/base-problem-repository'

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
  return [
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 1',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 2',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 3',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 4',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 5',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 6',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 7',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 8',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 9',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 10',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 11',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 12',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 13',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 14',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 15',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 16',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 17',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 18',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 19',
      description: 'Essa é a descrição do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      title: 'Problema: lógica de programação 20',
      description: 'Essa é a descrição do problema de lógica de programação'
    }
  ]
}

export const solutionsFactory = async (): Promise<ICreateSolutionDTO[]> => {
  const users = await usersFactory()
  const baseRepository = getCustomRepository(BaseProblemRepository)
  const problems = await baseRepository.find()
  return [
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[1],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[3],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[4],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[6],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[7],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[8],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[9],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[10],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[12],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[14],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[16],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[1],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[3],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[4],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[6],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[7],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[8],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[9],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[10],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[12],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[14],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[16],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[1],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[3],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[4],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[6],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[7],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[8],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[9],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[10],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[12],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[14],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[16],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[1],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[3],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[4],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[6],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[7],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[8],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[9],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[10],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[12],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[14],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[16],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[1],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[3],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[6],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[9],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[10],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[16],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[1],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[14],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[1],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[3],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[6],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[6],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[12],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[6],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[12],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[10],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[11],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[1].email),
      problem: problems[12],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[14],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[1],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[4],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[5],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[4],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[2].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[2],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[13],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[14],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[16],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[3].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[4].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[18],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[17],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[19],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[0],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }, {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[15],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    },
    {
      user: await new LoadUserByEmailRepository().execute(users[0].email),
      problem: problems[14],
      description: 'Essa é a descrição da solução do problema de lógica de programação',
      sourceCode: 'Esse é o código da solução do problema de lógica de programação'
    }]
}
