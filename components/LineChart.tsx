"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', Monday: 20, Tuesday: 25, Wednesday: 30, Thursday: 35, Friday: 40, Saturday: 45, Sunday: 50 },
  { time: '06:00', Monday: 30, Tuesday: 35, Wednesday: 40, Thursday: 45, Friday: 50, Saturday: 55, Sunday: 60 },
  { time: '12:00', Monday: 70, Tuesday: 75, Wednesday: 80, Thursday: 85, Friday: 90, Saturday: 95, Sunday: 100 },
  { time: '18:00', Monday: 50, Tuesday: 55, Wednesday: 60, Thursday: 65, Friday: 70, Saturday: 75, Sunday: 80 },
];

export default function HourlyLineChart({ dataset }: { dataset: string }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Monday" stroke="#8884d8" />
        <Line type="monotone" dataKey="Tuesday" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Wednesday" stroke="#ffc658" />
        <Line type="monotone" dataKey="Thursday" stroke="#ff7300" />
        <Line type="monotone" dataKey="Friday" stroke="#a4de6c" />
        <Line type="monotone" dataKey="Saturday" stroke="#d0ed57" />
        <Line type="monotone" dataKey="Sunday" stroke="#83a6ed" />
      </LineChart>
    </ResponsiveContainer>
  );
}