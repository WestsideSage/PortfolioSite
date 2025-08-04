import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Portfolio Dashboard",
  description: "Modern dashboard built with Next.js, tRPC, and Drizzle ORM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-gray-900">
                  Nova Dashboard
                </h1>
              </div>
              <div className="flex items-center space-x-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
                <a
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </a>
                <a
                  href="http://localhost:3003/healthz"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                  rel="noreferrer"
                >
                  API Status
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
