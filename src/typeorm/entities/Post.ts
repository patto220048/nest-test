import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'post' })
export class Post {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  created_at: Date;

  @ManyToOne(()=>User, (user)=>user.posts)
  user: User;
}