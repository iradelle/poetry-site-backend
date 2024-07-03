import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Patch,
  Param,
  Get,
} from '@nestjs/common';
import { PoemService } from './poem.service';
import { CreateUpdatePoemDto } from './create-update-poem.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { CreateUpdatePoem_categoryDto } from '../poem_category/create-update-poem_category.dto';

@Controller('poem')
export class PoemController {
  constructor(private poemService: PoemService) {}

  @Post()
  @UseGuards(JwtGuard)
  createPoem(@Body() createPoemDto: CreateUpdatePoemDto, @Request() req) {
    const user_id = req.user.poem;
    return this.poemService.createPoem(createPoemDto, user_id);
  }

  @Post()
  @UseGuards(JwtGuard)
  createPoemCategory(
    @Body() createPoemCategoryDto: CreateUpdatePoem_categoryDto,
    poem_id: number,
    category_id: number,
  ) {
    return this.poemService.createPoemCategory(
      createPoemCategoryDto,
      poem_id,
      category_id,
    );
  }

  @Patch(':id')
  updatePoem(
    @Body() updatePoemDto: CreateUpdatePoemDto,
    @Param('id') id: number,
  ) {
    return this.poemService.updatePoem(updatePoemDto, id);
  }

  @Get()
  @UseGuards(JwtGuard)
  readAll() {
    return this.poemService.readAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  readOne(@Param('id') id: number) {
    return this.poemService.readById(id);
  }

  @Get(':categoryId')
  @UseGuards(JwtGuard)
  readByCategory(@Param('categoryId') categoryId: number) {
    return this.poemService.readByCategory(categoryId);
  }
}
