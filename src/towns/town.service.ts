import { Injectable, NotFoundException } from '@nestjs/common';
import { Town } from '@/towns/Town';

@Injectable()
export class TownService {
  private towns: Town[] = [
    {
      id: 1,
      name: 'Castle',
    },
    {
      id: 2,
      name: 'Tower',
    },
    {
      id: 3,
      name: 'Bastion',
    },
  ];

  getOneById(townId: number) {
    const town = this.towns.find((t: Town) => t.id === townId);
    if (!town) {
      throw new NotFoundException(`Town id: ${townId} not found`);
    }
    return town;
  }

  readAll(): readonly Town[] {
    return this.towns;
  }

  readOne(townId: number): Town {
    const specifyTown = this.getOneById(townId);
    return specifyTown;
  }
}
