import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeRemoveSolutionController } from '../../factories/controllers'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'

export const removeSolutionRoute = (router: Router): void => {
  router.delete('/solutions/:solutionId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeRemoveSolutionController()))
}
