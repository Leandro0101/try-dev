import { EntityRepository, Repository } from 'typeorm'
import { UserModel } from '@data/models/user'

@EntityRepository(UserModel)
export class BaseUserRepository extends Repository<UserModel> {}
