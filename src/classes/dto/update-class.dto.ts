import { IsNumber, IsString } from 'class-validator';

export class UpdateClassDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  townId: number;
}
