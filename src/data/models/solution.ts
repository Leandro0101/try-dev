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

  @ManyToOne(() => UserModel, solutions => SolutionModel)
  user: UserModel

  @ManyToOne(() => ProblemModel, solutions => SolutionModel)
  problem: ProblemModel

  @CreateDateColumn()
  created_at: Date

  constructor (props: Omit<SolutionModel, 'id' | 'created_at' | 'stars'>) {
    Object.assign(this, props)
    if (!this.id) {
      this.id = uuid()
    }
  }
}
