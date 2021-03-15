import { connect } from './infra/typeorm/helpers/typeorm'

connect().then(() => {
  console.log('database connected')
}).catch(error => {
  console.log('OCORREU UM ERRO')
  console.log(error)
})
