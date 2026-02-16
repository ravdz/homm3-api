import { Type } from 'class-transformer';
import { PartialType, OmitType } from '@nestjs/mapped-types';
import { ValidateNested } from 'class-validator';
import {
  CreateUnitDTO,
  CostItemDTO,
  UnitStatsDTO,
} from '@/units/dto/create-unit.dto';

class UpdateCostItemDTO extends PartialType(CostItemDTO) {}
class UpdateUnitStatsDTO extends PartialType(UnitStatsDTO) {}

export class UpdateUnitDTO extends PartialType(
  OmitType(CreateUnitDTO, ['cost', 'stats'] as const),
) {
  @ValidateNested({ each: true })
  @Type(() => UpdateCostItemDTO)
  cost?: UpdateCostItemDTO[];

  @ValidateNested()
  @Type(() => UpdateUnitStatsDTO)
  stats?: UpdateUnitStatsDTO;
}
