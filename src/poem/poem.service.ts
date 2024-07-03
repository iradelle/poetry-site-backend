import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PoemEntity } from './poem.entity';
import { Repository } from 'typeorm';
import { PoemCategoryEntity } from '../poem_category/poem-category.entity';
import { CreateUpdatePoemDto } from './create-update-poem.dto';
import { CreateUpdatePoem_categoryDto } from '../poem_category/create-update-poem_category.dto';

@Injectable()
export class PoemService {
  constructor(
    @InjectRepository(PoemEntity)
    private readonly poemRepository: Repository<PoemEntity>,
    @InjectRepository(PoemCategoryEntity)
    private readonly poemCategoryRepository: Repository<PoemCategoryEntity>,
  ) {}

  async createPoem(createPoemDto: CreateUpdatePoemDto, userId: number) {
    const data = { ...createPoemDto, user: { id: userId } };
    const poem = this.poemRepository.create(data);
    return await this.poemRepository.save(poem);
  }

  async createPoemCategory(
    createPoemCategoryDto: CreateUpdatePoem_categoryDto,
    poem_id: number,
    category_id: number,
  ) {
    const data = {
      ...createPoemCategoryDto,
      poem: { poemId: poem_id },
      category: { categoryId: category_id },
    };
    const poemCategory = this.poemCategoryRepository.create(data);
    return await this.poemCategoryRepository.save(poemCategory);
  }

  async updatePoem(updatePoemDto: CreateUpdatePoemDto, id: number) {
    await this.poemRepository.update(id, updatePoemDto);
    return await this.poemRepository.findOneBy({ id });
  }

  async readAll() {
    return await this.poemRepository.find();
  }

  async readById(poemId: number) {
    return await this.poemRepository.findOneBy({ id: poemId });
  }

  async readByCategory(categoryId: number) {
    return await this.poemCategoryRepository.findBy({ categoryId: categoryId });
  }

  async delete(id: number) {
    return await this.poemRepository.delete(id);
  }
}
