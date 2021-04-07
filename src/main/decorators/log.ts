import { IAddLogErrorRepository } from '@data/repositories'
import { IHttpRequest, IHttpResponse, IController } from '@presentation/protocols'

export class LogControllerDecorator implements IController {
  constructor (
    private readonly controller: IController,
    private readonly addLogErrorRepository: IAddLogErrorRepository
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const httpResponse: IHttpResponse = await this.controller.handle(httpRequest)

    if (httpResponse.statusCode === 500) {
      await this.addLogErrorRepository.execute(httpResponse.body.stack)
    }

    return httpResponse
  }
}
