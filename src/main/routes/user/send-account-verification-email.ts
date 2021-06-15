import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeSendAccountVerificationEmailController } from '../../factories/controllers'

export const verificationEmailRoute = (router: Router): void => {
  router.post('/verification-email/:userId', adaptRoute(makeSendAccountVerificationEmailController()))
}
