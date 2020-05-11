import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @CreateDateColumn('time with time zone')
  created_at: Date;

  @CreateDateColumn('time with time zone')
  updated_at: Date;
}

export default Category;
