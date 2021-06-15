import { EntityRepository, Repository } from 'typeorm'
import { UserModel } from '@infra/typeorm/models/user'

@EntityRepository(UserModel)
export class BaseUserRepository extends Repository<UserModel> {}
