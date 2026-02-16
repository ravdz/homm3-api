import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator';
import { ResourceCode } from '@/resources/Resource';

class UnitStatsDTO {
  @IsNumber()
  min_damage: number;

  @IsNumber()
  max_damage: number;

  @IsNumber()
  attack: number;

  @IsNumber()
  defense: number;

  @IsNumber()
  health: number;

  @IsNumber()
  speed: number;
}

class CostItemDTO {
  @IsEnum(ResourceCode)
  resource: ResourceCode;

  @IsNumber()
  units: number;
}

export class UpdateUnitDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  level: number;

  @IsNumber()
  townId: number;

  @ValidateNested({ each: true })
  @Type(() => CostItemDTO)
  cost: CostItemDTO[];

  @ValidateNested()
  @Type(() => UnitStatsDTO)
  stats: UnitStatsDTO;
}
