import { OmitType } from '@nestjs/mapped-types';
import { UpdateClassDTO } from '@/classes/dto/update-class.dto';

export class CreateClassDTO extends OmitType(UpdateClassDTO, ['id'] as const) {}
