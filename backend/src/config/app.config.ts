import { getEnv } from '../utils/get-env'
import 'dotenv/config'

const appConfig = () => ({
  NODE_ENV: getEnv('NODE_ENV', 'development'),
  PORT: getEnv('PORT', '5000')
})

export const config = appConfig()
