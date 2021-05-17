import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeLoadUserByIdController } from '../../factories/controllers'
import { makeAuthMiddleware } from '../../factories/middlewares/auth'

export const loadUserByIdRoute = (router: Router): void => {
  router.get('/users/:id', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeLoadUserByIdController()))
}
