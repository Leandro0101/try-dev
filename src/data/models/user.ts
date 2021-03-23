import { IStatusUser, IUserEntity } from '@domain/entities'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { ProblemModel, SolutionModel } from '.'

@Entity('users')
export class UserModel implements IUserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => SolutionModel, user => UserModel)
  solutions: SolutionModel[]

  @OneToMany(() => ProblemModel, user => UserModel)
  problems: ProblemModel[]

  @Column({ type: 'enum', enum: IStatusUser })
  status: IStatusUser

  @CreateDateColumn()
  createdAt: Date

  constructor (props: Omit<UserModel, 'id' | 'createdAt' | 'solutions' | 'problems' | 'status' >) {
    Object.assign(this, props)
    if (!this.id) {
      this.id = uuid()
    }
  }
}
