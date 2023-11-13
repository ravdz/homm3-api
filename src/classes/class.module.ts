import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroClass } from '@/classes/Class';
import { ClassesController } from '@/classes/classes.controller';
import { ClassService } from '@/classes/class.service';
import { TownModule } from '@/towns/town.module';

@Module({
  imports: [TownModule, TypeOrmModule.forFeature([HeroClass])],
  controllers: [ClassesController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule {}
