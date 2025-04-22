import { getEnv } from '../utils/get-env'
import 'dotenv/config'

const appConfig = () => ({
  NODE_ENV: getEnv('NODE_ENV', 'development'),
  PORT: getEnv('PORT', '5000'),

  DATABASE_HOST: getEnv('DATABASE_HOST'),
  DATABASE_PASSWORD: getEnv('DATABASE_PASSWORD'),
  DATABASE_USERNAME: getEnv('DATABASE_USERNAME'),
  DATABASE_PORT: getEnv('DATABASE_PORT'),
  DATABASE_TYPE: getEnv('DATABASE_TYPE'),
  DATABASE_NAME: getEnv('DATABASE_NAME')
})

export const config = appConfig()
