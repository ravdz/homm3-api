import { Injectable, NotFoundException } from '@nestjs/common';
import { Unit } from '@/units/Unit';

@Injectable()
export class UnitService {
  private units: Unit[] = [
    {
      id: 1,
      name: 'Titan',
      level: 7,
      townId: 2,
      cost: [
        {
          resource: 1,
          units: 2000,
        },
        {
          resource: 6,
          units: 1,
        },
      ],
      stats: {
        min_damage: 40,
        max_damage: 60,
        attack: 19,
        defense: 16,
        health: 150,
        speed: 7,
      },
    },
  ];

  getOneById(unitId: number) {
    const unit = this.units.find((u: Unit) => u.id === unitId);
    if (!unit) {
      throw new NotFoundException(`Unit id: ${unitId} not found`);
    }
    return unit;
  }

  readAll(): readonly Unit[] {
    return this.units;
  }

  readOne(unitId: number): Unit {
    const specifyUnit = this.getOneById(unitId);
    return specifyUnit;
  }
}
