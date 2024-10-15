"use client"

import { ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  {
    day: "Monday",
    min: 20,
    max: 80,
    median: 50,
    firstQuartile: 35,
    thirdQuartile: 65,
  },
  {
    day: "Tuesday",
    min: 25,
    max: 85,
    median: 55,
    firstQuartile: 40,
    thirdQuartile: 70,
  },
  {
    day: "Wednesday",
    min: 30,
    max: 90,
    median: 60,
    firstQuartile: 45,
    thirdQuartile: 75,
  },
  {
    day: "Thursday",
    min: 35,
    max: 95,
    median: 65,
    firstQuartile: 50,
    thirdQuartile: 80,
  },
  {
    day: "Friday",
    min: 40,
    max: 100,
    median: 70,
    firstQuartile: 55,
    thirdQuartile: 85,
  },
  {
    day: "Saturday",
    min: 45,
    max: 105,
    median: 75,
    firstQuartile: 60,
    thirdQuartile: 90,
  },
  {
    day: "Sunday",
    min: 50,
    max: 110,
    median: 80,
    firstQuartile: 65,
    thirdQuartile: 95,
  }
];

export default function BoxPlotChart({ dataset }: { dataset: string }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="min" fill="#8884d8" />
        <Bar dataKey="max" fill="#82ca9d" />
        <Bar dataKey="median" fill="#ffc658" />
        <Bar dataKey="firstQuartile" fill="#a4de6c" />
        <Bar dataKey="thirdQuartile" fill="#d0ed57" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}