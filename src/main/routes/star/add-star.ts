import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeAddStarController } from '../../factories/controllers'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'

export const addStarRoute = (router: Router): void => {
  router.post('/stars/:userId/:solutionId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddStarController()))
}
