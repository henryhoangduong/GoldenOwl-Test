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
      <div className='p-6'>
        <SubjectSelect value={subject} onSelect={handleSelectSubject} />
      </div>
      <div className='w-1/3'>
        <DonutChart colorArray={COLORS1} data={dataBySubject} />
      </div>
      {scoreDist.length > 0 && <LineChart_ data={scoreDist} />}
      <div className='h-10' />
    </div>
  )
}

export default ReportsPage
