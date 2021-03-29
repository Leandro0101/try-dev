import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router'
import { makeLoadSolutionByIdController } from '../factories/controllers'

export default (router: Router): void => {
  router.get('/solutions/:id', adaptRoute(makeLoadSolutionByIdController()))
}
