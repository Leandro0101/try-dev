import { connect } from './infra/typeorm/helpers/typeorm'
import 'reflect-metadata'
import { AddProblemService, AddUserService, LoadUserByEmailService, LoadUserByIdService } from '@data/services'
import { IAddUserUseCase, ILoadUserByEmailUseCase, IAddProblemUseCase, ILoadUserByIdUseCase } from '@domain/usecases'
import { IAddProblemRepository, IAddUserRepository, ILoadUserByEmailRepository, ILoadUserByIdRepository } from '@data/repositories'
import { AddUserRepository, LoadUserByEmailRepository, AddProblemRepository, LoadUserByIdRepository } from '@infra/repositories'

connect().then(async () => {
  // ADD USER
  // const addUserRepository: IAddUserRepository = new AddUserRepository()
  // const loadUserByEmailRepository: ILoadUserByEmailRepository = new LoadUserByEmailRepository()
  // const addUserService: IAddUserUseCase = new AddUserService(addUserRepository, new LoadUserByEmailService(loadUserByEmailRepository))
  // const user = await addUserService.execute({ name: 'leandro', email: 'leansdro@gmail.com', password: 'senhashow' })

  // LOAD USER BY EMAIL
  // const loadUserByEmailService: ILoadUserByEmailUseCase = new LoadUserByEmailService(loadUserByEmailRepository)
  // const user = await loadUserByEmailService.execute('leandro@dgmail.com')

  const addProblemRepository: IAddProblemRepository = new AddProblemRepository()
  const loadUserByIdRepository: ILoadUserByIdRepository = new LoadUserByIdRepository()
  const loadUserByIdService: ILoadUserByIdUseCase = new LoadUserByIdService(loadUserByIdRepository)
  const addProblemService: IAddProblemUseCase = new AddProblemService(addProblemRepository, loadUserByIdService)
  const problem = await addProblemService.execute({ fields: { title: 'big problem', description: 'problem description' }, userId: '5e872438-fa94-42f3-9f48-14e1d9fcce3b' })
  // console.log(user)
  console.log(problem)
  console.log('APP iniciou')
}).catch(error => {
  console.log('OCORREU Umds ERRO')
  console.log(error)
})
