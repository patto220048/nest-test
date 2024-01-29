import { Post } from 'src/typeorm/entities/Post';
import { Profile } from 'src/typeorm/entities/Profile';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({ unique: true })
  username: string; 

  @Column()
  password: string;

  @Column()
  created_at: Date;
  @Column({ nullable: true })
  authStrategy: string;

  @OneToOne(()=>Profile)
  @JoinColumn()
  profile: Profile; 

  @OneToMany(()=> Post, (post) => post.user)
  posts: Post[];

}
