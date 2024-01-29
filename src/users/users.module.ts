import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from 'src/typeorm/entities/Profile';
import { Post } from 'src/typeorm/entities/Post';

@Module({
  imports: [ TypeOrmModule.forFeature([User, Profile, Post]) ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
