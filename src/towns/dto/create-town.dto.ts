import { OmitType } from '@nestjs/mapped-types';
import { UpdateTownDTO } from '@/towns/dto/update-town.dto';

export class CreateTownDTO extends OmitType(UpdateTownDTO, ['id'] as const) {}
