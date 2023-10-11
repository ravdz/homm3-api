import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { Resource } from '@/resources/Resource';

@Controller('resources')
export class ResourcesController {
  resources = [
    Resource.GOLD,
    Resource.WOOD,
    Resource.ORE,
    Resource.GEMS,
    Resource.MERCURY,
    Resource.SULFUR,
    Resource.CRYSTAL,
  ];

  @Get()
  getResources() {
    return this.resources;
  }

  @Get(':id')
  getResource(@Param('id', ParseIntPipe) resourceId: number) {
    const specifyResource = this.resources.find((id) => id === resourceId);
    if (!specifyResource) {
      throw new NotFoundException(`Resource id: ${resourceId} not found`);
    }
    return specifyResource;
  }
}
