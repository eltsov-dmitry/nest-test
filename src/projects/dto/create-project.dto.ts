import { ApiProperty } from '@nestjs/swagger';
import { swaggerPropertyOptions as swagger } from '../../libs/swagger-property-options';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { messages } from '../../libs/messages';

export class CreateProjectDto {
  @ApiProperty(swagger.project.title)
  @IsString({ message: messages.isString })
  @IsOptional()
  title: string;

  @ApiProperty(swagger.project.user_id)
  @IsNumber({}, { message: messages.isNumber })
  @IsNotEmpty({ message: messages.IsNotEmpty })
  user_id: number;
}
