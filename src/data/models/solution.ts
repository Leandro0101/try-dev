import { ISolutionEntity } from '@domain/entities'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { ProblemModel, UserModel } from '.'

@Entity('solutions')
export class SolutionModel implements ISolutionEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  sourceCode: string

  @Column()
  description: string

  @Column()
  stars: number

  @ManyToOne(() => UserModel, solutions => SolutionModel)
  user: UserModel

  @ManyToOne(() => ProblemModel, solutions => SolutionModel)
  problem: ProblemModel

  @CreateDateColumn()
  createdAt: Date

  constructor (props: Omit<SolutionModel, 'id' | 'createdAt' | 'stars' | 'user' | 'problem'>) {
    Object.assign(this, props)
    if (!this.id) this.id = uuid()
  }
}
