import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeSendAccountVerificationEmailController } from '../../factories/controllers'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'

export const verificationEmailRoute = (router: Router): void => {
  router.post('/verification-email', adaptMiddleware(makeAuthMiddleware('PENDING')), adaptRoute(makeSendAccountVerificationEmailController()))
}
