import express, { Request, Response } from 'express'
import { config } from './config/app.config'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', async (req: Request, res: Response) => {
  res.json({ message: 'hello world' })
})

app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}`)
})
