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
  createClass(@Body() heroClass: CreateClassDTO) {
    return this.classService.create(heroClass);
  }

  @Put()
  updateClass(@Body() heroClass: UpdateClassDTO) {
    return this.classService.update(heroClass);
  }

  @Delete(':id')
  deleteClass(@Param('id', ParseIntPipe) classId: number) {
    return this.classService.delete(classId);
  }
}
