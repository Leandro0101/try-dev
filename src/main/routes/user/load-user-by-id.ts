import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeLoadUserByIdController } from '../../factories/controllers'

export const loadUserByIdRoute = (router: Router): void => {
  router.get('/users/:id', adaptRoute(makeLoadUserByIdController()))
}
