import { makeLoadProblemsByUserController } from '../../factories/controllers'
import { adaptRoute } from '../../adapters/express-router'
import { Router } from 'express'

export const loadProblemsByUserRoute = (router: Router): void => {
  router.get('/users/:userId/problems', adaptRoute(makeLoadProblemsByUserController()))
}
