import { Injectable, NotFoundException } from '@nestjs/common';
import { Town } from '@/towns/Town';
import { CreateTownDTO } from '@/towns/dto/create-town.dto';
import { UpdateTownDTO } from '@/towns/dto/update-town.dto';

@Injectable()
export class TownService {
  async getOneById(townId: number): Promise<Town> {
    const town = await Town.findOne({
      where: { id: townId },
      relations: ['heroes', 'classes'],
    });
    if (!town) {
      throw new NotFoundException(`Town id: ${townId} not found`);
    }
    return town;
  }

  readAll(): Promise<Town[]> {
    return Town.find();
  }

  async readOne(townId: number): Promise<Town> {
    const specifyTown = await this.getOneById(townId);
    return specifyTown;
  }

  create(town: CreateTownDTO): Promise<Town> {
    const newTown = new Town();
    Object.assign(newTown, town);
    return newTown.save();
  }

  async update(town: UpdateTownDTO): Promise<Town> {
    const townToUpdate = await this.getOneById(town.id);
    Object.assign(townToUpdate, town);
    return townToUpdate.save();
  }

  async delete(townId: number): Promise<Town> {
    const townToRemove = await this.getOneById(townId);
    return townToRemove.remove();
  }
}
