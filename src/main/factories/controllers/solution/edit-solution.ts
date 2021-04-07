import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '../../../decorators/log'
import { EditSolutionController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeEditSolutionService } from '../../services'
import { makeEditSolutionValidations } from '../validations'

export const makeEditSolutionController = (): IController => {
  const editSolutionController = new EditSolutionController(
    makeEditSolutionService(), makeEditSolutionValidations())

  return new LogControllerDecorator(editSolutionController, new AddLogErrorRepository())
}
