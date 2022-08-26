import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export default class BlockSwagger {
  image: ApiPropertyOptions = {
    example: 'path/to/image',
    description: 'Изображение',
  };
}
