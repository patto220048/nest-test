import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Profile } from './typeorm/entities/Profile';
import { Post } from './typeorm/entities/Post';

@Module({
  imports: [
    UsersModule,
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      username: 'dinhhuuphat',
      password: 'dinhhuuphat',  
      database: 'nestjs_mysql',
      entities: [User, Profile, Post],
      synchronize: true,
    }),
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
