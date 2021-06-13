import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeEmailTestController } from '../../factories/controllers/user/email-test'

export const emailRoute = (router: Router): void => {
  router.post('/email', adaptRoute(makeEmailTestController()))
}
