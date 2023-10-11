import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TownService } from '@/towns/town.service';

@Controller('towns')
export class TownsController {
  private townService = new TownService();

  @Get()
  getTowns() {
    return this.townService.readAll();
  }

  @Get(':id')
  getTown(@Param('id', ParseIntPipe) townId: number) {
    return this.townService.readOne(townId);
  }
}
