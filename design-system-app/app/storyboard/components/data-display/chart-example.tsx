"use client"

import { useState } from "react"
import { 
  Bar, 
  BarChart, 
  Line, 
  LineChart,
  Pie,
  PieChart,
  Area,
  AreaChart,
  RadialBar,
  RadialBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  PolarAngleAxis,
  RadialBarProps,
  Radar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  ComposedChart,
  ReferenceLine,
  Tooltip
} from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { cn } from "@/lib/utils"

const chartData = [
  { month: "January", desktop: 186, mobile: 80, revenue: 2400 },
  { month: "February", desktop: 305, mobile: 200, revenue: 3200 },
  { month: "March", desktop: 237, mobile: 120, revenue: 2800 },
  { month: "April", desktop: 73, mobile: 190, revenue: 2100 },
  { month: "May", desktop: 209, mobile: 130, revenue: 2900 },
  { month: "June", desktop: 214, mobile: 140, revenue: 3100 },
]

// Chart colors use the design system's chart-specific color tokens
// These are optimized for data visualization with proper contrast
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

const pieData = [
  { name: "Chrome", value: 65, fill: "hsl(var(--chart-1))" },
  { name: "Safari", value: 20, fill: "hsl(var(--chart-2))" },
  { name: "Firefox", value: 10, fill: "hsl(var(--chart-3))" },
  { name: "Edge", value: 5, fill: "hsl(var(--chart-4))" },
]

const radarData = [
  { skill: "React", A: 90, B: 85, fullMark: 100 },
  { skill: "TypeScript", A: 85, B: 90, fullMark: 100 },
  { skill: "CSS", A: 80, B: 75, fullMark: 100 },
  { skill: "Node.js", A: 75, B: 80, fullMark: 100 },
  { skill: "Testing", A: 70, B: 85, fullMark: 100 },
]

