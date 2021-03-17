import { IUserEntity } from '@/src/domain/entities'
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

  @OneToMany(() => SolutionModel, solutionModel => solutionModel.user)
  solutions: SolutionModel[]

  @OneToMany(() => ProblemModel, problemModel => problemModel.user)
  problems: ProblemModel[]

  @CreateDateColumn()
  created_at: Date

  constructor (props: Omit<UserModel, 'id' | 'created_at' | 'solutions' | 'problems'>) {
    Object.assign(this, props)
    if (!this.id) {
      this.id = uuid()
    }
  }
}
