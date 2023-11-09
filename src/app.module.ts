import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TownsController } from '@/towns/towns.controller';
import { UnitsController } from '@/units/units.controller';
import { ResourcesController } from '@/resources/resources.controller';
import { HeroesController } from '@/heroes/heroes.controller';
import { ClassesController } from '@/classes/classes.controller';
import { SpecialitysController } from '@/specialitys/specialitys.controller';
import { HeroService } from '@/heroes/hero.service';
import { ClassService } from '@/classes/class.service';
import { SpecialityService } from '@/specialitys/speciality.service';
import { TownService } from '@/towns/town.service';
import { UnitService } from '@/units/unit.service';
import { HeroClass } from '@/classes/Class';
import { Speciality } from '@/specialitys/Speciality';
import { Hero } from '@/heroes/Hero';
import { Town } from '@/towns/Town';
import { Unit } from '@/units/Unit';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/my-db.sqlite3',
      autoLoadEntities: true,
      synchronize: true,
      entities: [HeroClass, Speciality, Hero, Town, Unit],
    }),
  ],
  controllers: [
    TownsController,
    UnitsController,
    ResourcesController,
    HeroesController,
    ClassesController,
    SpecialitysController,
  ],
  providers: [
    HeroService,
    ClassService,
    SpecialityService,
    TownService,
    UnitService,
  ],
})
export class AppModule {}
