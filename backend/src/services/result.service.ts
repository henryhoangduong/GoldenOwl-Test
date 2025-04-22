import { AppDataSource } from '../config/database.config'
import { Result } from '../models/result.model'
import { User } from '../models/user.model'

export const getResultByStudentSBDService = async (sbd: string) => {
  const userRepository = AppDataSource.getRepository(User)
  const resultRepository = AppDataSource.getRepository(Result)
  const user = await userRepository.findOne({
    where: {
      sbd: sbd
    }
  })
  if (!user) {
    throw new Error('User not found')
  }
  const result = await resultRepository.findOne({
    where: {
      user: user
    }
  })
  return result
}
