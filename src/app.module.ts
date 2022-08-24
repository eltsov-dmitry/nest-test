import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/db-config';
import { ProjectsModule } from './projects/projects.module';
import { BlockTopModule } from './blocks/block-top/block-top.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    ProjectsModule,
    BlockTopModule,
  ],
  providers: [],
})
export class AppModule {}
