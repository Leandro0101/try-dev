import { EntityRepository, Repository } from 'typeorm'
import { UserModel } from '@/src/data/models/user'

@EntityRepository(UserModel)
export class BaseUserRepository extends Repository<UserModel> {}
