import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { HeroClass } from '@/classes/Class';
import { Speciality } from '@/specialitys/Speciality';
import { Town } from '@/towns/Town';

@Entity()
export class Hero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => Town, (town) => town.heroes, {
    onDelete: 'CASCADE',
  })
  town: Town;

  @ManyToOne(() => HeroClass, (heroClass) => heroClass.heroes, {
    onDelete: 'CASCADE',
  })
  class: HeroClass;

  @ManyToOne(() => Speciality, (speciality) => speciality.heroes)
  speciality: Speciality;
}
