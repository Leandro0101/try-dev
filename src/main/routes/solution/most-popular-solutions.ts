import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeMostPopularSolutionsController } from '../../factories/controllers'

export const mostPopularSolutionsRoute = (router: Router): void => {
  router.get('/solutions', adaptRoute(makeMostPopularSolutionsController()))
}
