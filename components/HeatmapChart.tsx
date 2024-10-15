"use client"

import { ResponsiveContainer, XAxis, YAxis, Tooltip, Rectangle, Scatter, ScatterChart } from 'recharts';

const data = [
  { day: 'Monday', '00:00': 10, '06:00': 20, '12:00': 60, '18:00': 40 },
  { day: 'Tuesday', '00:00': 15, '06:00': 25, '12:00': 65, '18:00': 45 },
  { day: 'Wednesday', '00:00': 20, '06:00': 30, '12:00': 70, '18:00': 50 },
  { day: 'Thursday', '00:00': 25, '06:00': 35, '12:00': 75, '18:00': 55 },
  { day: 'Friday', '00:00': 30, '06:00': 40, '12:00': 80, '18:00': 60 },
  { day: 'Saturday', '00:00': 35, '06:00': 45, '12:00': 85, '18:00': 65 },
  { day: 'Sunday', '00:00': 40, '06:00': 50, '12:00': 90, '18:00': 70 },
];

const times = ['00:00', '06:00', '12:00', '18:00'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const CustomizedRectangle = (props: any) => {
  const { x, y, width, height, value } = props;
  const radius = Math.min(width, height) / 2;

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={`rgba(0, 128, 255, ${value / 100})`}
      stroke="#fff"
      strokeWidth={2}
      rx={radius}
      ry={radius}
    />
  );
};

export default function HeatmapChart({ dataset }: { dataset: string }) {
  const formattedData = days.flatMap((day, dayIndex) =>
    times.map((time, timeIndex) => ({
      x: timeIndex,
      y: dayIndex,
      value: data[dayIndex][time as keyof typeof data[0]],
    }))
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 60,
        }}
      >
        <XAxis
          type="number"
          dataKey="x"
          name="time"
          ticks={[0, 1, 2, 3]}
          tickFormatter={(value) => times[value]}
        />
        <YAxis
          type="number"
          dataKey="y"
          name="day"
          ticks={[0, 1, 2, 3, 4, 5, 6]}
          tickFormatter={(value) => days[value]}
        />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          content={({ payload, label, active }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
                  <p>{`${days[data.y]}, ${times[data.x]}`}</p>
                  <p>{`Crowdedness: ${data.value}`}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Scatter data={formattedData} shape={<CustomizedRectangle />} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}