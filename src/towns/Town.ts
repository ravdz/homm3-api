import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Hero } from '@/heroes/Hero';
import { HeroClass } from '@/classes/Class';
import { Unit } from '@/units/Unit';

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

  @OneToMany(() => Unit, (unit) => unit.town)
  units: Unit[];
}
