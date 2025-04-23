import { Repository } from 'typeorm'
import { AppDataSource } from '../config/database.config'
import { Result } from '../models/result.model'
import { User } from '../models/user.model'

export class ResultService {
  private userRepository: Repository<User>
  private resultRepository: Repository<Result>

  constructor(
    userRepository: Repository<User> = AppDataSource.getRepository(User),
    resultRepository: Repository<Result> = AppDataSource.getRepository(Result)
  ) {
    this.userRepository = userRepository
    this.resultRepository = resultRepository
  }
  public async getResultByStudentSBD(sbd: string) {
    const user = await this.userRepository.findOne({
      where: { sbd }
    })

    if (!user) {
      throw new Error('User not found')
    }

    const result = await this.resultRepository.findOne({
      where: { user }
    })

    return result
  }
}
