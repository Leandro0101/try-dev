import { makeEditProblemController } from '../../factories/controllers'
import { adaptRoute } from '../../adapters/express-router'
import { Router } from 'express'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'
import { adaptMiddleware } from '../../adapters/express-middleware'

export const editProblemRoute = (router: Router): void => {
  router.put('/problems/:problemId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeEditProblemController()))
}
