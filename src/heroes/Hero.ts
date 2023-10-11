import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Hero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  townId: number;

  @Column({ type: 'int' })
  classId: number;

  @Column({ type: 'int' })
  specialityId: number;
}