export function ChartExample() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoveredBar, setHoveredBar] = useState<string | null>(null)
  const [selectedSlice, setSelectedSlice] = useState<number | null>(null)

  const handleMouseEnter = (data: any, index: number) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  const handleBarMouseEnter = (data: any) => {
    setHoveredBar(`${data.month}-${data.dataKey}`)
  }

  const handleBarMouseLeave = () => {
    setHoveredBar(null)
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Chart</h2>
        <p className="text-muted-foreground mb-6">
          Interactive data visualization components with hover effects and animations.
        </p>
      </div>

      {/* Interactive Bar Chart */}
      <PreviewContainer
        title="Interactive Bar Chart"
        description="Bar chart with hover effects and smooth transitions"
        code={`const [hoveredBar, setHoveredBar] = useState<string | null>(null)

return (
  <ChartContainer config={chartConfig} className="h-[350px]">
    <BarChart data={chartData}>
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <YAxis tickLine={false} axisLine={false} />
      <ChartTooltip 
        content={<ChartTooltipContent />}
        cursor={{ fill: 'hsl(var(--muted)/0.1)' }}
      />
      <ChartLegend content={<ChartLegendContent />} />
      <Bar 
        dataKey="desktop" 
        fill="var(--color-desktop)" 
        radius={[8, 8, 0, 0]}
        animationDuration={300}
        onMouseEnter={(data) => setHoveredBar(\`\${data.month}-desktop\`)}
        onMouseLeave={() => setHoveredBar(null)}
      />
      <Bar 
        dataKey="mobile" 
        fill="var(--color-mobile)" 
        radius={[8, 8, 0, 0]}
        animationDuration={300}
        onMouseEnter={(data) => setHoveredBar(\`\${data.month}-mobile\`)}
        onMouseLeave={() => setHoveredBar(null)}
      />
    </BarChart>
  </ChartContainer>
)`}
        component={
          <ChartContainer config={chartConfig} className="h-[350px]">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-border/50" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                cursor={{ fill: 'hsl(var(--muted)/0.1)' }}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar 
                dataKey="desktop" 
                fill="var(--color-desktop)" 
                radius={[8, 8, 0, 0]}
                animationDuration={300}
                onMouseEnter={handleBarMouseEnter}
                onMouseLeave={handleBarMouseLeave}
                className="cursor-pointer transition-opacity hover:opacity-80"
              />
              <Bar 
                dataKey="mobile" 
                fill="var(--color-mobile)" 
                radius={[8, 8, 0, 0]}
                animationDuration={300}
                onMouseEnter={handleBarMouseEnter}
                onMouseLeave={handleBarMouseLeave}
                className="cursor-pointer transition-opacity hover:opacity-80"
              />
            </BarChart>
          </ChartContainer>
        }
      />

      {/* Interactive Line Chart */}
      <PreviewContainer
        title="Interactive Line Chart"
        description="Line chart with animated dots and hover highlights"
        code={`<ChartContainer config={chartConfig} className="h-[350px]">
  <LineChart data={chartData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
    <YAxis tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Line
      type="monotone"
      dataKey="desktop"
      stroke="var(--color-desktop)"
      strokeWidth={3}
      dot={{ r: 6 }}
      activeDot={{ r: 8, className: "animate-pulse" }}
      animationDuration={500}
    />
    <Line
      type="monotone"
      dataKey="mobile"
      stroke="var(--color-mobile)"
      strokeWidth={3}
      dot={{ r: 6 }}
      activeDot={{ r: 8, className: "animate-pulse" }}
      animationDuration={500}
    />
  </LineChart>
</ChartContainer>`}
        component={
          <ChartContainer config={chartConfig} className="h-[350px]">
            <LineChart 
              data={chartData}
              onMouseMove={(e) => {
                if (e && e.activeTooltipIndex !== undefined) {
                  setActiveIndex(e.activeTooltipIndex)
                }
              }}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="desktop"
                stroke="var(--color-desktop)"
                strokeWidth={3}
                dot={{ r: 6, className: "transition-all duration-200" }}
                activeDot={{ r: 8, className: "animate-pulse" }}
                animationDuration={500}
              />
              <Line
                type="monotone"
                dataKey="mobile"
                stroke="var(--color-mobile)"
                strokeWidth={3}
                dot={{ r: 6, className: "transition-all duration-200" }}
                activeDot={{ r: 8, className: "animate-pulse" }}
                animationDuration={500}
              />
            </LineChart>
          </ChartContainer>
        }
      />

      {/* Interactive Area Chart */}
      <PreviewContainer
        title="Stacked Area Chart"
        description="Area chart with gradient fills and smooth animations"
        code={`<ChartContainer config={chartConfig} className="h-[350px]">
  <AreaChart data={chartData}>
    <defs>
      <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1}/>
      </linearGradient>
      <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1}/>
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" tickFormatter={(value) => value.slice(0, 3)} />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Area
      type="monotone"
      dataKey="desktop"
      stackId="1"
      stroke="var(--color-desktop)"
      fill="url(#colorDesktop)"
      animationDuration={600}
    />
    <Area
      type="monotone"
      dataKey="mobile"
      stackId="1"
      stroke="var(--color-mobile)"
      fill="url(#colorMobile)"
      animationDuration={600}
    />
  </AreaChart>
</ChartContainer>`}
        component={
          <ChartContainer config={chartConfig} className="h-[350px]">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                type="monotone"
                dataKey="desktop"
                stackId="1"
                stroke="var(--color-desktop)"
                fill="url(#colorDesktop)"
                animationDuration={600}
                className="cursor-pointer"
              />
              <Area
                type="monotone"
                dataKey="mobile"
                stackId="1"
                stroke="var(--color-mobile)"
                fill="url(#colorMobile)"
                animationDuration={600}
                className="cursor-pointer"
              />
            </AreaChart>
          </ChartContainer>
        }
      />

      {/* Interactive Pie Chart */}
      <PreviewContainer
        title="Interactive Pie Chart"
        description="Pie chart with click selection and hover scaling"
        code={`const [selectedSlice, setSelectedSlice] = useState<number | null>(null)

return (
  <ChartContainer config={chartConfig} className="h-[350px]">
    <PieChart>
      <ChartTooltip content={<ChartTooltipContent hideLabel />} />
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
        animationBegin={0}
        animationDuration={800}
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          name,
          percent,
          index
        }) => {
          const RADIAN = Math.PI / 180
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5
          const x = cx + radius * Math.cos(-midAngle * RADIAN)
          const y = cy + radius * Math.sin(-midAngle * RADIAN)
          
          return (
            <text 
              x={x} 
              y={y} 
              fill="white" 
              textAnchor={x > cx ? 'start' : 'end'} 
              dominantBaseline="central"
              className="text-xs font-medium"
            >
              {\`\${name} \${(percent * 100).toFixed(0)}%\`}
            </text>
          )
        }}
      >
        {pieData.map((entry, index) => (
          <Cell 
            key={\`cell-\${index}\`} 
            fill={entry.fill}
            className={cn(
              "cursor-pointer transition-all duration-200",
              selectedSlice === index ? "opacity-100" : "opacity-80 hover:opacity-100"
            )}
            onClick={() => setSelectedSlice(index === selectedSlice ? null : index)}
          />
        ))}
      </Pie>
    </PieChart>
  </ChartContainer>
)`}
        component={
          <ChartContainer config={chartConfig} className="h-[350px]">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                animationBegin={0}
                animationDuration={800}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  name,
                  percent,
                  index
                }) => {
                  const RADIAN = Math.PI / 180
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)
                  
                  // Use white text for better contrast on colored backgrounds
                  return (
                    <text 
                      x={x} 
                      y={y} 
                      fill="white" 
                      textAnchor={x > cx ? 'start' : 'end'} 
                      dominantBaseline="central"
                      className="text-xs font-medium"
                    >
                      {`${name} ${(percent * 100).toFixed(0)}%`}
                    </text>
                  )
                }}
              >
                {pieData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.fill}
                    className={cn(
                      "cursor-pointer transition-all duration-200",
                      selectedSlice === index ? "opacity-100 scale-105" : "opacity-80 hover:opacity-100"
                    )}
                    onClick={() => setSelectedSlice(index === selectedSlice ? null : index)}
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        }
      />

      {/* Radar Chart */}
      <PreviewContainer
        title="Interactive Radar Chart"
        description="Radar chart for skill comparison with hover effects"
        code={`<ChartContainer config={chartConfig} className="h-[350px]">
  <RadarChart data={radarData}>
    <PolarGrid radialLines={false} />
    <PolarAngleAxis dataKey="skill" />
    <PolarRadiusAxis angle={90} domain={[0, 100]} />
    <Radar
      name="Developer A"
      dataKey="A"
      stroke="var(--color-desktop)"
      fill="var(--color-desktop)"
      fillOpacity={0.3}
      strokeWidth={2}
      animationDuration={800}
      className="hover:fillOpacity-50 transition-all"
    />
    <Radar
      name="Developer B"
      dataKey="B"
      stroke="var(--color-mobile)"
      fill="var(--color-mobile)"
      fillOpacity={0.3}
      strokeWidth={2}
      animationDuration={800}
      className="hover:fillOpacity-50 transition-all"
    />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
  </RadarChart>
</ChartContainer>`}
        component={
          <ChartContainer config={chartConfig} className="h-[350px]">
            <RadarChart data={radarData}>
              <PolarGrid radialLines={false} className="stroke-border/50" />
              <PolarAngleAxis dataKey="skill" className="text-xs" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} className="text-xs" />
              <Radar
                name="Developer A"
                dataKey="A"
                stroke="var(--color-desktop)"
                fill="var(--color-desktop)"
                fillOpacity={0.3}
                strokeWidth={2}
                animationDuration={800}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Radar
                name="Developer B"
                dataKey="B"
                stroke="var(--color-mobile)"
                fill="var(--color-mobile)"
                fillOpacity={0.3}
                strokeWidth={2}
                animationDuration={800}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
            </RadarChart>
          </ChartContainer>
        }
      />

      {/* Composed Chart */}
      <PreviewContainer
        title="Composed Chart"
        description="Combined bar and line chart with multiple data types"
        code={`<ChartContainer config={chartConfig} className="h-[350px]">
  <ComposedChart data={chartData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" tickFormatter={(value) => value.slice(0, 3)} />
    <YAxis yAxisId="left" />
    <YAxis yAxisId="right" orientation="right" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar 
      yAxisId="left"
      dataKey="desktop" 
      fill="var(--color-desktop)" 
      radius={[8, 8, 0, 0]}
      animationDuration={300}
    />
    <Bar 
      yAxisId="left"
      dataKey="mobile" 
      fill="var(--color-mobile)" 
      radius={[8, 8, 0, 0]}
      animationDuration={300}
    />
    <Line
      yAxisId="right"
      type="monotone"
      dataKey="revenue"
      stroke="var(--color-revenue)"
      strokeWidth={3}
      dot={{ r: 6 }}
      activeDot={{ r: 8, className: "animate-pulse" }}
    />
  </ComposedChart>
</ChartContainer>`}
        component={
          <ChartContainer config={chartConfig} className="h-[350px]">
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis yAxisId="left" tickLine={false} axisLine={false} />
              <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar 
                yAxisId="left"
                dataKey="desktop" 
                fill="var(--color-desktop)" 
                radius={[8, 8, 0, 0]}
                animationDuration={300}
                className="cursor-pointer hover:opacity-80"
              />
              <Bar 
                yAxisId="left"
                dataKey="mobile" 
                fill="var(--color-mobile)" 
                radius={[8, 8, 0, 0]}
                animationDuration={300}
                className="cursor-pointer hover:opacity-80"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                strokeWidth={3}
                dot={{ r: 6, className: "transition-all duration-200" }}
                activeDot={{ r: 8, className: "animate-pulse" }}
              />
              <ReferenceLine 
                yAxisId="right" 
                y={2500} 
                stroke="hsl(var(--muted-foreground))" 
                strokeDasharray="5 5"
                label="Target"
              />
            </ComposedChart>
          </ChartContainer>
        }
      />
    </section>
  )
}