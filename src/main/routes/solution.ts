import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware'
import { adaptRoute } from '../adapters/express-router'
import {
  makeAddSolutionController, makeEditSolutionController,
  makeLoadSolutionByIdController, makeMostPopularSolutionsController,
  makeRemoveSolutionController
} from '../factories/controllers'
import { makeAuthMiddleware } from '../factories/middlewares/auth'

export default (router: Router): void => {
  router.post('/solutions/:problemId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddSolutionController()))
  router.put('/solutions/:solutionId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeEditSolutionController()))
  router.get('/solutions/:id', adaptRoute(makeLoadSolutionByIdController()))
  router.get('/problems/:problemId/solutions', adaptRoute(makeMostPopularSolutionsController()))
  router.delete('/solutions/:solutionId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeRemoveSolutionController()))
}
