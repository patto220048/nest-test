import { Injectable} from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
  
    create(cat: Cat) {
     return this.cats.push(cat);
    }
  
    findAll(): Cat[] {
      return this.cats;
    }
    findById (id:string) {
      return this.cats.find(cat => cat.id === id)
    } 
}