import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { SpecialityService } from '@/specialitys/speciality.service';
import { CreateSpecialityDTO } from '@/specialitys/dto/create-speciality.dto';
import { UpdateSpecialityDTO } from '@/specialitys/dto/update-speciality.dto';

@Controller('specialitys')
export class SpecialitysController {
  private specialityService: SpecialityService;

  constructor(specialityService: SpecialityService) {
    this.specialityService = specialityService;
  }

  @Get()
  getSpecialitys() {
    return this.specialityService.readAll();
  }

  @Get(':id')
  getSpeciality(@Param('id', ParseIntPipe) specialityId: number) {
    return this.specialityService.readOne(specialityId);
  }

  @Post()
  createSpeciality(@Body() speciality: CreateSpecialityDTO) {
    return this.specialityService.create(speciality);
  }

  @Put()
  updateSpeciality(@Body() speciality: UpdateSpecialityDTO) {
    return this.specialityService.update(speciality);
  }

  @Delete(':id')
  deleteSpeciality(@Param('id', ParseIntPipe) specialityId: number) {
    return this.specialityService.delete(specialityId);
  }
}
