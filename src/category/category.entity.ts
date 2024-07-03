import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PoemEntity } from '../poem/poem.entity';

@Entity('categories')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => PoemEntity, (poem) => poem.categories, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  poems: PoemEntity[];
}
