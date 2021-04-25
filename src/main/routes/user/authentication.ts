import { Router } from 'express'
import { makeAuthenticationController } from '../../factories/controllers'
import { adaptRoute } from '../../adapters/express-router'

export const authenticationRoute = (router: Router): void => {
  router.post('/auth', adaptRoute(makeAuthenticationController()))
}
