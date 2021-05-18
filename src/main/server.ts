import 'reflect-metadata'
import { connect } from '@infra/typeorm/helpers/typeorm'
import app from './config/app'
connect().then(async () => {
  app.listen(3000, () => console.log('RODAND10O'))
}).catch(error => {
  console.log('OCORREU Um ERRRO')
  console.log(error)
})
