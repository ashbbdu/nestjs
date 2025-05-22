import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  // First create a Node js application to accept payment and then a nestjs appliaction
  // Note try to integrate razor pay with this system (Nest Js)
  const app = await NestFactory.create(AppModule , {
    // logger : ['error' , 'warn']
    // logger: new ConsoleLogger({
    //   json: true,
    // }),
    logger : false
  });
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true,        // ← runs class-transformer to convert strings → Date
    whitelist: true,        // ← strips out any unknown query props
    forbidNonWhitelisted: true,
    errorHttpStatusCode: 400
  }));
  const config = new DocumentBuilder()
    .setTitle('Cargostar Dashboard')
    .setDescription('The Cargostar Dashboard API description')
    .setVersion('1.0')
    .addTag('Cargostar Dashboard')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
