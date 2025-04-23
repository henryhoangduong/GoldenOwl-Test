import { Router } from 'express'
import { AnalyticController } from '../controllers/analytic.controller'

export const analyticRouter = Router()
const analyticController = new AnalyticController()
analyticRouter.get('/overall', analyticController.overall)
analyticRouter.get('/best-students-group-a', analyticController.bestStudentsGroupA)
