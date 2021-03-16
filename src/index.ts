import { connect } from './infra/typeorm/helpers/typeorm'
import 'reflect-metadata'

connect().then(() => {
  console.log('database connected')
}).catch(error => {
  console.log('OCORREU UM ERRO')
  console.log(error)
})
