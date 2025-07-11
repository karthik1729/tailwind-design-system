"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { ComponentExample } from "@/lib/component-docs"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export const inputOTPExamples: ComponentExample[] = [
  {
    title: "Basic Input OTP",
    description: "A simple OTP input with 6 digits.",
    code: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
    component: () => (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  {
    title: "With Separator",
    description: "OTP input with visual separator between groups.",
    code: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
    component: () => (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  {
    title: "Controlled Input",
    description: "OTP input with controlled state and value display.",
    code: `const [value, setValue] = useState("")

return (
  <div className="space-y-2">
    <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    <div className="text-center text-sm">
      {value ? <>Entered: {value}</> : <>Enter your one-time password</>}
    </div>
  </div>
)`,
    component: () => {
      const [value, setValue] = useState("")

      return (
        <div className="space-y-2">
          <InputOTP maxLength={6} value={value} onChange={setValue}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-center text-sm">
            {value ? <>Entered: {value}</> : <>Enter your one-time password</>}
          </div>
        </div>
      )
    }
  },
  {
    title: "Different Lengths",
    description: "OTP inputs with various lengths.",
    code: `<div className="space-y-4">
  <div>
    <p className="text-sm font-medium mb-2">4-digit PIN</p>
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  </div>
  
  <div>
    <p className="text-sm font-medium mb-2">8-digit Code</p>
    <InputOTP maxLength={8}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
        <InputOTPSlot index={6} />
        <InputOTPSlot index={7} />
      </InputOTPGroup>
    </InputOTP>
  </div>
</div>`,
    component: () => (
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium mb-2">4-digit PIN</p>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">8-digit Code</p>
          <InputOTP maxLength={8}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    )
  },
  {
    title: "Disabled State",
    description: "OTP input in disabled state.",
    code: `<InputOTP maxLength={6} disabled>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
    component: () => (
      <InputOTP maxLength={6} disabled>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  {
    title: "With Form",
    description: "OTP input integrated with form submission.",
    code: `const [otp, setOtp] = useState("")

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  alert(\`Submitted OTP: \${otp}\`)
}

return (
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label className="text-sm font-medium">Verification Code</label>
      <p className="text-sm text-muted-foreground mb-2">
        Enter the 6-digit code sent to your phone
      </p>
      <InputOTP maxLength={6} value={otp} onChange={setOtp}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
    <Button type="submit" disabled={otp.length !== 6}>
      Verify Code
    </Button>
  </form>
)`,
    component: () => {
      const [otp, setOtp] = useState("")

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Submitted OTP: ${otp}`)
      }

      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Verification Code</label>
            <p className="text-sm text-muted-foreground mb-2">
              Enter the 6-digit code sent to your phone
            </p>
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <Button type="submit" disabled={otp.length !== 6}>
            Verify Code
          </Button>
        </form>
      )
    }
  },
  {
    title: "Custom Styling",
    description: "OTP input with custom slot styling.",
    code: `<InputOTP maxLength={6}>
  <InputOTPGroup className="gap-4">
    <InputOTPSlot index={0} className="rounded-xl border-2" />
    <InputOTPSlot index={1} className="rounded-xl border-2" />
    <InputOTPSlot index={2} className="rounded-xl border-2" />
    <InputOTPSlot index={3} className="rounded-xl border-2" />
    <InputOTPSlot index={4} className="rounded-xl border-2" />
    <InputOTPSlot index={5} className="rounded-xl border-2" />
  </InputOTPGroup>
</InputOTP>`,
    component: () => (
      <InputOTP maxLength={6}>
        <InputOTPGroup className="gap-4">
          <InputOTPSlot index={0} className="rounded-xl border-2" />
          <InputOTPSlot index={1} className="rounded-xl border-2" />
          <InputOTPSlot index={2} className="rounded-xl border-2" />
          <InputOTPSlot index={3} className="rounded-xl border-2" />
          <InputOTPSlot index={4} className="rounded-xl border-2" />
          <InputOTPSlot index={5} className="rounded-xl border-2" />
        </InputOTPGroup>
      </InputOTP>
    )
  },
  {
    title: "With Pattern",
    description: "OTP input with numeric pattern validation.",
    code: `<InputOTP maxLength={6} pattern="^[0-9]+$">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
    component: () => (
      <InputOTP maxLength={6} pattern="^[0-9]+$">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  }
]