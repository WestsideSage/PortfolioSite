'use client';

import { Card } from '@/components/ui/card';
import { AreaChart } from '@tremor/react';

const data = [
  { date: '2024-01', visitors: 2890 },
  { date: '2024-02', visitors: 3200 },
  { date: '2024-03', visitors: 4100 },
  { date: '2024-04', visitors: 3780 },
  { date: '2024-05', visitors: 4500 },
];

export function VisitorsChart() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Monthly Visitors</h3>
      <AreaChart
        className="h-72"
        data={data}
        index="date"
        categories={['visitors']}
        colors={['blue']}
        valueFormatter={(value) => `${value.toLocaleString()} visitors`}
      />
    </Card>
  );
}
