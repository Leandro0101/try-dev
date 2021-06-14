import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeVerifyEmailController } from '../../factories/controllers/user/verify-email'

export const verificationRoute = (router: Router): void => {
  router.get('/verification/:token', adaptRoute(makeVerifyEmailController()))
}
