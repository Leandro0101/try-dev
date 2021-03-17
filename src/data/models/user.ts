import { ISolutionEntity, IUserEntity } from '@/src/domain/entities'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
export class UserModel implements IUserEntity {
  solutions: ISolutionEntity[]
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  constructor (props: Omit<UserModel, 'id' | 'created_at' | 'solutions'>) {
    Object.assign(this, props)
    if (!this.id) {
      this.id = uuid()
    }
  }
}
