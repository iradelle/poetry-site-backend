import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';
import { CreateUpdateCategoryDto } from './create-update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(createCategory: CreateUpdateCategoryDto) {
    const data = { ...createCategory };
    const category = this.categoryRepository.create(data);
    return await this.categoryRepository.save(category);
  }

  async update(id: number, updateCategory: CreateUpdateCategoryDto) {
    await this.categoryRepository.update(id, updateCategory);
    return this.categoryRepository.findOneBy({ id });
  }

  async readAll() {
    return this.categoryRepository.find();
  }

  async readOne(id: number) {
    return this.categoryRepository.findOneBy({ id });
  }

  async delete(id: number) {
    // Check if id is falsy
    if (!id) {
      throw new Error('Invalid id for deletion');
    }

    // Call the delete method with the provided id
    return this.categoryRepository.delete(id);
  }
}
