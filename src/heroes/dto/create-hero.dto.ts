import { OmitType } from '@nestjs/mapped-types';
import { UpdateHeroDTO } from '@/heroes/dto/update-hero.dto';

export class CreateHeroDTO extends OmitType(UpdateHeroDTO, ['id'] as const) {}
