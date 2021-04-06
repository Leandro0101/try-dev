import { Router } from 'express'
import { adaptRoute } from '../../adapters/express-router'
import { makeMarkProblemAsResolvedController } from '../../factories/controllers'

export const markProblemAsResolvedRoute = (router: Router): void => {
  router.patch('/problems/:problemId', adaptRoute(makeMarkProblemAsResolvedController()))
}
