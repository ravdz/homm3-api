import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UnitService } from '@/units/unit.service';
import { AuthService } from '@/auth/auth.service';
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
  @UseGuards(AuthService)
  createUnit(@Body() unit: CreateUnitDTO) {
    return this.unitService.create(unit);
  }

  @Patch(':id')
  @UseGuards(AuthService)
  updateUnit(
    @Param('id', ParseIntPipe) unitId: number,
    @Body() unit: UpdateUnitDTO,
  ) {
    return this.unitService.update(unitId, unit);
  }

  @Delete(':id')
  @UseGuards(AuthService)
  deleteUnit(@Param('id', ParseIntPipe) unitId: number) {
    return this.unitService.delete(unitId);
  }
}
