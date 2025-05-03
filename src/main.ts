import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe ,VersioningType} from '@nestjs/common';
import { LoggingInterceptor } from 'nestjs-logging-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
