import { IsNumber, IsString } from 'class-validator';

export class UpdateTownDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
