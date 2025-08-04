import { ErrorBoundary } from "../components/ErrorBoundary";
import Link from "next/link";

export default function HomePage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nova Portfolio Dashboard
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to the modern dashboard built with Next.js, tRPC, and
              Drizzle ORM
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  Dashboard
                </h2>
                <p className="text-gray-600 mb-4">
                  Interactive analytics and data visualization powered by Tremor
                  React
                </p>
                <Link
                  href="/dashboard"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Dashboard
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  API Status
                </h2>
                <p className="text-gray-600 mb-4">
                  Check the status of connected services and APIs
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Hono API</span>
                    <span className="text-green-600 font-medium">● Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>FastAPI Service</span>
                    <span className="text-green-600 font-medium">● Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Database</span>
                    <span className="text-green-600 font-medium">
                      ● Connected
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Next.js 15",
                  "TypeScript",
                  "tRPC",
                  "Drizzle ORM",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Tremor React",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
