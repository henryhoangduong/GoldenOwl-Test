import { Request, Response } from 'express'
import { AnalyticeService } from '../services/analytic.service'
import { HTTPSTATUS } from '../config/http.config'

export class AnalyticController {
  private analyticService: AnalyticeService

  constructor() {
    this.analyticService = new AnalyticeService()
    this.overall = this.overall.bind(this)
    this.bestStudentsGroupA = this.bestStudentsGroupA.bind(this)
  }
  public async overall(req: Request, res: Response): Promise<any> {
    const result = await this.analyticService.overall()
    return res.status(HTTPSTATUS.OK).json(result)
  }
  public async bestStudentsGroupA(req: Request, res: Response): Promise<any> {
    try {
      const result = await this.analyticService.bestStudentsGroupA()
      return res.status(HTTPSTATUS.OK).json(result)
    } catch (error) {
      console.log(error)
      return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' })
    }
  }
}
