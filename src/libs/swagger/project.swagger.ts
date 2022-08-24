import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export default class ProjectSwagger {
  user_id: ApiPropertyOptions = {
    example: 1,
    description: 'Уникальный идентификатор Пользователя',
  };

  title: ApiPropertyOptions = {
    example: 'Мой первый проект',
    description: 'Заголовок',
  };

  name_male: ApiPropertyOptions = {
    example: 'Имя',
    description: 'Имя мужчины',
  };

  name_female: ApiPropertyOptions = {
    example: 'Имя',
    description: 'Имя женщины',
  };
}
