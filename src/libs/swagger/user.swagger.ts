import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export default class UserSwagger {
  email: ApiPropertyOptions = {
    example: 'example@mail.ru',
    description: 'Почта',
  };
  password: ApiPropertyOptions = { example: 'querty', description: 'Пароль' };
}
