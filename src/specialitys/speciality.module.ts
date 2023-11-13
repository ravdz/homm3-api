import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Speciality } from '@/specialitys/Speciality';
import { SpecialitysController } from '@/specialitys/specialitys.controller';
import { SpecialityService } from '@/specialitys/speciality.service';

@Module({
  imports: [TypeOrmModule.forFeature([Speciality])],
  controllers: [SpecialitysController],
  providers: [SpecialityService],
  exports: [SpecialityService],
})
export class SpecialityModule {}
