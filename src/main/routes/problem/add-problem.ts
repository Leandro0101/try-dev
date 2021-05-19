import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeAddProblemController } from '../../factories/controllers'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'

export const addProblemRoute = (router: Router): void => {
  router.post('/problems', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddProblemController()))
}
