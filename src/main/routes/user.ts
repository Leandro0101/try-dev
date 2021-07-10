import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware'
import { adaptRoute } from '../adapters/express-router'
import {
  makeAddUserController, makeAuthenticationController,
  makeLoadUserByIdController, makeSendAccountVerificationEmailController, makeSendPasswordResetEmailController
} from '../factories/controllers'
import { makeRedefinePasswordController } from '../factories/controllers/account/login/redefine-password'

import { makeVerifyEmailController } from '../factories/controllers/account/login/verify-email'
import { makeAuthMiddleware } from '../factories/middlewares/auth'

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeAddUserController()))
  router.post('/auth', adaptRoute(makeAuthenticationController()))
  router.get('/users/:id', adaptRoute(makeLoadUserByIdController()))
  router.post('/verification-email', adaptMiddleware(makeAuthMiddleware('PENDING')), adaptRoute(makeSendAccountVerificationEmailController()))
  router.get('/verification/:token', adaptRoute(makeVerifyEmailController()))
  router.post('/send-password-reset-email/:email', adaptRoute(makeSendPasswordResetEmailController()))
  router.patch('/redefine-password/:token', adaptRoute(makeRedefinePasswordController()))
  router.post('/password-reset/:email', adaptRoute(makeSendPasswordResetEmailController()))
}
