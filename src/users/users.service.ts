import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostParams, CreateProfileParams, CreateUserParams } from 'src/untils/type';
import { Profile } from 'src/typeorm/entities/Profile';
import { Post } from 'src/typeorm/entities/Post';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  create(userDetail: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetail,
      created_at: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  findAll() {
    const allUser = this.userRepository.find({ relations: ['profile', 'posts'] });
    return allUser; 
  }

  findOne(id: number) {
    const user = this.userRepository.findBy({id})
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository.update({ id: id }, { ...updateUserDto });
    return { mgs: 'update user success' };
  }

  remove(id: number) {
    this.userRepository.delete(id);
    return { mgs: 'remove user success' };
  }

  async createUserProfile(
    id: number,
    createProfileParams: CreateProfileParams,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    const newProfile = this.profileRepository.create({
      ...createProfileParams,
      created_at: new Date(),
    });
    const savedProfile = await this.profileRepository.save(newProfile);
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }

  async createPostUser(id:number, createPostParams: CreatePostParams){
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    const newPost = this.postRepository.create({...createPostParams, created_at : new Date(), user})
    return await this.postRepository.save(newPost)
  }
}
