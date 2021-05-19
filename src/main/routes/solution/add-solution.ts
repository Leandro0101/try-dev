import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeAddSolutionController } from '../../factories/controllers'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'

export const addSolutionRoute = (router: Router): void => {
  router.post('/solutions/:problemId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddSolutionController()))
}
