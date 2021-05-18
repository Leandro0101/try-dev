import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeEditSolutionController } from '../../factories/controllers'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'

export const editSolutionRoute = (router: Router): void => {
  router.put('/solutions/:solutionId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeEditSolutionController()))
}
