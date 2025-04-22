import 'reflect-metadata'
import { AppDataSource } from '../config/database.config'
import { Result } from '../models/result.model'
import { User } from '../models/user.model'
import fs from 'fs'
import csvParser from 'csv-parser'
const results: { [key: string]: string }[] = []
fs.createReadStream('src/seed/data/diem_thi_thpt_2024.csv')
  .pipe(csvParser())
  .on('data', (data) => {
    if (results.length < 1000) {
      results.push(data)
    }
  })

const seed = async () => {
  try {
    await AppDataSource.initialize()
    console.log('📦 Data source initialized.')
    for (let i = 0; i < results.length; i++) {
      const user = AppDataSource.manager.create(User, {
        sbd: results[i].sbd
      })
      await AppDataSource.manager.save(user)
      const result = AppDataSource.manager.create(Result, {
        toan: parseFloat(results[i].toan),
        ngu_van: parseFloat(results[i].ngu_van),
        ngoai_ngu: parseFloat(results[i].ngoai_ngu),
        vat_li: parseFloat(results[i].vat_li),
        hoa_hoc: parseFloat(results[i].hoa_hoc),
        sinh_hoc: parseFloat(results[i].sinh_hoc),
        lich_su: parseFloat(results[i].lich_su),
        dia_li: parseFloat(results[i].dia_li),
        gdcd: parseFloat(results[i].gdcd),
        ma_ngoai_ngu: results[i].ma_ngoai_ngu,
        user
      })
      await AppDataSource.manager.save(result)
    }

    console.log('✅ Seeding completed.')
  } catch (err) {
    console.error('❌ Seeding failed:', err)
  } finally {
    await AppDataSource.destroy()
  }
}

seed()
