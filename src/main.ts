import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppDataSource } from './database/data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Mechanic API')
    .setDescription('API documentation for my NestJS')
    .setVersion('1.0')
    .build();

  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const ds = await AppDataSource.initialize();
  await ds.runMigrations();

  await app.listen(process.env.APP_PORT);
}
bootstrap();
