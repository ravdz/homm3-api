import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { TownsController } from '@/towns/towns.controller';
import { UnitsController } from '@/units/units.controller';
import { ResourcesController } from '@/resources/resources.controller';
import { HeroesController } from '@/heroes/heroes.controller';
import { ClassesController } from '@/classes/classes.controller';
import { SpecialitysController } from '@/specialitys/specialitys.controller';
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
    AppController,
    TownsController,
    UnitsController,
    ResourcesController,
    HeroesController,
    ClassesController,
    SpecialitysController,
  ],
  providers: [AppService],
})
export class AppModule {}
