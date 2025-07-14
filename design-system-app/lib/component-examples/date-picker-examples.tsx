"use client"

import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import { addDays, subDays, startOfMonth, endOfMonth } from "date-fns"

export const datePickerExamples: ComponentExample[] = [
  {
    title: "Basic Date Picker",
    description: "Enhanced date picker with smooth calendar interactions and visual feedback.",
    code: `const [date, setDate] = useState<Date>()

return (
  <DatePicker
    date={date}
    onSelect={setDate}
    placeholder="Select a date"
  />
)`,
    component: () => {
      const [date, setDate] = useState<Date>()

      return (
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Select a date"
        />
      )
    }
  },
  {
    title: "With Default Date",
    description: "Date picker initialized with today's date.",
    code: `const [date, setDate] = useState<Date>(new Date())

return (
  <DatePicker
    date={date}
    onSelect={setDate}
    placeholder="Select a date"
  />
)`,
    component: () => {
      const [date, setDate] = useState<Date>(new Date())

      return (
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Select a date"
        />
      )
    }
  },
  {
    title: "Custom Format",
    description: "Date picker with custom date format.",
    code: `const [date, setDate] = useState<Date>()

return (
  <DatePicker
    date={date}
    onSelect={setDate}
    placeholder="Select date"
    formatStr="dd/MM/yyyy"
  />
)`,
    component: () => {
      const [date, setDate] = useState<Date>()

      return (
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Select date"
          formatStr="dd/MM/yyyy"
        />
      )
    }
  },
  {
    title: "Date Range Picker",
    description: "Enhanced date range picker with smooth selection animations.",
    code: `const [dateRange, setDateRange] = useState<{
  from: Date | undefined
  to: Date | undefined
}>({
  from: new Date(),
  to: addDays(new Date(), 7)
})

return (
  <DateRangePicker
    dateRange={dateRange}
    onSelect={setDateRange}
    placeholder="Select date range"
  />
)`,
    component: () => {
      const [dateRange, setDateRange] = useState<{
        from: Date | undefined
        to: Date | undefined
      }>({
        from: new Date(),
        to: addDays(new Date(), 7)
      })

      return (
        <DateRangePicker
          dateRange={dateRange}
          onSelect={setDateRange}
          placeholder="Select date range"
        />
      )
    }
  },
  {
    title: "With Disabled Dates",
    description: "Date picker with weekends and specific dates disabled.",
    code: `const [date, setDate] = useState<Date>()

// Disable weekends and next 3 days
const disabledDates = [
  { dayOfWeek: [0, 6] }, // Sundays and Saturdays
  addDays(new Date(), 1),
  addDays(new Date(), 2),
  addDays(new Date(), 3)
]

return (
  <DatePicker
    date={date}
    onSelect={setDate}
    placeholder="Pick a weekday"
    disabledDates={disabledDates}
  />
)`,
    component: () => {
      const [date, setDate] = useState<Date>()

      const disabledDates = [
        { dayOfWeek: [0, 6] },
        addDays(new Date(), 1),
        addDays(new Date(), 2),
        addDays(new Date(), 3)
      ]

      return (
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Pick a weekday"
          disabledDates={disabledDates}
        />
      )
    }
  },
  {
    title: "Date Range with Limits",
    description: "Date range picker with minimum and maximum date constraints.",
    code: `const [dateRange, setDateRange] = useState<{
  from: Date | undefined
  to: Date | undefined
}>()

// Allow selection only within current month
const fromDate = startOfMonth(new Date())
const toDate = endOfMonth(new Date())

return (
  <DateRangePicker
    dateRange={dateRange}
    onSelect={setDateRange}
    placeholder="Select dates in current month"
    fromDate={fromDate}
    toDate={toDate}
    numberOfMonths={1}
  />
)`,
    component: () => {
      const [dateRange, setDateRange] = useState<{
        from: Date | undefined
        to: Date | undefined
      }>()

      const fromDate = startOfMonth(new Date())
      const toDate = endOfMonth(new Date())

      return (
        <DateRangePicker
          dateRange={dateRange}
          onSelect={setDateRange}
          placeholder="Select dates in current month"
          fromDate={fromDate}
          toDate={toDate}
          numberOfMonths={1}
        />
      )
    }
  },
  {
    title: "Appointment Booking",
    description: "Date picker for appointment scheduling with past dates disabled.",
    code: `const [date, setDate] = useState<Date>()

// Disable past dates and weekends
const disabledDates = (date: Date) => {
  return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
         date.getDay() === 0 || 
         date.getDay() === 6
}

return (
  <div className="space-y-4">
    <DatePicker
      date={date}
      onSelect={setDate}
      placeholder="Choose appointment date"
      disabledDates={disabledDates}
    />
    {date && (
      <div className="rounded-md bg-success/10 p-3 text-sm">
        <p className="font-medium text-success">
          Appointment scheduled for:
        </p>
        <p className="text-success-foreground mt-1">
          {date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    )}
  </div>
)`,
    component: () => {
      const [date, setDate] = useState<Date>()

      const disabledDates = (date: Date) => {
        return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
               date.getDay() === 0 || 
               date.getDay() === 6
      }

      return (
        <div className="space-y-4">
          <DatePicker
            date={date}
            onSelect={setDate}
            placeholder="Choose appointment date"
            disabledDates={disabledDates}
          />
          {date && (
            <div className="rounded-md bg-success/10 p-3 text-sm">
              <p className="font-medium text-success">
                Appointment scheduled for:
              </p>
              <p className="text-success-foreground mt-1">
                {date.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          )}
        </div>
      )
    }
  },
  {
    title: "Travel Date Selection",
    description: "Date range picker for selecting travel dates with minimum stay requirement.",
    code: `const [dateRange, setDateRange] = useState<{
  from: Date | undefined
  to: Date | undefined
}>()

// Only allow future dates
const fromDate = addDays(new Date(), 1)

// Custom selection handler to ensure minimum 2 nights stay
const handleSelect = (range: any) => {
  if (range?.from && range?.to) {
    const nights = Math.ceil((range.to - range.from) / (1000 * 60 * 60 * 24))
    if (nights < 2) {
      // Automatically adjust end date for minimum stay
      setDateRange({
        from: range.from,
        to: addDays(range.from, 2)
      })
      return
    }
  }
  setDateRange(range)
}

return (
  <div className="space-y-4">
    <DateRangePicker
      dateRange={dateRange}
      onSelect={handleSelect}
      placeholder="Select check-in and check-out"
      fromDate={fromDate}
      formatStr="MMM dd"
    />
    {dateRange?.from && dateRange?.to && (
      <div className="rounded-md bg-info/10 p-3 text-sm">
        <p className="font-medium text-info">Travel Details:</p>
        <div className="mt-2 space-y-1 text-info-foreground">
          <p>Check-in: {dateRange.from.toLocaleDateString()}</p>
          <p>Check-out: {dateRange.to.toLocaleDateString()}</p>
          <p>Nights: {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))}</p>
        </div>
      </div>
    )}
    <p className="text-xs text-muted-foreground">
      * Minimum 2 nights stay required
    </p>
  </div>
)`,
    component: () => {
      const [dateRange, setDateRange] = useState<{
        from: Date | undefined
        to: Date | undefined
      }>()

      const fromDate = addDays(new Date(), 1)

      const handleSelect = (range: any) => {
        if (range?.from && range?.to) {
          const nights = Math.ceil((range.to - range.from) / (1000 * 60 * 60 * 24))
          if (nights < 2) {
            setDateRange({
              from: range.from,
              to: addDays(range.from, 2)
            })
            return
          }
        }
        setDateRange(range)
      }

      return (
        <div className="space-y-4">
          <DateRangePicker
            dateRange={dateRange}
            onSelect={handleSelect}
            placeholder="Select check-in and check-out"
            fromDate={fromDate}
            formatStr="MMM dd"
          />
          {dateRange?.from && dateRange?.to && (
            <div className="rounded-md bg-info/10 p-3 text-sm">
              <p className="font-medium text-info">Travel Details:</p>
              <div className="mt-2 space-y-1 text-info-foreground">
                <p>Check-in: {dateRange.from.toLocaleDateString()}</p>
                <p>Check-out: {dateRange.to.toLocaleDateString()}</p>
                <p>Nights: {Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))}</p>
              </div>
            </div>
          )}
          <p className="text-xs text-muted-foreground">
            * Minimum 2 nights stay required
          </p>
        </div>
      )
    }
  },
  {
    title: "Disabled State",
    description: "Date pickers in disabled state.",
    code: `return (
  <div className="space-y-4">
    <DatePicker
      date={new Date()}
      disabled={true}
      placeholder="Disabled date picker"
    />
    <DateRangePicker
      dateRange={{
        from: new Date(),
        to: addDays(new Date(), 7)
      }}
      disabled={true}
      placeholder="Disabled range picker"
    />
  </div>
)`,
    component: () => {
      return (
        <div className="space-y-4">
          <DatePicker
            date={new Date()}
            disabled={true}
            placeholder="Disabled date picker"
          />
          <DateRangePicker
            dateRange={{
              from: new Date(),
              to: addDays(new Date(), 7)
            }}
            disabled={true}
            placeholder="Disabled range picker"
          />
        </div>
      )
    }
  }
]