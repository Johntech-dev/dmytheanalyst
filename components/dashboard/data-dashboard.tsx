"use client"

import { useState } from "react"
import { Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { OverviewChart } from "./overview-chart"
import { MetricsCards } from "./metrics-cards"
import { CustomerSourceChart } from "./pie-chart"
import { DashboardCard } from "./dashboard-card"

export function DataDashboard() {
  const [dateRange, setDateRange] = useState("This Year")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Interactive visualization of business performance metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{dateRange}</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <Filter className="h-3.5 w-3.5" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </div>

      <MetricsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Performance Overview"
          description="Revenue, customers, and churn rate trends"
          className="lg:col-span-2"
        >
          <div className="p-4">
            <OverviewChart />
          </div>
        </DashboardCard>

        <CustomerSourceChart />
      </div>

      <Card className="p-4 bg-muted/50">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> This is a sample interactive dashboard showcasing data visualization skills. In real
          projects, I connect to actual data sources and create custom visualizations tailored to specific business
          needs and KPIs.
        </p>
      </Card>
    </div>
  )
}
