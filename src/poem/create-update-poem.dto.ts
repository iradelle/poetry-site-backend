import { IsNotEmpty } from 'class-validator';

export class CreateUpdatePoemDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
}
