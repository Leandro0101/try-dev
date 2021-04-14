import { makeEditProblemController } from '../../factories/controllers'
import { adaptRoute } from '../../adapters/express-router'
import { Router } from 'express'

export const editProblemRoute = (router: Router): void => {
  router.put('/problems/:problemId', adaptRoute(makeEditProblemController()))
}
