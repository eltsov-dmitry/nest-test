import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { messages } from '../../../libs/messages';
import { swaggerPropertyOptions as swagger } from '../../../libs/swagger-property-options';

export class CreateProjectDto {
  @ApiProperty(swagger.project.title)
  @IsString({ message: 'title: ' + messages.isString })
  @IsOptional()
  title: string;

  @ApiProperty(swagger.project.user_id)
  @IsNumber({}, { message: 'user_id: ' + messages.isNumber })
  @IsNotEmpty({ message: 'user_id: ' + messages.IsNotEmpty })
  user_id: number;

  @ApiProperty(swagger.project.name_male)
  @IsString({ message: 'name_male: ' + messages.isString })
  @IsNotEmpty({ message: 'name_male: ' + messages.IsNotEmpty })
  name_male: string;

  @ApiProperty(swagger.project.name_female)
  @IsString({ message: 'name_female: ' + messages.isString })
  @IsNotEmpty({ message: 'name_female: ' + messages.IsNotEmpty })
  name_female: string;
}
