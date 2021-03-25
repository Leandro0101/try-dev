import { ISolutionEntity } from '@domain/entities'
import {
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, ManyToOne, OneToMany
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { ProblemModel, StarModel, UserModel } from '.'

@Entity('solutions')
export class SolutionModel implements ISolutionEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  sourceCode: string

  @Column()
  description: string

  @ManyToOne(() => UserModel, solutions => SolutionModel)
  user: UserModel

  @ManyToOne(() => ProblemModel, solutions => SolutionModel)
  problem: ProblemModel

  @OneToMany(() => StarModel, solution => SolutionModel)
  stars: StarModel[]

  @CreateDateColumn()
  createdAt: Date

  constructor (props: Omit<SolutionModel, 'id' | 'createdAt' | 'user' | 'problem' | 'stars'>) {
    Object.assign(this, props)
    if (!this.id) this.id = uuid()
  }
}
