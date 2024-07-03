import { IsNotEmpty } from 'class-validator';

export class CreateUpdateCategoryDto {
  @IsNotEmpty()
  content: string;
}
