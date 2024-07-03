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
}
