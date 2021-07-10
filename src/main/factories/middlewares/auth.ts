import { JWTAdapter } from '@infra/criptograpy/jwt-adapter'
import { AuthMiddleware } from '@presentation/middlewares/authentication'
import { makeVerifyUserStatusService } from '../services'

export const makeAuthMiddleware = (status: string = 'ACTIVE'): AuthMiddleware => {
  return new AuthMiddleware(new JWTAdapter(), process.env.AUTHENTICATION_TOKEN_KEY, makeVerifyUserStatusService(), status)
}
