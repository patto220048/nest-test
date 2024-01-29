import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateCatDto {
    @IsNotEmpty()
    id: string;
    @IsEmail()
    email: string;
    name: string; 
    age: number;
    breed: string;
  }