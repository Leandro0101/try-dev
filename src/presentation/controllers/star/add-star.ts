import { IAddStarUseCase } from '@domain/usecases'
import { AlreadyGivenStarError, ResourceNotFoundError } from '../../errors'
import { badRequest, forbidden, notFound, ok, serverError } from '../../helpers/http'
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

      const response = await this.addStarService.execute({
        userId, solutionId, value
      })

      const { content, failValidations: fail } = response
      if (fail) {
        if (fail.userOrSolutionNonexistent) {
          return notFound(new ResourceNotFoundError('solution ou user'))
        }

        if (fail.userAlreadyGivedStar) return forbidden(new AlreadyGivenStarError())
      }

      return ok(content)
    } catch (error) {
      return serverError(error)
    }
  }
}
