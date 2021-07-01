import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware'
import { adaptRoute } from '../adapters/express-router'
import { makeAddStarController } from '../factories/controllers'
import { makeLoadStarsByUserController } from '../factories/controllers/star/load-stars-by-user'
import { makeAuthMiddleware } from '../factories/middlewares/auth'

export default (router: Router): void => {
  router.post('/stars/:solutionId', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddStarController()))
  router.get('/users/:userId/stars', adaptRoute(makeLoadStarsByUserController()))
}
