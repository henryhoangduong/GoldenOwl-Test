import express, { NextFunction, Request, Response } from 'express'
import { config } from './config/app.config'
const app = express()
app.listen(config.PORT, async () => {})
