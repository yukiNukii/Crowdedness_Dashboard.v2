"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  { day: 'Monday', crowdedness: 65, visitors: 1200, avgStay: 2.5, revenue: 15000 },
  { day: 'Tuesday', crowdedness: 59, visitors: 1100, avgStay: 2.3, revenue: 13500 },
  { day: 'Wednesday', crowdedness: 80, visitors: 1500, avgStay: 2.8, revenue: 18000 },
  { day: 'Thursday', crowdedness: 81, visitors: 1600, avgStay: 2.7, revenue: 19000 },
  { day: 'Friday', crowdedness: 56, visitors: 1000, avgStay: 2.2, revenue: 12000 },
  { day: 'Saturday', crowdedness: 55, visitors: 900, avgStay: 2.0, revenue: 11000 },
  { day: 'Sunday', crowdedness: 40, visitors: 800, avgStay: 1.8, revenue: 9000 },
];

export default function CorrelationTable({ dataset }: { dataset: string }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Day</TableHead>
          <TableHead>Crowdedness</TableHead>
          <TableHead>Visitors</TableHead>
          <TableHead>Avg. Stay (hours)</TableHead>
          <TableHead>Revenue ($)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.day}>
            <TableCell>{row.day}</TableCell>
            <TableCell>{row.crowdedness}</TableCell>
            <TableCell>{row.visitors}</TableCell>
            <TableCell>{row.avgStay}</TableCell>
            <TableCell>{row.revenue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}