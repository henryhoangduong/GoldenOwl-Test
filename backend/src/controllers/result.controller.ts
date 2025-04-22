import { Request, Response } from 'express'

import { getResultByStudentSBDService } from '../services/result.service'
import { HTTPSTATUS } from '../config/http.config'
export const getResultByStudentSBDController = async (req: Request, res: Response): Promise<any> => {
  const result = await getResultByStudentSBDService(req.params.sbd)
  return res.status(HTTPSTATUS.OK).json(result)
}
