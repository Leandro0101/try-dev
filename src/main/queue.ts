import 'dotenv/config'
import Queue from '../infra/redis/queue'
import SendAccountVerificationEmail from '../data/jobs/send-account-verification-email'
Queue.process(SendAccountVerificationEmail.handle)
