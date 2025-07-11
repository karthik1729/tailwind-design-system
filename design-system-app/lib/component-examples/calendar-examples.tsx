"use client"

import { Calendar } from "@/components/ui/calendar"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"

export const calendarExamples: ComponentExample[] = [
  {
    title: "Basic Calendar",
    description: "A simple calendar with single date selection.",
    code: `const [date, setDate] = useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
)`,
    component: () => {
      const [date, setDate] = useState<Date | undefined>(new Date())

      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      )
    }
  },
  {
    title: "Date Range Selection",
    description: "Calendar with date range selection mode.",
    code: `const [date, setDate] = useState<DateRange | undefined>({
  from: new Date(),
  to: addDays(new Date(), 7),
})

return (
  <div className="space-y-4">
    <Calendar
      mode="range"
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
      className="rounded-md border"
    />
    {date?.from && (
      <p className="text-sm text-muted-foreground">
        {date.to ? (
          <>
            {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
          </>
        ) : (
          format(date.from, "LLL dd, y")
        )}
      </p>
    )}
  </div>
)`,
    component: () => {
      const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 7),
      })

      return (
        <div className="space-y-4">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className="rounded-md border"
          />
          {date?.from && (
            <p className="text-sm text-muted-foreground">
              {date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )}
            </p>
          )}
        </div>
      )
    }
  },
  {
    title: "Multiple Selection",
    description: "Calendar allowing multiple date selection.",
    code: `const [dates, setDates] = useState<Date[] | undefined>([
  new Date(),
  addDays(new Date(), 2),
  addDays(new Date(), 5)
])

return (
  <div className="space-y-4">
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
    {dates && dates.length > 0 && (
      <div className="text-sm text-muted-foreground">
        <p className="font-medium">Selected dates:</p>
        <ul className="mt-2 space-y-1">
          {dates.map((date, i) => (
            <li key={i}>• {format(date, "PPP")}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
)`,
    component: () => {
      const [dates, setDates] = useState<Date[] | undefined>([
        new Date(),
        addDays(new Date(), 2),
        addDays(new Date(), 5)
      ])

      return (
        <div className="space-y-4">
          <Calendar
            mode="multiple"
            selected={dates}
            onSelect={setDates}
            className="rounded-md border"
          />
          {dates && dates.length > 0 && (
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Selected dates:</p>
              <ul className="mt-2 space-y-1">
                {dates.map((date, i) => (
                  <li key={i}>• {format(date, "PPP")}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }
  },
  {
    title: "Disabled Dates",
    description: "Calendar with specific dates disabled.",
    code: `const [date, setDate] = useState<Date | undefined>(new Date())

// Disable weekends and specific dates
const disabledDates = [
  { dayOfWeek: [0, 6] }, // Sundays and Saturdays
  addDays(new Date(), 1),
  addDays(new Date(), 2),
  { from: addDays(new Date(), 10), to: addDays(new Date(), 15) }
]

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    disabled={disabledDates}
    className="rounded-md border"
  />
)`,
    component: () => {
      const [date, setDate] = useState<Date | undefined>(new Date())

      const disabledDates = [
        { dayOfWeek: [0, 6] },
        addDays(new Date(), 1),
        addDays(new Date(), 2),
        { from: addDays(new Date(), 10), to: addDays(new Date(), 15) }
      ]

      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={disabledDates}
          className="rounded-md border"
        />
      )
    }
  },
  {
    title: "Multiple Months",
    description: "Calendar displaying multiple months.",
    code: `const [date, setDate] = useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    numberOfMonths={3}
    className="rounded-md border"
  />
)`,
    component: () => {
      const [date, setDate] = useState<Date | undefined>(new Date())

      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          numberOfMonths={3}
          className="rounded-md border"
        />
      )
    }
  },
  {
    title: "With Form Integration",
    description: "Calendar integrated with a form field.",
    code: `const [date, setDate] = useState<Date>()

return (
  <div className="space-y-4">
    <div className="grid gap-2">
      <label htmlFor="date" className="text-sm font-medium">
        Select a date
      </label>
      <div className="rounded-md border p-3">
        <p className="text-sm">
          {date ? format(date, "PPP") : "Pick a date"}
        </p>
      </div>
    </div>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      initialFocus
    />
  </div>
)`,
    component: () => {
      const [date, setDate] = useState<Date>()

      return (
        <div className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="date" className="text-sm font-medium">
              Select a date
            </label>
            <div className="rounded-md border p-3">
              <p className="text-sm">
                {date ? format(date, "PPP") : "Pick a date"}
              </p>
            </div>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            initialFocus
          />
        </div>
      )
    }
  },
  {
    title: "Custom Month Navigation",
    description: "Calendar with custom default month.",
    code: `const [date, setDate] = useState<Date | undefined>()

// Show December 2024 by default
const defaultMonth = new Date(2024, 11, 1)

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    defaultMonth={defaultMonth}
    className="rounded-md border"
  />
)`,
    component: () => {
      const [date, setDate] = useState<Date | undefined>()
      const defaultMonth = new Date(2024, 11, 1)

      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          defaultMonth={defaultMonth}
          className="rounded-md border"
        />
      )
    }
  },
  {
    title: "Appointment Booking",
    description: "Calendar for appointment booking with past dates disabled.",
    code: `const [date, setDate] = useState<Date | undefined>()

return (
  <div className="space-y-4">
    <div className="rounded-md border p-4">
      <h3 className="font-semibold">Book an Appointment</h3>
      <p className="text-sm text-muted-foreground mt-1">
        Select an available date for your appointment
      </p>
    </div>
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={(date) => 
        date < new Date(new Date().setHours(0, 0, 0, 0)) || 
        date.getDay() === 0 || 
        date.getDay() === 6
      }
      className="rounded-md border"
    />
    {date && (
      <div className="rounded-md bg-green-50 p-4 text-sm">
        <p className="font-medium text-green-800">
          Appointment scheduled for:
        </p>
        <p className="text-green-700 mt-1">
          {format(date, "EEEE, MMMM d, yyyy")}
        </p>
      </div>
    )}
  </div>
)`,
    component: () => {
      const [date, setDate] = useState<Date | undefined>()

      return (
        <div className="space-y-4">
          <div className="rounded-md border p-4">
            <h3 className="font-semibold">Book an Appointment</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Select an available date for your appointment
            </p>
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => 
              date < new Date(new Date().setHours(0, 0, 0, 0)) || 
              date.getDay() === 0 || 
              date.getDay() === 6
            }
            className="rounded-md border"
          />
          {date && (
            <div className="rounded-md bg-green-50 p-4 text-sm">
              <p className="font-medium text-green-800">
                Appointment scheduled for:
              </p>
              <p className="text-green-700 mt-1">
                {format(date, "EEEE, MMMM d, yyyy")}
              </p>
            </div>
          )}
        </div>
      )
    }
  }
]