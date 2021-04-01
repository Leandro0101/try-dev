import { makeLoadProblemsByUserController } from '../factories/controllers'
import { adaptRoute } from '../adapters/express-router'
import { Router } from 'express'
export default (router: Router): void => {
  router.get('/problems/:userId/:page', adaptRoute(makeLoadProblemsByUserController()))
}
