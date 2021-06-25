/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { sendAccountEmailVerificationQueue, queueSystem } from '../infra/job-queues/bull'
import { connect } from '../infra/typeorm/helpers/typeorm'
connect().then(async () => {
}).catch(error => {
  console.log('OCORREU Um ERRO')
  console.log(error)
})

// const doSomething = async (data: any): Promise<any> => {
//   const { email, name, password } = data as ICreateUserDTO
//   await new AddUserRepository().execute({
//     email, name, password
//   })
//   console.log({ data })
//   return data
// }

// const myFirstQueue = new Bull('my-first-queue', {
//   redis: {
//     host: 'redis',
//     port: 6379
//   }
// })

// myFirstQueue.add({
//   name: 'leandro legal',
//   email: 'teste@gmail.com',
//   password: 'senha legal'
// })

// myFirstQueue.process(async (job) => {
//   doSomething(job.data).then(data => {
//     return data
//   })
// })

queueSystem.process()

// Define a local completed event
sendAccountEmailVerificationQueue.on('completed', (job, result) => {
  console.log(`Job completed with result ${result}`)
})
