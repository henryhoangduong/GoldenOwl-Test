import { Router } from 'express'
export const resultRouter = Router()
import { ResultController } from '../controllers/result.controller'

const resultController = new ResultController()
resultRouter.get('/:sbd', resultController.getResultBySBD)
