import { Request, Response } from 'express'
import { ResultService } from '../services/result.service'
import { HTTPSTATUS } from '../config/http.config'

/* eslint-disable  @typescript-eslint/no-explicit-any */
export class ResultController {
  private resultService: ResultService

  constructor() {
    this.resultService = new ResultService()
    this.getResultBySBD = this.getResultBySBD.bind(this)
  }

  public async getResultBySBD(req: Request, res: Response): Promise<any> {
    try {
      const result = await this.resultService.getResultByStudentSBD(req.params.sbd)
      return res.status(HTTPSTATUS.OK).json(result)
    } catch (error) {
      console.log(error)
      return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' })
    }
  }
}
