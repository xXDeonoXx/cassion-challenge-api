import { IsNotEmpty } from 'class-validator';

export class CreatePublicationDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  subTitle: string;

  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  category: string;
}
