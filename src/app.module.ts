import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from '@/config/database.config';
import { envValidationSchema } from '@/config/envValidation.config';

import { AuthModule } from '@/auth/auth.module';
import { TownModule } from '@/towns/town.module';
import { UnitModule } from '@/units/unit.module';
import { SpecialityModule } from '@/specialitys/speciality.module';
import { ResourceModule } from '@/resources/resource.module';
import { HeroModule } from '@/heroes/hero.module';
import { ClassModule } from '@/classes/class.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      validationSchema: envValidationSchema,
    }),
    TypeOrmModule.forRootAsync(databaseConfig),
    AuthModule,
    TownModule,
    UnitModule,
    SpecialityModule,
    ResourceModule,
    HeroModule,
    ClassModule,
  ],
})
export class AppModule {}
