import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit } from '@/units/Unit';
import { UnitsController } from '@/units/units.controller';
import { UnitService } from '@/units/unit.service';
import { TownModule } from '@/towns/town.module';

@Module({
  imports: [TownModule, TypeOrmModule.forFeature([Unit])],
  controllers: [UnitsController],
  providers: [UnitService],
  exports: [UnitService],
})
export class UnitModule {}
