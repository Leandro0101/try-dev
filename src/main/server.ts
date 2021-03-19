import 'reflect-metadata'
import { connect } from '@infra/typeorm/helpers/typeorm'
import app from './config/app'
connect().then(async () => {
  app.listen(3000, () => console.log('RODANDO'))
}).catch(error => {
  console.log('OCRREU Um ERRRO')
  console.log(error)
})
