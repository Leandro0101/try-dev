import { connect } from '../infra/typeorm/helpers/typeorm'
import app from './config/app'

connect().then(async () => {
  app.listen(3000, () => console.log('RODANDO'))
}).catch(error => {
  console.log('OCORREU Um ERRO')
  console.log(error)
})
