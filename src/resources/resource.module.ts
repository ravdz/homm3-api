import { Module } from '@nestjs/common';
import { ResourcesController } from '@/resources/resources.controller';

@Module({
  controllers: [ResourcesController],
})
export class ResourceModule {}
