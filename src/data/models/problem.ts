import { IProblemEntity, IStatusProblem } from '@domain/entities'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { SolutionModel, UserModel } from '.'

@Entity('problems')
export class ProblemModel implements IProblemEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  title: string

  @Column()
  description: string

  @ManyToOne(type => UserModel, user => user.problems)
  user: UserModel

  @OneToMany(type => SolutionModel, solution => solution.problem)
  solutions: SolutionModel[]

  @Column({ type: 'enum', enum: IStatusProblem })
  status: IStatusProblem

  @CreateDateColumn()
  createdAt: Date

  constructor (props: Omit<ProblemModel, 'id' | 'createdAt' | 'solutions' | 'user' | 'status'>) {
    Object.assign(this, props)
    if (!this.id) this.id = uuid()
  }
}
