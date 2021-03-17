import { connect } from '../infra/typeorm/helpers/typeorm'

connect().then(async () => {
  console.log('APP iniciou')
}).catch(error => {
  console.log('OCORREU Um ERRO')
  console.log(error)
})
