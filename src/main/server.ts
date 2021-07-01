import 'reflect-metadata'
import { connect } from '@infra/typeorm/helpers/typeorm'
import { getConnection } from 'typeorm'
import app from './config/app'
import { seeds } from '../infra/typeorm/seeds'

connect().then(async () => {
  app.listen(3000, () => console.log('RODANDO'))
  await getConnection().runMigrations()
  // await seeds.get('users')()
  // await seeds.get('problems')()
  // await seeds.get('solutions')()
  // await seeds.get('stars')()
}).catch(error => {
  console.log('OCORREU Um ERROR')
  console.log(error)
})
