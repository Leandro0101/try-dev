import { ISolutionEntity } from '@domain/entities'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { ProblemModel, UserModel } from '.'

@Entity('solutions')
export class SolutionModel implements ISolutionEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  source_code: string

  @Column()
  description: string

  @Column()
  stars: number

  @ManyToOne(() => UserModel, userModel => userModel.solutions)
  user: UserModel

  @ManyToOne(() => ProblemModel, problemModel => problemModel.solutions)
  problem: ProblemModel

  @CreateDateColumn()
  created_at: Date

  constructor (props: Omit<SolutionModel, 'id' | 'created_at' | 'solutions'>) {
    Object.assign(this, props)
    if (!this.id) {
      this.id = uuid()
    }
  }
}
