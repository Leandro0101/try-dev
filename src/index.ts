import { connect } from './infra/typeorm/helpers/typeorm'
import 'reflect-metadata'
import { LoadUserByEmailService } from '@data/services'
import { ILoadUserByEmailUseCase } from '@domain/usecases'
import { ILoadUserByEmailRepository } from '@data/repositories'
import { LoadUserByEmailRepository } from '@infra/repositories'

connect().then(async () => {
  // const addUserRepository: IAddUserRepository = new AddUserRepository()
  // const addUserService: IAddUserUseCase = new AddUserService(addUserRepository)
  // const user = await addUserService.execute({ name: 'leandro', email: 'leandro@gmail.com', password: 'senhashow' })
  const loadUserByEmailRepository: ILoadUserByEmailRepository = new LoadUserByEmailRepository()
  const loadUserByEmailService: ILoadUserByEmailUseCase = new LoadUserByEmailService(loadUserByEmailRepository)
  const user = await loadUserByEmailService.execute('leandro@dgmail.com')
  console.log(user)
  console.log('APP initiaadasadzed')
}).catch(error => {
  console.log('OCORREU UdasM ERRO')
  console.log(error)
})
