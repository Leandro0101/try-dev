import { connect } from './infra/typeorm/helpers/typeorm'
import 'reflect-metadata'
import { AddUserService, LoadUserByEmailService } from '@data/services'
import { IAddUserUseCase, ILoadUserByEmailUseCase } from '@domain/usecases'
import { IAddUserRepository, ILoadUserByEmailRepository } from '@data/repositories'
import { AddUserRepository, LoadUserByEmailRepository } from '@infra/repositories'

connect().then(async () => {
  const addUserRepository: IAddUserRepository = new AddUserRepository()
  const loadUserByEmailRepository: ILoadUserByEmailRepository = new LoadUserByEmailRepository()
  const addUserService: IAddUserUseCase = new AddUserService(addUserRepository, new LoadUserByEmailService(loadUserByEmailRepository))
  const user = await addUserService.execute({ name: 'leandro', email: 'leansdro@gmail.com', password: 'senhashow' })

  // const loadUserByEmailRepository: ILoadUserByEmailRepository = new LoadUserByEmailRepository()
  // const loadUserByEmailService: ILoadUserByEmailUseCase = new LoadUserByEmailService(loadUserByEmailRepository)
  // const user = await loadUserByEmailService.execute('leandro@dgmail.com')
  console.log(user)
  console.log('APP initiaadasadzed')
}).catch(error => {
  console.log('OCORREU UdasM ERRO')
  console.log(error)
})
