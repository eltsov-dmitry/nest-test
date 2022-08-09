import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/db-config';
import { UsersEntity } from './entities/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      ...config,
      entities: [UsersEntity],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
