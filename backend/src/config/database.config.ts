import 'reflect-metadata'

import { DataSource } from 'typeorm'
import { config } from './app.config'
import { User } from '../models/user.model'
import { Result } from '../models/result.model'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.DATABASE_HOST,
  port: parseInt(config.DATABASE_PORT),
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Result],
  ssl: true
})
