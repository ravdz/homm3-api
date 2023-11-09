import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Resource } from '@/resources/Resource';
import { Town } from '@/towns/Town';

class UnitStats {
  min_damage: number;
  max_damage: number;
  attack: number;
  defense: number;
  health: number;
  speed: number;
}

class CostItem {
  resource: Resource;
  units: number;
}

@Entity()
export class Unit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  level: number;

  @ManyToOne(() => Town, (town) => town.units, {
    onDelete: 'CASCADE',
  })
  town: Town;

  @Column({ type: 'json' })
  cost: CostItem[];

  @Column({ type: 'json' })
  stats: UnitStats;
}
