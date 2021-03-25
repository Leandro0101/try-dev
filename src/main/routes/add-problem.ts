import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router'
import { makeAddProblemController } from '../factories/controllers'

export default (router: Router): void => {
  router.post('/problems/:userId', adaptRoute(makeAddProblemController()))
}
