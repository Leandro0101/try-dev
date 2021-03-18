import { IAddUserUseCase } from '@/src/domain/usecases'
import { ok } from '../../helpers/http'
import { IController, IHttpRequest, IHttpResponse } from '../../protocols'

export class AddUserController implements IController {
  constructor (private readonly addUserService: IAddUserUseCase) {}
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { name, email, password } = httpRequest.body
    const user = await this.addUserService.execute({ name, email, password })

    return ok(user)
  }
}
