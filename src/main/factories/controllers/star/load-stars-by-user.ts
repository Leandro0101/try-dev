import { LoadStarsByUserController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeLoadStarsByUserService } from '../../services'
import { makeLoadStarsByUserValidation } from '../../validations'

export const makeLoadStarsByUserController = (): IController => {
  return new LoadStarsByUserController(makeLoadStarsByUserService(), makeLoadStarsByUserValidation())
}
