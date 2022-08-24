import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import UserSwagger from './swagger/user.swagger';
import ProjectSwagger from './swagger/project.swagger';
import BlockSwagger from './swagger/block.swagger';

class SwaggerPropertyOptions {
  id: ApiPropertyOptions = {
    example: 1,
    description: 'Уникальный идентификатор',
  };

  user = new UserSwagger();
  project = new ProjectSwagger();
  block = new BlockSwagger();
}

export const swaggerPropertyOptions = new SwaggerPropertyOptions();
