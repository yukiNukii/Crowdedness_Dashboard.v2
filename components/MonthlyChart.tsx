"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const defaultData = [
  { month: 'Jan', crowdedness: 65 },
  { month: 'Feb', crowdedness: 59 },
  { month: 'Mar', crowdedness: 80 },
  { month: 'Apr', crowdedness: 81 },
  { month: 'May', crowdedness: 56 },
  { month: 'Jun', crowdedness: 55 },
  { month: 'Jul', crowdedness: 40 },
  { month: 'Aug', crowdedness: 50 },
  { month: 'Sep', crowdedness: 70 },
  { month: 'Oct', crowdedness: 75 },
  { month: 'Nov', crowdedness: 85 },
  { month: 'Dec', crowdedness: 90 },
];

export default function MonthlyChart({ dataset, data }: { dataset: string, data: any[] | null }) {
  const chartData = data || defaultData;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="crowdedness" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}