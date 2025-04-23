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
      average: (result.toan + result.vat_li + result.hoa_hoc) / 3,
      sbd: result.user.sbd
    }))
  }
  public async subjectPerformance() {
    const subjects = ['toan', 'vat_li', 'hoa_hoc', 'sinh_hoc', 'ngoai_ngu', 'lich_su', 'dia_li', 'ngu_van', 'gdcd']
    const chartData: Record<string, { excellent: number; good: number; average: number; poor: number }> = {}

    for (const subject of subjects) {
      const qb = this.resultRepository.createQueryBuilder('result')

      const [excellent, good, average, poor] = await Promise.all([
        qb.where(`result.${subject} >= 8`).getCount(),
        qb.where(`result.${subject} >= 6 AND result.${subject} < 8`).getCount(),
        qb.where(`result.${subject} >= 4 AND result.${subject} < 6`).getCount(),
        qb.where(`result.${subject} < 4`).getCount()
      ])

      chartData[subject] = {
        excellent,
        good,
        average,
        poor
      }
    }

    return chartData
  }

  public async getScoreDistributionBySubject(subject: string) {
    const marks = await this.resultRepository
      .createQueryBuilder('result')
      .select(`result.${subject}`, 'score')
      .where(`result.${subject} IS NOT NULL`)
      .getRawMany<{ score: number }>()

    const buckets = Array.from({ length: 10 }, (_, i) => {
      const min = i
      const max = i + 1
      return {
        range: `${min}-${max}`,
        frequency: 0
      }
    })

    for (const { score } of marks) {
      const index = Math.min(Math.floor(score), 9)
      buckets[index].frequency++
    }

    return buckets
  }
  public async getTopStudentBySubject(subject: string, limit: number = 5) {
    const students = await this.resultRepository
      .createQueryBuilder('result')
      .leftJoinAndSelect('result.user', 'user')
      .where(`result.${subject} IS NOT NULL`)
      .orderBy(`result.${subject}`, 'DESC')
      .limit(limit)
      .getMany()

    return students
  }
}
