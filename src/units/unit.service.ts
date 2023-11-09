import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Unit } from '@/units/Unit';
import { TownService } from '@/towns/town.service';
import { CreateUnitDTO } from '@/units/dto/create-unit.dto';
import { UpdateUnitDTO } from '@/units/dto/update-unit.dto';

@Injectable()
export class UnitService {
  private townService: TownService;

  constructor(@Inject(forwardRef(() => TownService)) townService: TownService) {
    this.townService = townService;
  }

  async getOneById(unitId: number): Promise<Unit> {
    const unit = await Unit.findOne({
      where: { id: unitId },
      relations: ['town'],
    });
    if (!unit) {
      throw new NotFoundException(`Unit id: ${unitId} not found`);
    }
    return unit;
  }

  readAll(): Promise<Unit[]> {
    return Unit.find();
  }

  async readOne(unitId: number): Promise<Unit> {
    const specifyUnit = await this.getOneById(unitId);
    return specifyUnit;
  }

  async create(unit: CreateUnitDTO): Promise<Unit> {
    const newUnit = new Unit();
    Object.assign(newUnit, unit);
    newUnit.town = await this.townService.getOneById(unit.townId);
    await newUnit.save();
    return await this.getOneById(newUnit.id);
  }

  async update(unit: UpdateUnitDTO): Promise<Unit> {
    const unitToUpdate = await this.getOneById(unit.id);
    Object.assign(unitToUpdate, unit);
    unitToUpdate.town = await this.townService.getOneById(unit.townId);
    await unitToUpdate.save();
    return await this.getOneById(unit.id);
  }

  async delete(unitId: number): Promise<Unit> {
    const unitToRemove = await this.getOneById(unitId);
    return unitToRemove.remove();
  }
}
