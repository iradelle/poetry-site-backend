import { IsNotEmpty } from 'class-validator';

export class CreateUpdatePoem_categoryDto {
  @IsNotEmpty()
  poemId: number;

  @IsNotEmpty()
  categoryId: number;
}
