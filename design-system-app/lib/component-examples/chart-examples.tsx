"use client"

import { ComponentExample } from "@/lib/component-docs"
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
  PolarAngleAxis
} from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export const chartExamples: ComponentExample[] = [
  {
    title: "Bar Chart",
    description: "A simple bar chart with multiple data series.",
    code: `const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

return (
  <ChartContainer config={chartConfig} className="h-[300px]">
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
    </BarChart>
  </ChartContainer>
)`,
    component: () => (
      <ChartContainer config={chartConfig} className="h-[300px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
  },
  {
    title: "Line Chart",
    description: "A line chart showing trends over time.",
    code: `return (
  <ChartContainer config={chartConfig} className="h-[300px]">
    <LineChart accessibilityLayer data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <YAxis
        tickLine={false}
        axisLine={false}
        tickMargin={8}
      />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Line
        dataKey="desktop"
        type="monotone"
        stroke="var(--color-desktop)"
        strokeWidth={2}
        dot={false}
      />
      <Line
        dataKey="mobile"
        type="monotone"
        stroke="var(--color-mobile)"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  </ChartContainer>
)`,
    component: () => (
      <ChartContainer config={chartConfig} className="h-[300px]">
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    )
  },
  {
    title: "Area Chart",
    description: "An area chart with gradient fill.",
    code: `return (
  <ChartContainer config={chartConfig} className="h-[300px]">
    <AreaChart accessibilityLayer data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="month"
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        tickFormatter={(value) => value.slice(0, 3)}
      />
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent indicator="dot" />}
      />
      <Area
        dataKey="mobile"
        type="natural"
        fill="var(--color-mobile)"
        fillOpacity={0.4}
        stroke="var(--color-mobile)"
      />
      <Area
        dataKey="desktop"
        type="natural"
        fill="var(--color-desktop)"
        fillOpacity={0.4}
        stroke="var(--color-desktop)"
      />
    </AreaChart>
  </ChartContainer>
)`,
    component: () => (
      <ChartContainer config={chartConfig} className="h-[300px]">
        <AreaChart accessibilityLayer data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Area
            dataKey="mobile"
            type="natural"
            fill="var(--color-mobile)"
            fillOpacity={0.4}
            stroke="var(--color-mobile)"
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="var(--color-desktop)"
            fillOpacity={0.4}
            stroke="var(--color-desktop)"
          />
        </AreaChart>
      </ChartContainer>
    )
  },
  {
    title: "Pie Chart",
    description: "A pie chart showing distribution.",
    code: `const pieData = [
  { name: "Desktop", value: 1260, fill: "var(--color-desktop)" },
  { name: "Mobile", value: 760, fill: "var(--color-mobile)" },
  { name: "Tablet", value: 450, fill: "hsl(var(--chart-3))" },
  { name: "Other", value: 230, fill: "hsl(var(--chart-4))" },
]

const pieConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

return (
  <ChartContainer
    config={pieConfig}
    className="mx-auto aspect-square max-h-[300px]"
  >
    <PieChart>
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      />
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        innerRadius={60}
        strokeWidth={5}
      >
        <Label
          content={({ viewBox }) => {
            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy}
                    className="fill-foreground text-3xl font-bold"
                  >
                    2,700
                  </tspan>
                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                    className="fill-muted-foreground"
                  >
                    Visitors
                  </tspan>
                </text>
              )
            }
          }}
        />
      </Pie>
    </PieChart>
  </ChartContainer>
)`,
    component: () => {
      const pieData = [
        { name: "Desktop", value: 1260, fill: "var(--color-desktop)" },
        { name: "Mobile", value: 760, fill: "var(--color-mobile)" },
        { name: "Tablet", value: 450, fill: "hsl(var(--chart-3))" },
        { name: "Other", value: 230, fill: "hsl(var(--chart-4))" },
      ]

      const pieConfig = {
        visitors: {
          label: "Visitors",
        },
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
        mobile: {
          label: "Mobile",
          color: "hsl(var(--chart-2))",
        },
      } satisfies ChartConfig

      return (
        <ChartContainer
          config={pieConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      )
    }
  },
  {
    title: "Radial Chart",
    description: "A radial bar chart for single metrics.",
    code: `const radialData = [
  {
    name: "Progress",
    value: 75,
    fill: "var(--color-desktop)",
  },
]

return (
  <ChartContainer
    config={chartConfig}
    className="mx-auto aspect-square max-h-[300px]"
  >
    <RadialBarChart
      data={radialData}
      startAngle={90}
      endAngle={-270}
      innerRadius={80}
      outerRadius={110}
    >
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel nameKey="name" />}
      />
      <RadialBar dataKey="value" background cornerRadius={10} />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-foreground text-3xl font-bold"
      >
        {radialData[0].value}%
      </text>
    </RadialBarChart>
  </ChartContainer>
)`,
    component: () => {
      const progressValue = 75;
      const radialData = [
        {
          name: "Progress", 
          value: progressValue,
          fill: "var(--color-desktop)",
        },
      ]

      // Calculate the end angle based on the percentage
      // 90 degrees is the start (12 o'clock), and we go clockwise
      // For 100%, we want to go full circle back to 90 degrees (450 total)
      // For 75%, we want to go 75% of 360 degrees = 270 degrees
      const endAngle = 90 - (progressValue * 3.6); // 90 - 270 = -180

      return (
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadialBarChart
            data={radialData}
            startAngle={90}
            endAngle={endAngle}
            innerRadius={80}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="name" />}
            />
            <RadialBar 
              dataKey="value" 
              background
              cornerRadius={10}
              fill="var(--color-desktop)"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-3xl font-bold"
            >
              {progressValue}%
            </text>
          </RadialBarChart>
        </ChartContainer>
      )
    }
  },
  {
    title: "Mixed Chart",
    description: "Combining bar and line charts.",
    code: `const mixedData = [
  { month: "Jan", revenue: 4000, profit: 2400 },
  { month: "Feb", revenue: 3000, profit: 1398 },
  { month: "Mar", revenue: 2000, profit: 9800 },
  { month: "Apr", revenue: 2780, profit: 3908 },
  { month: "May", revenue: 1890, profit: 4800 },
  { month: "Jun", revenue: 2390, profit: 3800 },
]

const mixedConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

return (
  <ChartContainer config={mixedConfig} className="h-[300px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={mixedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="revenue"
          fill="var(--color-revenue)"
          radius={[8, 8, 0, 0]}
        />
        <Line
          type="monotone"
          dataKey="profit"
          stroke="var(--color-profit)"
          strokeWidth={2}
          dot={{ fill: "var(--color-profit)" }}
        />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
)`,
    component: () => {
      const mixedData = [
        { month: "Jan", revenue: 4000, profit: 2400 },
        { month: "Feb", revenue: 3000, profit: 1398 },
        { month: "Mar", revenue: 2000, profit: 9800 },
        { month: "Apr", revenue: 2780, profit: 3908 },
        { month: "May", revenue: 1890, profit: 4800 },
        { month: "Jun", revenue: 2390, profit: 3800 },
      ]

      const mixedConfig = {
        revenue: {
          label: "Revenue",
          color: "hsl(var(--chart-1))",
        },
        profit: {
          label: "Profit",
          color: "hsl(var(--chart-2))",
        },
      } satisfies ChartConfig

      return (
        <ChartContainer config={mixedConfig} className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mixedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="revenue"
                fill="var(--color-revenue)"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      )
    }
  }
]