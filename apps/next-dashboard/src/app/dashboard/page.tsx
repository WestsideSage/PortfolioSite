import { VisitorsChart } from "@/components/VisitorsChart";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  const stats = [
    { name: "Total Projects", value: "12", change: "+2 this month" },
    { name: "Active Users", value: "2,849", change: "+12% from last month" },
    { name: "API Requests", value: "45.2K", change: "+8% from last week" },
    { name: "Uptime", value: "99.9%", change: "All systems operational" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your projects.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <VisitorsChart />

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">New project deployed</p>
                <p className="text-sm text-gray-500">Portfolio site updated</p>
              </div>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">API endpoint created</p>
                <p className="text-sm text-gray-500">GET /v1/projects</p>
              </div>
              <span className="text-sm text-gray-400">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Database backup completed</p>
                <p className="text-sm text-gray-500">Daily backup successful</p>
              </div>
              <span className="text-sm text-gray-400">1 day ago</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Service Status */}
      <Card className="p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Service Status</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <p className="font-medium">Hono API</p>
              <p className="text-sm text-gray-600">http://localhost:3003</p>
            </div>
            <span className="text-green-600 font-medium">● Online</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <p className="font-medium">FastAPI Service</p>
              <p className="text-sm text-gray-600">http://localhost:8000</p>
            </div>
            <span className="text-green-600 font-medium">● Online</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <p className="font-medium">Database</p>
              <p className="text-sm text-gray-600">PostgreSQL</p>
            </div>
            <span className="text-green-600 font-medium">● Connected</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
