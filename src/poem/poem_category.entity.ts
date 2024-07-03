import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { PoemEntity } from './poem.entity';
import { CategoryEntity } from '../category/category.entity';

@Entity('poem_category')
export class PoemCategoryEntity {
  @PrimaryColumn({ name: 'poem_id' })
  poemId: number;

  @PrimaryColumn({ name: 'category_id' })
  categoryId: number;

  @ManyToOne(() => PoemEntity, (poem) => poem.categories, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'poem_id', referencedColumnName: 'id' }])
  poems: PoemEntity[];

  @ManyToOne(() => CategoryEntity, (category) => category.poems, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'id' }])
  categories: CategoryEntity[];
}
