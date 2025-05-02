"use client"

import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "lucide-react"
import { DashboardCard } from "./dashboard-card"

interface MetricCardProps {
  title: string
  value: string
  description: string
  trend: "up" | "down" | "neutral"
  trendValue: string
}

function MetricCard({ title, value, description, trend, trendValue }: MetricCardProps) {
  return (
    <DashboardCard title={title}>
      <div className="p-4">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <div
          className={`flex items-center mt-2 text-xs font-medium ${
            trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-600"
          }`}
        >
          {trend === "up" ? (
            <ArrowUpIcon className="h-3 w-3 mr-1" />
          ) : trend === "down" ? (
            <ArrowDownIcon className="h-3 w-3 mr-1" />
          ) : (
            <ArrowRightIcon className="h-3 w-3 mr-1" />
          )}
          <span>{trendValue} from previous period</span>
        </div>
      </div>
    </DashboardCard>
  )
}

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Revenue"
        value="$68,500"
        description="Total revenue for the current period"
        trend="up"
        trendValue="+12.5%"
      />
      <MetricCard
        title="Active Customers"
        value="510"
        description="Number of active customers"
        trend="up"
        trendValue="+7.2%"
      />
      <MetricCard
        title="Churn Rate"
        value="1.0%"
        description="Customer churn rate for the period"
        trend="down"
        trendValue="-0.3%"
      />
      <MetricCard
        title="Avg. Order Value"
        value="$134.25"
        description="Average value per order"
        trend="up"
        trendValue="+4.8%"
      />
    </div>
  )
}
