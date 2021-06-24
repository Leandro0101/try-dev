import Bull from 'bull'
import SendAccountVerificationEmail from '../../data/jobs/send-account-verification-email'

const mailQueue = new Bull(SendAccountVerificationEmail.key, {
  redis: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT)
  }
})

export default mailQueue
