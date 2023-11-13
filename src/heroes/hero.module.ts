import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from '@/heroes/Hero';
import { HeroesController } from '@/heroes/heroes.controller';
import { HeroService } from '@/heroes/hero.service';
import { SpecialityModule } from '@/specialitys/speciality.module';
import { TownModule } from '@/towns/town.module';
import { ClassModule } from '@/classes/class.module';

@Module({
  imports: [
    ClassModule,
    SpecialityModule,
    TownModule,
    TypeOrmModule.forFeature([Hero]),
  ],
  controllers: [HeroesController],
  providers: [HeroService],
  exports: [HeroService],
})
export class HeroModule {}
