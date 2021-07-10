import { EditProblemController } from '@presentation/controllers'
import { makeEditProblemValidations } from '../../validations'
import { makeEditProblemService } from '../../services'
import { IController } from '@presentation/protocols'
import { LogControllerDecorator } from '@/src/main/decorators/log'
import { AddLogErrorRepository } from '@infra/typeorm/repositories'

export const makeEditProblemController = (): IController => {
  const controller = new EditProblemController(makeEditProblemService(), makeEditProblemValidations())
  return new LogControllerDecorator(controller, new AddLogErrorRepository())
}
