import { VisitorsChart } from '@/components/VisitorsChart';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <VisitorsChart />
        {/* Add more charts/widgets here */}
      </div>
    </div>
  );
}
