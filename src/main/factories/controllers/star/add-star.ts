import { IController } from '@presentation/protocols'
import { AddStarController } from '@presentation/controllers'
import { makeAddStarService } from '../../services'
import { makeAddStarValidation } from './add-star-validation'

export const makeAddStarController = (): IController => {
  return new AddStarController(makeAddStarService(), makeAddStarValidation())
}
