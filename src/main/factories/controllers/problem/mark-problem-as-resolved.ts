import { AddLogErrorRepository } from '@infra/typeorm/repositories'
import { LogControllerDecorator } from '../../../decorators/log'
import { MarkProblemAsResolvedController } from '@presentation/controllers'
import { IController } from '@presentation/protocols'
import { makeMarkProblemAsResolvedService } from '../../services'
import { makeMarkProblemAsResolvedValidation } from '../validations'

export const makeMarkProblemAsResolvedController = (): IController => {
  const markProblemAsResolvedController = new MarkProblemAsResolvedController(
    makeMarkProblemAsResolvedService(), makeMarkProblemAsResolvedValidation())

  return new LogControllerDecorator(markProblemAsResolvedController, new AddLogErrorRepository())
}
