import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { AuthMiddleware } from '@presentation/middlewares/authentication'

export const makeAuthMiddleware = (): AuthMiddleware => {
  return new AuthMiddleware(new JWTAdapter(), '875024b6-01d6-4c03-8486-429abe4715d9')
}
