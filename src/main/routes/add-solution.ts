import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router'
import { makeAddSolutionController } from '../factories/controllers'

export default (router: Router): void => {
  router.post('/solutions/:userId/:problemId', adaptRoute(makeAddSolutionController()))
}