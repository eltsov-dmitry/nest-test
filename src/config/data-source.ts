import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from './db-config';
import { UsersEntity } from '../entities/users.entity';

export const AppDataSource = new DataSource({
  type: config.type,
  host: config.host,
  username: config.username,
  password: config.password,
  database: config.database,
  port: config.port,
  synchronize: true,
  logging: false,
  entities: [UsersEntity],
  migrations: ['src/migrations/*{.ts,.js}'],
});
