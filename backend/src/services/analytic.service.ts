import { Repository } from 'typeorm'
import { User } from '../models/user.model'
import { Result } from '../models/result.model'
import { AppDataSource } from '../config/database.config'

export class AnalyticeService {
  private userRepository: Repository<User>
  private resultRepository: Repository<Result>
  constructor(
    userRepository: Repository<User> = AppDataSource.getRepository(User),
    resultRepository: Repository<Result> = AppDataSource.getRepository(Result)
  ) {
    this.userRepository = userRepository
    this.resultRepository = resultRepository
  }

  public async overall() {
    const totalStudent = await this.userRepository.count()
    return { hocsinh: totalStudent, soMon: 9 }
  }
  public async bestStudentsGroupA(limit: number = 10) {
    const results = await this.resultRepository
      .createQueryBuilder('result')
      .innerJoinAndSelect('result.user', 'user')
      .addSelect(
        `(
          (result.toan + result.vat_li + result.hoa_hoc) / 3
        )`,
        'average'
      )
      .where('result.toan IS NOT NULL AND result.vat_li IS NOT NULL AND result.hoa_hoc IS NOT NULL')
      .orderBy('average', 'DESC')
      .limit(limit)
      .getMany()

    return results.map((result) => ({
      ...result,
      average: (result.toan + result.vat_li + result.hoa_hoc) / 3
    }))
  }
}
