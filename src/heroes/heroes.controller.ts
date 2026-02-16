import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { HeroService } from '@/heroes/hero.service';
import { AuthService } from '@/auth/auth.service';
import { CreateHeroDTO } from './dto/create-hero.dto';
import { UpdateHeroDTO } from './dto/update-hero.dto';

@Controller('heroes')
export class HeroesController {
  private heroService: HeroService;

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  @Get()
  getHeroes() {
    return this.heroService.readAll();
  }

  @Get(':id')
  getHero(@Param('id', ParseIntPipe) heroId: number) {
    return this.heroService.readOne(heroId);
  }

  @Post()
  @UseGuards(AuthService)
  createHero(@Body() hero: CreateHeroDTO) {
    return this.heroService.create(hero);
  }

  @Put()
  @UseGuards(AuthService)
  updateHero(@Body() hero: UpdateHeroDTO) {
    return this.heroService.update(hero);
  }

  @Delete(':id')
  @UseGuards(AuthService)
  deleteHero(@Param('id', ParseIntPipe) heroId: number) {
    return this.heroService.delete(heroId);
  }
}
