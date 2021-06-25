require('dotenv/config')
export const queueConfig = {
  queueKeys: ['createAccount', 'sendAccountEmailVerificationQueue'],
  redis: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT)
  }
}
