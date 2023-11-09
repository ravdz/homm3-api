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
    Resource.Gold,
    Resource.Wood,
    Resource.Ore,
    Resource.Gems,
    Resource.Mercury,
    Resource.Sulfur,
    Resource.Crystal,
  ];

  @Get()
  getResources() {
    return this.resources;
  }

  @Get(':id')
  getResource(@Param('id', ParseIntPipe) resourceId: number) {
    const specifyResource = this.resources.find(
      (id, index) => index + 1 === resourceId,
    );
    if (!specifyResource) {
      throw new NotFoundException(`Resource id: ${resourceId} not found`);
    }
    return specifyResource;
  }
}
