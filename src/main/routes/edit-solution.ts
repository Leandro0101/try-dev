import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router'
import { makeEditSolutionController } from '../factories/controllers'

export default (router: Router): void => {
  router.put('/solutions/:solutionId', adaptRoute(makeEditSolutionController()))
}
