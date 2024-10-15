"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', crowdedness: 65, visitors: 1200 },
  { day: 'Tue', crowdedness: 59, visitors: 1100 },
  { day: 'Wed', crowdedness: 80, visitors: 1500 },
  { day: 'Thu', crowdedness: 81, visitors: 1600 },
  { day: 'Fri', crowdedness: 56, visitors: 1000 },
  { day: 'Sat', crowdedness: 55, visitors: 900 },
  { day: 'Sun', crowdedness: 40, visitors: 800 },
];

export default function DailyBarChart({ dataset }: { dataset: string }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="crowdedness" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="visitors" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}