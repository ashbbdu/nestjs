import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {

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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
