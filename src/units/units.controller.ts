import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UnitService } from '@/units/unit.service';
import { CreateUnitDTO } from '@/units/dto/create-unit.dto';
import { UpdateUnitDTO } from '@/units/dto/update-unit.dto';

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

  @Post()
  createClass(@Body() unit: CreateUnitDTO) {
    return this.unitService.create(unit);
  }

  @Put()
  updateClass(@Body() unit: UpdateUnitDTO) {
    return this.unitService.update(unit);
  }

  @Delete(':id')
  deleteClass(@Param('id', ParseIntPipe) unitId: number) {
    return this.unitService.delete(unitId);
  }
}
