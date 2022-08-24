import { ApiPropertyOptions } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { ImageField } from '../../interfaces/block.interface';

export default class BlockSwagger {
  image: ApiPropertyOptions = {
    example: { src: 'path/to/image', alt: 'Image description' } as ImageField,
    description: 'Изображение',
  };
}
