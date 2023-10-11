import { IsNumber, IsString } from 'class-validator';

export class UpdateSpecialityDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
