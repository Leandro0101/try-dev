import { Router } from 'express'
import { adaptRoute } from '../adapters/express-router'
import { makeMarkProblemAsResolvedController } from '../factories/controllers'

export default (router: Router): void => {
  router.patch('/problems/:problemId', adaptRoute(makeMarkProblemAsResolvedController()))
}
