import { connect } from './infra/typeorm/helpers/typeorm'
import 'reflect-metadata'
import { IAddUserUseCase } from './domain/usecases/add-user'
import { AddUserService } from './data/services/add-user'
import { IAddUserRepository } from './data/repositories/add-user'
import { AddUserRepository } from './infra/repositories/add-user'

connect().then(async () => {
  const addUserRepository: IAddUserRepository = new AddUserRepository()
  const addUserService: IAddUserUseCase = new AddUserService(addUserRepository)
  const user = await addUserService.execute({ name: 'leandro', email: 'leandro@gmail.com', password: 'senhashow' })
  console.log(user)
  console.log('APP initiaaasadzed')
}).catch(error => {
  console.log('OCORREU UM ERRO')
  console.log(error)
})
