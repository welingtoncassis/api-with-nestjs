import { ValidationPipe } from '@nestjs/common';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors();

  // importando pipe de validação
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // passando para o class validator o containerID do nestjs para usar ID
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // habilitando versionamento nas rotas da api
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // setup swagger
  const config = new DocumentBuilder()
    .setTitle('Usuários exemplos')
    .setDescription('Api CRUD de usuários')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
