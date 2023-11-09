import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Hero } from '@/heroes/Hero';

@Entity()
export class Speciality extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => Hero, (hero) => hero.speciality)
  heroes: Hero[];
}
