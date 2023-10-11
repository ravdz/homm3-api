import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Town {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;
}
