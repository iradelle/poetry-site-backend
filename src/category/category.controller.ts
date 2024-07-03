import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateUpdateCategoryDto } from './create-update-category.dto';
import { CategoryEntity } from './category.entity';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  @UseGuards(JwtGuard)
  createCategory(
    @Body() createCategory: CreateUpdateCategoryDto,
  ): Promise<CategoryEntity> {
    return this.categoryService.create(createCategory);
  }

  @Patch(':id')
  updateCategory(
    @Param('id') id: number,
    @Body() updateCategory: CreateUpdateCategoryDto,
  ) {
    this.categoryService.update(id, updateCategory);
  }

  @Get()
  @UseGuards(JwtGuard)
  readAll(): Promise<CategoryEntity[]> {
    return this.categoryService.readAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  readOne(@Param('id') id: number) {
    return this.categoryService.readOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.categoryService.delete(id);
  }
}
