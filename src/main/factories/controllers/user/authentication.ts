import { AuthenticationController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeAuthenticationService } from '../../services'
import { makeAuthenticationValidations } from '../validations'

export const makeAuthenticationController = (): IController => {
  return new AuthenticationController(makeAuthenticationService(), makeAuthenticationValidations())
}
