import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '@/auth/auth.service';
import { CreateClassDTO } from '@/classes/dto/create-class.dto';
import { UpdateClassDTO } from '@/classes/dto/update-class.dto';
import { ClassService } from '@/classes/class.service';

@Controller('classes')
export class ClassesController {
  private classService: ClassService;

  constructor(classService: ClassService) {
    this.classService = classService;
  }

  @Get()
  getClasses() {
    return this.classService.readAll();
  }

  @Get(':id')
  getClass(@Param('id', ParseIntPipe) classId: number) {
    return this.classService.readOne(classId);
  }

  @Post()
  @UseGuards(AuthService)
  createClass(@Body() heroClass: CreateClassDTO) {
    return this.classService.create(heroClass);
  }

  @Put()
  @UseGuards(AuthService)
  updateClass(@Body() heroClass: UpdateClassDTO) {
    return this.classService.update(heroClass);
  }

  @Delete(':id')
  @UseGuards(AuthService)
  deleteClass(@Param('id', ParseIntPipe) classId: number) {
    return this.classService.delete(classId);
  }
}
