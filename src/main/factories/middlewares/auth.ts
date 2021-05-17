import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { AuthMiddleware } from '@presentation/middlewares/authentication'

export const makeAuthMiddleware = (): AuthMiddleware => {
  return new AuthMiddleware(new JWTAdapter())
}
