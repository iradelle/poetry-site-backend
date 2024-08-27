import { Module } from '@nestjs/common';
import { PoemController } from './poem.controller';
import { PoemService } from './poem.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoemEntity } from './poem.entity';
import { PoemCategoryEntity } from '../poem_category/poem-category.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PoemEntity, PoemCategoryEntity]),
    AuthModule,
  ],
  controllers: [PoemController],
  providers: [PoemService],
})
export class PoemModule {}
