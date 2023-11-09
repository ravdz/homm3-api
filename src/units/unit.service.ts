import { Injectable, NotFoundException } from '@nestjs/common';
import { Unit } from '@/units/Unit';

@Injectable()
export class UnitService {
  async getOneById(unitId: number): Promise<Unit> {
    const unit = await Unit.findOne({ where: { id: unitId } });
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
}
