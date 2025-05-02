"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
  LineChart,
  type TooltipProps,
} from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data for the chart
const data = [
  { month: "Jan", revenue: 4000, customers: 240, churn: 2.4 },
  { month: "Feb", revenue: 3000, customers: 198, churn: 2.1 },
  { month: "Mar", revenue: 5000, customers: 300, churn: 1.8 },
  { month: "Apr", revenue: 4500, customers: 270, churn: 2.2 },
  { month: "May", revenue: 6000, customers: 380, churn: 1.5 },
  { month: "Jun", revenue: 5500, customers: 340, churn: 1.9 },
  { month: "Jul", revenue: 7000, customers: 420, churn: 1.3 },
  { month: "Aug", revenue: 6500, customers: 390, churn: 1.6 },
  { month: "Sep", revenue: 8000, customers: 480, churn: 1.1 },
  { month: "Oct", revenue: 7500, customers: 450, churn: 1.4 },
  { month: "Nov", revenue: 9000, customers: 520, churn: 0.9 },
  { month: "Dec", revenue: 8500, customers: 510, churn: 1.0 },
]

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <Card className="border shadow-md">
        <CardContent className="p-3">
          <p className="font-medium text-sm">{label}</p>
          {payload.map((entry, index) => (
            <div key={`tooltip-${index}`} className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="font-medium">{entry.name}:</span>
              <span>
                {entry.name === "churn"
                  ? `${entry.value}%`
                  : entry.name === "revenue"
                    ? `$${Number(entry.value).toLocaleString()}`
                    : Number(entry.value).toLocaleString()}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }
  return null
}

export function OverviewChart() {
  const [chartType, setChartType] = useState<"revenue" | "customers" | "churn">("revenue")

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Tabs defaultValue="revenue" className="w-full" onValueChange={(value) => setChartType(value as any)}>
          <TabsList className="grid grid-cols-3 w-full sm:w-[400px]">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="churn">Churn Rate</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button variant="outline" size="sm">
            Filter
          </Button>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "churn" ? (
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 3]} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="churn"
                name="Churn Rate"
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis
                tickFormatter={(value) =>
                  chartType === "revenue" ? `$${(value / 1000).toFixed(0)}k` : value.toString()
                }
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey={chartType}
                name={chartType === "revenue" ? "Revenue" : "Customers"}
                fill={chartType === "revenue" ? "#8884d8" : "#82ca9d"}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
