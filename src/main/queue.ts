/* eslint-disable @typescript-eslint/no-floating-promises */
import { queueSystem } from '../infra/queue-system-bull/bull'
import { connect } from '../infra/typeorm/helpers/typeorm'
import { makeSendAccountVerificationEmailService } from './factories/services'

connect().then(async () => {
}).catch(error => {
  console.log('OCORREU Um ERRO')
  console.log(error)
})
const jobs = new Map()

jobs.set('sendAccountEmailVerificationQueue', makeSendAccountVerificationEmailService())

queueSystem.process(jobs)
