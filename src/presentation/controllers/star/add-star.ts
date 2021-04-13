import { IAddStarUseCase } from '@domain/usecases'
import { AlreadyGivenStarError, ResourceNotFoundError } from '../../errors'
import { badRequest, forbidden, ok, serverError } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '../../protocols'

export class AddStarController implements IController {
  constructor (
    private readonly addStarService: IAddStarUseCase,
    private readonly validation: IValidation) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { value } = httpRequest.query
      const { solutionId, userId } = httpRequest.params
      const error = this.validation.validate({ value, solutionId })

      if (error) return badRequest(error)

      const { content, failValidations } = await this.addStarService.execute({
        userId, solutionId, value
      })

      if (failValidations) {
        if (failValidations.userOrSolutionNonexistent) {
          return forbidden(new ResourceNotFoundError('solution ou user'))
        }

        if (failValidations.userAlreadyGivedStar) return forbidden(new AlreadyGivenStarError())
      }

      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
