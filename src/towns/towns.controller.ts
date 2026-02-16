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
import { TownService } from '@/towns/town.service';
import { AuthService } from '@/auth/auth.service';
import { CreateTownDTO } from '@/towns/dto/create-town.dto';
import { UpdateTownDTO } from '@/towns/dto/update-town.dto';

@Controller('towns')
export class TownsController {
  private townService: TownService;

  constructor(townService: TownService) {
    this.townService = townService;
  }

  @Get()
  getTowns() {
    return this.townService.readAll();
  }

  @Get(':id')
  getTown(@Param('id', ParseIntPipe) townId: number) {
    return this.townService.readOne(townId);
  }

  @Post()
  @UseGuards(AuthService)
  createTown(@Body() town: CreateTownDTO) {
    return this.townService.create(town);
  }

  @Put()
  @UseGuards(AuthService)
  updateTown(@Body() town: UpdateTownDTO) {
    return this.townService.update(town);
  }

  @Delete(':id')
  @UseGuards(AuthService)
  deleteTown(@Param('id', ParseIntPipe) townId: number) {
    return this.townService.delete(townId);
  }
}
