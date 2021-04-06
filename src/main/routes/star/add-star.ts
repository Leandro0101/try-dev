import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeAddStarController } from '../../factories/controllers'

export const addStarRoute = (router: Router): void => {
  router.post('/stars/:solutionId', adaptRoute(makeAddStarController()))
}
