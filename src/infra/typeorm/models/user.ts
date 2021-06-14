import { IUserStatus, IUserEntity } from '@domain/entities'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { ProblemModel, SolutionModel, StarModel } from '.'

@Entity('users')
export class UserModel implements IUserEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column({ select: false })
  password: string

  @OneToMany(type => SolutionModel, solution => solution.user)
  solutions: SolutionModel[]

  @OneToMany(type => ProblemModel, problem => problem.user)
  problems: ProblemModel[]

  @Column({ type: 'enum', enum: IUserStatus })
  status: IUserStatus

  @OneToMany(type => StarModel, star => star.user)
  stars: StarModel[]

  @CreateDateColumn()
  createdAt: Date

  constructor (props: Omit<UserModel, 'id' | 'createdAt' | 'solutions' | 'problems' | 'status' | 'stars'>) {
    Object.assign(this, props)
  }
}
