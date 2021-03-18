import { Router } from 'express'
import { makeAddUserController } from '../factories/controllers/user/add-user'
import { adaptRoute } from '../adapters/express-router'
export default (router: Router): void => {
  router.post('/user', adaptRoute(makeAddUserController()))
}
