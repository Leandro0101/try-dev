import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware'
import { adaptRoute } from '../adapters/express-router'
import {
  makeAddProblemController, makeEditProblemController,
  makeLoadProblemByIdController, makeLoadProblemsByUserController,
  makeMarkProblemAsResolvedController, makeMostPopularProblemsController
} from '../factories/controllers'

import { makeAuthMiddleware } from '../factories/middlewares/auth'

export default (router: Router): void => {
  router.post('/problems', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddProblemController()))
  router.put('/problems/:problemId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeEditProblemController()))
  router.get('/problems/:id', adaptRoute(makeLoadProblemByIdController()))
  router.get('/users/:userId/problems', adaptRoute(makeLoadProblemsByUserController()))
  router.patch('/problems/:problemId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeMarkProblemAsResolvedController()))
  router.get('/problems', adaptRoute(makeMostPopularProblemsController()))
}
