import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateUpdateCategoryDto } from './create-update-category.dto';
import { CategoryEntity } from './category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  createCategory(
    @Body() createCategory: CreateUpdateCategoryDto,
  ): Promise<CategoryEntity> {
    return this.categoryService.create(createCategory);
  }
}
