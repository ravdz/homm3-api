import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Town } from '@/towns/Town';
import { TownsController } from '@/towns/towns.controller';
import { TownService } from '@/towns/town.service';

@Module({
  imports: [TypeOrmModule.forFeature([Town])],
  controllers: [TownsController],
  providers: [TownService],
  exports: [TownService],
})
export class TownModule {}
