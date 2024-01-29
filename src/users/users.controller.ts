import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserProfileDto } from './dto/create-profile.dto';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }

  @Post(':id/profile')
  createUserProfile(  
    @Param('id', ParseIntPipe) id: number,
    @Body() createProfileUser: UserProfileDto,
  ) {
    return this.usersService.createUserProfile(+id, createProfileUser);
  }

  @Post(':id/posts')
  createUserPosts(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPostUser: CreatePostDto
  ){
    return this.usersService.createPostUser(+id, createPostUser);

  }
}
