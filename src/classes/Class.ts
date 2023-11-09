import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Hero } from '@/heroes/Hero';
import { Town } from '@/towns/Town';

@Entity()
export class HeroClass extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => Town, (town) => town.classes, {
    onDelete: 'CASCADE',
  })
  town: Town;

  @OneToMany(() => Hero, (hero) => hero.class)
  heroes: Hero[];
}
