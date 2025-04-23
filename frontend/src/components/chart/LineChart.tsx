import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Line } from 'recharts'

type ScoreBucket = {
  range: string
  frequency: number
}

const LineChart_ = ({ data }: { data: ScoreBucket[] }) => {
  return (
    <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='range' />
      <YAxis allowDecimals={false} />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='frequency' stroke='#8884d8' />
    </LineChart>
  )
}

export default LineChart_
