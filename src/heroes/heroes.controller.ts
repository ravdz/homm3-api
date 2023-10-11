import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { HeroService } from '@/heroes/hero.service';

@Controller('heroes')
export class HeroesController {
  private heroService = new HeroService();

  @Get()
  getHeroes() {
    return this.heroService.readAll();
  }

  @Get(':id')
  getHero(@Param('id', ParseIntPipe) heroId: number) {
    return this.heroService.readOne(heroId);
  }
}
