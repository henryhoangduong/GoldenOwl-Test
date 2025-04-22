import { Router } from 'express'
import { getResultByStudentSBDController } from '../controllers/result.controller'
export const resultRouter = Router()

resultRouter.get('/:sbd', getResultByStudentSBDController)
