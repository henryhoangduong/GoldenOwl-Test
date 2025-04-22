import 'reflect-metadata'
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.model'

@Entity('result')
export class Result {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'float', nullable: true })
  toan: number
  @Column({ type: 'float', nullable: true })
  ngu_van: number
  @Column({ type: 'float', nullable: true })
  ngoai_ngu: number
  @Column({ type: 'float', nullable: true })
  vat_li: number
  @Column({ type: 'float', nullable: true })
  hoa_hoc: number
  @Column({ type: 'float', nullable: true })
  sinh_hoc: number
  @Column({ type: 'float', nullable: true })
  lich_su: number
  @Column({ type: 'float', nullable: true })
  dia_li: number
  @Column({ type: 'float', nullable: true })
  gdcd: number
  @Column({ type: 'text' })
  ma_ngoai_ngu: string

  @OneToOne(() => User)
  @JoinColumn()
  user: User
}
