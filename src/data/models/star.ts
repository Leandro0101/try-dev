import { IStarEntity } from '@domain/entities'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { SolutionModel, UserModel } from '.'

@Entity('stars')
export class StarModel implements IStarEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  value: number

  @ManyToOne(type => UserModel, user => user.stars)
  user: UserModel

  @ManyToOne(type => SolutionModel, solution => solution.stars)
  solution: SolutionModel

  @CreateDateColumn()
  createdAt: Date

  constructor (props: Omit<StarModel, 'id' | 'createdAt'>) {
    Object.assign(this, props)
    if (!this.id) this.id = uuid()
  }
}
