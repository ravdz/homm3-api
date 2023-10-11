import { OmitType } from '@nestjs/mapped-types';
import { UpdateSpecialityDTO } from '@/specialitys/dto/update-speciality.dto';

export class CreateSpecialityDTO extends OmitType(UpdateSpecialityDTO, [
  'id',
] as const) {}
