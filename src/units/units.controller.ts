import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UnitService } from '@/units/unit.service';

@Controller('units')
export class UnitsController {
  private unitService: UnitService;

  constructor(unitService: UnitService) {
    this.unitService = unitService;
  }

  @Get()
  getUnits() {
    return this.unitService.readAll();
  }

  @Get(':id')
  getUnit(@Param('id', ParseIntPipe) unitId: number) {
    return this.unitService.readOne(unitId);
  }
}
