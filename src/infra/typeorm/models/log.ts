import { ILogEntity } from '@domain/entities'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('logs')
export class LogModel implements ILogEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  stack: string

  @CreateDateColumn()
  createdAt: Date

  constructor (props: Omit<LogModel, 'id' | 'createdAt'>) {
    Object.assign(this, props)
  }
}
