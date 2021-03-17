import { IProblemEntity } from '@domain/entities'
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

  @ManyToOne(() => UserModel, userModel => userModel.problems)
  user: UserModel

  @OneToMany(() => SolutionModel, solutionModel => solutionModel.problem)
  solutions: SolutionModel[]

  @CreateDateColumn()
  created_at: Date

  constructor (props: Omit<ProblemModel, 'id' | 'created_at' | 'solutions'>) {
    Object.assign(this, props)
    if (!this.id) {
      this.id = uuid()
    }
  }
}
