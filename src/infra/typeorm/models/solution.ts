import { ISolutionEntity } from '@domain/entities'
import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, ManyToOne, OneToMany
} from 'typeorm'
import { ProblemModel, StarModel, UserModel } from '.'

@Entity('solutions')
export class SolutionModel implements ISolutionEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  sourceCode: string

  @Column()
  description: string

  @ManyToOne(type => UserModel, user => user.solutions)
  user: UserModel

  @ManyToOne(type => ProblemModel, problem => problem.solutions)
  problem: ProblemModel

  @OneToMany(type => StarModel, star => star.solution)
  stars: StarModel[]

  @CreateDateColumn()
  createdAt: Date

  constructor (props: Omit<SolutionModel, 'id' | 'createdAt' | 'user' | 'problem' | 'stars'>) {
    Object.assign(this, props)
  }
}
