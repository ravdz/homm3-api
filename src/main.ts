import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Express v5 uses 'simple' query parser by default; use 'extended' for nested objects/arrays
  app.set('query parser', 'extended');
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}
bootstrap();
