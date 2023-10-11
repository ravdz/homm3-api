import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Resource } from '@/resources/Resource';

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
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  level: number;

  @Column({ type: 'int' })
  townId: number;

  @Column({ type: 'json' })
  cost: CostItem[];

  @Column({ type: 'json' })
  stats: UnitStats;
}
