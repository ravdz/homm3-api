import { IsNumber, IsString } from 'class-validator';

export class UpdateHeroDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  townId: number;

  @IsNumber()
  classId: number;

  @IsNumber()
  specialityId: number;
}
