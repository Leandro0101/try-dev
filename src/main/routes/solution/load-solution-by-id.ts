import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeLoadSolutionByIdController } from '../../factories/controllers'

export const loadSolutionByIdRoute = (router: Router): void => {
  router.get('/solutions/:id', adaptRoute(makeLoadSolutionByIdController()))
}
