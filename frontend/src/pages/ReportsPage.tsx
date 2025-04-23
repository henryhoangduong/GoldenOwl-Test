import { DonutChart } from '@/components/chart/DonutChart'
import LineChart_ from '@/components/chart/LineChart'
import SubjectSelect from '@/components/SubjectSelect'
import { getSubjectPerformance } from '@/services'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getScoreDistributionBySubject } from '@/services/index'
const COLORS1 = ['#5A6ACF', '#8593ED', '#C7CEFF', '#E0E4FF']

const chartDataReshape = (data: { data: { [key: string]: string } }) => {
  return Object.entries(data.data).map(([key, value]) => ({
    name: key,
    value: Number(value)
  }))
}

const ReportsPage = () => {
  // data for donut chart
  const [data, setData] = useState<{ [key: string]: { [key: string]: string } }>({})
  // data for line chart
  const [scoreDist, setScoreDist] = useState([])

  const [loading, setLoading] = useState(false)
  const [subject, setSubject] = useState('toan')
  const [dataBySubject, setDataBySubject] = useState<{ name: string; value: number }[]>([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await getSubjectPerformance()
      const getScoreDistributionBySubjectData = await getScoreDistributionBySubject(subject)
      if (result) {
        setData(result)
      }
      if (getScoreDistributionBySubjectData.length > 0) {
        setScoreDist(getScoreDistributionBySubjectData)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
  // on subject state change
  useEffect(() => {
    if (data && subject in data) {
      setDataBySubject(chartDataReshape({ data: data[subject] }))

      const fetchScoreDist = async () => {
        const getScoreDistributionBySubjectData = await getScoreDistributionBySubject(subject)
        if (getScoreDistributionBySubjectData.length > 0) {
          setScoreDist(getScoreDistributionBySubjectData)
        }
      }

      fetchScoreDist()
    }
  }, [data, subject])

  const handleSelectSubject = (value: string) => {
    setSubject(value)
  }
  if (loading) return <Loader2 className='animate-spin left-1/2 relative mt-10' />

  return (
    <div className='flex flex-col'>
      <div className='w-ful flex-row flex justify-between items-center p-6'>
        <p className='text-[24px] font-[500px]'> Hello, superstar teacher 🌟</p>
        <SubjectSelect value={subject} onSelect={handleSelectSubject} />
      </div>
      {/* 2 columns divided by a vertical line */}
      <div className='flex flex-row gap-2  items-start mt-10'>
        {/* Column 1 */}
        <div className='w-1/3 border-r-1'>
          <div className='w-full flex flex-col gap-2'>
            <h3 className='text-[14px] font-[500px] relative  text-left ml-10'>Subject Performance Breakdown</h3>
            <DonutChart colorArray={COLORS1} data={dataBySubject} />
          </div>
        </div>
        {/* Column 2 */}
        <div>
          <div className='w-max'>
            <h3 className='text-[14px] font-[500px] relative ml-10  text-left'>Score Distribution</h3>
            <div className='mt-10'>{scoreDist.length > 0 && <LineChart_ data={scoreDist} />}</div>
          </div>
        </div>
      </div>
      <div className='h-10' />
    </div>
  )
}

export default ReportsPage
