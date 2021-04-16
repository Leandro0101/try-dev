import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeMostPopularProblemsController } from '../../factories/controllers'

export const mostPopularProblemsRoute = (router: Router): void => {
  router.get('/problems', adaptRoute(makeMostPopularProblemsController()))
}
