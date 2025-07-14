"use client"

import { useState } from "react"
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/label"
import { PreviewContainer } from "@/components/storyboard/preview-container"
import { addDays, format } from "date-fns"

export function DatePickerExample() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [appointmentDate, setAppointmentDate] = useState<Date>()
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>()
  const [travelDates, setTravelDates] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>()
  const [limitedDate, setLimitedDate] = useState<Date>()
  const [customFormatDate, setCustomFormatDate] = useState<Date>()

  return (
    <PreviewContainer
      title="Date Picker"
      description="Enhanced calendar-based date selection with smooth interactions and visual feedback"
      component={
        <div className="space-y-6">
          <div className="space-y-3">
            <Label>Single Date Selection</Label>
            <DatePicker
              date={selectedDate}
              onSelect={setSelectedDate}
              placeholder="Select a date"
            />
            {selectedDate && (
              <p className="text-sm text-muted-foreground">
                Selected: {format(selectedDate, 'PPP')}
              </p>
            )}
          </div>
          
          <div className="space-y-3">
            <Label>Date Range Selection</Label>
            <DateRangePicker
              dateRange={dateRange}
              onSelect={setDateRange}
              placeholder="Select date range"
            />
            {dateRange?.from && (
              <p className="text-sm text-muted-foreground">
                {dateRange.to ? (
                  <>
                    From: {format(dateRange.from, 'PPP')} - To: {format(dateRange.to, 'PPP')}
                  </>
                ) : (
                  <>Start: {format(dateRange.from, 'PPP')}</>
                )}
              </p>
            )}
          </div>
          
          <div className="space-y-3">
            <Label>With Custom Format</Label>
            <DatePicker
              date={customFormatDate}
              onSelect={setCustomFormatDate}
              placeholder="MM/DD/YYYY"
              formatStr="MM/dd/yyyy"
            />
            <p className="text-sm text-muted-foreground">
              Using custom date format (MM/DD/YYYY)
            </p>
          </div>
          
          <div className="space-y-3">
            <Label>Appointment Booking</Label>
            <DatePicker
              date={appointmentDate}
              onSelect={setAppointmentDate}
              placeholder="Choose appointment date"
              disabledDates={(date: Date) => {
                return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                       date.getDay() === 0 || 
                       date.getDay() === 6
              }}
            />
            <p className="text-sm text-muted-foreground">
              Weekends and past dates disabled
            </p>
            {appointmentDate && (
              <div className="rounded-md bg-success/10 p-3 mt-2">
                <p className="text-sm font-medium text-success">
                  Appointment scheduled for:
                </p>
                <p className="text-sm text-foreground mt-1">
                  {format(appointmentDate, 'EEEE, MMMM d, yyyy')}
                </p>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            <Label>Travel Dates</Label>
            <DateRangePicker
              dateRange={travelDates}
              onSelect={setTravelDates}
              placeholder="Check-in - Check-out"
              formatStr="MMM dd"
              numberOfMonths={2}
            />
            <p className="text-sm text-muted-foreground">
              Two-month view for easier range selection
            </p>
            {travelDates?.from && travelDates?.to && (
              <div className="rounded-md bg-info/10 p-3 text-sm">
                <p className="font-medium text-info">Travel Details:</p>
                <div className="mt-2 space-y-1 text-foreground">
                  <p>Check-in: {format(travelDates.from, 'MM/dd/yyyy')}</p>
                  <p>Check-out: {format(travelDates.to, 'MM/dd/yyyy')}</p>
                  <p>Nights: {Math.ceil((travelDates.to.getTime() - travelDates.from.getTime()) / (1000 * 60 * 60 * 24))}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            <Label>Year Selection with Date Limits</Label>
            <DatePicker
              date={limitedDate}
              onSelect={setLimitedDate}
              placeholder="Pick a date (Mar 2024 - Sep 2025)"
              fromDate={new Date(2024, 2, 15)}  // March 15, 2024
              toDate={new Date(2025, 8, 20)}    // September 20, 2025
            />
            <p className="text-sm text-muted-foreground">
              Limited range: March 15, 2024 - September 20, 2025
            </p>
            <div className="text-sm space-y-1">
              <p className="text-muted-foreground">Try selecting:</p>
              <ul className="list-disc list-inside text-muted-foreground ml-2">
                <li>2024: Only March-December available</li>
                <li>2025: Only January-September available</li>
                <li>March 2024: Only dates from 15th onwards</li>
                <li>September 2025: Only dates up to 20th</li>
              </ul>
            </div>
            {limitedDate && (
              <p className="text-sm font-medium text-foreground mt-2">
                Selected: {format(limitedDate, 'MMMM d, yyyy')}
              </p>
            )}
          </div>
          
          <div className="space-y-3">
            <Label>Disabled States</Label>
            <div className="flex flex-wrap gap-3">
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
          </div>
        </div>
      }
      code={`import { DatePicker, DateRangePicker } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/label"
import { addDays } from "date-fns"

export function DatePickerExample() {
  const [date, setDate] = useState<Date>()
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>()

  return (
    <div className="space-y-6">
      {/* Single date selection */}
      <div className="space-y-3">
        <Label>Single Date Selection</Label>
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Select a date"
        />
      </div>

      {/* Date range selection */}
      <div className="space-y-3">
        <Label>Date Range Selection</Label>
        <DateRangePicker
          dateRange={dateRange}
          onSelect={setDateRange}
          placeholder="Select date range"
        />
      </div>

      {/* Custom format */}
      <div className="space-y-3">
        <Label>With Custom Format</Label>
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="MM/DD/YYYY"
          formatStr="MM/dd/yyyy"
        />
      </div>

      {/* Appointment booking (weekends disabled) */}
      <div className="space-y-3">
        <Label>Appointment Booking</Label>
        <DatePicker
          date={date}
          onSelect={setDate}
          placeholder="Choose appointment date"
          disabledDates={(date: Date) => {
            return date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                   date.getDay() === 0 || 
                   date.getDay() === 6
          }}
        />
      </div>

      {/* Travel dates with 2-month view */}
      <div className="space-y-3">
        <Label>Travel Dates</Label>
        <DateRangePicker
          dateRange={dateRange}
          onSelect={setDateRange}
          placeholder="Check-in - Check-out"
          formatStr="MMM dd"
          numberOfMonths={2}
        />
      </div>
    </div>
  )
}`}
    />
  )
}