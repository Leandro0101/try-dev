import { IController } from '@presentation/protocols'
import { AddStarController } from '@presentation/controllers'
import { makeAddStarService } from '../../services'

export const makeAddStarController = (): IController => {
  return new AddStarController(makeAddStarService())
}
