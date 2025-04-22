import 'reflect-metadata'
import express, { Request, Response } from 'express'
import { config } from './config/app.config'
import { AppDataSource } from './config/database.config'
import { resultRouter } from './routes/result.routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/test', async (req: Request, res: Response) => {
  res.json({ message: 'hello world' })
})
app.use(
  cors({
    origin: config.FRONTEND_ORIGIN
  })
)
app.use('/api/result', resultRouter)

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
