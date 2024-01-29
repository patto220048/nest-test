import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT} : mode ${process.env.NODE_ENV}`);
  });
}
bootstrap();
