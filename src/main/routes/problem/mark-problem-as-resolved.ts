import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeMarkProblemAsResolvedController } from '../../factories/controllers'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'

export const markProblemAsResolvedRoute = (router: Router): void => {
  router.patch('/problems/:problemId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeMarkProblemAsResolvedController()))
}
