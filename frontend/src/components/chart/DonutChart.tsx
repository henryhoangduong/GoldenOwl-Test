import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type ChartData = {
  name: string
  value: number
}

type RenderDoughnutChartProps = {
  data: ChartData[]
  colorArray: string[]
}
export const DonutChart = ({ data, colorArray }: RenderDoughnutChartProps) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          innerRadius={70}
          outerRadius={100}
          fill='#8884d8'
          dataKey='value'
          stroke='#fff'
          strokeWidth={3}
        >
          {/* Custom colors for each segment */}
          {data?.map((entry, index) => <Cell key={`cell-${index}`} fill={colorArray[index % colorArray.length]} />)}
        </Pie>
        <Tooltip />
        <Legend
          iconType='circle'
          layout='vertical'
          verticalAlign='top'
          fontSize={12}
          align='right'
          wrapperStyle={{
            top: '50%',
            right: 10,
            paddingLeft: 20,
            paddingTop: 20,
            transform: 'translateY(-50%)'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
