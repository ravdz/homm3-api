import {
  IsEnum,
  IsOptional,
  IsString,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ResourceCode } from '@/resources/Resource';

export class UnitStatsDTO {
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

export class CostItemDTO {
  @IsEnum(ResourceCode)
  resource: ResourceCode;

  @IsNumber()
  units: number;
}

export class CreateUnitDTO {
  @IsString()
  name: string;

  @IsNumber()
  level: number;

  @IsNumber()
  townId: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CostItemDTO)
  cost?: CostItemDTO[];

  @IsOptional()
  @ValidateNested()
  @Type(() => UnitStatsDTO)
  stats?: UnitStatsDTO;
}
