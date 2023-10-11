import { OmitType } from '@nestjs/mapped-types';
import { UpdateUnitDTO } from '@/units/dto/update-unit.dto';

export class CreateUnitDTO extends OmitType(UpdateUnitDTO, ['id'] as const) {}
