import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';
import { ValidateCreatePipe } from './pipes/validate-create/validate-create.pipe';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body(ValidateCreatePipe) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') param: string) {
    const cat = this.catsService.findById(param);
    if (!cat) throw new HttpException('Cat not found', HttpStatus.BAD_REQUEST);
    return cat;
  }
}
