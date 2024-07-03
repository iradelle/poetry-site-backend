import { IsNotEmpty } from 'class-validator';

export class CreateUpdatePoem_categoryDto {
  @IsNotEmpty()
  poem: string;

  @IsNotEmpty()
  category: string;
}
