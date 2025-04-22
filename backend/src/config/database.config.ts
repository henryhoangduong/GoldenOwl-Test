import { DataSource } from 'typeorm'
import { config } from './app.config'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.DATABASE_HOST,
  port: parseInt(config.DATABASE_PORT),
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/../**/*.model{.ts,.js}'],
  migrations: [],
  subscribers: []
})
