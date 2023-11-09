import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Hero } from '@/heroes/Hero';
import { HeroClass } from '@/classes/Class';

@Entity()
export class Town extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => Hero, (hero) => hero.town)
  heroes: Hero[];

  @OneToMany(() => HeroClass, (heroClass) => heroClass.town)
  classes: HeroClass[];
}
