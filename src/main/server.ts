import 'reflect-metadata'
import { connect } from '@infra/typeorm/helpers/typeorm'
import app from './config/app'
connect().then(async () => {
  app.listen(3000, () => console.log('RODANDOoooo'))
}).catch(error => {
  console.log('OCRREU Um EdsdfdsfRRO')
  console.log(error)
})
