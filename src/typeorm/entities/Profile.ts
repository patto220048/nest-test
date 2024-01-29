import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profile' })
export class Profile {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  
  @Column()
  dod: string;


  @Column()
  created_at: Date;

}
