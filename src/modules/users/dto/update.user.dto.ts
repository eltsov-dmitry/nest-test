import { ApiProperty } from '@nestjs/swagger';
import { swaggerPropertyOptions as swagger } from '../../../libs/swagger-property-options';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { messages } from '../../../libs/messages';

export class UpdateUserDto {
  @ApiProperty(swagger.user.email)
  @IsString({ message: messages.isString })
  @IsEmail({}, { message: messages.isEmail })
  @IsOptional()
  public email?: string;

  @ApiProperty(swagger.user.password)
  @Length(4, 8, { message: messages.passwordRule })
  @IsOptional()
  public password?: string;
}
