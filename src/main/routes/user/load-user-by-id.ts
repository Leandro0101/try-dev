import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { AuthMiddleware } from '@presentation/middlewares/authentication'
import { Router } from 'express'
import { adaptMiddleware } from '../../adapters/express-middleware'
import { adaptRoute } from '../../adapters/express-router'
import { makeLoadUserByIdController } from '../../factories/controllers'

export const loadUserByIdRoute = (router: Router): void => {
  router.get('/users/:id', adaptMiddleware(new AuthMiddleware(new JWTAdapter())), adaptRoute(makeLoadUserByIdController()))
}
