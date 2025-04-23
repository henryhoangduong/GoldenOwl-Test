import { Router } from 'express'
import { AnalyticController } from '../controllers/analytic.controller'

export const analyticRouter = Router()
const analyticController = new AnalyticController()

analyticRouter.get('/overall', analyticController.overall)
analyticRouter.get('/best-students-group-a', analyticController.bestStudentsGroupA)
analyticRouter.get('/subject-performance', analyticController.subjectPerformance)
analyticRouter.get('/subject-score-distibution/:subject', analyticController.getScoreDistributionBySubject)
analyticRouter.get('/top-students-by-subject', analyticController.getTopStudentBySubject)
