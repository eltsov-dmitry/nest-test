import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import { messages } from '../../libs/messages';
import { swaggerPropertyOptions as swagger } from '../../libs/swagger-property-options';

export class CreateUserDto {
  @ApiProperty(swagger.user.email)
  @IsString({ message: messages.isString })
  @IsEmail({}, { message: messages.isEmail })
  public email: string;

  @ApiProperty(swagger.user.password)
  @IsString({ message: messages.isString })
  @Length(4, 8, { message: messages.passwordRule })
  public password: string;
}
