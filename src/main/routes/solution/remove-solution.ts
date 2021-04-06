import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeRemoveSolutionController } from '../../factories/controllers'

export const removeSolutionRoute = (router: Router): void => {
  router.delete('/solutions/:solutionId', adaptRoute(makeRemoveSolutionController()))
}
