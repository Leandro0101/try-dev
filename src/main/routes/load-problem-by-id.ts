import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router'
import { makeLoadProblemByIdController } from '../factories/controllers/problem/load-problem-by-id'

export default (router: Router): void => {
  router.get('/problems/:id', adaptRoute(makeLoadProblemByIdController()))
}
