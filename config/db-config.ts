import { config } from 'dotenv';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { entities } from '../src/app.entities';

config();

class DatabaseConfig {
  public type = process.env
    .TYPEORM_CONNECTION as PostgresConnectionOptions['type'];
  public host: string = process.env.TYPEORM_HOST;
  public username: string = process.env.TYPEORM_USERNAME;
  public password: string = process.env.TYPEORM_PASSWORD;
  public database: string = process.env.TYPEORM_DATABASE;
  public port = Number(process.env.TYPEORM_PORT);
  public entities = entities;
  public logging = false;
}

export const databaseConfig = new DatabaseConfig();
