import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import express, { Request, Response } from 'express'
import { config } from './config/app.config'
import { AppDataSource } from './config/database.config'
import { swaggerOptions } from './config/swagger.config'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'hello world' })
})
const swaggerSpec = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`)
  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!')
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err)
    })
})
