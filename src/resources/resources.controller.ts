import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { RESOURCES, RESOURCES_BY_ID } from '@/resources/Resource';

@Controller('resources')
export class ResourcesController {
  @Get()
  getResources() {
    return RESOURCES;
  }

  @Get(':id')
  getResource(@Param('id', ParseIntPipe) resourceId: number) {
    const resource = RESOURCES_BY_ID.get(resourceId);
    if (!resource) {
      throw new NotFoundException(`Resource id: ${resourceId} not found`);
    }
    return resource;
  }
}
