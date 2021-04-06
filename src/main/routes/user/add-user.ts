import { Router } from 'express'
import { makeAddUserController } from '../../factories/controllers'
import { adaptRoute } from '../../adapters/express-router'

export const addUserRoute = (router: Router): void => {
  router.post('/users', adaptRoute(makeAddUserController()))
}
